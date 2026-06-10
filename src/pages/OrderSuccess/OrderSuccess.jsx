import { useNavigate } from "react-router-dom";

function OrderSuccess() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1>✅ Order Placed Successfully</h1>

      <button
        className="primary-btn"
        onClick={() => navigate("/orders")}
      >
        View Orders
      </button>
    </div>
  );
}

export default OrderSuccess;