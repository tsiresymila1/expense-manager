import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import prisma from "@/lib/prisma";
import { Wallet } from "lucide-react";
import { getCurrency } from "../currency-provider";

function calculatePercentageChange(current: number, previous: number): number {
    if (previous === 0) return current > 0 ? 100 : 0;
    const change = ((current - previous) / previous) * 100;
    return change;
}

export default async function TotalExpense() {
    const currency = await getCurrency();
    const currentMonth = new Date();
    const previousMonth = new Date();
    previousMonth.setMonth(currentMonth.getMonth() - 1);


    const currentMonthExpenses = await prisma.expense.aggregate({
        _sum: { amount: true },
        where: {
            date: {
                gte: new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1),
                lt: new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1),
            },
        },
    });

    const previousMonthExpenses = await prisma.expense.aggregate({
        _sum: { amount: true },
        where: {
            date: {
                gte: new Date(previousMonth.getFullYear(), previousMonth.getMonth(), 1),
                lt: new Date(previousMonth.getFullYear(), previousMonth.getMonth() + 1, 1),
            },
        },
    });

    const currentTotal = currentMonthExpenses._sum.amount || 0;
    const previousTotal = previousMonthExpenses._sum.amount || 0;
    const percentageChange = calculatePercentageChange(currentTotal, previousTotal);

    return (
        <Card
            data-aos="zoom-in"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="bg-transparent rounded-lg border border-expense-100/80 dark:border-expense-900/80 shadow-sm"
        >
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Expenses</CardTitle>
                <Wallet className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold text-expense-500">{currency}{currentTotal}</div>
                <p className="text-xs text-muted-foreground">
                    {`${percentageChange.toFixed(1)} % from last month`}
                </p>
            </CardContent>
        </Card>
    );
}