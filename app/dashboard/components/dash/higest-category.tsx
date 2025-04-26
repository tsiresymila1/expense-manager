import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import prisma from "@/lib/prisma";
import { TrendingUp } from "lucide-react";
import { startOfMonth, endOfMonth } from "date-fns";

export default async function HighestCategory({ selectedMonth }: { selectedMonth?: Date }) {
    const currentMonth = selectedMonth || new Date();
    const startDate = startOfMonth(currentMonth);
    const endDate = endOfMonth(currentMonth);

    const perCategory = await prisma.category.findMany({
        include: {
            expenses: {
                where: {
                    date: {
                        gte: startDate,
                        lte: endDate,
                    },
                },
                select: {
                    amount: true,
                },
            },
        },
    });

    const categoryStats = perCategory.map((category) => {
        const totalAmount = category.expenses.reduce((sum, expense) => sum + expense.amount, 0);
        return { name: category.name, totalAmount };
    });

    const highestCategory = categoryStats.reduce((prev, current) =>
        current.totalAmount > prev.totalAmount ? current : prev,
        { name: "None", totalAmount: 0 }
    );

    const totalExpenses = categoryStats.reduce((sum, category) => sum + category.totalAmount, 0);
    const percentage = totalExpenses
        ? ((highestCategory.totalAmount / totalExpenses) * 100).toFixed(2)
        : 0;

    return (
        <Card
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="bg-transparent rounded-lg border border-expense-100/80 dark:border-expense-900/80 shadow-sm"
        >
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Highest Category</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold text-expense-500">{highestCategory.name}</div>
                <p className="text-xs text-muted-foreground">
                    {percentage}% of your expenses
                </p>
            </CardContent>
        </Card>
    );
}