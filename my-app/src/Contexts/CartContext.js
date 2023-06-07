import { createContext, useContext, useReducer, useState } from "react";

import { CartReducer, initialState } from "../reducers/CartReducer";
import { useToast } from "./ToastContext";
export const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}
console.log(localStorage.getItem("token"));
const token = localStorage.getItem("token");

export function CartProvider({ children }) {
  const { toast, setToast } = useToast();
  const [state, dispatch] = useReducer(CartReducer, initialState);

  const [isCartLoading, setIsCartLoading] = useState(false);

  async function addToCartHandler(actionType, product) {
    try {
      setIsCartLoading(() => true);
      const response = await fetch("/api/user/cart", {
        method: "POST",
        headers: { authorization: token },
        body: JSON.stringify({ product }),
      });
      console.log({ response }, "from addtocarthandler");

      if (response.status === 201) {
        const { cart } = await response.json();
        console.log({ cart });
        const actionPayload = cart;
        setToast((prev) => ({
          ...prev,
          isVisible: "show",
          message: `Added product to cart`,
        }));
        dispatch({ type: actionType, payload: actionPayload });
      }
    } catch (err) {
      console.error(err, "at addToCartHandler");
    } finally {
      setIsCartLoading(() => false);
    }
  }
  async function removeItemFromCartHandler(actionType, product) {
    try {
      setIsCartLoading(() => true);
      console.log({ product }, "at remove");
      const response = await fetch(`/api/user/cart/${product._id}`, {
        method: "DELETE",
        headers: { authorization: token },
      });
      console.log({ response }, "from removeItemFromCartHandler");

      if (response.status === 200) {
        const { cart } = await response.json();
        console.log({ cart });
        const actionPayload = cart;
        setToast((prev) => ({
          ...prev,
          isVisible: "show",
          message: `Removed product to cart`,
        }));
        dispatch({ type: actionType, payload: actionPayload });
      }
    } catch (err) {
      console.error(err, "at removeItemFromCartHandler");
    } finally {
      setIsCartLoading(() => false);
    }
  }

  async function updateCountHandler(actionType, product) {
    const updateType =
      actionType === "INCREASE_QUANTITY" ? "increment" : "decrement";
    console.log({ updateType });
    try {
      setIsCartLoading(() => true);
      const response = await fetch(`/api/user/cart/${product._id}`, {
        method: "POST",
        headers: { authorization: token },
        body: JSON.stringify({ action: { type: updateType } }),
      });
      console.log({ response }, "from updateCountHandler");

      if (response.status === 200) {
        const { cart } = await response.json();
        console.log({ cart });
        const actionPayload = cart;
        setToast((prev) => ({
          ...prev,
          isVisible: "show",
          message: `Updated quantity in cart`,
        }));
        dispatch({ type: actionType, payload: actionPayload });
      }
    } catch (err) {
      console.error(err, "at updateQuantityHandler");
    } finally {
      setIsCartLoading(() => false);
    }
  }
  return (
    <CartContext.Provider
      value={{
        state,
        dispatch,
        isCartLoading,
        setIsCartLoading,
        addToCartHandler,
        removeItemFromCartHandler,
        updateCountHandler,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
