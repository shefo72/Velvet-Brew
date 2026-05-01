import React, { useMemo, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { useProducts } from "../hooks/useProducts";

import MenuProductCard from "./../components/MenuProductCard";
import EmptyMenu from "../components/EmptyMenu";
import FullPageSpinner from "./../UI/FullPageSpinner";
import QueryError from "../UI/QueryError";
import { capitalizeFirstLetter } from "../utils/helpers";

function Menu() {
  const {
    data: productData,
    allProducts,
    categories,
    isLoading,
    error,
  } = useProducts();
  const { search = "" } = useOutletContext() || {};
  const [active, setActive] = useState(0);

  const scrollToSection = (id) => {
    setActive(id);
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const MatchingProducts = useMemo(() => {
    return allProducts.filter((p) =>
      p.product_name?.toLowerCase().includes(search.toLowerCase()),
    );
  }, [allProducts, search]);

  if (isLoading) return <FullPageSpinner />;
  if (error) return <QueryError error={error} />;

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

        <div>
          {MatchingProducts.length === 0 ? (
            <EmptyMenu search={search} />
          ) : (
            <>
              {/* render items in each  collection*/}
              {productData?.data.map((collection, index) => {
                const categoryId = index;
                const categoryLabel = capitalizeFirstLetter(
                  collection.collection_name,
                );

                // filter products in each collection based on search query
                const filteredProducts = collection.products.filter((p) =>
                  p.product_name?.toLowerCase().includes(search.toLowerCase()),
                );

                if (filteredProducts.length === 0) return null;

                return (
                  <div
                    key={categoryId}
                    id={categoryId}
                    className="p-4 md:p-10 scroll-mt-24"
                  >
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="p-2 font-playfair text-2xl md:text-3xl font-bold text-[#3a2d28]">
                        {categoryLabel}
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-6">
                      {filteredProducts.map((product) => (
                        <MenuProductCard
                          key={product.product_id}
                          product={product}
                        />
                      ))}
                    </div>
                  </div>
                );
              })}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default React.memo(Menu);
