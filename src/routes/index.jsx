import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import Categories from "../pages/Categories/Categories";
import Brands from "../pages/Brands/Brands";
import Cart from "../pages/Cart/Cart";
import Account from "../pages/Account/Account";
import Wishlist from "../pages/Wishlist/Wishlist";
import Checkout from "../pages/Checkout/Checkout";
import Orders from "../pages/Orders/Orders";
import EliteClub from "../pages/EliteClub/EliteClub";
import PaymentMethods from "../pages/PaymentMethods/PaymentMethods";
import ProfileSettings from "../pages/ProfileSettings/ProfileSettings";
import AddressBook from "../pages/AddressBook/AddressBook";

function RoutesConfig() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/brands" element={<Brands />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/account" element={<Account />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/checkout" element={<Checkout />} />

      <Route path="/orders" element={<Orders />} />
      <Route path="/elite" element={<EliteClub />} />
      <Route path="/address-book" element={<AddressBook />} />
      <Route path="/payment-methods" element={<PaymentMethods />} />
      <Route path="/profile-settings" element={<ProfileSettings />} />
    </Routes>
  );
}

export default RoutesConfig;