import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CaseStudies from "@/components/CaseStudies";
import Editorial from "@/components/Editorial";
import Resume from "@/components/Resume";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <CaseStudies />
      <Editorial />
      <Resume />
      <Footer />
    </div>
  );
};

export default Index;
