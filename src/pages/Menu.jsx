import { products } from "../data/fakeProducts";
import ProductCard from "../UI/ProductCard";

function Menu() {
  return (
    <div className="flex flex-wrap px-4 py-6 gap-2">
      {products.map((product) => (
        <ProductCard product={product} />
      ))}
    </div>
  );
}

export default Menu;
