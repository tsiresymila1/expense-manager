
'use client'
import { Button } from "@/components/ui/button";
import { HomeIcon } from "lucide-react";
import Link from "next/link";

export default function ErrorPage({
    error,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-background px-4">
            <div className="text-center justify-center flex flex-col">
                <h1 data-aos="fade-down" className="text-7xl font-bold text-expense-500 mb-4">500</h1>
                <p data-aos="zoom-in" className="text-2xl font-semibold mb-6">Something went wrong!</p>
                <p data-aos="zoom-in" className="text-muted-foreground max-w-md mx-auto mb-8">
                    {error?.message}
                </p>
                <div data-aos="fade-up" className="flex justify-center">
                    <Link href="/dashboard">
                        <Button className="flex items-center gap-2 bg-expense-500 hover:bg-expense-800 text-white">
                            <HomeIcon size={16} />
                            Return to Home
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};