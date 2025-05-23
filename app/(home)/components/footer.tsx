
import { BarChart3, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-card/60 border-t px-4 py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <BarChart3 className="h-6 w-6 text-expense-500" />
              <span className="font-bold text-xl">ExpenseFlow</span>
            </Link>
            <p className="text-muted-foreground mb-4">
              Simplify your finances with intelligent expense tracking and budgeting tools.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-expense-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-expense-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-expense-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-expense-500 transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Product</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/features" className="text-muted-foreground hover:text-expense-500 transition-colors">Features</Link>
              </li>
              <li>
                <Link href="/pricing" className="text-muted-foreground hover:text-expense-500 transition-colors">Pricing</Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-expense-500 transition-colors">Mobile App</Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-expense-500 transition-colors">Integrations</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-expense-500 transition-colors">Help Center</Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-expense-500 transition-colors">Blog</Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-expense-500 transition-colors">Community</Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-expense-500 transition-colors">Roadmap</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-expense-500 transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-expense-500 transition-colors">Careers</Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-muted-foreground hover:text-expense-500 transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-expense-500 transition-colors">Terms of Service</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} ExpenseFlow. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
