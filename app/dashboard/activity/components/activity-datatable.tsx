import { getUser } from "@/app/actions/get-user";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Label } from "@/components/ui/label";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import prisma from "@/lib/prisma";
import { formatDate } from "date-fns";
import { User } from "lucide-react";


export default async function ActivityLogTable({ searchParams }: { searchParams: Promise<{ page?: string }> }) {
    const { page } = await searchParams
    const user = await getUser()
    const items = await prisma.activityLog.findMany({
        where: {
            userId: user?.id
        },
        include: {
            user: true
        },
        orderBy: {
            createdAt: "desc"
        },
        take: 10,
        skip: parseInt(page ?? '0') * 10
    })
    return <ScrollArea>
        <Table className="min-w-[500px] w-full" data-aos="fade-up">
            <TableHeader data-aos="fade-up">
                <TableRow>
                    <TableHead>User</TableHead>
                    <TableHead>Action</TableHead>
                    <TableHead className="w-24">Date</TableHead>
                    <TableHead className="w-24">Infos</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {items.map((activity) => (
                    <TableRow data-aos="fade-up" key={activity.id} className="h-14">
                        <TableCell>
                            <div className="flex fle-row gap-4 items-center">
                                <Avatar>
                                    <AvatarFallback><User className="text-expense-500" /></AvatarFallback>
                                    <AvatarImage src={activity.user.image ?? ''} />
                                </Avatar>
                                <div className="flex flex-col gap-2">
                                    <Label>{activity.user.name}</Label>
                                    <Label>{activity.user.email}</Label>
                                </div>
                            </div>
                        </TableCell>
                        <TableCell className="font-medium">{activity.action}</TableCell>
                        <TableCell className="hidden md:table-cell">{formatDate(activity.createdAt, 'dd-MM-y H:ii:s')}</TableCell>
                        <TableCell className="hidden md:table-cell">{activity.ipAddress} - {activity.userAgent}</TableCell>
                    </TableRow>
                ))}
                {items.length == 0 ? <TableRow>
                    <TableCell colSpan={4}>
                        <div className="flex justify-center py-3 border-b">
                            <Label className="text-center items-center text-expense-500 font-bold text-lg">No activity</Label>
                        </div>
                    </TableCell>
                </TableRow> : null}
            </TableBody>
        </Table>
        <ScrollBar orientation="horizontal" />
    </ScrollArea>

}