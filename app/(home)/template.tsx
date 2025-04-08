import NavBar from "./components/home-navbar";

export default function HomeTemplate({ children }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <NavBar />
            {children}
        </>
    );
}