"use client";

import Image from "next/image";
import { GraduationCap, HomeIcon, Mail, Menu, UsersRound, VideoIcon } from "lucide-react";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { SignedIn, UserButton, SignedOut } from "@clerk/nextjs";

export default function AdminDashboard() {
    const router = useRouter();
    const pathname = usePathname();
    return (
        <>
            <div>
                <Sheet>
                    <header className="absolute inset-x-0 top-0 z-50 ">
                        <nav className="flex flex-col p-4 bg-gray-800 w-fit h-screen" aria-label="Global">
                            <div className="hidden lg:flex">
                                <Link href="/" className="flex items-center justify-center gap-4">
                                    <Image
                                        className="h-8 w-auto"
                                        src="/logo.svg"
                                        alt=""
                                        height={32}
                                        width={32}
                                        priority={false}
                                    />
                                    <span className="text-lg font-semibold leading-6 text-white">
                                        Campus Sync
                                    </span>
                                </Link>
                            </div>
                            <span className="mt-4 text-xs text-gray-500">
                                GENERAL
                            </span>
                            <div className="mt-2 space-y-0 text-gray-500">
                                <Link className={` flex items-center gap-4 p-2 rounded w-48
                                    ${pathname === "/dashboard" ? "bg-gray-700 text-white font-medium" : "hover:text-black hover:font-medium"}
                                    `} href="/dashboard"
                                >
                                    <HomeIcon className="w-5 h-5" />
                                    Dashboard
                                </Link>
                                <Link className={` flex items-center gap-4 p-2 rounded w-48
                                    ${pathname === "/dashboard/messages" ? "bg-gray-700 text-white font-medium" : "hover:bg-gray-700 hover:text-white"}
                                    `} href="/dashboard/messages"
                                >
                                    <Mail className="w-5 h-5" />
                                    Messages
                                </Link>
                                <Link className={` flex items-center gap-4 p-2 rounded w-48
                                    ${pathname === "/dashboard/videos" ? "bg-gray-700 text-white font-medium" : "hover:bg-gray-700 hover:text-white"}
                                    `} href="/dashboard/videos"
                                >
                                    <VideoIcon className="w-5 h-5" />
                                    Videos
                                </Link>
                            </div>
                            <span className="mt-4 text-xs text-gray-500">
                                USERS
                            </span>
                            <div className="mt-2 space-y-0 text-gray-500">
                                <Link className={` flex items-center gap-4 p-2 rounded w-48
                                    ${pathname === "/dashboard/users" ? "bg-gray-700 text-white font-medium" : "hover:bg-gray-700 hover:text-white"}
                                    `} href="/dashboard/users"
                                >
                                    <UsersRound className="w-5 h-5" />
                                    Users
                                </Link>
                                <Link className={` flex items-center gap-4 p-2 rounded w-48
                                    ${pathname === "/dashboard/students" ? "bg-gray-700 text-white font-medium" : "hover:bg-gray-700 hover:text-white"}
                                    `} href="/dashboard/students"
                                >
                                    <GraduationCap className="w-5 h-5" />
                                    Students
                                </Link>
                            </div>
                        </nav>
                        <SheetContent>
                            <SheetTitle>
                                <Link href="/" className="flex items-center justify-center gap-4">
                                    <Image
                                        className="h-8 w-auto"
                                        src="/logo.svg"
                                        alt="Campus Sync Logo"
                                        height={32}
                                        width={32}
                                        priority={false}
                                    />
                                    <span className="text-lg font-semibold leading-6 hover:text-gray-600">
                                        Campus Sync
                                    </span>
                                </Link>
                            </SheetTitle>
                            <SheetDescription>
                                This is me
                            </SheetDescription>
                        </SheetContent>
                    </header>
                </Sheet>
            </div>
        </>
    );
}