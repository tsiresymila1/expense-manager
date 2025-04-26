import { getUser } from "@/app/actions/get-user";
import { Label } from "@/components/ui/label";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import prisma from "@/lib/prisma";
import CatDeleteButton from "./delete-button";
import CatEditButton from "./edit-button";


export default async function CategoryTable({ searchParams }: { searchParams: Promise<{ page?: string }> }) {
    const { page } = await searchParams
    const user = await getUser()
    const items = await prisma.category.findMany({
        where: {
            userId: user?.id
        },
        include: {
            user: true
        },
        take: 10,
        skip: parseInt(page ?? '0') * 10
    })
    return <ScrollArea>
        <Table className="min-w-[500px] w-full" data-aos="fade-up">
            <TableHeader data-aos="fade-up">
                <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Value</TableHead>
                    <TableHead className="hidden md:table-cell">Description</TableHead>
                    <TableHead className="w-24">Actions</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {items.map((category) => (
                    <TableRow data-aos="fade-up" key={category.id} className="h-14">
                        <TableCell className="font-medium">{category.name}</TableCell>
                        <TableCell>{category.value}</TableCell>
                        <TableCell className="hidden md:table-cell">{category.description}</TableCell>
                        <TableCell>
                            <div className="flex items-center gap-2">
                                <CatEditButton category={{
                                    id: category.id,
                                    name: category.name,
                                    value: category.value,
                                    desc: category.description
                                }} />
                                <CatDeleteButton
                                    id={category.id}
                                />
                            </div>
                        </TableCell>
                    </TableRow>
                ))}
                {items.length == 0 ? <TableRow>
                    <TableCell colSpan={4}>
                        <div className="flex justify-center py-3 border-b">
                            <Label className="text-center items-center text-expense-500 font-bold text-lg">No element</Label>
                        </div>
                    </TableCell>
                </TableRow> : null}
            </TableBody>
        </Table>
        <ScrollBar orientation="horizontal" />
    </ScrollArea>

}