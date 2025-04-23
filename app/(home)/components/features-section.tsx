
import React from "react";
import { 
  BarChart3,
  PieChart, 
  LineChart, 
  BellRing, 
  CreditCard, 
  ShieldCheck, 
  Smartphone,
  RefreshCcw
} from "lucide-react";

const features = [
  {
    icon: <BarChart3 className="h-10 w-10 text-expense-500" />,
    title: "Expense Tracking",
    description: "Easily log and categorize all your expenses in one place, helping you understand where your money is going."
  },
  {
    icon: <PieChart className="h-10 w-10 text-expense-500" />,
    title: "Budget Planning",
    description: "Create personalized budgets for different categories and track your spending against them in real-time."
  },
  {
    icon: <LineChart className="h-10 w-10 text-expense-500" />,
    title: "Financial Reports",
    description: "Get detailed insights with customizable reports and charts that help visualize your spending patterns."
  },
  {
    icon: <BellRing className="h-10 w-10 text-expense-500" />,
    title: "Smart Alerts",
    description: "Receive notifications about unusual spending, approaching budget limits, or recurring bill payments."
  },
  {
    icon: <CreditCard className="h-10 w-10 text-expense-500" />,
    title: "Bill Management",
    description: "Never miss a payment again with bill tracking and reminders for upcoming due dates."
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-expense-500" />,
    title: "Secure & Private",
    description: "Bank-level security keeps your financial data protected with encrypted storage and secure authentication."
  },
  {
    icon: <Smartphone className="h-10 w-10 text-expense-500" />,
    title: "Mobile Ready",
    description: "Access your finances on the go with our fully responsive mobile application available for all devices."
  },
  {
    icon: <RefreshCcw className="h-10 w-10 text-expense-500" />,
    title: "Auto Syncing",
    description: "Connect your bank accounts for automatic transaction imports and categorization."
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 px-4">
      <div className="container mx-auto">
        <div  className="text-center mb-16">
          <h2 data-aos="fade-up" className="text-3xl md:text-4xl font-bold mb-4 hero-text-gradient inline-block">
            Powerful Features for Your Financial Journey
          </h2>
          <p data-aos="zoom-in" className="text-lg text-muted-foreground max-w-2xl mx-auto">
            ExpenseFlow comes packed with everything you need to take control of your finances
            and make informed decisions about your money.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              data-aos="zoom-in"
              className="bg-card border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
