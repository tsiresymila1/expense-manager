'use client'

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

interface PaginationProps {
    totalPages: number
    currentPage?: number
    maxButtons?: number
}

export function Pagination({ totalPages, currentPage, maxButtons = 2 }: PaginationProps) {
    const searchParams = useSearchParams()
    const router = useRouter()

    const [current, setCurrent] = useState<number>(currentPage ?? 1)

    useEffect(() => {
        const page = parseInt(searchParams.get("page") || "1", 10)
        setCurrent(currentPage ?? page)
    }, [searchParams, currentPage])

    const goToPage = (page: number) => {
        const params = new URLSearchParams(searchParams.toString())
        params.set("page", page.toString())
        router.push(`?${params.toString()}`)
    }

    const renderPages = () => {
        const pages = []
        const half = Math.floor(maxButtons / 2)
        let start = Math.max(1, current - half)
        let end = Math.min(totalPages, current + half)
        if (current <= half) {
            end = Math.min(totalPages, maxButtons)
        } else if (current + half >= totalPages) {
            start = Math.max(1, totalPages - maxButtons + 1)
        }

        for (let i = start; i <= end; i++) {
            pages.push(
                <Button
                    key={`uniq-${i}`}
                    variant={i === current ? "default" : "outline"}
                    onClick={() => goToPage(i)}
                    className={cn("px-3 hover:text-expense-600", i === current ? "font-bold text-white bg-expense-600 hover:bg-expense-900" : '')}
                >
                    {i}
                </Button>
            )
        }

        if (start > 1) {
            pages.unshift(
                <span key="start-ellipsis-a" className="px-2 text-muted-foreground">...</span>
            )
            pages.unshift(
                <Button variant="outline" key="uniq-uniq-unshift" onClick={() => goToPage(1)} className="px-3">1</Button>
            )
        }

        if (end < totalPages) {
            pages.push(
                <span key="end-ellipsis-b" className="px-2 text-muted-foreground">...</span>
            )
            pages.push(
                <Button variant="outline" key="uniq-uniq" onClick={() => goToPage(totalPages)} className="px-3">
                    {totalPages}
                </Button>
            )
        }

        return pages
    }

    return (
        <div className="flex items-center justify-center gap-2 py-4">
            <Button
                variant="outline"
                size="icon"
                onClick={() => goToPage(current - 1)}
                disabled={current <= 1}
            >
                <ChevronLeft className="w-4 h-4" />
            </Button>

            {renderPages()}

            <Button
                variant="outline"
                size="icon"
                onClick={() => goToPage(current + 1)}
                disabled={current >= totalPages}
            >
                <ChevronRight className="w-4 h-4" />
            </Button>
        </div>
    )
}
