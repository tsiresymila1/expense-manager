import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";

export default function GoogleAuthButton() {
    return <div className="w-full flex items-center justify-between">
        <Button
            variant="outline"
            type="button"
            className="w-full gap-2 border border-gray-300"
            onClick={async () => {
                const res = await authClient.signIn.social({
                    provider: "google",
                })
                if (res.data?.url) {
                    redirect(res.data.url)
                } else {
                    throw new Error("Something went wrong");
                }
            }}
        >
            Sign in with Google
        </Button>
    </div>
}