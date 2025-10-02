import React from "react";
import { Routes, Route } from "react-router";
import Home from "./Home";
import Cart from "./Cart";
import ProductDetails from "./ProductDetails";
import Shop from "./Shop"


const Rout = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/shop" element={<Shop/>}/>
      </Routes>
    </>
  );
};

export default Rout;
