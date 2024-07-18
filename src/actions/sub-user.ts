"use server";

import { connectDB } from "@/lib/database/connectDB";
import { stripe } from "@/lib/stripe";
import { isLoggedIn } from "@/lib/user/auth";
import { clerkClient, currentUser, User } from "@clerk/nextjs/server";

export async function createCollege(data: FormData) {
    try {
        let auth = await isLoggedIn();
        if (!auth) return { status: 401, message: "Unauthorized" };
        await connectDB();
        let user: User = await currentUser() as User;
        // await clerkClient.users.updateUser(user?.id, {
        //     createOrganizationEnabled: true
        // });
        let packageSubscription = await stripe.subscriptions.retrieve(user?.privateMetadata.stripeID as string);
        console.log(packageSubscription.items.data[0].price);
        // await clerkClient.organizations.createOrganization({
        //     name: data.get("name") as string,
        //     slug: (data.get("name") as string).toString().toLowerCase().split(" ").map(word => word[0]).join(""),
        //     createdBy: user?.id,
        //     // maxAllowedMemberships: 
        // });
        return { status: 200, message: "User created" };
    }
    catch (error: any) {
        return { status: 500, message: "Internal Server Error " + error.message };
    }
};