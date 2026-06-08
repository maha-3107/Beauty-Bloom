import { useWishlist } from "../../context/WishlistContext";
import BottomNav from "../../components/BottomNav";

function Wishlist() {
  const { wishlist } = useWishlist();

  return (
    <>
      <div className="container">
        <h1>Wishlist</h1>

        {wishlist.length === 0 ? (
          <p>No items in wishlist</p>
        ) : (
          wishlist.map((item) => (
            <div
              key={item.id}
              className="category-card"
            >
              <img
                src={item.image}
                alt={item.name}
                style={{
                  width: "80px",
                  height: "80px",
                  objectFit: "cover",
                  borderRadius: "10px",
                  marginRight: "10px",
                }}
              />

              <div>
                <h3>{item.name}</h3>
                <p>₹{item.price}</p>
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