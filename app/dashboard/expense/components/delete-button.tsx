"use client"
import { deleteExpense } from "@/app/actions/expense/action";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import { useAction } from "next-safe-action/hooks";
import { toast } from "sonner";
import ConfirmDialog from "../../components/confirm-dialog";

export default function ExpenseDeleteButton({ id }: { id: string }) {
    const { executeAsync, isExecuting } = useAction(deleteExpense)

    return <>
        <ConfirmDialog onConfirm={async () => {
            const result = await executeAsync({ id })
            if (result?.data?.success) {
                toast.success("Expense deleted successfully", {
                    description: `One expense has been deleted`,
                });
            }
        }} >
            <Button
                variant="ghost"
                size="icon"
                disabled={isExecuting}
                className="h-8 w-8 text-destructive"
            >
                <Trash className="h-4 w-4" />
                <span className="sr-only">Delete</span>
            </Button>
        </ConfirmDialog>

    </>
}