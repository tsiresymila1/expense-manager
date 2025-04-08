import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import AddExpenseForm from "./components/add-expense-form";

export default function AdminAddExpense() {
    return (
        <div className="space-y-6 pb-6">
            <div>
                <h1 className="text-2xl font-bold tracking-tight">Add Expense</h1>
                <p className="text-muted-foreground">Record a new expense in your account.</p>
            </div>
            <Card className="bg-transparent rounded-lg border border-expense-100/80 dark:border-expense-950/80 shadow-sm">
                <CardHeader>
                    <CardTitle className="text-xl text-expense-500">New Expense</CardTitle>
                    <CardDescription>
                        Enter the details of your expense below.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <AddExpenseForm />
                </CardContent>
            </Card>
        </div>
    );
};
