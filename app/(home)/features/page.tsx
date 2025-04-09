
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, BarChart3, CheckCircle, CreditCard, FileText, PieChart } from "lucide-react";
import Link from "next/link";

export default function FeaturesPage() {
    const featureCategories = [
        {
            title: "Expense Tracking",
            description: "Effortlessly track every penny with our intuitive expense tracking tools.",
            icon: <CreditCard className="h-8 w-8 text-expense-500" />,
            features: [
                "Automatic categorization of expenses",
                "Receipt scanning and storage",
                "Real-time transaction monitoring",
                "Custom tags and notes for expenses",
                "Multiple currency support"
            ]
        },
        {
            title: "Budget Management",
            description: "Set, track, and achieve your financial goals with smart budgeting tools.",
            icon: <BarChart3 className="h-8 w-8 text-expense-500" />,
            features: [
                "Customizable budget categories",
                "Monthly, weekly, and daily budget views",
                "Budget vs. actual spending analysis",
                "Rollover options for unused budget",
                "Budget alerts and notifications"
            ]
        },
        {
            title: "Financial Reports",
            description: "Gain insights into your spending habits with detailed financial reports.",
            icon: <PieChart className="h-8 w-8 text-expense-500" />,
            features: [
                "Visual spending breakdowns",
                "Monthly and yearly spending comparisons",
                "Category-specific trend analysis",
                "Exportable reports in multiple formats",
                "Custom date range reporting"
            ]
        },
        {
            title: "Financial Documentation",
            description: "Keep all your financial documents organized and accessible.",
            icon: <FileText className="h-8 w-8 text-expense-500" />,
            features: [
                "Secure document storage",
                "Bill payment reminders",
                "Tax preparation assistance",
                "Financial goal tracking",
                "Subscription management"
            ]
        }
    ];

    return (
        <main className="flex-grow">
            {/* Hero Section */}
            <section className="bg-gradient-to-b from-background to-muted py-20 px-4">
                <div className="container mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        Powerful Features for Complete <br/><span className="hero-text-gradient">Financial Control</span>
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                        Discover all the tools and features that make ExpenseFlow the most comprehensive solution for managing your personal and business finances.
                    </p>
                    <Link href="/pricing">
                        <Button size="lg" className="bg-expense-500 hover:bg-expense-600 text-white">
                            View Pricing
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </Link>
                </div>
            </section>

            {/* Features Details */}
            <section className="py-16 px-4">
                <div className="container mx-auto">
                    {featureCategories.map((category, index) => (
                        <div key={index} className="mb-20">
                            <div className="flex flex-col md:flex-row gap-4 items-center mb-8">
                                {category.icon}
                                <div>
                                    <h2 className="text-3xl font-bold">{category.title}</h2>
                                    <p className="text-muted-foreground text-lg">{category.description}</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {category.features.map((feature, featureIndex) => (
                                    <Card key={featureIndex} className="border border-border">
                                        <CardContent className="py-4">
                                            <div className="flex items-start gap-3">
                                                <CheckCircle className="h-5 w-5 text-expense-500 mt-1" />
                                                <p className="text-foreground">{feature}</p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-muted py-12 px-4">
                <div className="container mx-auto text-center">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">
                        Ready to experience all these features?
                    </h2>
                    <p className="text-lg mb-8 max-w-2xl mx-auto">
                        Start your free trial today and discover how ExpenseFlow can transform your financial management.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/dashboard">
                            <Button size="lg" className="bg-expense-500 hover:bg-expense-600 text-white">
                                Start Free Trial
                            </Button>
                        </Link>
                        <Link href="/pricing">
                            <Button variant="outline" size="lg">
                                Compare Plans
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
};

