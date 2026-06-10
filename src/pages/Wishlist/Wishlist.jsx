import { useWishlist } from "../../context/WishlistContext";
import { useCart } from "../../context/CartContext";
import BottomNav from "../../components/BottomNav";

function Wishlist() {
  const {
    wishlist,
    removeFromWishlist,
  } = useWishlist();

  const { addToCart } = useCart();

  const moveToCart = (item) => {
    addToCart(item);
    removeFromWishlist(item.id);
  };

  return (
    <>
      <div className="container">
        <h1>❤️ Wishlist</h1>

        {wishlist.length === 0 ? (
          <p>No items in wishlist</p>
        ) : (
          wishlist.map((item) => (
            <div
              key={item.id}
              className="wishlist-card"
            >
              <img
                src={item.image}
                alt={item.name}
              />

              <div className="wishlist-info">
                <h3>{item.name}</h3>
                <p>₹{item.price}</p>

                <div className="wishlist-actions">
                  <button
                    className="move-cart-btn"
                    onClick={() => moveToCart(item)}
                  >
                    🛒 Move to Cart
                  </button>

                  <button
                    className="remove-btn"
                    onClick={() =>
                      removeFromWishlist(item.id)
                    }
                  >
                    🗑️ Remove
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      <BottomNav />
    </>
  );
}

export default Wishlist;