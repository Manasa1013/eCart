import { ProductCard } from "../ProductCard/ProductCard";
import "./ProductList.css";
import "../ProductCard/ProductCard.css";
import { useProduct } from "../../Contexts/ProductContext";
import { useFilter } from "../../Contexts/FilterContext";
import { useCart } from "../../Contexts/CartContext";

export function ProductList() {
  const {
    state: { products },
  } = useProduct();
  const { filteredProducts } = useFilter();
  const { addToCartHandler } = useCart();
  const productsFiltered = filteredProducts([...products]);
  return (
    <>
      <section className="grid-container">
        {productsFiltered?.map((product) => {
          return (
            <ProductCard
              key={product._id}
              product={product}
              addToCartHandler={addToCartHandler}
            />
          );
        })}
      </section>
    </>
  );
}
