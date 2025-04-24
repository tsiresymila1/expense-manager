
"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { useAction } from "next-safe-action/hooks";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

import { upsertCategory } from "@/app/actions/category/action";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Loader } from "lucide-react";


const categoryFormSchema = z.object({
    id: z.string().optional(),
    name: z.string().min(3, "Name must be at least 3 characters"),
    value: z
        .string()
        .min(2, "Value must be at least 2 characters")
        .regex(/^[a-z0-9-]+$/, "Value must contain only lowercase letters, numbers, or hyphens"),
    description: z.string().max(100, "Description must be less than 100 characters").optional(),
});

type CategoryFormValues = z.infer<typeof categoryFormSchema>;
export type MinCategory = {
    id?: string,
    name?: string,
    value?: string | null,
    desc?: string | null
}
type Props = {
    children: React.ReactNode,
    category?: MinCategory
}

export default function CategoryForm({ children, category }: Props) {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const { executeAsync, isExecuting, isPending } = useAction(upsertCategory)

    const form = useForm<CategoryFormValues>({
        resolver: zodResolver(categoryFormSchema),
        defaultValues: {
            name: "",
            value: "",
            description: "",
        },
    });

    const onSubmit = async (data: CategoryFormValues) => {
        const newCategory = {
            name: data.name,
            value: data.value,
            description: data.description || "",
            id: data.id
        };
        console.log("newCategory", newCategory);

        const res = await executeAsync(newCategory)
        const action_type = data.id ? 'updated' : 'added'
        if (res?.data?.success) {
            toast.success(`Category ${action_type} successfully"`, {
                description: `${data.name} has been ${action_type} to categories`,
            });
            form.reset();
            setIsDialogOpen(false);
        } else {
            toast.error("Error", {
                description: res?.data?.error ?? res?.serverError ?? res?.validationErrors?.description?._errors
            })
        }

    };

    useEffect(() => {
        if (category) {
            form.setValue("id", category.id);
            form.setValue("name", category.name ?? "");
            form.setValue("value", category.value ?? "");
            form.setValue("description", category.desc ?? "");
        }
    }, [category, form])

    return <Dialog open={isDialogOpen} onOpenChange={(e) => {
        setIsDialogOpen(e)
        if (!e) {
            form.reset();
        }
    }}>
        <DialogTrigger asChild>
            {children}
        </DialogTrigger>
        <DialogContent className="dark:border-expense-900/80 ">
            <DialogHeader>
                <DialogTitle className="text-expense-500">{category ? "Update Category" : "Add New Category"}</DialogTitle>
                <DialogDescription>
                    {category ? "Create a new category for organizing expenses" : "Update a category for organizing expenses"}.
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
                        <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                            Cancel
                        </Button>
                        <Button disabled={isExecuting || isPending} className="bg-expense-500 hover:bg-expense-800 text-white" type="submit">
                            {isExecuting || isPending ? <Loader className="animate-spin" /> : null} Save
                        </Button>
                    </DialogFooter>
                </form>
            </Form>
        </DialogContent>
    </Dialog>

}