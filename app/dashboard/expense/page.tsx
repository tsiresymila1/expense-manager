import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import { ParamsProps } from "@/lib/utils";
import { Plus } from "lucide-react";
import Link from "next/link";
import ExpenseTable from "./components/expense-table";
import ExportButton from "./components/export-button";
import SearchExpense from "./components/search-input";


export default function AdminExpenses({ searchParams }: ParamsProps<{ page?: string, query?: string }>) {
    return (
        <div className="gap-y-6 pb-12 flex flex-col">
            <div className="flex flex-col gap-4 lg:flex-row items-center justify-between w-full">
                <div data-aos="fade-right" className="flex-col lg:flex-1 w-full flex" >
                    <h1 className="text-2xl font-bold tracking-tight ">Expenses</h1>
                    <p className="text-muted-foreground">Manage and track your expenses.</p>
                </div>
                <div data-aos="fade-left" className="flex gap-2 lg:flex-1 justify-evenly lg:justify-end w-full">
                    <ExportButton />
                    <Button asChild className="bg-expense-500 hover:bg-expense-800 text-white">
                        <Link href="/dashboard/expense/add">
                            <Plus className="mr-2 h-4 w-4" />
                            Add Expense
                        </Link>
                    </Button>
                </div>
            </div>
            <Card data-aos="fade-left" className=" bg-transparent rounded-lg border border-expense-100/80 dark:border-expense-900/80 shadow-sm">
                <CardHeader data-aos="zoom-in">
                    <CardTitle className="text-expense-500 text-xl">All Expenses</CardTitle>
                    <CardDescription>
                        View and manage all your recorded expenses.
                    </CardDescription>
                    <SearchExpense />
                </CardHeader>
                <CardContent className="grid w-full grid-cols-1">
                    <ExpenseTable params={searchParams} />
                </CardContent>
            </Card>
        </div>
    );
};
