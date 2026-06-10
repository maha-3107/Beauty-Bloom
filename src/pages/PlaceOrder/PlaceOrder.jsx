import { useNavigate } from "react-router-dom";
import BottomNav from "../../components/BottomNav";

function PlaceOrder() {
  const navigate = useNavigate();

  return (
    <>
      <div className="container">
        <h1>Review Order</h1>

        <button
          className="primary-btn"
          onClick={() => navigate("/order-success")}
        >
          Confirm Order
        </button>
      </div>

      <BottomNav />
    </>
  );
}

export default PlaceOrder;