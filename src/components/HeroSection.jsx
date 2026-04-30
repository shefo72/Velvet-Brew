import HeroSectionImage from "../assets/HeroSectionImage.webp";
import Button from "./../UI/Button";
import { scrollToSection } from "./../utils/helpers";

function HeroSection() {
  return (
    <section className=" font-serif relative w-full flex items-center justify-center flex-1 px-6 lg:px-20 py-16   pt-50 pb-50 md:pb-30 md:pt-25">
      <div
        className="absolute inset-0 lg:-left-50 w-full h-[130%] opacity-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/heroCoffeeBg.avif')" }}
      ></div>

      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 z-10">
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start gap-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-center lg:text-left font-serif font-bold text-[#5c3e2e] leading-[1.1]">
            Sip the comfort, <br />
            one cup at a time
          </h1>

          <p className="text-lg md:text-2xl text-center lg:text-left font-serif text-[#3a2d28] max-w-md leading-snug">
            Freshly brewed coffee and delicious bites, crafted to brighten your
            day.
          </p>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-10 mt-4">
            <Button to="/menu">Shop Now</Button>
            <Button
              onClick={() => scrollToSection("Testimonial")}
              type="secondary"
            >
              Watch Our Story
            </Button>
          </div>
        </div>

        <div className="w-full hidden lg:flex lg:w-1/2 relative justify-end">
          <div className="relative w-[90%] max-w-100">
            <img
              src={HeroSectionImage}
              alt="Hands holding iced coffee"
              className="w-full h-auto rounded-xl object-cover shadow-2xl"
            />

            <div className="absolute -bottom-10 -left-6 lg:-left-16 bg-white p-5 lg:p-6 rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] transform -rotate-3 max-w-62.5 lg:max-w-70 z-20 border border-gray-50">
              <p className="font-serif text-[#3a2d28] text-sm lg:text-base italic leading-relaxed">
                "The best way to start the morning in the city."
              </p>
              <span className="block mt-3 text-xs lg:text-sm text-gray-500 font-medium tracking-wide">
                — Alen Halilovic
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
