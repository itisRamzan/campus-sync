import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner";
import NextTopLoader from "nextjs-toploader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Campus Sync",
    description: "A platform for students to connect and share resources",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <NextTopLoader
                    color="#000fff"
                    showSpinner={false}
                />
                <ClerkProvider
                    appearance={{
                        layout: {
                            animations: true,
                            showOptionalFields: true,
                            logoPlacement: "inside",
                            socialButtonsPlacement: "bottom",
                            socialButtonsVariant: "blockButton",
                            logoLinkUrl: "/",
                            termsPageUrl: "/terms",
                            privacyPageUrl: "/privacy",
                        },
                        variables: {
                            colorPrimary: "#6366f1"
                        },
                    }}
                >
                    <Toaster
                        duration={800}
                        position="top-right"
                        expand={false}
                        richColors={true}
                    />
                    {children}
                </ClerkProvider>
            </body>
        </html>
    );
}