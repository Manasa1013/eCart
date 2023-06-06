import { Link } from "react-router-dom";

import { getTrimmed } from "../../utils/CommonFunctions";
import "./ProductCard.css";
import "../ProductList/ProductList.css";

export function ProductCard({ product, addToCartClickHandler }) {
  const wishIcon = "fi fi-rs-heart ";
  const solidWishIcon = "fi fi-ss-heart red-color";
  return (
    <div className="card__container">
      <Link className="link" to={`/products/${product._id}`}>
        <div className="img__container">
          <img
            className="w-full"
            width="100%"
            height="auto"
            src={product.src[1]}
            alt={product.name}
          />
        </div>
      </Link>
      <div className="card-contents">
        <button
          className="pos"
          onClick={() => {
            // console.log("button clicked");
          }}
        >
          <i className={product.isWishlisted ? solidWishIcon : wishIcon}></i>
        </button>
        <div className="product--desc">
          {"  "}
          <span className="product--rating">
            {product.rating.rate}
            <i className="fi fi-rs-star bg-yellow"></i>({product.rating.count})
          </span>
          <h4 className="product--name">
            {getTrimmed(product.name, 3)}
            {/* {product.name} */}
          </h4>

          <p className="product--info">
            {/* {product.description} */}
            {getTrimmed(product.description, 2)}..
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
        </div>
      </div>
    </div>
  );
}
