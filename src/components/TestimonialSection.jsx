import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Quote } from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    id: 1,
    testimonial:
      "This establishment achieves a perfect balance between bold flavors and ethical sourcing. Every cup demonstrates an unwavering commitment to quality and transparency, making it a truly revolutionary and welcome addition to our local community.",
    author: "Ahmed Sherif",
    role: "Political Critic",
  },
  {
    id: 2,
    testimonial:
      "Finding a space that consistently inspires my creative process is often challenging. However, the rich aromas and masterfully crafted beverages here provide the exact spark my imagination requires to begin work every single morning.",
    author: "Abdelrahman Osama",
    role: "Local Artist",
  },
  {
    id: 3,
    testimonial:
      "It requires only a single sip to deduce the exceptional quality of these beans. Each beverage is precisely brewed, remarkably rich in flavor, and meticulously crafted by a barista who truly masters their profession.",
    author: "Sherlock Holmes",
    role: "Detective",
  },
  {
    id: 4,
    testimonial:
      "The ambient lighting and beautifully textured foam on every cappuccino remind me of a fine impressionist painting. It provides a wonderfully peaceful environment to sketch, savor my drink, and quietly observe the daily life.",
    author: "Mary Cassatt",
    role: "Painter",
  },
  {
    id: 5,
    testimonial:
      "Every single detail in this establishment is orchestrated with absolute precision and a grand vision. The incredibly complex layers of flavor in their signature espresso demonstrate a masterful dedication to the true art of coffee.",
    author: "Christopher Nolan",
    role: "Film Director",
  },
  {
    id: 6,
    testimonial:
      "What distinguishes this place is not merely the coffee's quality, but the remarkable discipline in its execution. Every step is meticulously calculated, delivering a flawless cup that reflects a profound commitment to absolute excellence.",
    author: "Saad Eldin Elshazly",
    role: "Military Commander",
  },
  {
    id: 7,
    testimonial:
      "This coffee shop exemplifies the perfect balance of dynamic energy and refined technique. The exceptional consistency in every cup showcases a remarkable dedication to quality, making it an outstanding and energizing staple in our daily routine.",
    author: "Edin Hazard",
    role: "Football Player",
  },
];

export default function TestimonialSection() {
  return (
    <section
      id="Testimonial"
      className="relative w-full max-w-5xl mx-auto px-6 lg:px-20 py-16 z-10"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl lg:text-5xl font-serif font-bold text-primary-coffee mb-4">
          Echoes of the Roastery
        </h2>
        <p className="text-primary-coffee font-serif text-lg max-w-xl mx-auto">
          Hear what our community of coffee lovers and critics have to say.
        </p>
      </div>

      <div className="border-2 border-[#d4c5b9] rounded-2xl p-10 md:p-16 relative">
        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          className="testimonial-swiper pb-12"
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="flex flex-col pb-12 lg:pb-15 items-center justify-center text-center">
                <Quote
                  className="text-primary-coffee mb-6 "
                  size={32}
                  fill="currentColor"
                />

                <p className="font-serif italic text-xl md:text-2xl lg:text-3xl text-primary-coffee leading-relaxed max-w-3xl mb-8">
                  "{item.testimonial}"
                </p>

                <p className="text-xs md:text-sm font-bold text-primary-coffee tracking-[0.15em] uppercase">
                  — {item.author}, {item.role}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
