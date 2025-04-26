"use client"
import { BarChart3, ChartArea, DollarSign, LayoutDashboard, LucideIcon, Settings, Type } from "lucide-react"

import { Label } from "@/components/ui/label"
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"


type SideMenuType = {
    title: string,
    url: string,
    children: {
        title: string,
        url: string,
        icon: LucideIcon,
    }[]

}
// Menu items.
const items: SideMenuType[] = [
    {
        title: "Application",
        url: '/dashboard',
        children: [
            {
                title: "Dashboard",
                url: "",
                icon: LayoutDashboard,
            },
            {
                title: "Expenses",
                url: "/expense",
                icon: DollarSign,
            },
            {
                title: "Categories",
                url: "/category",
                icon: Type,
            },
            // {
            //     title: "Users",
            //     url: "/users",
            //     icon: Users2,
            // },

            {
                title: "Activity",
                url: "/activity",
                icon: ChartArea,
            },
        ]
    },
    {
        title: "Settings",
        url: '/dashboard',
        children: [
            {
                title: "Settings",
                url: "/settings",
                icon: Settings,
            },
            // {
            //     title: "Help",
            //     url: "/help",
            //     icon: HelpCircle,
            // }
        ]
    },
]

export function AppSidebar() {
    const pathname = usePathname()
    return (
        <Sidebar>
            <SidebarHeader className="py-4 ps-8">
                <Link href="/" className="cursor-pointer">
                    <div className="flex flex-row items-center gap-2 cursor-pointer">
                        <BarChart3 size={25} className="text-expense-600" />
                        <Label  className="font-bold text-xl cursor-pointer">ExpenseFlow</Label>
                    </div>
                </Link>
            </SidebarHeader>
            <SidebarContent className="px-4 mt-4">
                {items.map((item, index) => {
                    return <SidebarGroup key={`group-item-${index}`}>
                        <SidebarGroupLabel  className="font-bold text-expense-600/80">{item.title}</SidebarGroupLabel>
                        <SidebarGroupContent className="flex gap-4">
                            <SidebarMenu>
                                {item.children.map((menu, index2) => {
                                    const url = `${item.url}${menu.url}`
                                    return (<SidebarMenuItem key={`item-${index}-${index2}`} className="my-1">
                                        <SidebarMenuButton asChild
                                            className={cn('"py-2 hover:bg-expense-500/10', pathname === url ? 'bg-expense-500/10' : '')}>
                                            <a href={url} className="flex gap-5">
                                                <menu.icon />
                                                <span>{menu.title}</span>
                                            </a>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>)
                                })}
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>
                })}

            </SidebarContent>
        </Sidebar>
    )
}
