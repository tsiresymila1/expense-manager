"use client";

import FormError from "@/components/form-error";
import FormSuccess from "@/components/form-success";
import { Button } from "@/components/ui/button";
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { authClient } from "@/lib/auth-client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";
import GoogleAuthButton from "./google-auth";

export type RegisterInput = { name: string; email: string; password: string };

const schema = z.object({
    name: z.string(),
    email: z.string().email("Invalid email"),
    password: z
        .string({
            required_error: "Password required"
        })
        .min(6, "Password must be at least 6 characters"),
    confirm_password: z
        .string({
            required_error: "COnfirmation password required"
        }),
    cgu: z.boolean({
        message: "You must accept the terms and conditions",
    }).refine((val) => val === true, {
        message: "You must accept the terms and conditions",
    })
}).refine((data) => data.password === data.confirm_password, {
    message: "Password not confirm"
    , path: ["confirm_password"]
});

export default function RegisterForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue
    } = useForm({
        resolver: zodResolver(schema),
    });

    const [success, setSuccess] = useState<string | null>(null);
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const onSubmit = async (data: RegisterInput) => {
        const res = await authClient.signUp.email({
            email: data.email,
            password: data.password,
            name: data.name,
            callbackURL: "/dashboard",
            fetchOptions: {
                method: "POST"
            }
        });
        setLoading(false);
        if (res?.error?.message) {
            toast.error("Invalid credentials", {
                description: `${res.error.message}`
            })
            setSuccess(null);
        } else {
            setSuccess("Logged")
            router.push("/dashboard");
        }
    };

    return (
        <div data-aos="zoom-in" className="flex flex-col items-center justify-center w-full ">
            <form onSubmit={handleSubmit(onSubmit)} autoComplete="off" className="space-y-4 w-full max-w-96">
                <div className=" py-8">
                    <CardHeader className="text-center">
                        <CardTitle className="text-2xl text-expense-600">Create new account</CardTitle>
                        <CardDescription>Enter your information for your ExpenseFlow account </CardDescription>
                    </CardHeader>
                    <CardContent className="w-auto flex flex-col gap-8 mt-6">
                        {success && <FormSuccess>{success}</FormSuccess>}
                        <div className="flex flex-col gap-4">
                            <div>
                                <Input {...register("name")} autoComplete="off" placeholder="Name" />
                                {errors.name && <FormError>{errors.name.message}</FormError>}
                            </div>
                            <div>
                                <Input {...register("email")} autoComplete="off" type="email" placeholder="Email" />
                                {errors.email && <FormError>{errors.email.message}</FormError>}
                            </div>
                            <div>
                                <div className="relative w-full">
                                    <Input {...register("password")} autoComplete="off" type={showPassword ? "text" : "password"} placeholder="Password" />
                                    <Button
                                        type="button"
                                        variant="ghost"
                                        size="icon"
                                        className="absolute right-2 top-1/2 -translate-y-1/2 p-2"
                                        onClick={() => setShowPassword((prev) => !prev)}
                                    >
                                        {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                                    </Button>
                                </div>
                                {errors.password && <FormError>{errors.password.message}</FormError>}
                            </div>
                            <div>
                                <Input {...register("confirm_password")} autoComplete="off" type={showPassword ? "text" : "password"} placeholder="Confirm password" />
                                {errors.confirm_password && <FormError>{errors.confirm_password.message}</FormError>}
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className="relative w-full flex  gap-3 items-center ">
                                    <Checkbox name="cgu" onCheckedChange={(checked) => {
                                        if (checked) {
                                            setValue("cgu", true);
                                        }
                                        else {
                                            setValue("cgu", false);
                                        }
                                        return checked;
                                    }} />
                                    <div className="text-sm">I agree the <a href="/privacy-policy" className="text-expense-600">Privacy Policy</a> and <a href="/terms" className="text-expense-600">Terms of Service</a>
                                    </div>
                                </div>
                                {errors.cgu && <FormError>{errors.cgu.message}</FormError>}
                            </div>
                        </div>
                        <Button type="submit" disabled={loading} className="w-full bg-expense-600 hover:bg-expense-700 text-white">
                            {loading ? "Registering..." : "Register"}
                        </Button>
                        <div className="flex justify-center items-center gap-1">
                            <Label>Have already an account? </Label>
                            <Link className="underline cursor-pointer text-expense-600" href="/auth/login">
                                <Label className="cursor-pointer ">Log in</Label>
                            </Link>
                        </div>
                        <div className="flex gap-4 justify-center items-center">
                            <Separator className="flex-1" />
                            <Label>OR</Label>
                            <Separator className="flex-1" />
                        </div>
                        <div className="w-full flex items-center justify-between">
                            <GoogleAuthButton />
                        </div>

                    </CardContent>
                </div>
            </form>
        </div>
    );
}
