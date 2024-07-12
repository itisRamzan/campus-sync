import Image from "next/image";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import React from "react";
import { SidebarContent } from "../clientComponents/user";

export default function UserDashboard() {
    return (
        <>
            <div>
                <Sheet>
                    <header className="absolute">
                        <nav className="flex flex-row sm:flex-col p-4 bg-white  sm:bg-gray-800 w-fit sm:h-screen max-sm:fixed max-sm:w-screen max-sm:h-12 max-sm:shadow-md z-50" aria-label="Global">
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