import { CartItem } from "../CartItem/CartItem";
import { LinkToPages } from "./LinkToPages";
import "./CartList.css";
import { PriceDetails } from "../PriceDetails/PriceDetails";
export function CartList({
  incClickHandler,
  decClickHandler,
  removeClickHandler,
  state,
  netPrice,
  netDiscount,
  cartLength,
}) {
  return (
    <div className="cart-wrapper">
      <PriceDetails netPrice={netPrice} netDiscount={netDiscount} />
      <div className="cart-grid">
        {cartLength === 0 && <LinkToPages />}
        {state.cart.map((prod) => {
          return (
            <CartItem
              key={prod.id}
              prod={prod}
              incClickHandler={() => incClickHandler(prod)}
              decClickHandler={() => decClickHandler(prod)}
              removeClickHandler={() => removeClickHandler(prod)}
            />
          );
        })}
      </div>
      <hr style={{ color: "var(--hr-green)", border: "none" }}></hr>
    </div>
  );
}
