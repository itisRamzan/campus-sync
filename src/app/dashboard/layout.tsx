
import { isAdmin, isFaculty, isLoggedIn, isStudent } from "@/lib/user/auth";
import { Metadata } from "next";
import { redirect } from "next/navigation";
import UserDashboard from "./_components/UserDashboard";
import AdminDashboard from "./_components/AdminDashboard";
import FacultyDashboard from "./_components/FacultyDashboard";
import StudentDashboard from "./_components/StudentDashboard";

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
    const loggedIn = await isLoggedIn();
    if (!loggedIn) redirect("/login");
    const admin = await isAdmin();
    const faculty = await isFaculty();
    const student = await isStudent();
    return <>
        {!admin && !faculty && !student && <UserDashboard />}
        {admin && <AdminDashboard />}
        {faculty && <FacultyDashboard />}
        {student && <StudentDashboard />}
        <div className="sm:pl-60 sm:pr-4 p-4 max-sm:pt-16">
            {children}
        </div>
    </>;
}

export const metadata: Metadata = {
    title: "Dashboard",
};