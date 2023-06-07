import { CartList } from "../Components";
import { useCart } from "../Contexts/CartContext";

export function Cart() {
  const { state, dispatch } = useCart();
  function incClickHandler(item) {
    dispatch({ type: "INC_IN_CART", payload: item });
  }
  function decClickHandler(item) {
    item.count > 1
      ? dispatch({ type: "DEC_IN_CART", payload: item })
      : dispatch({ type: "REMOVE_FROM_CART", payload: item });
  }
  function removeClickHandler(item) {
    dispatch({ type: "REMOVE_FROM_CART", payload: item });
  }
  const cartLength = state.cart
    .map((item) => item.count)
    .reduce((acc, curr) => (acc = acc + curr), 0);
  let netPrice = state.cart
    .map((item) => item.count * item.price)
    .reduce((acc, curr) => acc + curr, 0);
  let netDiscount = state.cart
    .map((item) => item.count * item.discount)
    .reduce((acc, curr) => acc + curr, 0);
  return (
    <>
      <CartList
        incClickHandler={incClickHandler}
        decClickHandler={decClickHandler}
        removeClickHandler={removeClickHandler}
        state={state}
        dispatch={dispatch}
        netPrice={netPrice}
        netDiscount={netDiscount}
        cartLength={cartLength}
      />
    </>
  );
}
