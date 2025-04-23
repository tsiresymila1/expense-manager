
import { ToggleThemeButton } from "@/components/toggle-theme";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { BarChart3, Menu } from "lucide-react";
import Link from "next/link";
import { getUser } from "../../actions/get-user";
import DashboardButton from "./dashboard-button";
import NavItem from "./nav-item";

const links = [
  {
    title: 'Home',
    url: '/',
  },
  {
    title: 'Features',
    url: '/features',
  },
  {
    title: 'Pricing',
    url: '/pricing',
  },
  {
    title: 'Privacy Policy',
    url: '/privacy-policy',
  },
  {
    title: 'Terms of Service',
    url: '/terms',
  }
]

export default async function NavBar() {
  const user = await getUser()
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link data-aos="zoom-in" href="/" className="flex items-center gap-2">
          <BarChart3 className="h-6 w-6 text-expense-500" />
          <span className="font-bold text-xl">ExpenseFlow</span>
        </Link>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent>
            <div className="flex flex-col gap-4 pt-10">
              {links.map((link) => (
                <NavItem  key={link.title} title={link.title} url={link.url} />
              ))}
              <div className="flex flex-col gap-2 mt-4 items-center">
                <ToggleThemeButton />
                {user ? <DashboardButton /> : <>
                  <Link href="/auth/login">
                    <Button variant="outline">Log In</Button>
                  </Link>
                  <Link href="/auth/register">
                    <Button className="text-white bg-expense-600 hover:bg-expense-800">Sign Up</Button>
                  </Link>
                </>}
              </div>
            </div>
          </SheetContent>
        </Sheet>

        {/* Desktop Navigation */}
        <nav data-aos="fade-left" className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <NavItem key={link.title} title={link.title} url={link.url} />
          ))}
        </nav>
        <div data-aos="zoom-in" className="hidden md:flex items-center gap-2">
          <ToggleThemeButton />
          {user ? <DashboardButton /> : <>
            <Link href="/auth/login">
              <Button variant="outline">Log In</Button>
            </Link>
            <Link href="/auth/register">
            <Button className="text-white bg-expense-600 hover:bg-expense-800">Sign Up</Button>
            </Link>
          </>}
        </div>
      </div>
    </header>
  );
};

