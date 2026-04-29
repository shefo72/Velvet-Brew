import { useOutletContext } from "react-router-dom";
import { useState } from "react";

import { products } from "../data/fakeProducts";
import ProductCard from "../UI/ProductCard";
import EmptyMenu from "../components/EmptyMenu";

const categories = [
  { id: "allProducts", label: "All Collections" },
  { id: "section1", label: "Fresh Brews" },
  { id: "section2", label: "Handmade Croissants" },
  { id: "section3", label: "Artisanal Toasts" },
  { id: "section4", label: "Seasonal Specials" },
];

function Menu() {
  const [active, setActive] = useState("allProducts");
  const { search = "" } = useOutletContext() || {};

  const [visibleCount, setVisibleCount] = useState({
    allProducts: 4,
    section1: 4,
    section2: 4,
    section3: 4,
    section4: 4,
  });

  const handleSeeMore = (section) => {
    const total =
      section === "allProducts"
        ? products.length
        : products.filter((p) => p.category === section).length;

    setVisibleCount((prev) => ({
      ...prev,
      [section]: total,
    }));
  };

  const scrollToSection = (id) => {
    setActive(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const MatchingProducts = products.filter((p) =>
    p.title?.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="min-h-screen w-full bg-[#F5EFE6]">
      <div className="max-w-7xl mx-auto w-full">
        {/* intro */}
        <div className="text-center pt-10 px-4">
          <h1 className="text-primary-coffee font-bold text-3xl md:text-4xl font-playfair">
            Our Handcrafted selection
          </h1>
          <p className="text-[#4F4540] p-4 text-sm md:text-base">
            Discover our curated menu of slow-brewed coffees and artisanal
            pastries,
            <br className="hidden md:block" />
            each crafted with intentionality and the finest seasonal
            ingredients.
          </p>
        </div>

        {/* buttons */}
        <div className="buttons flex flex-wrap justify-center gap-2 md:gap-4 backdrop-blur-md sticky top-0 p-4 z-40">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => scrollToSection(category.id)}
              className={`px-4 md:px-5 py-2 text-sm md:text-base cursor-pointer rounded-full transition hover:bg-primary-coffee hover:text-[#F6ECE1] ${
                active === category.id
                  ? "bg-primary-coffee text-white"
                  : "bg-[#f0dfcc] text-primary-coffee"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {MatchingProducts.length === 0 ? (
          <EmptyMenu search={search} />
        ) : (
          categories.map((category) => {
            const filteredProducts = products.filter((p) => {
              const matchesSearch = p.title
                ?.toLowerCase()
                .includes(search.toLowerCase());
              const matchesCategory =
                category.id === "allProducts" || p.category === category.id;

              return matchesSearch && matchesCategory;
            });

            if (filteredProducts.length === 0) return null;

            return (
              <div
                key={category.id}
                id={category.id}
                className="p-4 md:p-10 scroll-mt-24"
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="p-2 font-playfair text-2xl md:text-3xl font-bold text-[#3a2d28]">
                    {category.label}
                  </h3>

                  {visibleCount[category.id] < filteredProducts.length ? (
                    <button
                      onClick={() => handleSeeMore(category.id)}
                      className="px-4 cursor-pointer md:px-6 py-2 text-sm md:text-base bg-primary-coffee text-[#F6ECE1] rounded-full hover:bg-[#3a261a] transition-colors"
                    >
                      View All →
                    </button>
                  ) : (
                    ""
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-6">
                  {filteredProducts
                    .slice(0, visibleCount[category.id])
                    .map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default Menu;
