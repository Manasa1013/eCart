import { getTrimmed } from "../../utils/CommonFunctions";
import "./SingleProductCard.css";
import "../ProductCard/ProductCard.css";
import "../ProductList/ProductList.css";
import { useProduct } from "../../Contexts/ProductContext";

export function SingleProductCard({ addToCartClickHandler, productId }) {
  const { state } = useProduct();
  const product = state?.products?.find((productItem) => {
    return productId === productItem._id;
  });
  console.log({ product }, "at singleproductCard");

  return (
    <div className="center">
      <div className="single-product__container">
        <div className="img__container">
          <img
            className="w-full"
            width="100%"
            height="auto"
            src={product.src[1]}
            alt={product.name}
          />
        </div>
        <div className="card-contents">
          <div className="product--desc">
            <h4 className="product--name">
              {/* {getTrimmed(product.name, 3)} */}
              {product.name}
            </h4>
            <p className="product--info">
              {product.description}
              {/* {getTrimmed(product.description, 2)}.. */}
            </p>
            <p className="">
              <span>{product.rating.rate}</span>
              <i className="fi fi-rs-star bg-yellow"></i>({product.rating.count}
              )
            </p>
            <div className="product--price">
              <span className="price">₹{product.price}</span>
              <span className="strike--price">
                ₹{product.price + product.discount}
              </span>
              <span className="discount">(₹{product.discount} OFF)</span>
            </div>
          </div>
          <div className="button__container">
            <button
              className="button button__primary"
              onClick={() => {
                addToCartClickHandler(product);
                //   setToast((prev) => ({
                //     ...prev,
                //     isVisible: "show",
                //     message: "Added to cart",
                //   }));
              }}
            >
              Add to Cart
            </button>
            <button
              className="button button__secondary"
              onClick={() => {
                addToCartClickHandler(product);
                //   setToast((prev) => ({
                //     ...prev,
                //     isVisible: "show",
                //     message: "Added to cart",
                //   }));
              }}
            >
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
