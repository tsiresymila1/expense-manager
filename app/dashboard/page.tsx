import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, CreditCard, TrendingDown, TrendingUp, Wallet } from "lucide-react";

// Mock data for dashboard statistics
const mockStats = {
    totalExpenses: "€24,500",
    monthlyAvg: "€4,200",
    highestCategory: "Groceries",
    recentExpense: "€1,200"
};

// Mock data for expense breakdown
const mockCategories = [
    { name: "Groceries", amount: 8500, percentage: 35 },
    { name: "Rent", amount: 7000, percentage: 28 },
    { name: "Utilities", amount: 4500, percentage: 18 },
    { name: "Entertainment", amount: 2500, percentage: 10 },
    { name: "Others", amount: 2000, percentage: 9 }
];

export default function AdminDashboard() {
    return (
        <div className="space-y-12 pb-6">
            <div>
                <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
                <p className="text-muted-foreground">Overview of your expenses and spending patterns.</p>
            </div>

            {/* Stats Cards */}
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                <Card className="bg-transparent rounded-lg border border-expense-100/80 dark:border-expense-950/80 shadow-sm">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Expenses</CardTitle>
                        <Wallet className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-expense-500">{mockStats.totalExpenses}</div>
                        <p className="text-xs text-muted-foreground">
                            +20.1% from last month
                        </p>
                    </CardContent>
                </Card>

                <Card className="bg-transparent rounded-lg border border-expense-100/80 dark:border-expense-950/80 shadow-sm">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Monthly Average</CardTitle>
                        <BarChart3 className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-expense-500">{mockStats.monthlyAvg}</div>
                        <p className="text-xs text-muted-foreground">
                            -4% from previous month
                        </p>
                    </CardContent>
                </Card>

                <Card className="bg-transparent rounded-lg border border-expense-100/80 dark:border-expense-950/80 shadow-sm">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Highest Category</CardTitle>
                        <TrendingUp className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-expense-500">{mockStats.highestCategory}</div>
                        <p className="text-xs text-muted-foreground">
                            35% of your expenses
                        </p>
                    </CardContent>
                </Card>

                <Card className="bg-transparent rounded-lg border border-expense-100/80 dark:border-expense-950/80 shadow-sm">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Recent Expense</CardTitle>
                        <CreditCard className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-expense-500">{mockStats.recentExpense}</div>
                        <p className="text-xs text-muted-foreground">
                            Shopping - Yesterday
                        </p>
                    </CardContent>
                </Card>
            </div>

            {/* Expense Breakdown */}
            <div className="grid  md:grid-cols-2 gap-8">
                <Card className="col-span-1 bg-transparent rounded-lg border border-expense-100/80 dark:border-expense-950/80 shadow-sm">
                    <CardHeader>
                        <CardTitle>Expense Breakdown</CardTitle>
                        <CardDescription>
                            Your spending by category
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {mockCategories.map((category) => (
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
                                        <p className="text-sm font-medium">₹{category.amount}</p>
                                        <p className="text-xs text-muted-foreground">{category.percentage}%</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
                <Card className="col-span-1 bg-transparent rounded-lg border border-expense-100/80 dark:border-expense-950/80 shadow-sm">
                    <CardHeader>
                        <CardTitle>Monthly Trend</CardTitle>
                        <CardDescription>
                            Your spending pattern over time
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="flex items-center justify-center py-10">
                        <div className="text-center">
                            <TrendingDown className="mx-auto h-16 w-16 text-expense-500" />
                            <p className="mt-2 text-sm text-muted-foreground">Your spending has decreased by 4% compared to last month</p>
                            <p className="mt-2 font-medium">Keep up the good work!</p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};