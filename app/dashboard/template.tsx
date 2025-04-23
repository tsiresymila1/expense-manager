import { redirect } from "next/navigation";
import { getUser } from "../actions/get-user";

export default async function DashboardTemplate({ children }: Readonly<{
    children: React.ReactNode;
}>) {
    const user = await getUser()
    if (!user) {
        return redirect('/auth/login')
    }
    return <>{children}</>
}