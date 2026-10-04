import Hero from "@/components/Landing/Hero";
import Features from "@/components/Landing/Features";
import ProductsShowcase from "@/components/Landing/ProductsShowcase";
import BusinessSection from "@/components/Landing/BusinessSection";
import StatsBanner from "@/components/Landing/StatsBanner";
import Newsletter from "@/components/Landing/Newsletter";
import Footer from "@/components/Landing/Footer";
import HowItWorks from "@/components/Landing/HowItWorks";
import Section from "@/components/Landing/Section";
import CtaBanner from "@/components/Landing/CtaBanner";

export default function Home() {
  return (
    <main className="min-h-screen bg-cream">
      <Hero />
      <Features />
      <ProductsShowcase />
      <BusinessSection />
      <HowItWorks />

   
      <CtaBanner />
      <Footer />
    </main>
  );
}
