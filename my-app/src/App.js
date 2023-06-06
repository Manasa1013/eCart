import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Mockman from "mockman-js";
import "./App.css";
import { Navbar, Aside } from "./Components/index";
import { Products } from "./Pages/Products";
import { finalProducts } from "./backend/db/products";
import { Home } from "./Pages/Home";

function App() {
  const [openMenu, setOpenMenu] = useState(false);
  const [openSideBar, setOpenSideBar] = useState(false);
  function getProducts() {
    console.log({ finalProducts });
  }
  getProducts();
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
        <Route path="/mockman" element={<Mockman />}></Route>
        <Route
          path="*"
          element={
            <>
              <h1>Home</h1>
            </>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
