
"use client"


import { zodResolver } from "@hookform/resolvers/zod";
import { PlusCircle } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";


const categoryFormSchema = z.object({
    name: z.string().min(3, "Name must be at least 3 characters"),
    value: z
        .string()
        .min(2, "Value must be at least 2 characters")
        .regex(/^[a-z0-9-]+$/, "Value must contain only lowercase letters, numbers, or hyphens"),
    description: z.string().max(100, "Description must be less than 100 characters").optional(),
});

type CategoryFormValues = z.infer<typeof categoryFormSchema>;

export default function CategoryForm() {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const form = useForm<CategoryFormValues>({
        resolver: zodResolver(categoryFormSchema),
        defaultValues: {
            name: "",
            value: "",
            description: "",
        },
    });

    const onSubmit = (data: CategoryFormValues) => {

        const newCategory = {
            name: data.name,
            value: data.value,
            description: data.description || "",
        };
        console.log("newCategory", newCategory);

        toast.success("Category added successfully", {
            description: `${data.name} has been added to categories`,
        });
        setIsDialogOpen(false);
        form.reset();
    };

    return <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger asChild>
            <Button className="flex items-center gap-2 bg-expense-500 hover:bg-expense-800 text-white">
                <PlusCircle className="h-4 w-4" />
                <span>Add Category</span>
            </Button>
        </DialogTrigger>
        <DialogContent>
            <DialogHeader>
                <DialogTitle className="text-expense-500">Add New Category</DialogTitle>
                <DialogDescription>
                    Create a new category for organizing expenses.
                </DialogDescription>
            </DialogHeader>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Display Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="E.g. Food & Dining" {...field} />
                                </FormControl>
                                <FormDescription>
                                    The name shown to users in the UI
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="value"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Value</FormLabel>
                                <FormControl>
                                    <Input placeholder="E.g. food-dining" {...field} />
                                </FormControl>
                                <FormDescription>
                                    Used as identifier (lowercase letters, numbers, hyphens only)
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Description (Optional)</FormLabel>
                                <FormControl>
                                    <Input placeholder="Short description of the category" {...field} />
                                </FormControl>
                                <FormDescription>
                                    Helps users understand what belongs in this category
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <DialogFooter className="pt-4">
                        <Button type="button" variant="outline"  onClick={() => setIsDialogOpen(false)}>
                            Cancel
                        </Button>
                        <Button className="bg-expense-500 hover:bg-expense-800 text-white" type="submit">Add Category</Button>
                    </DialogFooter>
                </form>
            </Form>
        </DialogContent>
    </Dialog>

}