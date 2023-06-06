import { useParams } from "react-router-dom";
import { SingleProductCard } from "../Components/SingleProductCard/SingleProductCard";
import { useProduct } from "../Contexts/ProductContext";

export function SingleProduct() {
  const { productId } = useParams();
  console.log({ productId });
  const { addToCartClickHandler } = useProduct();
  return (
    <>
      <SingleProductCard
        addToCartClickHandler={addToCartClickHandler}
        productId={productId}
      />
    </>
  );
}
