import { products } from "../data/fakeProducts";
import ProductCard from "../UI/ProductCard";

import { Link } from "react-scroll";
import {useEffect, useState } from "react";
import React from 'react'

function Menu({ search }) {

 const [active, setActive] = useState("allProducts");

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
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });}

    useEffect(() => {setActive("allProducts");}, []);

  

  return (
  <div className="min-h-screen w-full bg-[#F5F5F4]">

    {/* intro */}
    <div className=" text-center pt-10">
      <h1 className="text-primary-coffee  font-bold text-4xl font-playfair">Our Handcrafted selection</h1>
      <p className="text-[#4F4540] p-4 ">Discover our curated menu of slow-brewed coffees and artisanal pastries,<br />
      each crafted with intentionality and the finest seasonal ingredients.</p>
    </div>

     {/* buttons */}
 <div className="buttons flex justify-center gap-4 backdrop-blur-md  sticky top-0 p-4 z-50 ">
<button
          onClick={() => scrollToSection("allProducts")}
          className={`px-5 py-2 rounded-full transition hover:bg-[#25160E] hover:text-[#F6ECE1] ${
            active === "allProducts"
              ? "bg-[#25160E] text-white"
              : "bg-[#F6ECE1] text-[#25160E]"
          }`} >  
           All Collections </button>

         <button
          onClick={() => scrollToSection("section1")}
          className={`px-5 py-2 rounded-full transition hover:bg-[#25160E] hover:text-[#F6ECE1]  ${
            active === "section1"
              ? "bg-[#25160E] text-white"
              : "bg-[#F6ECE1] text-[#25160E]"
          }`}  > Fresh Brews</button>


        <button
          onClick={() => scrollToSection("section2")}
          className={`px-5 py-2 rounded-full transition hover:bg-[#25160E] hover:text-[#F6ECE1] ${
            active === "section2"
              ? "bg-[#25160E] text-white"
              : "bg-[#F6ECE1] text-[#25160E]"
          }`} > Handmade Croissants</button>

        <button
          onClick={() => scrollToSection("section3")}
          className={`px-5 py-2 rounded-full transition hover:bg-[#25160E] hover:text-[#F6ECE1] ${
            active === "section3"
              ? "bg-[#25160E] text-white"
              : "bg-[#F6ECE1] text-[#25160E]"
          }`}> Artisanal Toasts</button>

        <button
          onClick={() => scrollToSection("section4")}
          className={`px-5 py-2 rounded-full transition hover:bg-[#25160E] hover:text-[#F6ECE1] ${
            active === "section4"
              ? "bg-[#25160E] text-white"
              : "bg-[#F6ECE1] text-[#25160E]"
          }`}>Seasonal Specials</button>
      
      

      </div>

      {/* Sections */}
      <div id="allProducts" className="min-h-screen p-10 ">
        <div className="flex justify-between ">
        <h3 className="p-2 font-playfair text-3xl ">All Collections</h3>
         {visibleCount.allProducts < products.length && (
         <div className="">
         <button
         onClick={() => handleSeeMore("allProducts")}
         className="px-6 py-2 bg-[#25160E] text-[#F6ECE1] rounded-full hover:bg-[#F5F5F4] hover:text-[#25160E] " >
        View All →
        </button>
        </div>
  )}
    </div>
    <div className="flex flex-wrap px-4 py-6 gap-2">
    {products .filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase()))
      .slice(0, visibleCount.allProducts)
      .map((product) => (
       <ProductCard key={product.id} product={product} />
      ))}
      </div>
      </div>

     <div id="section1" className="min-h-screen p-10">
  <div className="flex justify-between  ">
   <h3 className="p-2 font-playfair text-3xl ">Fresh Brews</h3>
   {visibleCount.section1< products.length && (
   <div className="">
   <button
   onClick={() => handleSeeMore("section1")}
   className="px-6 py-2 bg-[#25160E] text-[#F6ECE1] rounded-full hover:bg-[#F5F5F4] hover:text-[#25160E] ">
    View All →
   </button>
    </div>
  )}
  </div>
<div className="flex flex-wrap px-4 py-6 gap-2">
{products.filter((p) => p.category === "section1" &&
    p.title.toLowerCase().includes(search.toLowerCase()))
   .slice(0, visibleCount.section1)
   .map((product) => (
    <ProductCard key={product.id} product={product} />
  ))}
      </div>
      </div>

     <div id="section2" className="min-h-screen p-10">
     <div className="flex justify-between shadow- ">
     <h3 className="p-2 font-playfair text-3xl ">Handmade Croissants</h3>
      {visibleCount.section2 < products.length && (
     <div className="">
      <button onClick={() => handleSeeMore("section2")}
        className="px-6 py-2 bg-[#25160E] text-[#F6ECE1] rounded-full hover:bg-[#F5F5F4] hover:text-[#25160E] ">
        View All →
      </button>
    </div> )}
  </div>
   <div className="flex flex-wrap px-4 py-6 gap-2">
  {products.filter((p) => p.category === "section2"&&
   p.title.toLowerCase().includes(search.toLowerCase()))
  .slice(0, visibleCount.section2)
  .map((product) => (
   <ProductCard key={product.id} product={product} />
  ))}
      </div>
      </div>

      <div id="section3" className="min-h-screen p-10">
      <div className="flex justify-between shadow- ">
      <h3 className="p-2 font-playfair text-3xl ">Artisanal Toasts</h3>
      {visibleCount.section3 < products.length && (
     <div className="">
      <button onClick={() => handleSeeMore("section3")}
        className="px-6 py-2 bg-[#25160E] text-[#F6ECE1] rounded-full hover:bg-[#F5F5F4] hover:text-[#25160E] "
      >
        View All →
      </button>
    </div>)}
  </div>
      <div className="flex flex-wrap px-4 py-6 gap-2">
      {products
      .filter((p) => p.category === "section3"&&
      p.title.toLowerCase().includes(search.toLowerCase()))
      .slice(0, visibleCount.section3)
      .map((product) => (
    <ProductCard key={product.id} product={product} />
  ))}
    </div>
      </div>

      <div id="section4" className="min-h-screen p-10">
      <div className="flex justify-between shadow- ">
      <h3 className="p-2 font-playfair text-3xl ">Seasonal Specials</h3>
       {visibleCount.section4 < products.length && (
    <div className="">
      <button onClick={() => handleSeeMore("section4")}
       className="px-6 py-2 bg-[#25160E] text-[#F6ECE1] rounded-full hover:bg-[#F5F5F4] hover:text-[#25160E] ">
        View All →
      </button>
       </div>)}
  </div>
        <div className="flex flex-wrap px-4 py-6 gap-2">
      {products.filter((p) => p.category === "section4"&&
    p.title.toLowerCase().includes(search.toLowerCase()))
    .slice(0, visibleCount.section4)
    .map((product) => (
    <ProductCard key={product.id} product={product} />
  ))}
      </div>
      </div>

    </div>
)}


export default Menu;



