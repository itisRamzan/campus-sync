"use client";

import Image from "next/image";
import { HomeIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useUser, UserProfile, SignOutButton } from "@clerk/nextjs";
import React from "react";
import { Dialog, DialogTrigger, DialogContent, DialogClose, DialogTitle } from "@/components/ui/dialog";

export function SidebarContent() {
    const pathname = usePathname();
    const { isLoaded, user } = useUser();
    return <>
        <span className="mt-4 text-xs text-gray-500">
            GENERAL
        </span>
        <div className="my-2 space-y-0 text-gray-500">
            <Link className={` flex items-center gap-4 p-2 rounded w-48
            ${pathname === "/dashboard" ? "bg-gray-700 text-white font-medium" : "hover:text-black hover:font-medium"}
                                    `} href="/dashboard"
            >
                <HomeIcon className="w-5 h-5" />
                Dashboard
            </Link>
        </div>
        <div className="overflow-auto">
            {isLoaded &&
                <>
                    <Dialog>
                        <DialogTrigger
                            className="text-white bg-gray-700 rounded-xl p-2 mt-auto flex items-center justify-center gap-2 absolute bottom-4"
                        >
                            <Image
                                className="w-6 h-6 rounded-full"
                                src={user?.imageUrl as string}
                                alt={user?.fullName as string}
                                height={32}
                                width={32}
                            />
                            {user?.fullName}
                        </DialogTrigger>
                        <DialogContent
                            className="min-w-fit overflow-visible sm:h-[95%] overflow-y-scroll rounded shadow-2xl"
                        >
                            <DialogTitle className="flex flex-col justify-between gap-4">
                                <UserProfile routing="virtual" />
                                <div className="flex flex-row justify-between gap-4">
                                    <SignOutButton
                                        signOutOptions={{
                                            redirectUrl: "/login"
                                        }}
                                    >
                                        <Button variant="destructive"
                                            className="w-1/2"
                                        >
                                            Sign Out
                                        </Button>
                                    </SignOutButton>
                                    <DialogClose
                                        className="bg-indigo-500 hover:bg-indigo-500/90 text-white rounded p-2 flex items-center justify-center gap-2 font-normal text-base w-1/2"
                                    >
                                        Close
                                    </DialogClose>
                                </div>
                            </DialogTitle>
                        </DialogContent>
                    </Dialog>
                </>}
        </div>
    </>;
}