import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Mockman from "mockman-js";
import "./App.css";
import {
  Navbar,
  Login,
  Wishlist,
  Cart,
  Toast,
  Loader,
  RequireAuth,
} from "./Components/index";
import { Products } from "./Pages/Products";
import { Home } from "./Pages/Home";

import { useProduct } from "./Contexts/ProductContext";
import { NotFound404 } from "./Pages/NotFound404";
import { SingleProduct } from "./Pages/SingleProduct";
function App() {
  const [openMenu, setOpenMenu] = useState(false);
  const [openSideBar, setOpenSideBar] = useState(false);
  const { isLoading } = useProduct();

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
              <Wishlist />
            </RequireAuth>
          }
        ></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/mockman" element={<Mockman />}></Route>
        {/* <Route path="*" element={<NotFound404 />}></Route> */}
      </Routes>
      {isLoading && <Loader />}
      <Toast />
    </div>
  );
}

export default App;
