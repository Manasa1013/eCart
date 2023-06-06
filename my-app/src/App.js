import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Mockman from "mockman-js";
import "./App.css";
import { Navbar, Login } from "./Components/index";
import { Products } from "./Pages/Products";
import { Home } from "./Pages/Home";
import { Toast } from "./Components/Toast/Toast";
import { Loader } from "./Components/Loader/Loader";
import { useProduct } from "./Contexts/ProductContext";

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
        <Route path="/login" element={<Login />}></Route>
        <Route path="/mockman" element={<Mockman />}></Route>
        <Route path="*" element={<Home />}></Route>
      </Routes>
      {isLoading && <Loader />}
      <Toast />
    </div>
  );
}

export default App;
