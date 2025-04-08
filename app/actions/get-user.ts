import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export async function getUser() {
    const data = await auth.api.getSession({
        headers: await headers(),
    })
    return data?.user;
}