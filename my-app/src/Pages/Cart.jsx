import { CartList } from "../Components";
import { useCart } from "../Contexts/CartContext";
import { useToast } from "../Contexts/ToastContext";

export function Cart() {
  const { state, dispatch } = useCart();
  const { setToast } = useToast();
  function incClickHandler(item) {
    if (auth.token) dispatch({ type: "INC_IN_CART", payload: item });
  }
  function decClickHandler(item) {
    if (auth.token) {
      item.qty > 1
        ? dispatch({ type: "DEC_IN_CART", payload: item })
        : dispatch({ type: "REMOVE_FROM_CART", payload: item });
    }
  }

  const cartLength = state.cart
    .map((item) => item.qty)
    .reduce((acc, curr) => (acc = acc + curr), 0);
  let netPrice = state.cart
    .map((item) => item.qty * item.price)
    .reduce((acc, curr) => acc + curr, 0);
  let netDiscount = state.cart
    .map((item) => item.qty * item.discount)
    .reduce((acc, curr) => acc + curr, 0);
  return (
    <>
      <CartList
        incClickHandler={incClickHandler}
        decClickHandler={decClickHandler}
        state={state}
        dispatch={dispatch}
        netPrice={netPrice}
        netDiscount={netDiscount}
        cartLength={cartLength}
      />
    </>
  );
}
