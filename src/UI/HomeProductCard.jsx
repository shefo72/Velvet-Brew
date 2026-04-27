import { PlusCircle } from "lucide-react";

export default function ProductCard({ product }) {
  const { image, title, basePrice, description } = product;
  return (
    <div className="bg-white cursor-pointer rounded-4xl p-5 shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col h-full border border-gray-50">
      <div className="w-full aspect-square mb-5 overflow-hidden rounded-4xl">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
        />
      </div>

      <div className="flex-1 flex flex-col">
        <h3 className="font-serif text-xl font-bold textprimary-coffee mb-2">
          {title}
        </h3>

        <p className="text-sm text-[#50453E] leading-relaxed line-clamp-2 mb-6">
          {description}
        </p>

        <div className="mt-auto flex items-center justify-between">
          <span className="font-bold text-lg textprimary-coffee">
            $ {basePrice}
          </span>
          <button className="text-gray-400  hover:text-coffee-hover transition-colors">
            <PlusCircle size={26} strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </div>
  );
}
