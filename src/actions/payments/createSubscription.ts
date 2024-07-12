"use server";

import { stripe } from "@/lib/stripe";
import { currentUser } from "@clerk/nextjs/server";
import Stripe from "stripe";

export async function createSubscription(data: {
    priceID: string;
    customerEmail?: string;
}) {
    try {
        const user = await currentUser();
        let customer: Stripe.Customer;
        if (!user) {
            const subscription = await stripe.checkout.sessions.create({
                payment_method_types: ["card"],
                mode: "subscription",
                line_items: [
                    {
                        price: data.priceID,
                        quantity: 1,
                    },
                ],
                success_url: "http://localhost:3001/success",
                cancel_url: "http://localhost:3001/cancel",
            });
            return { status: 200, url: subscription.url as string };
        }
        if (!user.privateMetadata.stripeID || user?.privateMetadata.stripeID === null) {
            customer = await stripe.customers.create({
                name: user?.fullName as string,
                email: user?.emailAddresses[0].emailAddress as string,
                metadata: {
                    clerkID: user?.id as string,
                    mongooseID: user?.privateMetadata.mongooseID as string,
                }
            });
        }
        else {
            customer = await stripe.customers.retrieve(user?.privateMetadata.stripeID as string) as Stripe.Customer;
        }
        const subscription = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            mode: "subscription",
            customer: customer.id,
            line_items: [
                {
                    price: data.priceID,
                    quantity: 1,
                },
            ],
            success_url: "http://localhost:3001/success",
            cancel_url: "http://localhost:3001/cancel",
        });
        return { status: 200, url: subscription.url as string };
    }
    catch (error: any) {
        return { status: 500, message: "Internal Server Error " + error.message };
    }
}