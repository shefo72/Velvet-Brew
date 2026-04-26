import { products } from "../data/fakeProducts";
import ProductCard from "../UI/ProductCard";

function Menu() {
  return (
    <div className="gap-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-4">
      {products.map((product) => (
        <ProductCard product={product} />
      ))}
    </div>
  );
}

export default Menu;
