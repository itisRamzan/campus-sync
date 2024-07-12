import { HoverCard, HoverCardContent, HoverCardTrigger, } from "@/components/ui/hover-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BriefcaseBusinessIcon, CalendarDays, FacebookIcon, GithubIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from "lucide-react";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return <>
        <footer className="text-gray-600 body-font">
            <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                <Link className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900" href="/">
                    <Image src="/logo.svg" alt="logo" width={50} height={50} />
                    <span className="ml-3 text-xl">Campus Sync</span>
                </Link>
                <HoverCard>
                    <div className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© {new Date().getFullYear()} Campus Sync —
                        <HoverCardTrigger>
                            <p className="text-gray-600 ml-1 inline-flex hover:underline hover:underline-offset-4 hover:cursor-pointer" rel="noopener noreferrer " >
                                @ramzanshareef
                            </p>
                        </HoverCardTrigger>
                        <HoverCardContent>
                            <div className="flex justify-between space-x-4">
                                <Avatar>
                                    <AvatarImage src="/img/ramzanshareef.jpg" />
                                    <AvatarFallback>RS</AvatarFallback>
                                </Avatar>
                                <div className="space-y-1">
                                    <h4 className="text-sm font-semibold">@ramzanshareef</h4>
                                    <p className="text-sm">
                                        I&apos;m an upcoming Engineer and a Full-Stack Developer. <br />
                                        <div className="flex items-center justify-between">
                                            <Link href="https://ramzanshareef.me">
                                                <BriefcaseBusinessIcon className="h-5 w-5 inline-block text-gray-500 cursor-pointer hover:text-gray-600 transition-colors duration-300 ease-in-out"
                                                />
                                            </Link>
                                            <Link href="https://linkedin.com/in/ramzanshareef">
                                                <LinkedinIcon className="h-5 w-5 inline-block cursor-pointer text-gray-500 hover:text-blue-600 transition-colors duration-300 ease-in-out"
                                                />
                                            </Link>
                                            <Link href="https://github.com/itisRamzan">
                                                <GithubIcon className="h-5 w-5 inline-block cursor-pointer text-gray-500 hover:text-gray-600 transition-colors duration-300 ease-in-out"
                                                />
                                            </Link>
                                        </div>
                                    </p>
                                    <div className="flex items-center pt-2">
                                        <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
                                        <span className="text-xs text-muted-foreground">
                                            Developed July 2024
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </HoverCardContent>
                    </div>
                </HoverCard>
                <span className="flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start gap-2">
                    <Link href="https://facebook.com/campussync">
                        <FacebookIcon className="h-5 w-5 text-gray-500 cursor-pointer 
                    hover:text-blue-500 transition-colors duration-300 ease-in-out hover:-rotate-12" />
                    </Link>
                    <Link href="https://twitter.com/campussync">
                        <TwitterIcon className="h-5 w-5 text-gray-500 cursor-pointer
                    hover:text-blue-400 transition-colors duration-300 ease-in-out hover:rotate-12" />
                    </Link>
                    <Link href="https://instagram.com/campussync">
                        <InstagramIcon className="h-5 w-5 text-gray-500 cursor-pointer
                    hover:text-red-500 transition-colors duration-300 ease-in-out hover:-rotate-12" />
                    </Link>
                    <Link href="https://linkedin.com/company/campussync">
                        <LinkedinIcon className="h-5 w-5 text-gray-500 cursor-pointer
                    hover:text-blue-500 transition-colors duration-300 ease-in-out hover:rotate-12" />
                    </Link>
                </span>
            </div>
        </footer>
    </>;
}