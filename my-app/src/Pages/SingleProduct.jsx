import { useParams } from "react-router-dom";
import { SingleProductCard } from "../Components/SingleProductCard/SingleProductCard";
import { useProduct } from "../Contexts/ProductContext";
import { useCart } from "../Contexts/CartContext";

export function SingleProduct() {
  const { productId } = useParams();
  const { state, setIsLoading } = useProduct();
  const { isCartLoading } = useCart();

  console.log({ productId });

  const product = state?.products?.find((productItem) => {
    return productId === productItem._id;
  });
  const { addToCartHandler } = useCart();
  return (
    <>
      <SingleProductCard
        addToCartHandler={addToCartHandler}
        product={product}
        isCartLoading={isCartLoading}
      />
    </>
  );
}
