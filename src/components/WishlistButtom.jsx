import { Heart } from "lucide-react";
import { useWishlist } from "../context/WishlistContext.jsx";

function WishlistButton({ product }) {

 const { addToWishlist } =
  useWishlist();

 return (
  <button
   onClick={() =>
     addToWishlist(product)
   }
  >
   <Heart size={18}/>
  </button>
 );
}

export default WishlistButton;