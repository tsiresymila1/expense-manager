import { getUser } from "@/app/actions/get-user";
import { Label } from "@/components/ui/label";
import { BarChart3 } from "lucide-react";
import { redirect } from "next/navigation";
import RegisterForm from "../components/register-form";
import Link from "next/link";

export default async function RegisterPage() {
    const user = await getUser()
    if (user) {
        redirect('/dashboard')
    }
    return <div className="w-screen h-full flex flex-row">
        <div className="flex-1 dark:bg-slate-900 bg-slate-200 flex flex-col items-center justify-center max-lg:hidden">
            <div className="p-4 flex items-center gap-3 justify-center">
                <Link href="/" className="text-center flex  justify-center items-center cursor-pointer">
                    <BarChart3 size={60} className="text-expense-600 cursor-pointer" />
                    <Label className="font-bold text-4xl hero-text-gradient cursor-pointer">ExpenseFlow</Label>
                </Link>
            </div>
            <div className="max-w-96 justify-center flex p-8 text-center">
                <Label className="text-base text-muted-foreground">
                    {"Take control of your finances with ExpenseFlow – the all-in-one expense tracking solution that helps you save more, spend wisely, and achieve your financial goals."}
                </Label>
            </div>
        </div>
        <div className="flex-1 flex justify-center items-center dark:bg-slate-950 bg-slate-100">
            <RegisterForm />
        </div>
    </div>
}