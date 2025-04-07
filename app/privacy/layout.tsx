import { ToggleThemeButton } from "@/components/toggle-theme";
import { CardDescription, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";


export default function CGULayout({ children }: Readonly<{
    children: React.ReactNode;
}>) {
    return <div className="flex flex-col items-center justify-center max-h-screen h-screen overflow-hidden max-sm:dark:bg-slate-950 dark:bg-slate-900 bg-slate-50 ">
        <div className="flex  bg-muted justify-between items-center px-8 py-3 w-full absolute top-0 z-10">
        <div>
              <CardTitle className="text-sm font-bold">Expense Manager</CardTitle>
              <CardDescription className="">Privacy Policy</CardDescription>
            </div>
            <ToggleThemeButton />
        </div>
        <ScrollArea className="flex flex-col items-center justify-center flex-1 w-full h-full mt-[4rem]">
            {children}
        </ScrollArea>
    </div>

}