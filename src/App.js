import React from "react";
// react router dom
import { BrowserRouter, Routes, Route } from "react-router-dom";
// pages
import Home from "./pages/Home";
import DetailProduct from "./pages/DetailProduct";
import Checkout from "./pages/Checkout";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ShowLayout from "./pages/ShowLayout";
import HideLayout from "./pages/HideLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Show */}
        <Route element={<ShowLayout />}>
          <Route path="/" element={<App />} />
          <Route index element={<Home />} />
          <Route path="detailproduct" element={<DetailProduct />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
        {/* Hide */}
        <Route element={<HideLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
