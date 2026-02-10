import { Routes, Route } from "react-router-dom";
import Products from "../pages/products";
import Product from "../pages/product";
import Cart from "../pages/cart";
import Home from "../pages/home";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:id" element={<Product />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};

export default AppRoutes;

