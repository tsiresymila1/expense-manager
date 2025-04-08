import CTASection from "./components/cta-section";
import DataPrivacySection from "./components/data-privacy-section";
import FeaturesSection from "./components/features-section";
import HeroSection from "./components/hero-section";
import TestimonialsSection from "./components/testimonials-section";

export default function HomePage() {
    return <main>
        <HeroSection />
        <FeaturesSection />
        <TestimonialsSection />
        <DataPrivacySection />
        <CTASection />
    </main>
}