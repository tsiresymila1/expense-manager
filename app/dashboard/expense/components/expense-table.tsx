import { getUser } from "@/app/actions/get-user";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import prisma from "@/lib/prisma";
import { ParamsProps } from "@/lib/utils";
import { formatDate } from "date-fns";
import { CreditCard, Edit, User } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";
import { Pagination } from "../../components/pagination";
import ExpenseDeleteButton from "./delete-button";

export default async function ExpenseTable({ params }: ParamsProps<{ page?: string, query?: string }>) {
    const { page, query } = await params!
    console.log(`query::'${query}'`)
    const user = await getUser()
    const [items, total] = await prisma.$transaction([
        prisma.expense.findMany({
            where: {
                user: {
                    id: user?.id
                },
                OR: query && query?.length > 0 ? [
                    {
                        description: {
                            contains: query,
                            mode: 'insensitive',
                        },
                    },
                    {
                        amount: {
                            equals: isNaN(Number(query)) ? undefined : Number(query),
                        },
                    },
                    {
                        category: {
                            name: {
                                contains: query,
                                mode: 'insensitive',
                            },
                        },
                    },
                ] : undefined,
            },
            orderBy: { createdAt: 'asc' },
            take: 10,
            include: {
                user: true,
                category: true,
            },
            skip: parseInt(page ?? '0') * 10
        }),
        prisma.expense.count({
            where: { id: user?.id },
        }),
    ]);

    return <div>
        <ScrollArea>
            <Table className="min-w-[800px] w-full" data-aos="fade-up">
                <TableHeader data-aos="fade-up">
                    <TableRow>
                        <TableHead>User</TableHead>
                        <TableHead className="text-center">Amount</TableHead>
                        <TableHead>Description</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Category</TableHead>
                        <TableHead className="w-24 px-6">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {items.map((expense) => (
                        <TableRow data-aos="fade-up" key={expense.id} className="h-16 hover:bg-muted cursor-pointer">
                            <TableCell>
                                <div className="flex fle-row gap-4 items-center">
                                    <Avatar>
                                        <AvatarFallback><User className="text-expense-500" /></AvatarFallback>
                                        <AvatarImage src={expense.user.image ?? ''} />
                                    </Avatar>
                                    <div className="flex flex-col gap-2">
                                        <Label>{expense.user.name}</Label>
                                        <Label>{expense.user.email}</Label>
                                    </div>
                                </div>
                            </TableCell>
                            <TableCell className="text-center font-medium">
                                ${expense.amount}
                            </TableCell>
                            <TableCell>{expense.description}</TableCell>
                            <TableCell>{formatDate(expense.date, 'dd/MM/y')}</TableCell>
                            <TableCell>
                                <div className="flex items-center gap-2">
                                    <CreditCard className="h-4 w-4 text-muted-foreground" />
                                    {expense.category.name}
                                </div>
                            </TableCell>
                            <TableCell className="text-right">
                                <div className="flex justify-end gap-2">
                                    <Link href={`/dashboard/expense/${expense.id}/edit`}>
                                        <Button variant="ghost" size="icon" className="h-8 w-8">
                                            <Edit className="h-4 w-4 text-expense-500" />
                                            <span className="sr-only">Edit</span>
                                        </Button></Link>

                                    <ExpenseDeleteButton id={expense.id} />
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                    {items.length == 0 ? <TableRow>
                        <TableCell colSpan={6}>
                            <div className="flex justify-center py-3 border-b">
                                <Label className="text-center items-center text-expense-500 font-bold text-lg">No element</Label>
                            </div>
                        </TableCell>
                    </TableRow> : null}
                </TableBody>
            </Table>
            <ScrollBar orientation="horizontal" />
        </ScrollArea>
        <Suspense>
            <Pagination totalPages={Math.ceil(total / 10)} />
        </Suspense>
    </div>

}