import Footer from "./components/footer";


export default function HomeLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex flex-col min-h-screen">
            {children}
            <Footer />
        </div>
    );
}