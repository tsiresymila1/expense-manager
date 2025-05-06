import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import ExpenseMonthAverage from "./components/dash/expense-month-average";
import ExpenseMonthTrending from "./components/dash/expense-month-trending";
import ExpensePerCategory from "./components/dash/expense-per-category";
import HighestCategory from "./components/dash/higest-category";
import RecentExpense from "./components/dash/recent-expense";
import TotalExpense from "./components/dash/total-expense";


export default function AdminDashboard() {
    return (
        <div className=" space-y-4 lg:space-y-12 pb-6">
            <div data-aos="fade-up" data-aos-offset="500">
                <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
                <p className="text-muted-foreground">Overview of your expenses and spending patterns.</p>
            </div>
            {/* Stats Cards */}
            <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-4">
                <TotalExpense />
                <ExpenseMonthAverage />
                <HighestCategory />
                <RecentExpense />
            </div>

            {/* Expense Breakdown */}
            <div className="grid grid-cols-1 lg:grid lg:grid-cols-2 gap-8">
                <Card data-aos="fade-up" className="col-span-1 bg-transparent rounded-lg border border-expense-100/80 dark:border-expense-900/80 shadow-sm">
                    <CardHeader>
                        <CardTitle>Expense Breakdown</CardTitle>
                        <CardDescription>
                            Your spending by category
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ExpensePerCategory />
                    </CardContent>
                </Card>
                <Card data-aos="fade-up"  className="col-span-1 bg-transparent rounded-lg border border-expense-100/80 dark:border-expense-900/80 shadow-sm">
                    <CardHeader>
                        <CardTitle>Monthly Trend</CardTitle>
                        <CardDescription>
                            Your spending pattern over time
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="flex items-center justify-center py-10">
                        <ExpenseMonthTrending />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};