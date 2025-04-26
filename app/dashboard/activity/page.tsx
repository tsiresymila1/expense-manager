
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import ActivityLogTable from "./components/activity-datatable";


export default function ActivityLogPage({ searchParams }: { searchParams: Promise<{ page?: string }> }) {
    return <div className="space-y-6 pb-12">
        <div data-aos="fade-down" className="flex justify-between items-center">
            <div>
                <h1 className="text-2xl font-bold tracking-tight">Activities</h1>
                <p className="text-muted-foreground">Keep track of your actions and updates effortlessly.</p>
            </div>
        </div>
        <Card data-aos="fade-up" className="bg-transparent rounded-lg border border-expense-100/80 dark:border-expense-900/80 shadow-sm">
            <CardHeader>
                <CardTitle data-aos="fade-right" className="text-xl text-expense-500">Your activities</CardTitle>
                <CardDescription data-aos="zoom-in">
                    A detailed log of all your recent activities and changes.
                </CardDescription>
            </CardHeader>
            <CardContent className="grid w-full grid-cols-1">
                <ActivityLogTable searchParams={searchParams} />
            </CardContent>
        </Card>
    </div>
}