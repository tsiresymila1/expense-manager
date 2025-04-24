"use client"
import { deleteCategory } from "@/app/actions/category/action";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import { useAction } from "next-safe-action/hooks";
import { toast } from "sonner";
import ConfirmDialog from "../../components/confirm-dialog";

export default function CatDeleteButton({ id }: { id: string }) {
    const { executeAsync, isExecuting } = useAction(deleteCategory)

    return <>
        <ConfirmDialog onConfirm={async () => {
            const result = await executeAsync({ id })
            if (result?.data?.success) {
                toast.success("Category deleted successfully", {
                    description: `One category has been deleted`,
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