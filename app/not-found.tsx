
import { Button } from "@/components/ui/button";
import { HomeIcon } from "lucide-react";
import Link from "next/link";
import { getUser } from "./actions/get-user";

export default async function NotFoundPage() {
    const user = await getUser()
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-background px-4">
            <div className="text-center justify-center flex flex-col">
                <h1 className="text-7xl font-bold text-expense-500 mb-4">404</h1>
                <p className="text-2xl font-semibold mb-6">Page Not Found</p>
                <p className="text-muted-foreground max-w-md mx-auto mb-8">
                    {"Sorry, the page you are looking for doesn't exist or has been moved."}
                </p>
                <div className="flex justify-center">
                    <Link href={user ? "/dashboard" : "/"}>
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