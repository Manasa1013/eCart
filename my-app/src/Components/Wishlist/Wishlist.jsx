import { Link } from "react-router-dom";

import { getTrimmed } from "../../utils/CommonFunctions";
import "../ProductCard/ProductCard.css";
import "../ProductList/ProductList.css";
import { useCart } from "../../Contexts/CartContext";
import { Loader } from "../Loader/Loader";
import { useAuth } from "../../Contexts/AuthContext";
import { useToast } from "../../Contexts/ToastContext";
import { useWishlist } from "../../Contexts/WishlistContext";

export function Wishlist({ product }) {
  const wishIcon = "fi fi-rs-heart ";
  const solidWishIcon = "fi fi-ss-heart red-color";
  const { isCartLoading, state, addToCartHandler } = useCart();
  const {
    state: { wishlist },
  } = useWishlist();
  const { setToast } = useToast();
  const { auth } = useAuth();

  const { addToWishlistHandler, removeFromWishlistHandler } = useWishlist();

  function addToCartClickHandler(item) {
    console.log({ item }, auth.token);
    auth.token
      ? addToCartHandler("SET_CART", item)
      : setToast((prev) => ({
          ...prev,
          isVisible: "show",
          message: "Login to add",
        }));
  }

  function addToWishlistClickHandler(item) {
    console.log({ item }, auth.token);
    auth.token
      ? addToWishlistHandler("SET_WISHLIST", item)
      : setToast((prev) => ({
          ...prev,
          isVisible: "show",
          message: "Login to wishlist",
        }));
  }
  function removeFromWishlistClickHandler(item) {
    console.log({ item }, auth.token);
    auth.token
      ? removeFromWishlistHandler("SET_WISHLIST", item)
      : setToast((prev) => ({
          ...prev,
          isVisible: "show",
          message: "Login to remove from wishlist",
        }));
  }
  const isAdded = state?.cart?.find((cartItem) => cartItem._id === product._id);
  const isWishlisted = wishlist?.find((item) => item._id === product._id);

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
            {
              isWishlisted
                ? removeFromWishlistClickHandler(product)
                : addToWishlistClickHandler(product);
            }
          }}
        >
          <i className={isWishlisted ? solidWishIcon : wishIcon}></i>
        </button>
        <div className="product--desc">
          {"  "}
          <span className="product--rating">
            {product.rating.rate} ⭐
            {/* <i className="fi fi-rs-star bg-yellow"></i> */}(
            {product.rating.count})
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
          {isAdded ? (
            <Link to="/cart">
              <p className="button button__primary no-underline">
                Go to Cart <i className="fi fi-rs-shopping-cart"></i>
              </p>
            </Link>
          ) : (
            <button
              className="button button__primary"
              onClick={() => {
                removeFromWishlistClickHandler(product);
                addToCartClickHandler(product);
              }}
            >
              {isCartLoading ? <Loader /> : "Move to Cart"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
