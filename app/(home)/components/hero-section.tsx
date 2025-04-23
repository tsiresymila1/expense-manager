
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, PieChart, Settings, TrendingUp, Wallet } from "lucide-react";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 px-4 min-h-screen flex flex-col justify-center">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="order-1 lg:order-1">
            <h1 data-aos="fade-down" className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight hero-text-gradient">
              Smart Money Management Starts Here
            </h1>
            <p data-aos="zoom-in" className="text-lg md:text-xl mb-8 text-muted-foreground max-w-xl">
              Take control of your finances with ExpenseFlow – the all-in-one expense tracking solution that helps you save more, spend wisely, and achieve your financial goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/dashboard">
                <Button size="lg" data-aos="fade-left" className="text-base bg-home text-white hover:bg-home/80">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Button data-aos="fade-left" data-aos-delay="300" variant="outline" size="lg" className="text-base">
                Learn More
              </Button>
            </div>
            <div className="mt-10 flex flex-wrap gap-6">
              <div data-aos="fade-up" className="flex items-center">
                <div className="bg-secondary rounded-full p-2 mr-2">
                  <Settings className="h-4 w-4 text-expense-500" />
                </div>
                <span className="text-sm font-medium">Easy Setup</span>
              </div>
              <div data-aos="fade-up" data-aos-delay="300" className="flex items-center">
                <div className="bg-secondary rounded-full p-2 mr-2">
                  <PieChart className="h-4 w-4 text-expense-500" />
                </div>
                <span className="text-sm font-medium">Smart Analytics</span>
              </div>
              <div data-aos="fade-up" data-aos-delay="600" className="flex items-center">
                <div className="bg-secondary rounded-full p-2 mr-2">
                  <TrendingUp className="h-4 w-4 text-expense-500" />
                </div>
                <span className="text-sm font-medium">Budget Planning</span>
              </div>
            </div>
          </div>
          <div className="order-2 lg:order-2 flex justify-center">
            <div className=" bg-radial from-expense-400 to-transparent rounded-full w-[500px] h-[500px] absolute -top-10 -left-10 opacity-20"></div>
            <div data-aos="fade-right" className="relative z-10 bg-card border shadow-lg rounded-xl p-4  max-w-md w-full animate-float">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <BarChart3 className="h-6 w-6 text-expense-500 mr-2" />
                  <h2 className="font-semibold text-lg">Your Expenses</h2>
                </div>
                <Wallet className="h-5 w-5 text-expense-400" />
              </div>
              <div className="space-y-6">
                <div data-aos="zoom-in">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-medium">Monthly Budget</span>
                    <span>$3,200 / $4,000</span>
                  </div>
                  <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="bg-expense-500 h-full rounded-full" style={{ width: "80%" }}></div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div data-aos="fade-up" className="flex items-center justify-between p-3 bg-secondary rounded-lg">
                    <div className="flex items-center">
                      <div className="rounded-full bg-expense-100 p-2">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M4 19L12 12L20 19" stroke="#0c6866" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M4 12L12 5L20 12" stroke="#0c6866" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <span className="ml-3 font-medium">Food & Dining</span>
                    </div>
                    <span className="font-medium text-expense-600">$856</span>
                  </div>

                  <div data-aos="fade-up" data-aos-delay="300" className="flex items-center justify-between p-3 bg-secondary rounded-lg">
                    <div className="flex items-center">
                      <div className="rounded-full bg-expense-100 p-2">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 2V4" stroke="#0c6866" strokeWidth="2" strokeLinecap="round" />
                          <path d="M12 16V20" stroke="#0c6866" strokeWidth="2" strokeLinecap="round" />
                          <path d="M4 12H2" stroke="#0c6866" strokeWidth="2" strokeLinecap="round" />
                          <path d="M22 12H20" stroke="#0c6866" strokeWidth="2" strokeLinecap="round" />
                          <circle cx="12" cy="12" r="8" stroke="#0c6866" strokeWidth="2" />
                          <circle cx="12" cy="12" r="3" stroke="#0c6866" strokeWidth="2" />
                        </svg>
                      </div>
                      <span className="ml-3 font-medium">Housing</span>
                    </div>
                    <span className="font-medium text-expense-600">$1,450</span>
                  </div>

                  <div data-aos="fade-up" data-aos-delay="600" className="flex items-center justify-between p-3 bg-secondary rounded-lg">
                    <div className="flex items-center">
                      <div className="rounded-full bg-expense-100 p-2">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5 17H19M5 12H19M5 7H19" stroke="#0c6866" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <span className="ml-3 font-medium">Transportation</span>
                    </div>
                    <span className="font-medium text-expense-600">$320</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
