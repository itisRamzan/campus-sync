import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function ForumPage() {
    return (<>
        <h2>
            Welcome to the forum!
        </h2>
        <span>
            This is a protected page. You must be signed in to view it.
        </span>
        <SignedOut>
            <SignInButton />
        </SignedOut>
        <SignedIn>
            <UserButton />
        </SignedIn>
    </>
    );
}