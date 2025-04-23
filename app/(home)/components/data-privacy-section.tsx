
import { Button } from "@/components/ui/button";
import { LockKeyhole, Shield, Eye } from "lucide-react";
import Link from "next/link";

const DataPrivacySection = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 data-aos="fade-down" className="text-3xl md:text-4xl font-bold mb-6 hero-text-gradient inline-block">
              Your Data Privacy Is Our Priority
            </h2>
            <p data-aos="fade-down" className="text-lg mb-8 text-muted-foreground">
              ExpenseFlow is committed to transparency in how we handle your personal and financial data. We collect only the information needed to provide you with our service and never share your data with third parties without your explicit consent.
            </p>
            <div data-aos="fade-up" className="space-y-6">
              <div data-aos="fade-up" className="flex items-start">
                <div className="mr-4 bg-secondary rounded-full p-2">
                  <LockKeyhole className="h-6 w-6 text-expense-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Bank-Level Security</h3>
                  <p className="text-muted-foreground">Your financial data is protected with 256-bit encryption, the same security used by major banks and financial institutions.</p>
                </div>
              </div>
              
              <div data-aos="fade-up" data-aos-delay="300" className="flex items-start">
                <div className="mr-4 bg-secondary rounded-full p-2">
                  <Shield className="h-6 w-6 text-expense-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">No Data Selling</h3>
                  <p className="text-muted-foreground">Unlike many financial apps, we never sell your data to advertisers or third parties. Your information stays private.</p>
                </div>
              </div>
              
              <div data-aos="fade-up" data-aos-delay="600" className="flex items-start">
                <div className="mr-4 bg-secondary rounded-full p-2">
                  <Eye className="h-6 w-6 text-expense-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Full Transparency</h3>
                  <p className="text-muted-foreground">
                    {"We're clear about what data we collect and why. You can review and export your data at any time."}
                  </p>
                </div>
              </div>
            </div>
            <div  className="mt-10">
              <Link href="/privacy-policy">
                <Button data-aos="fade-right" variant="outline" size="lg" className="mr-4">
                  Read Privacy Policy
                </Button>
              </Link>
              <Link href="/terms">
                <Button  data-aos="fade-left" data-aos-delay="300" variant="ghost" size="lg">
                  Terms of Service
                </Button>
              </Link>
            </div>
          </div>
          
          <div data-aos="zoom-in" className="bg-card border rounded-xl p-8 shadow-sm">
            <h3 className="text-2xl font-semibold mb-6 text-center">Data We Collect</h3>
            <div className="space-y-6">
              <div data-aos="fade-up" className="bg-secondary rounded-lg p-4">
                <h4 className="font-medium mb-2">Account Information</h4>
                <p className="text-sm text-muted-foreground">
                  Basic details like your name and email address to create and manage your account.
                </p>
                <div className="mt-2 text-sm text-expense-600 font-medium">
                  Purpose: Account creation and authentication
                </div>
              </div>
              
              <div data-aos="fade-up" className="bg-secondary rounded-lg p-4">
                <h4 className="font-medium mb-2">Financial Data</h4>
                <p className="text-sm text-muted-foreground">
                  Expense records, budgets, and categories you create within the app.
                </p>
                <div className="mt-2 text-sm text-expense-600 font-medium">
                  Purpose: Providing expense tracking and budgeting features
                </div>
              </div>
              
              <div data-aos="fade-up" className="bg-secondary rounded-lg p-4">
                <h4 className="font-medium mb-2">Usage Information</h4>
                <p className="text-sm text-muted-foreground">
                  How you interact with our app to improve user experience.
                </p>
                <div className="mt-2 text-sm text-expense-600 font-medium">
                  Purpose: App improvement and troubleshooting
                </div>
              </div>
              
              <div data-aos="fade-up" className="bg-secondary rounded-lg p-4">
                <h4 className="font-medium mb-2">Device Information</h4>
                <p className="text-sm text-muted-foreground">
                  Basic details about your device for security and compatibility.
                </p>
                <div className="mt-2 text-sm text-expense-600 font-medium">
                  Purpose: Security and fraud prevention
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataPrivacySection;
