import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import AddExpenseForm from "./components/add-expense-form";
import prisma from "@/lib/prisma";
import { getUser } from "@/app/actions/get-user";
import { getCurrency } from "../../components/currency-provider";

export default async  function ExpenseAddPage() {
    const user = await getUser()
    const currency = await getCurrency()
    const data = await prisma.category.findMany({
        where: {
            userId: user?.id
        },
    })
    return (
        <div className="space-y-6 pb-6">
            <div data-aos="fade-right">
                <h1 className="text-2xl font-bold tracking-tight">Add Expense</h1>
                <p className="text-muted-foreground">Record a new expense in your account.</p>
            </div>
            <Card  data-aos="fade-up" className="bg-transparent rounded-lg border border-expense-100/80 dark:border-expense-900/80 shadow-sm">
                <CardHeader data-aos="fade-left">
                    <CardTitle className="text-xl text-expense-500">New Expense</CardTitle>
                    <CardDescription>
                        Enter the details of your expense below. 
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <AddExpenseForm categories={data} currency={currency} />
                </CardContent>
            </Card>
        </div>
    );
};
