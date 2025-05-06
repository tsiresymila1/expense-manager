import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import prisma from "@/lib/prisma";
import { BarChart3 } from "lucide-react";
import { getCurrency } from "../currency-provider";

export async function getMountAverage(p: typeof prisma) {
    const expenses = await p.expense.findMany({
        select: {
            date: true,
            amount: true,
        },
    });
    // Group expenses by month
    const groupedExpenses = expenses.reduce<Record<string, { totalAmount: number; count: number }>>((acc, expense) => {
        const date = new Date(expense.date);
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        const key = `${year}-${month}`;

        if (!acc[key]) {
            acc[key] = { totalAmount: 0, count: 0 };
        }

        acc[key].totalAmount += expense.amount || 0;
        acc[key].count += 1;

        return acc;
    }, {});

    // Get current and previous month keys
    const now = new Date();
    const currentMonthKey = `${now.getFullYear()}-${now.getMonth() + 1}`;
    const previousMonthKey =
        now.getMonth() === 0
            ? `${now.getFullYear() - 1}-12`
            : `${now.getFullYear()}-${now.getMonth()}`;

    // Calculate current and previous month averages
    const currentMonthData = groupedExpenses[currentMonthKey] || { totalAmount: 0, count: 0 };
    const previousMonthData = groupedExpenses[previousMonthKey] || { totalAmount: 0, count: 0 };

    const currentMonthAvg =
        currentMonthData.count > 0 ? currentMonthData.totalAmount / currentMonthData.count : 0;
    const previousMonthAvg =
        previousMonthData.count > 0 ? previousMonthData.totalAmount / previousMonthData.count : 0;

    // Calculate percentage change
    const percentageChange = previousMonthAvg
        ? ((currentMonthAvg - previousMonthAvg) / previousMonthAvg) * 100
        : 0;

    return {
        currentMonthAvg,
        previousMonthAvg,
        percentageChange,
        currentMonthData,
        previousMonthData,
    }
}

export default async function ExpenseMonthAverage() {
    const currency = await getCurrency();
    const { currentMonthAvg, percentageChange } = await getMountAverage(prisma);

    return (
        <Card
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="bg-transparent rounded-lg border border-expense-100/80 dark:border-expense-900/80 shadow-sm"
        >
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Monthly Average</CardTitle>
                <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold text-expense-500">
                    {currency}{currentMonthAvg.toFixed(2)}
                </div>
                <p className="text-xs text-muted-foreground">
                    {percentageChange.toFixed(2)}% from previous month
                </p>
            </CardContent>
        </Card>
    );
}