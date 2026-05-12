import { Quote } from "lucide-react";
import HeroSectionImage from "../assets/HeroSectionImage.webp";
import Button from "./../UI/Button";
import { scrollToSection } from "./../utils/helpers";

function HeroSection() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center flex-1 px-6 lg:px-20 py-24 lg:py-32  ">
      <div
        className="absolute inset-0 w-full h-full opacity-[0.15] bg-cover bg-center bg-no-repeat pointer-events-none"
        style={{ backgroundImage: "url('/heroCoffeeBg.avif')" }}
      ></div>

      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-12 z-10">
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start gap-6 relative z-10 mt-10 lg:mt-0">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary-coffee/20 bg-primary-coffee/5 mb-2">
            <span className="w-2 h-2 rounded-full bg-primary-coffee animate-pulse"></span>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary-coffee">
              Artisanal Roastery
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl text-center lg:text-left font-serif font-extrabold text-primary-coffee leading-[1.05] tracking-tight">
            Sip the comfort, <br />
            <span className="text-primary-coffee/80 italic font-light">
              one cup at a time.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-center lg:text-left font-medium text-[#50453E]/90 max-w-lg leading-relaxed mt-2">
            Freshly brewed coffee and delicious bites, crafted with precision to
            brighten your everyday routine.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-8 w-full sm:w-auto">
            <Button to="/menu">Shop Now</Button>
            <Button
              onClick={() => scrollToSection("Testimonial")}
              type="secondary"
            >
              Watch Our Story
            </Button>
          </div>
        </div>

        <div className="w-full lg:w-1/2  relative justify-center lg:justify-end mt-10 lg:mt-0 hidden lg:flex">
          <div className="relative w-[85%] sm:w-[70%] lg:w-[80%] max-w-105">
            <div className="relative w-full aspect-3/4 rounded-t-full rounded-b-4xl overflow-hidden border-4 border-white">
              <img
                src={HeroSectionImage}
                alt="Hands holding iced coffee"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent mix-blend-multiply pointer-events-none"></div>
            </div>

            <div className="absolute -bottom-8 -left-4 lg:-left-12 bg-white/70 backdrop-blur-lg p-5 lg:p-6 rounded-3xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] border border-white/60 max-w-65 sm:max-w-75 z-20 ">
              <Quote className="text-primary-coffee/40 w-8 h-8 mb-3 rotate-180" />
              <p className="font-serif text-primary-coffee text-sm lg:text-base italic leading-relaxed font-medium">
                "The best way to start the morning in the city."
              </p>
              <div className="flex items-center gap-3 mt-4">
                <div className="w-8 h-8 rounded-full bg-primary-coffee/10 flex items-center justify-center">
                  <span className="text-primary-coffee text-xs font-bold">
                    AH
                  </span>
                </div>
                <span className="block text-xs text-primary-coffee/70 font-bold uppercase tracking-widest">
                  Alen Halilovic
                </span>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 w-24 h-24 bg-transparent border border-primary-coffee/20 rounded-full border-dashed animate-[spin_20s_linear_infinite] pointer-events-none -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
