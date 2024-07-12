import { z } from "zod";

export const CreateCollegeFormSchema = z.object({
    admin: z
        .string({
            message: "Admin is required and must be a String",
        }),
    name: z
        .string({
            message: "Name is required and must be a String",
        })
        .min(3, {
            message: "Name must be at least 3 characters long",
        }),
    location: z
        .string({
            message: "Location is required and must be a String",
        })
        .min(3, {
            message: "Location must be at least 3 characters long"
        }),
    logo: z.instanceof(File, {
        message: "Logo is required and must be an image",
    })
});