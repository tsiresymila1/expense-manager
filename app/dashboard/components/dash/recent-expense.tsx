import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import prisma from "@/lib/prisma";
import { CreditCard } from "lucide-react";
import { getCurrency } from "../currency-provider";

export default async function RecentExpense() {
    const currency = await getCurrency();
    const recent = await prisma.expense.findFirst({
        orderBy: {
            date: "desc"
        },
        include: {
            category: {
                select: {
                    name: true
                }
            }
        }
    });

    const formatDate = (date: Date | undefined) => {
        if (!date) return "Unknown date";
        const now = new Date();
        const diffTime = now.getTime() - date.getTime();
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
        if (diffDays === 0) return "Today";
        if (diffDays === 1) return "Yesterday";
        return new Intl.DateTimeFormat("en-US", { dateStyle: "medium" }).format(date);
    };

    return (
        <Card
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="bg-transparent rounded-lg border border-expense-100/80 dark:border-expense-900/80 shadow-sm"
        >
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Recent Expense</CardTitle>
                <CreditCard className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold text-expense-500">{currency}{recent?.amount ?? '0.00'}</div>
                <p className="text-xs text-muted-foreground">
                    {recent?.category.name} - {formatDate(recent?.date)}
                </p>
            </CardContent>
        </Card>
    );
}