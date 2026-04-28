import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Quote } from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    id: 1,
    testimonial:
      "This coffee shop represents a perfect balance of bold flavors and ethical sourcing. Every single cup demonstrates a clear commitment to quality, making it a truly revolutionary addition to our community.",
    author: "Ahmed Sherif",
    role: "Political critic",
  },
  {
    id: 2,
    testimonial:
      "Finding a place that inspires my creative process is usually quite difficult. However, the rich aromas and perfectly crafted lattes here provide the exact spark my imagination needs every single morning.",
    author: "Abdelrahman Osama",
    role: "Local Artist",
  },
  {
    id: 3,
    testimonial:
      "It is, I assure you, a matter of simple observation to recognize the exceptional caliber of these roasted beans. The precision in brewing, combined with the nuanced complexity of flavor, leaves no room for doubt—one is clearly in the presence of a most accomplished barista.",
    author: "Sherlock Holmes",
    role: "Detective",
  },
  {
    id: 4,
    testimonial:
      "The warm lighting and beautifully textured foam on every cappuccino remind me of a fine impressionist painting. It is a wonderfully peaceful environment to sketch, sip, and simply observe daily life.",
    author: "Mary Cassatt",
    role: "Painter",
  },
  {
    id: 5,
    testimonial:
      "Every detail in this establishment is orchestrated with absolute precision and grand vision. The complex layers of flavor in their signature espresso create an incredibly immersive and unforgettable morning coffee experience.",
    author: "Christopher Nolan",
    role: "Film Director",
  },
  {
    id: 6,
    testimonial:
      "ما يُميز هذا المكان ليس فقط جودة القهوة، بل الانضباط الواضح في الأداء والدقة في التنفيذ. كل خطوة محسوبة، وكل فنجان يُعد وكأنه جزء من خطة محكمة لا تقبل الخطأ. هذا المستوى من الالتزام هو ما يصنع الفارق الحقيقي.",
    author: "Saad Eldin Elshazly",
    role: "Military Commander",
  },
  {
    id: 7,
    testimonial:
      "このコーヒーショップは、大胆な風味と倫理的な調達の完璧なバランスを体現しています。一杯一杯に品質への強いこだわりが感じられ、私たちのコミュニティにとって本当に革新的な存在です。",
    author: "Park Ji-sung",
    role: "Football Player",
  },
];

export default function TestimonialSection() {
  return (
    <section
      id="Testimonial"
      className="relative w-full max-w-5xl mx-auto px-6 lg:px-20 py-16 z-10"
    >
      {/*Custom styles for pagination bullets */}
      <style>
        {`
          .testimonial-swiper .swiper-pagination-bullet {
            width: 24px;
            height: 3px;
            border-radius: 12px;
            background: #d4c1b9;
            opacity: 1;
            transition: all 0.3s ease;
          }
          .testimonial-swiper .swiper-pagination-bullet-active {
            background: #5c3e2e;
            width: 32px;
          }
        `}
      </style>

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
              <div className="flex flex-col pb-20 items-center justify-center text-center">
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
