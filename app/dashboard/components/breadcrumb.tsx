'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronRight } from "lucide-react"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb"

export function AppBreadcrumb() {
  const pathname = usePathname()
  const segments = pathname.split('/').filter(Boolean)

  const crumbs = segments.map((segment, i) => {
    const href = '/' + segments.slice(0, i + 1).join('/')
    const name = decodeURIComponent(segment).replace(/-/g, ' ')
    return { name, href }
  })

  return (
    <Breadcrumb className="pb-6">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/dashboard">Home</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        {crumbs.map((crumb, i) => (
          <div key={crumb.href} className="flex items-center">
            <BreadcrumbSeparator className="px-1">
              <ChevronRight className="w-4 h-4" />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink asChild className="hover:text-expense-500">
                {i === crumbs.length - 1 ? (
                  <span className="text-expense-500 font-medium capitalize">{crumb.name}</span>
                ) : (
                  <Link href={crumb.href} className="capitalize hover:text-expense-500">{crumb.name}</Link>
                )}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </div>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
