import { ThemeProvider } from "@/components/theme-provider";
import { Toaster, } from "@/components/ui/sonner";
import type { Metadata } from "next";
import { ABeeZee, Geist, Geist_Mono, Montserrat } from "next/font/google";


import Aos from "@/components/aos";
import ProgressProviders from "@/components/progress";
import 'aos/dist/aos.css';
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
  title: "ExpenseFlow",
  description: "Take control of your finances with ExpenseFlow – the all-in-one expense tracking solution that helps you save more, spend wisely, and achieve your financial goals.",
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
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ProgressProviders>
            {children}
          </ProgressProviders>
          <Aos />
        </ThemeProvider>
        <Toaster position="bottom-center" richColors />
      </body>
    </html >
  );
}
