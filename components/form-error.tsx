export default function FormError({ children }: { children: React.ReactNode }) {
    return <p className="text-red-500 text-sm text-center">{children}</p>
}