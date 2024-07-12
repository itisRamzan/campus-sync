import Image from "next/image";
import { Sheet, SheetContent, SheetDescription, SheetTitle } from "@/components/ui/sheet";
import Link from "next/link";
import { GeneralLinks, UsersLinks } from "../clientComponents/admin";

export default function AdminDashboard() {
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
                            <GeneralLinks />
                            <span className="mt-4 text-xs text-gray-500">
                                USERS
                            </span>
                            <UsersLinks />
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