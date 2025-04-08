import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import { Geist, Geist_Mono, ABeeZee, Montserrat } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const abeeZee = ABeeZee({
  variable: "--font-abee-zee",
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"], 
  display: "swap", 
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Expense Manager",
  description: "Manage your expense",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="dark"
      style={{ colorScheme: "dark" }}
      suppressHydrationWarning
      data-lt-installed="true"
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${abeeZee.variable} ${montserrat.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>{children}</ThemeProvider>
      </body>
    </html>
  );
}
