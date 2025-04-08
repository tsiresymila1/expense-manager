
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Edit, Trash } from "lucide-react";

import CategoryForm from "./components/category-form";

const initialCategories = [
    { id: 1, name: "Food & Dining", value: "food", description: "Restaurants, groceries, and dining out" },
    { id: 2, name: "Housing & Rent", value: "housing", description: "Monthly rent and home maintenance" },
    { id: 3, name: "Transportation", value: "transportation", description: "Gas, public transit, and vehicle expenses" },
    { id: 4, name: "Utilities", value: "utilities", description: "Water, electricity, internet, and phone bills" },
    { id: 5, name: "Entertainment", value: "entertainment", description: "Movies, events, and recreational activities" },
];

export default function CategoryPage() {
    return <div className="space-y-6 pb-12">
        <div className="flex justify-between items-center">
            <div>
                <h1 className="text-2xl font-bold tracking-tight">Categories</h1>
                <p className="text-muted-foreground">Manage expense categories for better organization.</p>
            </div>
            <CategoryForm />
        </div>
        <Card className="bg-transparent rounded-lg border border-expense-100/80 dark:border-expense-950/80 shadow-sm">
            <CardHeader>
                <CardTitle className="text-xl text-expense-500">Expense Categories</CardTitle>
                <CardDescription>
                    All available categories for expense classification
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Name</TableHead>
                            <TableHead>Value</TableHead>
                            <TableHead className="hidden md:table-cell">Description</TableHead>
                            <TableHead className="w-24">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {initialCategories.map((category) => (
                            <TableRow key={category.id} className="h-14">
                                <TableCell className="font-medium">{category.name}</TableCell>
                                <TableCell>{category.value}</TableCell>
                                <TableCell className="hidden md:table-cell">{category.description}</TableCell>
                                <TableCell>
                                    <div className="flex items-center gap-2">
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
            </CardContent>
        </Card>
    </div>
}