import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Mockman from "mockman-js";
import "./App.css";
import {
  Navbar,
  Login,
  Toast,
  Loader,
  RequireAuth,
  UserProfile,
  Signup,
} from "./Components/index";
import { Products } from "./Pages/Products";
import { Cart } from "./Pages/Cart";
import { WishlistPage } from "./Pages/WishlistPage";
import { Home } from "./Pages/Home";

import { useProduct } from "./Contexts/ProductContext";
import { NotFound404 } from "./Pages/NotFound404";
import { SingleProduct } from "./Pages/SingleProduct";
import { useToast } from "./Contexts/ToastContext";
function App() {
  const [openMenu, setOpenMenu] = useState(false);
  const [openSideBar, setOpenSideBar] = useState(false);
  const { isLoading } = useProduct();
  const { hideToastBar, toast } = useToast();
  useEffect(() => {
    let timer = setTimeout(() => {
      if (toast.isVisible === "show") {
        hideToastBar();
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, [toast, hideToastBar]);
  return (
    <div className="App">
      <Navbar
        openMenu={openMenu}
        setOpenMenu={setOpenMenu}
        openSideBar={openSideBar}
        setOpenSideBar={setOpenSideBar}
      />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/products"
          element={
            <Products
              openSideBar={openSideBar}
              setOpenSideBar={setOpenSideBar}
            />
          }
        ></Route>
        <Route path="/products/:productId" element={<SingleProduct />}></Route>
        <Route
          path="/cart"
          element={
            <RequireAuth>
              <Cart />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/wishlist"
          element={
            <RequireAuth>
              <WishlistPage />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/profile"
          element={
            <RequireAuth>
              <UserProfile />
            </RequireAuth>
          }
        ></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/mockman" element={<Mockman />}></Route>
        <Route path="*" element={<NotFound404 />}></Route>
      </Routes>
      {isLoading && <Loader />}
      <Toast />
    </div>
  );
}

export default App;
