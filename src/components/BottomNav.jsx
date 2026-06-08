import { NavLink } from "react-router-dom";
import {
  Home,
  Grid,
  Gem,
  Heart,
  ShoppingCart,
  User
} from "lucide-react";

function BottomNav() {
  return (
    <div className="bottom-nav">

      <NavLink to="/">
        <Home size={20} />
        <span>Home</span>
      </NavLink>

      <NavLink to="/categories">
        <Grid size={20} />
        <span>Categories</span>
      </NavLink>

      <NavLink to="/brands">
        <Gem size={20} />
        <span>Brands</span>
      </NavLink>

      <NavLink to="/wishlist">
        <Heart size={20} />
        <span>Wishlist</span>
      </NavLink>

      <NavLink to="/cart">
        <ShoppingCart size={20} />
        <span>Cart</span>
      </NavLink>

      <NavLink to="/account">
        <User size={20} />
        <span>Account</span>
      </NavLink>

    </div>
  );
}

export default BottomNav;