import { getUser } from "@/app/actions/get-user";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import prisma from "@/lib/prisma";
import { ParamsProps } from "@/lib/utils";
import AddExpenseForm from "../../add/components/add-expense-form";

export default async function ExpenseEditPage({ params }: ParamsProps<{ id: string }>) {
    const { id } = await params!;
    const user = await getUser()
    const data = await prisma.category.findMany({
        where: {
            userId: user?.id
        },
    })
    const expense = await prisma.expense.findUnique({
        where: { id }
    })
    return (
        <div className="space-y-6 pb-6">
            <div data-aos="fade-right">
                <h1 className="text-2xl font-bold tracking-tight">Update Expense</h1>
                <p className="text-muted-foreground">Update expense in your account.</p>
            </div>
            <Card data-aos="fade-up" className="bg-transparent rounded-lg border border-expense-100/80 dark:border-expense-900/80 shadow-sm">
                <CardHeader data-aos="fade-left">
                    <CardTitle className="text-xl text-expense-500">Update Expense</CardTitle>
                    <CardDescription>
                        Update the details of your expense below.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <AddExpenseForm categories={data} expense={expense} />
                </CardContent>
            </Card>
        </div>
    );
};
