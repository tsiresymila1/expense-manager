"use client"

import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function NavItem({ title, url }: { title: string, url: string }) {
    const pathname = usePathname()
    return <Link
        key={title}
        href={url}
        className={cn("text-md font-medium px-2 py-2", pathname === url ? "text-expense-500" : "text-muted-foreground hover:text-expense-500 transition-colors")}
    >
        {title}
    </Link>
}