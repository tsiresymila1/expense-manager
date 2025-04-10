import { Metadata } from "next";

import { ScrollArea } from "@/components/ui/scroll-area";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "./components/app-sidebar";
import AppBar from "./components/appbar";
import { AppBreadcrumb } from "./components/breadcrumb";
import ProgressProviders from "@/components/progress";

export const metadata: Metadata = {
    title: "Tsiresy Milà - Software Engineer",
    description:
        "Looking for a Software Engineer proficient in NestJs, AdonisJs, FastAPI, Nestipy, NodeJs, React, NextJs, Redux, React Native, Flutter, and Laravel? I'm your match. With a deep passion for technology, I bring reliability and independence to create outstanding solutions. My adaptability and organization skills shine in any scenario, and ongoing learning keeps me at the forefront of web and software tech. Whether in a team or solo, I'm committed to achieving goals effectively. Let's take your tech projects to the next level!",
};

export default function AppLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ProgressProviders>
            <SidebarProvider>
                <AppSidebar />
                <main className="w-full flex flex-col gap-4 relative h-screen overflow-hidden">
                    <AppBar />
                    <ScrollArea className="w-full flex flex-col relative px-12 pt-6  overflow-auto">
                        <AppBreadcrumb />
                        {children}
                    </ScrollArea>
                </main>
            </SidebarProvider>
        </ProgressProviders>
    );
}
