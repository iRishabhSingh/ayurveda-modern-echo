import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import BrandStory from "@/components/BrandStory";
import ProductShowcase from "@/components/ProductShowcase";
import TestimonialsPreview from "@/components/TestimonialsPreview";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <BrandStory />
      <ProductShowcase />
      <TestimonialsPreview />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
