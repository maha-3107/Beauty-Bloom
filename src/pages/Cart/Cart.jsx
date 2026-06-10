import BottomNav from "../../components/BottomNav";
import { useCart } from "../../context/CartContext.jsx";
import { useNavigate } from "react-router-dom";

function Cart() {
  const navigate = useNavigate();

  const {
    cart,
    increaseQty,
    decreaseQty,
    removeFromCart
  } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <>
      <div className="container">
        <h1>🛒 My Cart</h1>

        {cart.length === 0 ? (
          <h3>Cart Empty</h3>
        ) : (
          <>
            {cart.map((item) => (
              <div
                className="cart-card"
                key={item.id}
              >
                <img
                  src={item.image}
                  alt={item.name}
                />

                <div>
                  <h4>{item.name}</h4>

                  <p>₹{item.price}</p>

                  <button
                    onClick={() =>
                      decreaseQty(item.id)
                    }
                  >
                    -
                  </button>

                  {" "}
                  {item.quantity}
                  {" "}

                  <button
                    onClick={() =>
                      increaseQty(item.id)
                    }
                  >
                    +
                  </button>

                  <br /><br />

                  <button
                    onClick={() =>
                      removeFromCart(item.id)
                    }
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}

            <div className="cart-summary">
              <h2>Total ₹{total}</h2>

              <button
                className="checkout-btn"
                onClick={() =>
                  navigate("/checkout")
                }
              >
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>

      <BottomNav />
    </>
  );
}

export default Cart;