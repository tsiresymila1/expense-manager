
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const CTASection = () => {
  return (
    <section className="py-20 px-4 bg-expense-600 text-white">
      <div className="container mx-auto text-center">
        <h2 data-aos="fade-down" className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Take Control of Your Finances?
        </h2>
        <p data-aos="fade-down" className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
          Join thousands of users who have transformed their financial habits with ExpenseFlow.
          Start your journey to financial wellness today!
        </p>
        <div data-aos="fade-up" className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/dashboard">
            <Button size="lg" className="bg-white text-expense-700 hover:bg-white/90">
              Start For Free
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Button variant="outline" size="lg" className="bg-transparent text-white hover:bg-white/80 hover:text-expense-700">
            Learn More
          </Button>
        </div>
        <p data-aos="fade-up" className="mt-6 text-sm opacity-80">
          No credit card required. 14-day free trial.
        </p>
      </div>
    </section>
  );
};

export default CTASection;
