import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Categories from "./pages/Categories/Categories";
import Brands from "./pages/Brands/Brands";
import Cart from "./pages/Cart/Cart";
import Account from "./pages/Account/Account";

function RoutesConfig() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/brands" element={<Brands />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/account" element={<Account />} />
    </Routes>
  );
}

export default RoutesConfig;