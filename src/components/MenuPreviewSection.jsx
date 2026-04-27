import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

import { FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";

import ProductCard from "../UI/HomeProductCard";
import { products } from "./../data/fakeProducts";

export default function MenuPreviewSection() {
  return (
    <section className="relative w-full max-w-7xl mx-auto px-6 lg:px-20 py-16 z-10">
      <h2 className="text-4xl lg:text-5xl font-serif font-bold text-primary-coffee mb-10 text-center lg:text-left">
        Categories
      </h2>

      <div className="py-4 -my-4">
        <Swiper
          modules={[navigation]}
          freeMode={true}
          spaceBetween={24}
          slidesPerView={1.2}
          breakpoints={{
            640: {
              slidesPerView: 2.2,
            },
            1024: {
              slidesPerView: 4.2,
            },
          }}
          className="w-full"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id} className="h-auto pb-1.5">
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="mt-8 flex justify-end">
        <Link
          to="/menu"
          className="text-sm font-semibold text-primary-coffee hover:text-coffee-hover hover:underline transition-colors flex items-center gap-1"
        >
          View All Products
          <span>&rarr;</span>
        </Link>
      </div>
    </section>
  );
}
