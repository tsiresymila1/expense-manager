"use client";

import FormError from "@/components/form-error";
import FormSuccess from "@/components/form-success";
import { Button } from "@/components/ui/button";
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
import * as zod from "zod";

export type RegisterInput = { name: string; email: string; password: string };

const schema = zod.object({
    name: zod.string(),
    email: zod.string().email("Invalid email"),
    password: zod
        .string({
            required_error: "Password required"
        })
        .min(6, "Password must be at least 6 characters"),
    confirm_password: zod
        .string({
            required_error: "COnfirmation password required"
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
    } = useForm({
        resolver: zodResolver(schema),
    });

    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const onSubmit = async (data: RegisterInput) => {
        console.log("data:", data)
        const res = await authClient.signUp.email({
            email: data.email,
            password: data.password,
            name: data.name,
            callbackURL: "/",
            fetchOptions: {
                method: "POST"
            }
        });
        setLoading(false);
        if (res?.error?.message) {
            setError(res.error.message);
            setSuccess(null);
        } else {
            setError(null);
            setSuccess("Logged")
            router.push("/auth/login");
        }
    };

    return (
        <div className="flex flex-col items-center justify-center w-full ">
            <form onSubmit={handleSubmit(onSubmit)} autoComplete="off" className="space-y-4 w-full max-w-96">
                <div className=" py-8">
                    <CardHeader className="text-center">
                        <CardTitle className="text-2xl">Create new account</CardTitle>
                        <CardDescription>Enter your information for your AI Bot Scapper account </CardDescription>
                    </CardHeader>
                    <CardContent className="w-auto flex flex-col gap-8 mt-6">
                        {error && <FormError>{error}</FormError>}
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
                        </div>
                        <Button type="submit" disabled={loading} className="w-full">
                            {loading ? "Registering..." : "Register"}
                        </Button>
                        <div className="flex gap-4 justify-center items-center">
                            <Separator className="flex-1" />
                            <Label>OR</Label>
                            <Separator className="flex-1" />
                        </div>
                        <div className="flex justify-center items-center gap-1">
                            <Label>Have already an account? </Label>
                            <Link className="underline cursor-pointer" href="/auth/login">
                                <Label className="cursor-pointer">Log in</Label>
                            </Link>
                        </div>
                    </CardContent>
                </div>
            </form>
        </div>
    );
}
