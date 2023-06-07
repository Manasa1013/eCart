import { Link } from "react-router-dom";
import "../ProductCard/ProductCard.css";
import { getTrimmed } from "../../utils/CommonFunctions";
import { useCart } from "../../Contexts/CartContext";
import { useAuth } from "../../Contexts/AuthContext";

export const CartItem = ({ prod }) => {
  const plusIcon = "fi fi-rs-plus ";
  const minusIcon = "fi fi-rs-minus ";
  const { auth } = useAuth();
  const { removeItemFromCartHandler, updateCountHandler } = useCart();
  function removeClickHandler(item) {
    auth.token
      ? removeItemFromCartHandler("SET_CART", item)
      : setToast((prev) => ({
          ...prev,
          isVisible: "show",
          message: "Login to remove",
        }));
  }
  function updateCountClickHandler(actionType, item) {
    auth.token
      ? updateCountHandler(actionType, item)
      : setToast((prev) => ({
          ...prev,
          isVisible: "show",
          message: "Login to update quantity",
        }));
  }
  return (
    <div className="cart-card__container">
      <div className="cart-card__item">
        <Link className="link" to={`/products/${prod._id}`}>
          <div className="cart-card__img">
            <img
              className="w-full"
              width="100%"
              height="auto"
              src={prod.src[1]}
              alt={prod.name}
            />
          </div>
        </Link>

        <div className="card-contents">
          <div className="product--desc">
            <h4 className="product--name">{getTrimmed(prod.name, 3)}</h4>
            <p className="product--info">{getTrimmed(prod.description, 4)}..</p>
            <div className="product--price">
              <span className="price">₹{prod.price}</span>
              <span className="strike--price">
                ₹{prod.price + prod.discount}
              </span>
              <span className="discount">(₹{prod.discount} OFF)</span>
            </div>
          </div>

          <div className="flex--container">
            <button
              type="button"
              className=".button button__icon"
              style={{ color: "var(--color-dgreen)" }}
              onClick={() => updateCountClickHandler("INCREASE_QUANTITY", prod)}
            >
              <i className={plusIcon}></i>
            </button>
            <small className="align-left">
              {prod.qty > 0 && `${prod.qty}`}
            </small>
            <button
              type="button"
              className=".button button__icon"
              style={{ color: "var(--color-dgreen)" }}
              onClick={() => {
                prod.qty > 1
                  ? updateCountClickHandler("DECREASE_QUANTITY", prod)
                  : removeClickHandler(prod);
              }}
            >
              {/* <i className={minusIcon}></i> */}
              {"➖"}
            </button>
          </div>
        </div>
      </div>
      <div className="flex-row-container">
        <button
          type="button"
          className="button button__secondary remove"
          onClick={() => {
            removeClickHandler(prod);
          }}
        >
          Remove
        </button>
        <button
          type="button"
          className="button button__secondary move-wishlist"
          onClick={() => removeClickHandler(prod)}
        >
          Move to Wishlist
        </button>
      </div>
    </div>
  );
};
