
import React from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Small Business Owner",
    content: "ExpenseFlow has transformed how I manage both my personal and business expenses. The categorization features and budget tools have helped me save over $5,000 this year alone.",
    avatar: "SJ"
  },
  {
    name: "Michael Chen",
    role: "Software Developer",
    content: "I've tried many expense tracking apps, but none compare to ExpenseFlow's intuitive interface and powerful reporting tools. It makes financial planning actually enjoyable!",
    avatar: "MC"
  },
  {
    name: "Priya Patel",
    role: "Financial Analyst",
    content: "As someone who works with financial data daily, I appreciate the accuracy and detail that ExpenseFlow provides. It's become an essential tool in my personal finance toolkit.",
    avatar: "PP"
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 px-4 bg-secondary dark:bg-secondary/30">
      <div className="container mx-auto">
        <div  className="text-center mb-16">
          <h2 data-aos="fade-up" className="text-3xl md:text-4xl font-bold mb-4 hero-text-gradient inline-block">
            What Our Users Say
          </h2>
          <p data-aos="fade-up" data-aos-delay="200" className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of satisfied users who have transformed their financial habits with ExpenseFlow.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              data-aos="flip-left"
              className="bg-card border rounded-xl p-6 shadow-sm"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-expense-100 text-expense-700 flex items-center justify-center font-medium text-lg mr-3">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-expense-500 text-expense-500" />
                  ))}
                </div>
              </div>
              <blockquote className="italic text-muted-foreground">
                {testimonial.content}
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
