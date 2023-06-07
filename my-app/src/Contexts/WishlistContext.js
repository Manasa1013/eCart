import { createContext, useContext, useReducer, useState } from "react";

import { WishlistReducer, initialState } from "../reducers/WishlistReducer";
import { useToast } from "./ToastContext";
export const WishlistContext = createContext();

export function useWishlist() {
  return useContext(WishlistContext);
}
console.log(localStorage.getItem("token"));
const token = localStorage.getItem("token");

export function WishlistProvider({ children }) {
  const { toast, setToast } = useToast();
  const [isWishedLoading, setIsWishedLoading] = useState();
  const [state, dispatch] = useReducer(WishlistReducer, initialState);

  async function addToWishlistHandler(actionType, product) {
    try {
      setIsWishedLoading(true);

      const response = await fetch("/api/user/wishlist", {
        method: "POST",
        headers: { authorization: token },
        body: JSON.stringify({ product }),
      });

      const { wishlist } = await response.json();

      const actionPayload = wishlist;
      setToast((prev) => ({
        ...prev,
        isVisible: "show",
        message: `Wishlisted the product`,
      }));
      dispatch({ type: actionType, payload: actionPayload });
    } catch (e) {
      console.error(e);
    } finally {
      setIsWishedLoading(false);
    }
  }

  async function removeFromWishlistHandler(actionType, product) {
    try {
      setIsWishedLoading(true);
      const response = await fetch(`/api/user/wishlist/${product._id}`, {
        method: "DELETE",
        headers: { authorization: token },
      });

      const { wishlist } = await response.json();

      const actionPayload = wishlist;
      setToast((prev) => ({
        ...prev,
        isVisible: "show",
        message: `Removed from wishlist`,
      }));
      dispatch({ type: actionType, payload: actionPayload });
    } catch (e) {
      console.error(e);
    } finally {
      setIsWishedLoading(false);
    }
  }

  return (
    <WishlistContext.Provider
      value={{
        state,
        dispatch,
        isWishedLoading,
        setIsWishedLoading,
        addToWishlistHandler,
        removeFromWishlistHandler,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}
