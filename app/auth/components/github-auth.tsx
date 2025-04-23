"use client"
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { Loader } from "lucide-react";
import Image from "next/image";
import { redirect } from "next/navigation";
import { useState } from "react";
import github from '@/assets/logos/github.png'

export default function GithubAuthButton() {
    const [loading, setLoading] = useState<boolean>(false)
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
                        provider: "github",
                    })
                    if (res.data?.url) {
                        redirect(res.data.url)
                    } else {
                        throw new Error("Something went wrong");
                    }
                } finally {
                    setLoading(false)
                }
            }}
        >
            {loading ? <Loader className="animate-spin" />: <Image width="20" height="20" src={github} alt="google" />} Continue with Github
        </Button>
    </div>
}