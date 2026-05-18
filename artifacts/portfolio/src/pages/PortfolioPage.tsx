import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import LogoFolioSection from "@/components/LogoFolioSection";
import BrandIdentitySection from "@/components/BrandIdentitySection";
import ThumbnailsSection from "@/components/ThumbnailsSection";
import PostersSection from "@/components/PostersSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function PortfolioPage() {
  return (
    <div className="bg-background min-h-screen text-foreground overflow-x-hidden selection:bg-primary selection:text-primary-foreground">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <LogoFolioSection />
        <BrandIdentitySection />
        <ThumbnailsSection />
        <PostersSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
