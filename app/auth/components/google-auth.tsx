"use client"
import { addActivity } from "@/app/actions/activity";
import google from '@/assets/logos/google.png';
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { Loader } from "lucide-react";
import { useAction } from "next-safe-action/hooks";
import Image from "next/image";
import { redirect } from "next/navigation";
import { useState } from "react";

export default function GoogleAuthButton() {
    const [loading, setLoading] = useState<boolean>(false)
    const { executeAsync } = useAction(addActivity)
    return <div className="w-full flex items-center justify-between">
        <Button
            variant="outline"
            type="button"
            disabled={loading}
            className="w-full gap-2 border border-expense-500"
            onClick={async () => {
                setLoading(true)
                try {
                    const res = await authClient.signIn.social({
                        provider: "google",
                    })
                    if (res.data?.url) {
                        await executeAsync({
                            action: "User logger via google."
                        })
                        redirect(res.data.url);
                    } else {
                        throw new Error("Something went wrong");
                    }
                } finally {
                    setLoading(false)
                }
            }}
        >
            {loading ? <Loader className="animate-spin" /> : <Image width="20" height="20" src={google} alt="google" />}Continue with Google
        </Button>
    </div>
}