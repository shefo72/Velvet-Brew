import { Microscope, Users, Award } from "lucide-react";
import FeaturesSection1 from "../assets/FeaturesSection1.jpg";
import FeaturesSection2 from "../assets/FeaturesSection2.jpg";
import FeaturesSection3 from "../assets/FeaturesSection3.jpg";

const featuresData = [
  {
    id: 1,
    num: "01",
    title: "Scientific Roast",
    description:
      "Every batch is temperature-profiled to unlock the hidden molecular flavors unique to the bean's origin.",
    image: FeaturesSection1,
    Icon: Microscope,
  },
  {
    id: 2,
    num: "02",
    title: "Master Baristas",
    description:
      "Our team doesn't just make coffee; they study it. Every barista undergoes 200 hours of sensorial training.",
    image: FeaturesSection2,
    Icon: Users,
  },
  {
    id: 3,
    num: "03",
    title: "Ethical Direct-Trade",
    description:
      "We bypass middle-men to pay farmers 40% above fair-trade prices, ensuring the legacy of the land continues.",
    image: FeaturesSection3,
    Icon: Award,
  },
];

export default function FeaturesSection() {
  return (
    <section className="relative w-full  py-24 lg:py-32 overflow-hidden z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <div className="text-center mb-20 md:mb-28 flex flex-col items-center">
          <p className="text-primary-coffee/60 uppercase tracking-[0.3em] text-sm font-bold mb-4">
            Our Philosophy
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-coffee mb-6">
            Crafting the Difference
          </h2>
          <div className="h-0.5 w-16 bg-primary-coffee/20 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-12">
          {featuresData.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ feature }) {
  const { image, title, description, Icon, num } = feature;

  return (
    <div className="group flex flex-col items-center relative z-10">
      <div className="relative w-full max-w-70 aspect-3/4 rounded-t-full rounded-b-4xl overflow-hidden mb-12 shadow-lg group-hover:shadow-2xl transition-all duration-700 ease-out">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

        <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-16 h-16 bg-[#F5F5F4] rounded-full flex items-center justify-center border-4 border-white shadow-md z-20 group-hover:-translate-y-2 transition-transform duration-500">
          <Icon className="text-primary-coffee" size={26} strokeWidth={1.5} />
        </div>
      </div>

      <div className="relative text-center mt-2 px-4 w-full">
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 text-[6rem] font-black text-primary-coffee/3 select-none pointer-events-none z-0">
          {num}
        </div>

        <h3 className="relative font-serif text-2xl lg:text-3xl font-bold text-primary-coffee mb-4 z-10">
          {title}
        </h3>

        <p className="relative text-base text-[#50453E]/80 leading-relaxed max-w-sm mx-auto z-10 font-medium">
          {description}
        </p>
      </div>
    </div>
  );
}
