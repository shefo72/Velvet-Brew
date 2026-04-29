import FeaturesSection from "../components/FeaturesSection";
import HeroSection from "../components/HeroSection";
import TestimonialSection from "./../components/TestimonialSection";
import MenuPreviewSection from "./../components/MenuPreviewSection";
import ContactSection from "../components/ContactSection";

import homeBg from "../assets/homeBg.avif";

function Home() {
  return (
    <main className="bg-[#F5EFE6] ">
      <HeroSection />
      <div className="relative">
        <div
          className="absolute inset-0 w-full h-full opacity-15 bg-cover bg-center bg-no-repeat z-10"
          style={{ backgroundImage: `url(${homeBg})` }}
        ></div>
        <MenuPreviewSection />
        <ContactSection />
      </div>
      <div className="relative">
        <div
          className="absolute inset-0 w-full h-full opacity-15 bg-cover bg-center bg-no-repeat z-10"
          style={{ backgroundImage: `url(${homeBg})` }}
        ></div>
        <TestimonialSection />
        <FeaturesSection />
      </div>
    </main>
  );
}

export default Home;
