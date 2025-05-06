import prisma from "@/lib/prisma";
import { endOfMonth, startOfMonth } from "date-fns";
import { getCurrency } from "../currency-provider";

export async function getCategoryStats(p: typeof prisma, selectedMonth?: Date, topN: number = 4 ) {
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
    // Sort categories by totalAmount in descending order
    categoryStats.sort((a, b) => b.totalAmount - a.totalAmount);
    // Take the top N categories and combine the rest into "Other"
    const topCategories = categoryStats.slice(0, topN);
    const otherCategories = categoryStats.slice(topN);
    const otherTotalAmount = otherCategories.reduce((sum, category) => sum + category.totalAmount, 0);

    if (otherTotalAmount > 0) {
        topCategories.push({ name: "Other", totalAmount: otherTotalAmount });
    }

    const totalExpenses = topCategories.reduce((sum, category) => sum + category.totalAmount, 0);

    const categoryStatsWithPercentage = topCategories.map((category) => ({
        ...category,
        percentage: totalExpenses ? ((category.totalAmount / totalExpenses) * 100).toFixed(2) : "0",
    }));
    return { categoryStatsWithPercentage, totalExpenses };
}

export default async function ExpensePerCategory({ selectedMonth, topN = 4 }: { selectedMonth?: Date; topN?: number }) {
    const currency = await getCurrency();
    const { categoryStatsWithPercentage } = await getCategoryStats(prisma, selectedMonth, topN);
    return (
        <div className="space-y-4">
            {categoryStatsWithPercentage.map((category) => (
                <div key={category.name} className="flex items-center">
                    <div className="w-1/3">
                        <p className="text-sm font-medium">{category.name}</p>
                    </div>
                    <div className="flex-1">
                        <div className="h-2 w-full overflow-hidden rounded-full bg-secondary">
                            <div
                                className="h-full bg-expense-500"
                                style={{ width: `${category.percentage}%` }}
                            />
                        </div>
                    </div>
                    <div className="w-1/4 text-right">
                        <p className="text-sm font-medium">{currency}{category.totalAmount}</p>
                        <p className="text-xs text-muted-foreground">{category.percentage}%</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
