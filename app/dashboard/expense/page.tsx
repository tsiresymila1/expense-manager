import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table";
import { CreditCard, Download, Edit, Plus, Search, Trash, User } from "lucide-react";
import Link from "next/link";
import { Pagination } from "../components/pagination";

// Mock data for expenses
const mockExpenses = [
    { id: 1, date: "2023-04-01", description: "Monthly Rent", category: "Housing", amount: 7000 },
    { id: 2, date: "2023-04-02", description: "Groceries", category: "Food", amount: 1200 },
    { id: 3, date: "2023-04-03", description: "Electricity Bill", category: "Utilities", amount: 800 },
    { id: 4, date: "2023-04-05", description: "Internet", category: "Utilities", amount: 600 },
    { id: 5, date: "2023-04-10", description: "Restaurant", category: "Food", amount: 1500 },
    { id: 6, date: "2023-04-15", description: "Movie Tickets", category: "Entertainment", amount: 600 },
    { id: 7, date: "2023-04-20", description: "Gas Bill", category: "Utilities", amount: 300 },
    // { id: 8, date: "2023-04-25", description: "Shopping", category: "Personal", amount: 2000 },
    // { id: 9, date: "2023-04-30", description: "Mobile Recharge", category: "Utilities", amount: 500 }
];

// Function to format date
const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
};

export default function AdminExpenses() {
    return (
        <div className="space-y-6 pb-12">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight ">Expenses</h1>
                    <p className="text-muted-foreground">Manage and track your expenses.</p>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline" className="border dark:border-expense-700">
                        <Download className="mr-2 h-4 w-4" />
                        Export
                    </Button>
                    <Button asChild className="bg-expense-500 hover:bg-expense-800 text-white">
                        <Link href="/dashboard/expense/add">
                            <Plus className="mr-2 h-4 w-4" />
                            Add Expense
                        </Link>
                    </Button>
                </div>
            </div>
            <Card className="bg-transparent rounded-lg border border-expense-100/80 dark:border-expense-950/80 shadow-sm">
                <CardHeader>
                    <CardTitle className="text-expense-500 text-xl">All Expenses</CardTitle>
                    <CardDescription>
                        View and manage all your recorded expenses.
                    </CardDescription>
                    <div className="mt-4 flex items-center gap-2">
                        <div className="relative flex-1 max-w-xs">
                            <Search className="text-expense-500 absolute left-2.5 top-2.5 h-4 w-4" />
                            <Input
                                type="search"
                                placeholder="Search expenses..."
                                className="w-full pl-8 "
                            />
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="space-y-6">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>User</TableHead>
                                <TableHead>Date</TableHead>
                                <TableHead>Description</TableHead>
                                <TableHead>Category</TableHead>
                                <TableHead className="text-center">Amount</TableHead>
                                <TableHead className="w-24 px-6">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {mockExpenses.map((expense) => (
                                <TableRow key={expense.id} className="h-16 hover:bg-muted cursor-pointer">
                                    <TableCell><User className="text-expense-500" /></TableCell>
                                    <TableCell>{formatDate(expense.date)}</TableCell>
                                    <TableCell>{expense.description}</TableCell>
                                    <TableCell>
                                        <div className="flex items-center gap-2">
                                            <CreditCard className="h-4 w-4 text-muted-foreground" />
                                            {expense.category}
                                        </div>
                                    </TableCell>
                                    <TableCell className="text-center font-medium">
                                        ₹{expense.amount}
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <div className="flex justify-end gap-2">
                                            <Button variant="ghost" size="icon" className="h-8 w-8">
                                                <Edit className="h-4 w-4 text-expense-500" />
                                                <span className="sr-only">Edit</span>
                                            </Button>
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                className="h-8 w-8 text-destructive"
                                            >
                                                <Trash className="h-4 w-4" />
                                                <span className="sr-only">Delete</span>
                                            </Button>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    <Pagination totalPages={10} />
                </CardContent>
            </Card>
        </div>
    );
};
