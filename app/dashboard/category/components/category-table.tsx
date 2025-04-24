import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import prisma from "@/lib/prisma";
import { Edit, Trash } from "lucide-react";


export default async function CategoryTable({ searchParams }: { searchParams: Promise<{ page?: number }> }) {
    console.log("searchParams::", await searchParams)
    const data = await prisma.category.findMany({
        include: {
            user: true
        }
    })
    return <Table data-aos="fade-up">
        <TableHeader data-aos="fade-up">
            <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Value</TableHead>
                <TableHead className="hidden md:table-cell">Description</TableHead>
                <TableHead className="w-24">Actions</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            {data.map((category) => (
                <TableRow data-aos="fade-up" key={category.id} className="h-14">
                    <TableCell className="font-medium">{category.name}</TableCell>
                    <TableCell>{category.value}</TableCell>
                    <TableCell className="hidden md:table-cell">{category.description}</TableCell>
                    <TableCell>
                        <div className="flex items-center gap-2">
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                                <Edit className="h-4 w-4 text-expense-500" />
                                <span className="sr-only">Edit</span>
                            </Button>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8 text-destructive"
                            >
                                <Trash className="h-4 w-4" />
                                <span className="sr-only">Delete</span>
                            </Button>
                        </div>
                    </TableCell>
                </TableRow>
            ))}
        </TableBody>
    </Table>
}