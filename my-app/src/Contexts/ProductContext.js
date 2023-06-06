import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { ProductReducer, initialState } from "../reducers/ProductReducer";
import { useToast } from "./ToastContext";

export const ProductContext = createContext();

export function useProduct() {
  return useContext(ProductContext);
}

export function ProductProvider({ children }) {
  // const [products, setProducts] = useState(products);
  const [state, dispatch] = useReducer(ProductReducer, initialState);
  const { setToast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  async function fetchProducts() {
    try {
      setIsLoading(true);
      const response = await fetch("/api/products");
      const { products } = await response.json();
      if (response.status === 200) {
        console.log({ products }, "from fetch");
        dispatch({ type: "SET_PRODUCTS", payload: products });
      }
    } catch (err) {
      console.error(err, "at fetch Products");
      setToast((prev) => ({
        ...prev,
        isVisible: "show",
        message: "Error at displaying products",
      }));
    } finally {
      setIsLoading(false);
    }
  }
  useEffect(() => {
    fetchProducts();
  }, []);
  function addToCartClickHandler(product) {}
  return (
    <ProductContext.Provider
      value={{
        state,
        dispatch,
        isLoading,
        setIsLoading,
        addToCartClickHandler,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
