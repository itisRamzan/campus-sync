import { isAdmin, isFaculty, isLoggedIn, isStudent, isSub } from "@/lib/user/auth";
import { redirect } from "next/navigation";
import UserDashboardHome from "./_components/home/UserDashboardHome";
import SubUserDashboardHome from "./_components/home/SubUserDashboardHome";

export default async function DashboardPage() {
    const loggedIn = await isLoggedIn();
    if (!loggedIn) redirect("/sign-in");
    const sub = await isSub();
    const admin = await isAdmin();
    const faculty = await isFaculty();
    const student = await isStudent();
    return (
        <>
            {!admin && !faculty && !student && !sub && <UserDashboardHome />}
            {sub && <SubUserDashboardHome />}
            {admin && <div>Admin Dashboard</div>}
            {faculty && <div>Faculty Dashboard</div>}
            {student && <div>Student Dashboard</div>}
        </>
    );
}