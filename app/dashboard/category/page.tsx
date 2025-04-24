
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import CategoryForm from "./components/category-form";
import CategoryTable from "./components/category-table";

export default function CategoryPage({ searchParams }: { searchParams: Promise<{ page?: string }> }) {
    return <div className="space-y-6 pb-12">
        <div data-aos="fade-down" className="flex justify-between items-center">
            <div>
                <h1 className="text-2xl font-bold tracking-tight">Categories</h1>
                <p className="text-muted-foreground">Manage expense categories for better organization.</p>
            </div>
            <CategoryForm>
                <Button className="flex items-center gap-2 bg-expense-500 hover:bg-expense-800 text-white">
                    <PlusCircle className="h-4 w-4" />
                    <span>Add Category</span>
                </Button>
            </CategoryForm>
        </div>
        <Card data-aos="fade-up" className="bg-transparent rounded-lg border border-expense-100/80 dark:border-expense-900/80 shadow-sm">
            <CardHeader>
                <CardTitle data-aos="fade-right" className="text-xl text-expense-500">Expense Categories</CardTitle>
                <CardDescription data-aos="zoom-in">
                    All available categories for expense classification
                </CardDescription>
            </CardHeader>
            <CardContent className="grid w-full grid-cols-1">
                <CategoryTable searchParams={searchParams} />
            </CardContent>
        </Card>
    </div>
}