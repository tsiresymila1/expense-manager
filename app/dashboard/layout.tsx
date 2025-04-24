import { Metadata } from "next";

import { ScrollArea } from "@/components/ui/scroll-area";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "./components/app-sidebar";
import AppBar from "./components/appbar";
import { AppBreadcrumb } from "./components/breadcrumb";

export const metadata: Metadata = {
    title: "ExpenseFlow",
    description: "Take control of your finances with ExpenseFlow – the all-in-one expense tracking solution that helps you save more, spend wisely, and achieve your financial goals.",
};

export default function AppLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
            <SidebarProvider>
                <AppSidebar />
                <main className="w-full flex flex-col gap-4 relative h-screen overflow-hidden">
                    <AppBar />
                    <ScrollArea className="w-full flex flex-col relative px-12 pt-6 overflow-auto">
                        <AppBreadcrumb />
                        {children}
                    </ScrollArea>
                </main>
            </SidebarProvider>
    );
}
