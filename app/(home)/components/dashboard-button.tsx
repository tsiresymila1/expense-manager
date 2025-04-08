import { Button } from "@/components/ui/button";
import { LayoutDashboard } from "lucide-react";
import Link from "next/link";

export default function DashboardButton() {
    return <Link href="/dashboard">
        <Button variant="ghost" size="icon" className="focus:ring-0 focus:outline-none active:ring-0 active:outline-none">
            <LayoutDashboard className="text-expense-600" />
        </Button>
    </Link>
}