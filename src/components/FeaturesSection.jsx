import { Microscope, Users, Award } from "lucide-react";
import FeaturesSection1 from "../assets/FeaturesSection1.jpg";
import FeaturesSection2 from "../assets/FeaturesSection2.jpg";
import FeaturesSection3 from "../assets/FeaturesSection3.jpg";

const featuresData = [
  {
    id: 1,
    title: "Scientific Roast",
    description:
      "Every batch is temperature-profiled to unlock the hidden molecular flavors unique to the bean's origin.",
    image: FeaturesSection1,
    Icon: Microscope,
  },
  {
    id: 2,
    title: "Master Baristas",
    description:
      "Our team doesn't just make coffee; they study it. Every barista undergoes 200 hours of sensorial training.",
    image: FeaturesSection2,
    Icon: Users,
  },
  {
    id: 3,
    title: "Ethical Direct-Trade",
    description:
      "We bypass middle-men to pay farmers 40% above fair-trade prices, ensuring the legacy of the land continues.",
    image: FeaturesSection2,
    Icon: Award,
  },
];

export default function FeaturesSection() {
  return (
    <section className="relative w-full max-w-7xl mx-auto px-6 lg:px-20 py-24 z-10">
      <div className="text-center mb-16 md:mb-24 flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-coffee mb-6">
          Crafting the Difference
        </h2>
        <div className="h-0.5 w-24 bg-primary-coffee rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
        {featuresData.map((feature) => (
          <FeatureCard key={feature.id} feature={feature} />
        ))}
      </div>
    </section>
  );
}

function FeatureCard({ feature }) {
  const { image, title, description, Icon } = feature;
  return (
    <div className="flex flex-col items-center text-center z-10">
      <div className="relative mb-6 rounded-full p-1 bg-white  ">
        <img
          src={image}
          alt={title}
          className="w-36 h-36 md:w-44 md:h-44 rounded-full object-cover border-4 border-white/50"
        />
      </div>

      <div className="mb-3 text-primary-coffee">
        <Icon size={28} strokeWidth={1.5} />
      </div>

      <h3 className="font-serif text-xl md:text-2xl font-bold text-primary-coffee mb-3">
        {title}
      </h3>

      <p className="text-sm md:text-base text-[#50453E] leading-relaxed max-w-xs md:max-w-sm">
        {description}
      </p>
    </div>
  );
}
