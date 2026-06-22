import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import LogoShowcase from "../components/LogoShowcase";
import Statement from "../components/Statement";
import HomeTabs from "../components/HomeTabs";
import ListenSection from "../components/ListenSection";
import FeatureSection from "../components/FeatureSection";
import CaseStudies from "../components/CaseStudies";
import Integrations from "../components/Integrations";
import Faq from "../components/Faq";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import FloatingCall from "../components/FloatingCall";

export default function Home() {
  return (
    <main className="page-shell">
      <Navbar />

      <div className="page-content">
        <div className="bg-orb bg-orb-left" />
        <div className="bg-orb bg-orb-right" />
        <div className="bg-slice" />

        <Hero />
        <LogoShowcase />
        <Statement />
        <HomeTabs />
        <ListenSection />
        <FeatureSection />
        <CaseStudies />
        <Integrations />
        <Faq />
        <CTA />
        <Footer />
        <FloatingCall />
      </div>
    </main>
  );
}

