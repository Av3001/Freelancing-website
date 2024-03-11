import HeroSection from "@/components/HeroSection";
import FeaturedServices from "@/components/FeaturedServices";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import TagLine from "@/components/Tagline";
import Developers from "@/components/Developers";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection/>
      <FeaturedServices/>
      <WhyChooseUs/>
      <Testimonials/>
      <TagLine/>
      <Developers/>
      <Footer/>
    </main>
  );
}
