import { Label } from "@/components/ui/label";
import { BarChart3 } from "lucide-react";
import Link from "next/link";
import LoginForm from "../components/login-form";

export default async function LoginPage() {
    return <div data-aos="zoom-in" className="lg:w-[800px] max-lg:max-w-[400px]  flex dark:bg-slate-950 bg-slate-100 w-full rounded-md">
        <div className="flex-1 p-8 dark:bg-[rgb(16,25,45)] dark:bg-opacity-100 border border-r-0 dark:border-expense-500/10 bg-slate-200 flex flex-col justify-center items-center max-lg:hidden">
            <Link href="/" className="text-center flex flex-col justify-center items-center cursor-pointer">
                <BarChart3 size={80} className="text-expense-600" />
                <Label className="font-bold text-2xl pt-3 hero-text-gradient cursor-pointer">ExpenseFlow</Label>
            </Link>
        </div>
        <div className="flex-1 lg:px-8 py-8 rounded-lg flex w-full ">
            <LoginForm />
        </div>
    </div>
}