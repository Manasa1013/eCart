import { Link } from "react-router-dom";
import { getTrimmed } from "../../utils/CommonFunctions";
import { Loader } from "../Loader/Loader";
import "./SingleProductCard.css";
import "../ProductCard/ProductCard.css";
import "../ProductList/ProductList.css";

import { useCart } from "../../Contexts/CartContext";
import { useAuth } from "../../Contexts/AuthContext";
import { useToast } from "../../Contexts/ToastContext";
import { useWishlist } from "../../Contexts/WishlistContext";

export function SingleProductCard({ addToCartHandler, product }) {
  console.log({ product }, "at singleproductCard");
  const { isCartLoading, state } = useCart();

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
    <div className="center">
      <div className="single-product__container">
        <div className="img__container">
          <img
            className="w-full"
            width="100%"
            height="auto"
            src={product?.src[1]}
            alt={product?.name}
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
              <span>{product.rating.rate}</span>⭐
              {/* <i className="fi fi-rs-star bg-yellow"></i> */}(
              {product.rating.count})
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
                  addToCartClickHandler(product);
                }}
              >
                {isCartLoading ? <Loader /> : "Add to Cart"}
              </button>
            )}
            <button
              className="button button--secondary"
              onClick={() => {
                {
                  isWishlisted
                    ? removeFromWishlistClickHandler(product)
                    : addToWishlistClickHandler(product);
                }
              }}
            >
              {isWishlisted ? "Remove from Wishlist" : "Wishlist"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
