import Footer from "./components/footer";
import NavBar from "./components/navbar";


export default function HomeLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex flex-col min-h-screen">
            <NavBar />
            {children}
            <Footer />
        </div>
    );
}