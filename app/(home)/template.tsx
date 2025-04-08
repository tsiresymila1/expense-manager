import NavBar from "./components/navbar";

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