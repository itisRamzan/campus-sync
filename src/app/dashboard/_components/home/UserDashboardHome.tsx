"use client";

import { createSubscription } from "@/actions/payments/createSubscription";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import { Check } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const UserDashboardHome = () => {
    const router = useRouter();
    const { user } = useUser();
    if (!user) return null;

    return <>
        <section className="text-gray-600 body-font overflow-hidden" id="pricing">
            <div className="container py-10">
                <div className="flex flex-col mx-auto max-w-2xl lg:text-center">
                    <h2 className="font-bold tracking-tight text-gray-900 sm:text-4xl">Please Choose a Plan to Get Started</h2>
                </div>
                <div className="flex flex-wrap justify-around">
                    <div className="p-4 w-full">
                        <div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden hover:border-indigo-500">
                            <h2 className="text-sm tracking-widest title-font mb-1 font-medium">LITE</h2>
                            <h1 className="text-5xl text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none">
                                ₹19,999
                                <span className="text-lg ml-1 font-normal text-gray-500">/mo</span>
                            </h1>
                            <p className="flex items-center text-gray-600 mb-2">
                                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                    <Check className="h-3 w-3" />
                                </span>
                                Upto 100 students & 10 faculty
                            </p>
                            <p className="flex items-center text-gray-600 mb-2">
                                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                    <Check className="h-3 w-3" />
                                </span>
                                Customizable AI based quizzes (upto 5/month per faculty)
                            </p>
                            <Button variant="primary" className="mt-auto group gap-2"
                                onClick={async (e) => {
                                    e.preventDefault();
                                    let loadingToast = toast.loading("Please wait...", {
                                        richColors: true
                                    });
                                    let data = await createSubscription({
                                        priceID: "price_1PZSNyHSeDvJTm0G4K8Fmj0l",
                                        customerEmail: user.emailAddresses[0].emailAddress,
                                    });
                                    toast.dismiss(loadingToast);
                                    if (data.status === 200) {
                                        router.push(data.url as string);
                                    }
                                    else {
                                        toast.error(data.message, {
                                            duration: 3000
                                        });
                                    }
                                }}
                            >
                                Get Started
                                <span className="group-hover:translate-x-3 transition-transform duration-300 ease-in-out">
                                    --&gt;
                                </span>
                            </Button>
                            <p className="text-xs text-gray-500 mt-3">
                                Suitable for small institutions and coaching centers.
                            </p>
                        </div>
                    </div>
                    <div className="p-4 w-full">
                        <div className="h-full p-6 rounded-lg border-2 border-indigo-500 flex flex-col relative overflow-hidden">
                            <span className="bg-indigo-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">POPULAR</span>
                            <h2 className="text-sm tracking-widest title-font mb-1 font-medium">STANDARD</h2>
                            <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                                <span>₹37,999</span>
                                <span className="text-lg ml-1 font-normal text-gray-500">/mo</span>
                            </h1>
                            <p className="flex items-center text-gray-600 mb-2">
                                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                    <Check className="h-3 w-3" />
                                </span>
                                Upto 500 students & 40 faculty
                            </p>
                            <p className="flex items-center text-gray-600 mb-2">
                                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                    <Check className="h-3 w-3" />
                                </span>
                                Customizable AI based quizzes (upto 10/month per faculty)
                            </p>
                            <p className="flex items-center text-gray-600 mb-6">
                                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                    <Check className="h-3 w-3" />
                                </span>
                                Performance Analytics
                            </p>
                            <Button variant="primary" className="mt-auto group gap-2"
                                onClick={async (e) => {
                                    e.preventDefault();
                                    let data = await createSubscription({
                                        priceID: "price_1PZSOiHSeDvJTm0GRGCzDfkM",
                                        customerEmail: user.emailAddresses[0].emailAddress,
                                    });
                                    if (data.status === 200) {
                                        router.push(data.url as string);
                                    }
                                    else {
                                        toast.error(data.message, {
                                            duration: 3000
                                        });
                                    }
                                }}
                            >
                                Get Started
                                <span className="group-hover:translate-x-3 transition-transform duration-300 ease-in-out">
                                    --&gt;
                                </span>
                            </Button>
                            <p className="text-xs text-gray-500 mt-3">Suitable for medium sized institutions and universities.</p>
                        </div>
                    </div>
                    <div className="p-4 w-full">
                        <div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden hover:border-indigo-500">
                            <h2 className="text-sm tracking-widest title-font mb-1 font-medium">PREMIUM</h2>
                            <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                                <span>₹49,999</span>
                                <span className="text-lg ml-1 font-normal text-gray-500">/mo</span>
                            </h1>
                            <p className="flex items-center text-gray-600 mb-2">
                                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                    <Check className="h-3 w-3" />
                                </span>
                                Unlimited students & faculty
                            </p>
                            <p className="flex items-center text-gray-600 mb-2">
                                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                    <Check className="h-3 w-3" />
                                </span>
                                Customizable AI based quizzes (unlimited/month per faculty)
                            </p>
                            <p className="flex items-center text-gray-600 mb-6">
                                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                    <Check className="h-3 w-3" />
                                </span>
                                Performance Analytics
                            </p>
                            <p className="flex items-center text-gray-600 mb-6">
                                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                    <Check className="h-3 w-3" />
                                </span>
                                AI Personalized Learning Experiences
                            </p>
                            <Button variant="primary" className="mt-auto group gap-2"
                                onClick={async (e) => {
                                    e.preventDefault();
                                    let data = await createSubscription({
                                        priceID: "price_1PZSPUHSeDvJTm0GgyrhHCne",
                                        customerEmail: user.emailAddresses[0].emailAddress,
                                    });
                                    if (data.status === 200) {
                                        router.push(data.url as string);
                                    }
                                    else {
                                        toast.error(data.message, {
                                            duration: 3000
                                        });
                                    }
                                }}
                            >
                                Get Started
                                <span className="group-hover:translate-x-3 transition-transform duration-300 ease-in-out">
                                    --&gt;
                                </span>
                            </Button>
                            <p className="text-xs text-gray-500 mt-3">Suitable for large institutions and universities.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>;
};

export default UserDashboardHome;