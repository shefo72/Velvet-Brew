import { SearchX } from "lucide-react";

function EmptyMenu({ search }) {
  return (
    <div className="flex flex-col items-center justify-center py-32 px-4 text-center">
      <SearchX
        size={80}
        strokeWidth={1.5}
        className="text-primary-coffee mb-6"
      />
      <h2 className="text-3xl md:text-4xl font-playfair font-bold text-primary-coffee mb-4">
        No Products Found
      </h2>
      <p className="text-primary-coffeetext-sm md:text-base opacity-80 max-w-md mx-auto leading-relaxed">
        We explored every corner of our roastery, but couldn't find a match for{" "}
        <span className="font-bold">"{search}"</span>. Try adjusting your search
        or explore our collections above.
      </p>
    </div>
  );
}

export default EmptyMenu;
