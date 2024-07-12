"use client";

import { Form, FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { CreateCollegeFormSchema } from "@/schemas/college";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import Image from "next/image";
import { useCallback } from "react";
import { ArrowUp01Icon, XIcon } from "lucide-react";
import { useDropzone } from "react-dropzone";

const SubUserDashboardHome = () => {
    const form = useForm<z.infer<typeof CreateCollegeFormSchema>>({
        resolver: zodResolver(CreateCollegeFormSchema),
        defaultValues: {
            admin: "",
            name: "",
            location: "",
            logo: undefined
        }
    });

    async function onSubmit(values: z.infer<typeof CreateCollegeFormSchema>) {
        console.log(values);
    }

    const onDrop = useCallback((acceptedFiles: any, rejectedFiles: any) => {
        if (rejectedFiles.length > 0) {
            toast.error("Please select only Images", {
                duration: 1200
            });
            return;
        }
        const file = acceptedFiles[0];
        Object.assign(file, { preview: URL.createObjectURL(file) });
        form.setValue("logo", file);
    }, [form]);

    const removeFile = () => {
        form.setValue("logo", undefined as any);
    };

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        accept: {
            "image/png": [".png"],
        },
        maxSize: 1024 * 10000, // 10MB
        maxFiles: 1,
        onDrop
    });

    return <>
        <h1 className="text-2xl font-semibold">Create College to Start using the Platform</h1>
        <Form {...form}
            clearErrors={form.clearErrors}
        >
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>College Name</FormLabel>
                            <FormControl>
                                <Input placeholder="ABC College" {...field} />
                            </FormControl>
                            <FormDescription>
                                What is the name of your college?
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Location</FormLabel>
                            <FormControl>
                                <Input placeholder="City, State" {...field} />
                            </FormControl>
                            <FormDescription>
                                Where is your college located?
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="logo"
                    render={({ }) => (
                        <FormItem>
                            <FormLabel>Logo</FormLabel>
                            <FormControl>
                                <div className="min-w-full flex flex-col md:flex-row gap-4">
                                    {
                                        form.watch("logo") ? (
                                            <div className="flex flex-col md:flex-row items-center min-w-full gap-4">
                                                <Image
                                                    src={(form.watch("logo") as any)?.preview as string}
                                                    alt={form.watch("logo")?.name as string}
                                                    width={100}
                                                    height={100}
                                                    onLoad={() => {
                                                        URL.revokeObjectURL((form.watch("logo") as any)?.preview as string);
                                                    }}
                                                    className="h-60 md:w-auto rounded-md transition duration-300 ease-in-out hover:border-gray-500 z-0 md:max-w-[50%] max-md:w-full"
                                                />
                                                <div className="flex flex-row items-center gap-2">
                                                    <p className="text-sm text-gray-500">
                                                        {form.watch("logo")?.name.substring(0, 20) + "..."}
                                                    </p>
                                                    <XIcon className="w-5 h-5 bg-red-500 text-white p-1 cursor-pointer rounded-full"
                                                        onClick={removeFile}
                                                    />
                                                </div>
                                            </div>
                                        ) :
                                            <div
                                                {...getRootProps({
                                                    className: "min-w-full border-2 border-dashed border-gray-300 rounded-md p-4 flex items-center justify-center cursor-pointer transition duration-300 ease-in-out hover:border-gray-500"
                                                })}
                                            >
                                                <input {...getInputProps()} />
                                                <div className="flex flex-col items-center justify-center gap-4">
                                                    <ArrowUp01Icon className="w-5 h-5 fill-current" />
                                                    {isDragActive ? (
                                                        <p>Drop the files here ...</p>
                                                    ) : (
                                                        <p>Drag & drop files here, or click to select files</p>
                                                    )}
                                                </div>
                                            </div>
                                    }
                                </div>
                            </FormControl>
                            <FormDescription>
                                Upload the logo of your college.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="flex gap-2">
                    <Button type="reset" variant="destructive"
                        onClick={() => {
                            form.reset();
                        }}
                    >Reset</Button>
                    <Button type="submit" variant="primary">Submit</Button>
                </div >
            </form >
        </Form >
    </>;
};

export default SubUserDashboardHome;