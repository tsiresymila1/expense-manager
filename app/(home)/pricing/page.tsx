"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { CheckCircle, X } from "lucide-react";
import { useState } from "react";

export default function PricingPage() {
    const [annualBilling, setAnnualBilling] = useState(true);

    const plans = [
        {
            name: "Free",
            description: "Basic tracking for individuals",
            price: {
                monthly: 0,
                annual: 0
            },
            features: [
                { name: "Up to 50 monthly transactions", included: true },
                { name: "Basic expense categories", included: true },
                { name: "Manual expense entry", included: true },
                { name: "Monthly summary report", included: true },
                { name: "Single device access", included: true },
                { name: "Receipt scanning", included: false },
                { name: "Budget planning tools", included: false },
                { name: "Data export", included: false },
                { name: "Email support", included: false }
            ],
            ctaText: "Get Started",
            popular: false
        },
        {
            name: "Premium",
            description: "Complete solution for individuals",
            price: {
                monthly: 9.99,
                annual: 7.99
            },
            features: [
                { name: "Unlimited transactions", included: true },
                { name: "Custom expense categories", included: true },
                { name: "Receipt scanning & storage", included: true },
                { name: "Advanced reporting", included: true },
                { name: "Multi-device access", included: true },
                { name: "Budget planning tools", included: true },
                { name: "Data export (PDF, CSV)", included: true },
                { name: "Priority email support", included: true },
                // { name: "Bank account sync", included: false }
            ],
            ctaText: "Start Free Trial",
            popular: true
        },
        {
            name: "Business",
            description: "Powerful tools for businesses",
            price: {
                monthly: 19.99,
                annual: 15.99
            },
            features: [
                { name: "Everything in Premium", included: true },
                { name: "Multiple users", included: true },
                { name: "Role-based permissions", included: true },
                // { name: "Bank account sync", included: true },
                { name: "Vendor management", included: true },
                { name: "Invoice tracking", included: true },
                { name: "Tax preparation reports", included: true },
                { name: "API access", included: true },
                { name: "Dedicated account manager", included: true }
            ],
            ctaText: "Contact Sales",
            popular: false
        }
    ];

    return (

        <main className="flex-grow">
            {/* Hero Section */}
            <section className="bg-gradient-to-b from-background to-muted py-20 px-4">
                <div className="container mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        Simple, Transparent <span className="hero-text-gradient">Pricing</span>
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
                        {"Choose the plan that's right for you. All plans include a 14-day free trial."}
                    </p>

                    {/* Billing Toggle */}
                    <div className="flex items-center justify-center gap-3 mb-10">
                        <span className={`text-sm ${!annualBilling ? 'font-medium text-foreground' : 'text-muted-foreground'}`}>
                            Monthly
                        </span>
                        <Switch
                            checked={annualBilling}
                            onCheckedChange={setAnnualBilling}
                            className="data-[state=checked]:bg-expense-500"
                        />
                        <div className="flex items-center gap-2">
                            <span className={`text-sm ${annualBilling ? 'font-medium text-foreground' : 'text-muted-foreground'}`}>
                                Annual
                            </span>
                            <span className="bg-expense-100 text-expense-800 text-xs px-2 py-1 rounded-full font-medium">
                                Save 20%
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Plans */}
            <section className="py-12 px-4 -mt-8">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {plans.map((plan, index) => (
                            <Card key={index} className={`border ${plan.popular ? 'border-expense-500 shadow-lg relative' : 'border-border'}`}>
                                {plan.popular && (
                                    <div className="absolute top-0 right-0 bg-expense-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                                        Most Popular
                                    </div>
                                )}
                                <CardHeader>
                                    <CardTitle>{plan.name}</CardTitle>
                                    <CardDescription>{plan.description}</CardDescription>
                                    <div className="mt-4">
                                        <span className="text-4xl font-bold">
                                            ${annualBilling ? plan.price.annual : plan.price.monthly}
                                        </span>
                                        <span className="text-muted-foreground ml-1">/month</span>

                                        {annualBilling && plan.price.annual > 0 && (
                                            <p className="text-sm text-muted-foreground mt-1">
                                                ${(plan.price.annual * 12).toFixed(2)} billed annually
                                            </p>
                                        )}
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-3">
                                        {plan.features.map((feature, featureIndex) => (
                                            <li key={featureIndex} className="flex items-start gap-3">
                                                {feature.included ? (
                                                    <CheckCircle className="h-5 w-5 text-expense-500 mt-0.5" />
                                                ) : (
                                                    <X className="h-5 w-5 mt-0.5 text-destructive" />
                                                )}
                                                <span className={feature.included ? 'text-foreground' : 'text-muted-foreground'}>
                                                    {feature.name}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                                <CardFooter>
                                    <Button
                                        className={`w-full ${plan.popular ? 'bg-expense-500 hover:bg-expense-600 text-white' : ''}`}
                                        variant={plan.popular ? 'default' : 'outline'}
                                    >
                                        {plan.ctaText}
                                    </Button>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 px-4 bg-muted">
                <div className="container mx-auto max-w-3xl">
                    <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>

                    <div className="space-y-6">
                        <div>
                            <h3 className="text-xl font-semibold mb-2">Can I change plans later?</h3>
                            <p className="text-muted-foreground">Yes! You can upgrade or downgrade your plan at any time. If you upgrade, the new rate will be prorated for the remainder of your billing cycle.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-2">Is there a free trial?</h3>
                            <p className="text-muted-foreground">Yes, all paid plans include a 14-day free trial. No credit card required to start your trial.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-2">What payment methods do you accept?</h3>
                            <p className="text-muted-foreground">We accept all major credit cards, debit cards, and PayPal.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-2">Can I cancel my subscription?</h3>
                            <p className="text-muted-foreground">
                                {"Yes, you can cancel your subscription at any time. When you cancel, you'll still have access to your paid features until the end of your current billing period."}
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-2">Are there any hidden fees?</h3>
                            <p className="text-muted-foreground">No, the price you see is the price you pay. There are no setup fees, hidden charges, or additional costs.</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

//