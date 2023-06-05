import { createContext, useContext, useState } from "react";
import { finalProducts } from "../backend/db/products";

export const ProductContext = createContext();

export function useProduct() {
  return useContext(ProductContext);
}

export function ProductProvider({ children }) {
  const [products, setProducts] = useState(finalProducts);
  console.log({ products });
  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
}
