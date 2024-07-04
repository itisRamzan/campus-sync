// "use server";

// import { connectDB } from "@/lib/database/connectDB";
// import User, { UserType } from "@/models/User.Model";

// export async function createUser(user: UserType) {
//     try {
//         await connectDB();
//         await User.create;
//     }
//     catch (err: any) {
//         return { status: 500, message: err.message };
//     }
// }