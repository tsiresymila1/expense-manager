"use client"

import { Button } from "@/components/ui/button"
import { Edit } from "lucide-react"
import CategoryForm, { MinCategory } from "./category-form"

export default function CatEditButton({ category }: { category: MinCategory }) {
    return <CategoryForm category={category}>
        <Button variant="ghost" size="icon" className="h-8 w-8">
            <Edit className="h-4 w-4 text-expense-500" />
            <span className="sr-only">Edit</span>
        </Button>
    </CategoryForm>
}