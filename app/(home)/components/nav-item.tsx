"use client"

import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

export default function NavItem({ title, url }: { title: string, url: string }) {
    const [isActive, setIsActive] = useState<boolean>(false)
    const pathname = usePathname()
    useEffect(() => {
        if (pathname === url) {
            setIsActive(true)
        } else {
            setIsActive(false);
        }
    }, [pathname, url])
    return <Link
        key={title}
        href={url}
        data-aos-duration="700"
        className={cn("text-md font-medium px-2 py-2", isActive ? "text-expense-500" : "text-muted-foreground hover:text-expense-500 transition-colors")}
    >
        {title}
    </Link>
}