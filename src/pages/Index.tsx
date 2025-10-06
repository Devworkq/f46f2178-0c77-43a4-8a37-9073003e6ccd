import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PromoCards from "@/components/PromoCards";
import MarketData from "@/components/MarketData";
import WhyQuidax from "@/components/WhyQuidax";
import SECLicense from "@/components/SECLicense";
import Products from "@/components/Products";
import Testimonials from "@/components/Testimonials";
import AppCTA from "@/components/AppCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <PromoCards />
        <MarketData />
        <WhyQuidax />
        <SECLicense />
        <Products />
        <Testimonials />
        <AppCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
