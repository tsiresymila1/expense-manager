import { getUser } from "@/app/actions/get-user";
import { Label } from "@/components/ui/label";
import { DollarSign } from "lucide-react";
import { redirect } from "next/navigation";
import LoginForm from "../components/login-form";

export default async function LoginPage() {
    const user = await getUser()
    if (user) {
        redirect('/dashboard')
    }
    return <div className="lg:w-[800px] max-lg:max-w-[400px]  flex dark:bg-slate-950 bg-slate-100 w-full rounded-md">
        <div className="flex-1 p-8 dark:bg-[rgb(16,25,45)] dark:bg-opacity-100 border border-l-0 bg-slate-200 flex flex-col justify-center items-center max-lg:hidden">
            <DollarSign size={80} className="text-expense-600" />
            <Label className="font-bold text-2xl pt-3 hero-text-gradient">Expense Manager</Label>
        </div>
        <div className="flex-1 lg:px-8 py-8 rounded-lg flex w-full ">
            <LoginForm />
        </div>
    </div>
}