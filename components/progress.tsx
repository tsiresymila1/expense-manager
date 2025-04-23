"use client"
import { ProgressProvider } from "@bprogress/next/app";
export default function ProgressProviders({ children }: Readonly<{
    children: React.ReactNode
}>) {
    return <ProgressProvider
        height="3px"
        color="#1c9f9a"
        options={{ showSpinner: false }}
        shallowRouting
    >
        {children}
    </ProgressProvider>
}