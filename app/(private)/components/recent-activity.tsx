
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Label } from "@/components/ui/label"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table"
import { format } from "date-fns"

export async function RecentActivity({ }: { limit?: number }) {
    const activities: { id: string, action: string, createdAt: string, user: { name: string, email: string } }[] = []
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">#</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Action</TableHead>
                    <TableHead className="text-right">Date</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {activities.map((act) => (
                    <TableRow key={act.id}>
                        <TableCell className="font-medium">
                            <Avatar>
                                <AvatarFallback>{act.user.name?.slice(0, 2).toUpperCase()}</AvatarFallback>
                            </Avatar>
                        </TableCell>
                        <TableCell>
                            <div className="flex flex-col gap-2">
                                <Label className="font-bold">{act.user.name}</Label>
                                <Label className="text-xs">{act.user.email}</Label>
                            </div>
                        </TableCell>
                        <TableCell>{act.action}</TableCell>
                        <TableCell className="text-right">{format(act.createdAt, 'yyyy/MM/dd HH:ii:ss')}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}
