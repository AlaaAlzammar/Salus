import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ProductsShowcase from "@/components/ProductsShowcase";
import BusinessSection from "@/components/BusinessSection";
import StatsBanner from "@/components/StatsBanner";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import HowItWorks from "@/components/HowItWorks";
import Section from "@/components/Section";
import CtaBanner from "@/components/CtaBanner";

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
