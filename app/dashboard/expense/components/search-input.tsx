"use client"

import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { useRouter, useSearchParams } from "next/navigation"

export default function SearchExpense() {
    const searchParams = useSearchParams()
    const router = useRouter()
    const onSearch = (query: string) => {
        const params = new URLSearchParams(searchParams.toString())
        if (query.trim().length > 0) {
            params.set("query", query.toString())
        } else {
            params.delete("query");
        }
        router.push(`?${params.toString()}`)
    }
    return <div className="mt-4 flex items-center gap-2">
        <div className="relative flex-1 max-w-xs">
            <Search className="text-expense-500 absolute left-2.5 top-2.5 h-4 w-4" />
            <Input
                type="search"
                placeholder="Search expenses..."
                className="w-full pl-8 "
                onChange={(e) => onSearch(e.target.value)}
            />
        </div>
    </div>
}