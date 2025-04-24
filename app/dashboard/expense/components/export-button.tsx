"use client"
import { exportExpense } from "@/app/actions/expense/action";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { useAction } from "next-safe-action/hooks";
import * as XLSX from "xlsx";
export default function ExportButton() {
    const { executeAsync } = useAction(exportExpense)
    const exportExcel = async () => {
        const data = await executeAsync();
        if (data?.data) {
            const workbook = XLSX.utils.book_new();
            const worksheet = XLSX.utils?.json_to_sheet(data?.data);
            XLSX.utils.book_append_sheet(workbook, worksheet, "Expense");
            XLSX.writeFile(workbook, `expense.xlsx`);
        }
    }
    return <Button onClick={exportExcel} variant="outline" className="border dark:border-expense-700">
        <Download className="mr-2 h-4 w-4" />
        Export
    </Button>
}