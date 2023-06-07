import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { ProductProvider } from "./Contexts/ProductContext";
import { FilterProvider } from "./Contexts/FilterContext";
import { ToastProvider } from "./Contexts/ToastContext";
import { AuthProvider } from "./Contexts/AuthContext";
import { CartProvider } from "./Contexts/CartContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ToastProvider>
        <AuthProvider>
          <ProductProvider>
            <CartProvider>
              <FilterProvider>
                <App />
              </FilterProvider>
            </CartProvider>
          </ProductProvider>
        </AuthProvider>
      </ToastProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
