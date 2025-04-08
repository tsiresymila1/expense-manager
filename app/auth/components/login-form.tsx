"use client";

import FormError from "@/components/form-error";
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
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import GoogleAuthButton from "./google-auth";

const schema = z.object({
    email: z.string().email("Invalid email"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    cgu: z.boolean({
        message: "You must accept the terms and conditions",
    }).refine((val) => val === true, {
        message: "You must accept the terms and conditions",
    })
});

export default function LoginForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue
    } = useForm({
        resolver: zodResolver(schema),
    });
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const onSubmit = async (data: z.infer<typeof schema>) => {
        const res = await authClient.signIn.email({
            email: data.email,
            password: data.password,
            callbackURL: "/dashboard",
        });
        if (res?.error) setError("Invalid credentials");
    };


    return (
        <div className="flex flex-col items-center justify-center w-full">
            <div className="space-y-4 w-full">
                <div className="py-4 w-full">
                    <CardHeader className="text-center">
                        <CardTitle className="text-2xl text-expense-600">Welcome back</CardTitle>
                        <CardDescription>Login to your ExpenseFlow account</CardDescription>
                    </CardHeader>
                    <CardContent className="w-auto flex flex-col gap-8 mt-6">
                        {error && <FormError>{error}</FormError>}
                        <form onSubmit={handleSubmit(onSubmit)} autoComplete="off" className="gap-6 flex flex-col" >
                            <div className="flex flex-col gap-6">
                                <div className="flex flex-col gap-2">
                                    <Label>Email</Label>
                                    <Input {...register("email")} autoComplete="off" type="email" placeholder="Email" />
                                    {errors.email && <FormError>{errors.email.message}</FormError>}
                                </div>
                                <div className="flex flex-col gap-2">
                                    <Label>Password</Label>
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
                            <Button type="submit" className="bg-expense-600 hover:bg-expense-700 text-white">Login</Button>
                        </form>
                        <div className="flex gap-4 justify-center items-center">
                            <Separator className="flex-1" />
                            <Label>OR</Label>
                            <Separator className="flex-1" />
                        </div>
                        <div className="w-full flex items-center justify-between">
                            <GoogleAuthButton />
                        </div>
                        <div className="flex justify-center items-center gap-1">
                            <Label>Don&apos;t have an account? </Label>
                            <Link className="underline cursor-pointer text-expense-600" href="/auth/register">
                                <Label className="cursor-pointer ">Sign up</Label>
                            </Link>
                        </div>
                    </CardContent>
                </div>
            </div>
        </div>
    );
}
