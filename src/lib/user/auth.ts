import { auth } from "@clerk/nextjs/server";

export async function isAdmin() {
    const { has } = auth();
    return has({
        role: "org:admin"
    });
}

export async function isFaculty() {
    const { has } = auth();
    return has({
        role: "org:faculty"
    });
}

export async function isStudent() {
    const { has } = auth();
    return has({
        role: "org:student"
    });
}

export async function isLoggedIn() {
    const { userId } = auth();
    return !!userId;
}