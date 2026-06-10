import { useNavigate } from "react-router-dom";
import BottomNav from "../../components/BottomNav";

function Checkout() {
  const navigate = useNavigate();

  return (
    <>
      <div className="checkout-page">
        <div className="checkout-card">
          <h1>Checkout</h1>
          <p className="checkout-subtitle">
            Complete your details to place your order
          </p>

          <div className="checkout-form">
            <div className="input-group">
              <label>Full Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="checkout-input"
              />
            </div>

            <div className="input-group">
              <label>Address</label>
              <textarea
                placeholder="Enter your delivery address"
                className="checkout-textarea"
              />
            </div>

            <div className="input-group">
              <label>Phone Number</label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                className="checkout-input"
              />
            </div>

            <div className="order-summary">
              <h3>Order Summary</h3>
              <div className="summary-row">
                <span>Items Total</span>
                <span>₹999</span>
              </div>

              <div className="summary-row">
                <span>Delivery</span>
                <span>Free</span>
              </div>

              <div className="summary-row total">
                <span>Total</span>
                <span>₹999</span>
              </div>
            </div>

            <button
              className="checkout-btn"
              onClick={() => navigate("/place-order")}
            >
              Proceed To Place Order
            </button>
          </div>
        </div>
      </div>

      <BottomNav />
    </>
  );
}

export default Checkout;