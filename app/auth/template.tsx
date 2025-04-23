import { redirect } from "next/navigation";
import { getUser } from "../actions/get-user";

export default async function AuthTemplate({ children }: Readonly<{
    children: React.ReactNode;
}>) {
    const user = await getUser()
    if (user) {
        return redirect('/dashboard')
    }
    return <>{children}</>
}