import { ProductCard } from "../ProductCard/ProductCard";
import "./ProductList.css";
import "../ProductCard/ProductCard.css";
import { useProduct } from "../../Contexts/ProductContext";
import { useFilter } from "../../Contexts/FilterContext";

export function ProductList() {
  const { products, setProducts } = useProduct();
  const { filteredProducts } = useFilter();
  function addToCartHandler() {}
  // console.log({ products });
  const productsFiltered = filteredProducts(products);
  return (
    <>
      <section className="grid-container">
        {productsFiltered?.map((product) => {
          return (
            <ProductCard
              key={product._id}
              product={product}
              addToCartClickHandler={addToCartHandler}
            />
          );
        })}
      </section>
    </>
  );
}
