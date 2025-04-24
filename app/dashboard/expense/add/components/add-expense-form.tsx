"use client"
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

import { upsertExpense } from "@/app/actions/expense/action";
import { MinCategory } from "@/app/dashboard/category/components/category-form";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { useAction } from "next-safe-action/hooks";
import { useRouter } from "next/navigation";
import { useEffect } from "react";


// Payment methods
const paymentMethods = [
    { value: "cash", label: "Cash" },
    { value: "creditCard", label: "Credit Card" },
    { value: "debitCard", label: "Debit Card" },
    { value: "bankTransfer", label: "Bank Transfer" },
    { value: "upi", label: "UPI" },
    { value: "other", label: "Other" },
];

// Zod schema for form validation
const formSchema = z.object({
    id: z.string().optional(),
    date: z.date({
        required_error: "Please select a date",
    }),
    amount: z.coerce
        .number({
            required_error: "Amount is required",
            invalid_type_error: "Amount must be a number",
        })
        .positive("Amount must be positive"),
    category: z.string({
        required_error: "Please select a category",
    }),
    description: z
        .string()
        .min(3, "Description must be at least 3 characters")
        .max(100, "Description must be less than 100 characters"),
    payment: z.string({
        required_error: "Please select a payment method",
    }),
    notes: z.string().optional(),
});

export type MinExpense = {
    id?: string;
    date: Date;
    description: string;
    amount: number;
    notes?: string | null;
    payment: string;
    categoryId: string;
}
type FormValues = z.infer<typeof formSchema>;
type Props = {
    categories: MinCategory[],
    expense?: MinExpense | null
}

export default function AddExpenseForm({ categories, expense }: Props) {
    const navigate = useRouter();
    const { executeAsync, isExecuting } = useAction(upsertExpense)
    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            date: new Date(),
            amount: undefined,
            description: "",
        },
    });

    // Submit handler
    const onSubmit = async (data: FormValues) => {
        const actionType =  expense?.id ? 'updated': 'added'
        const res = await executeAsync({
            ...data,
            id: expense?.id
        })
        if (res?.data?.success) {
            toast.success(`Expense ${actionType} successfully`, {
                description: `$${data.amount} for ${data.description}`,
            });
            form.reset();
            navigate.push("/dashboard/expense");
        } else {
            toast.error("Error", {
                description: res?.data?.error ?? res?.serverError ?? res?.validationErrors?.description?._errors
            })
        }
    };

    useEffect(() => {
        if (expense) {
            form.setValue("id", expense.id)
            form.setValue("date", expense.date)
            form.setValue("description", expense.description)
            form.setValue("amount", expense.amount)
            form.setValue("notes", expense.notes ?? undefined)
            form.setValue("category", expense.categoryId)
            form.trigger("category")
            form.setValue("payment", expense.payment)
            form.trigger("payment")
        }
    }, [expense, form])
    return <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
                <FormField
                    control={form.control}
                    name="date"
                    render={({ field }) => (
                        <FormItem data-aos="fade-right" className="flex flex-col">
                            <FormLabel>Date</FormLabel>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <FormControl>
                                        <Button
                                            variant={"outline"}
                                            className={cn(
                                                "w-full pl-3 text-left font-normal",
                                                !field.value && "text-muted-foreground"
                                            )}
                                        >
                                            {field.value ? (
                                                format(field.value, "PPP")
                                            ) : (
                                                <span>Pick a date</span>
                                            )}
                                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                        </Button>
                                    </FormControl>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0" align="start">
                                    <Calendar
                                        mode="single"
                                        selected={field.value}
                                        onSelect={field.onChange}
                                        disabled={(date) => date > new Date()}
                                        initialFocus
                                        className="p-3 pointer-events-auto"
                                    />
                                </PopoverContent>
                            </Popover>
                            <FormDescription>
                                The date when the expense occurred.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="amount"
                    render={({ field }) => (
                        <FormItem data-aos="fade-left">
                            <FormLabel>Amount ($)</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="0.00"
                                    type="number"
                                    step="0.01"
                                    {...field}
                                />
                            </FormControl>
                            <FormDescription>
                                The amount spent in Indian Rupees.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
                <FormField
                    control={form.control}
                    name="category"
                    render={({ field, fieldState }) => (
                        <FormItem data-aos="fade-right">
                            <FormLabel>Category</FormLabel>
                            <Select key={field.value}
                                value={field.value}
                                defaultValue={field.value}
                                onValueChange={field.onChange}>
                                <FormControl>
                                    <SelectTrigger ref={field.ref} aria-invalid={fieldState['invalid']}>
                                        <SelectValue placeholder="Select a category" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    {categories.map((category) => (
                                        <SelectItem key={category.id} value={category.id!}>
                                            {category.name}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            <FormDescription>
                                Select the category that best fits this expense.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="payment"
                    render={({ field, fieldState }) => (
                        <FormItem data-aos="fade-left">
                            <FormLabel>Payment Method</FormLabel>
                            <Select
                                key={field.value}
                                value={field.value}
                                defaultValue={field.value}
                                onValueChange={field.onChange}>
                                <FormControl>
                                    <SelectTrigger ref={field.ref} aria-invalid={fieldState['invalid']}>
                                        <SelectValue placeholder="Select payment method" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    {paymentMethods.map((method) => (
                                        <SelectItem key={method.value} value={method.value}>
                                            {method.label}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            <FormDescription>
                                How did you pay for this expense?
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            </div>

            <div className="space-y-6" data-aos="fade-up">
                <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Description</FormLabel>
                            <FormControl>
                                <Input placeholder="What did you spend on?" {...field} />
                            </FormControl>
                            <FormDescription>
                                A brief description of the expense.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="notes"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Notes (Optional)</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="Add any additional details..."
                                    className="min-h-[100px]"
                                    {...field}
                                />
                            </FormControl>
                            <FormDescription>
                                Any additional information you want to add.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            </div>

            <div className="flex justify-end gap-2">
                <Button
                    type="button"
                    variant="outline"
                    onClick={() => navigate.push("/admin/expense")}
                >
                    Cancel
                </Button>
                <Button disabled={isExecuting} type="submit" className="bg-expense-500 hover:bg-expense-800 text-white">
                    Save
                </Button>
            </div>
        </form>
    </Form>
}