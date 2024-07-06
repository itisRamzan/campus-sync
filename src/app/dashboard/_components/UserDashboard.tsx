"use client";

import Image from "next/image";
import { GraduationCap, HomeIcon, Mail, Menu, UsersRound, VideoIcon } from "lucide-react";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { SignedIn, UserButton, SignedOut } from "@clerk/nextjs";

export default function UserDashboard() {
    const router = useRouter();
    const pathname = usePathname();
    return (
        <>
            <div>
                <Sheet>
                    <header className="absolute">
                        <nav className="flex flex-row sm:flex-col p-4 bg-white  sm:bg-gray-800 w-fit sm:h-screen max-sm:fixed max-sm:w-screen max-sm:h-12 max-sm:shadow-md" aria-label="Global">
                            <div id="greater-than-sm-screen" className="max-sm:hidden">
                                <div className="flex mb-2">
                                    <Link href="/" className="flex items-center justify-center gap-4">
                                        <Image
                                            className="h-8 w-auto"
                                            src="/logo.svg"
                                            alt=""
                                            height={32}
                                            width={32}
                                            priority={false}
                                        />
                                        <span className="text-lg font-medium leading-6 text-white">
                                            Campus Sync
                                        </span>
                                    </Link>
                                </div>
                                <SidebarContent />
                            </div>
                            <div id="smaller-than-sm-screen" className="flex items-center sm:hidden">
                                <Link href="/" className="flex items-center justify-center gap-4 sm:hidden">
                                    <Image
                                        className="h-8 w-auto"
                                        src="/logo.svg"
                                        alt="Campus Sync Logo"
                                        height={32}
                                        width={32}
                                        priority={false}
                                    />
                                    <span className="text-lg font-medium leading-6 hover:text-gray-600">
                                        Campus Sync
                                    </span>
                                </Link>
                                <SheetTrigger className="absolute top-0 right-0 px-4 py-3 sm:hidden">
                                    <Menu className="w-6 h-6" />
                                </SheetTrigger>
                            </div>
                        </nav>
                        <SheetContent
                            className="w-fit"
                        >
                            <SheetTitle className="m-3">
                                <Link href="/" className="flex items-center justify-center gap-4">
                                    <Image
                                        className="h-8 w-auto"
                                        src="/logo.svg"
                                        alt="Campus Sync Logo"
                                        height={32}
                                        width={32}
                                        priority={false}
                                    />
                                    <span className="text-lg font-medium leading-6 hover:text-gray-600">
                                        Campus Sync
                                    </span>
                                </Link>
                            </SheetTitle>
                            <SheetDescription className="w-fit mt-2">
                                <SidebarContent />
                            </SheetDescription>
                        </SheetContent>
                    </header>
                </Sheet>
            </div>
        </>
    );
}

function SidebarContent() {
    const pathname = usePathname();
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
        <div className="w-fit rounded-lg bg-gray-300 sm:bg-gray-600 p-0.5 absolute bottom-4">
            <UserButton
                showName={true}
                appearance={{
                    variables: {
                    }
                }}
            />
        </div>
    </>;
}