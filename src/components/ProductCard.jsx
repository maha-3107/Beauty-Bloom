import { Heart } from "lucide-react";
import { useCart } from "../context/CartContext.jsx";
import { useWishlist } from "../context/WishlistContext.jsx";

function ProductCard({ product }) {
  const { addToCart } = useCart();
  const { addToWishlist } = useWishlist();

  return (
    <div className="product-card">

      <div className="wishlist-icon">
        <Heart
          size={20}
          onClick={() => addToWishlist(product)}
        />
      </div>

      <img
        src={product.image}
        alt={product.name}
      />

      <h4>{product.name}</h4>

      <p>₹{product.price}</p>

      <button
        onClick={() => addToCart(product)}
      >
        Add To Cart
      </button>

    </div>
  );
}

export default ProductCard;