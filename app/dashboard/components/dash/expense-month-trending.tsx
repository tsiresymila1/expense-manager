import prisma from "@/lib/prisma";
import { TrendingDown, TrendingUp } from "lucide-react";

function calculatePercentageChange(current: number, previous: number): number {
    if (previous === 0) return current > 0 ? 100 : 0;
    const change = ((current - previous) / previous) * 100;
    return change;
}

export async function getCurrentMonthExpensesTranding(p: typeof prisma) {
    const currentMonth = new Date();
    const previousMonth = new Date();
    previousMonth.setMonth(currentMonth.getMonth() - 1);


    const currentMonthExpenses = await p.expense.aggregate({
        _sum: { amount: true },
        where: {
            date: {
                gte: new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1),
                lt: new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1),
            },
        },
    });

    const previousMonthExpenses = await p.expense.aggregate({
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
    return { currentTotal, previousTotal, percentageChange };
}

export default async function ExpenseMonthTrending() {

    const { percentageChange } = await getCurrentMonthExpensesTranding(prisma);

    return <div className="text-center">
        {percentageChange > 0 ? <TrendingUp className="mx-auto h-16 w-16 text-red-600" /> : <TrendingDown className="mx-auto h-16 w-16 text-expense-500" />}
        <p className="mt-2 text-sm text-muted-foreground">Your spending has {percentageChange > 0 ? 'decreased' : 'increased'} by {Math.abs(percentageChange).toFixed(1)}% compared to last month</p>
        <p className="mt-2 font-medium">
            {percentageChange > 0 ? "Consider reviewing your expenses!" : "Keep up the good work!"}
        </p>
    </div>

}