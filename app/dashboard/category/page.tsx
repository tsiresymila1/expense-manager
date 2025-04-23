
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

import CategoryForm from "./components/category-form";
import CategoryTable from "./components/category-table";

export default function CategoryPage({ searchParams }: { searchParams: Promise<{ page?: number }> }) {
    return <div className="space-y-6 pb-12">
        <div data-aos="fade-down" className="flex justify-between items-center">
            <div>
                <h1 className="text-2xl font-bold tracking-tight">Categories</h1>
                <p className="text-muted-foreground">Manage expense categories for better organization.</p>
            </div>
            <CategoryForm /> 
        </div>
        <Card data-aos="fade-up" className="bg-transparent rounded-lg border border-expense-100/80 dark:border-expense-900/80 shadow-sm">
            <CardHeader>
                <CardTitle data-aos="fade-right" className="text-xl text-expense-500">Expense Categories</CardTitle>
                <CardDescription data-aos="zoom-in">
                    All available categories for expense classification
                </CardDescription>
            </CardHeader>
            <CardContent>
                <CategoryTable searchParams={searchParams} />
            </CardContent>
        </Card>
    </div>
}