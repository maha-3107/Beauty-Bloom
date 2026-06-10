import BottomNav from "../../components/BottomNav";

function PaymentMethods() {
  const methods = [
    "Credit / Debit Card",
    "UPI",
    "Net Banking",
    "Cash on Delivery",
    "Wallets",
  ];

  return (
    <>
      <div className="container">
        <h2>Payment Methods</h2>

        {methods.map((method, index) => (
          <div
            key={index}
            className="payment-method-card"
          >
            {method}
          </div>
        ))}
      </div>

      <BottomNav />
    </>
  );
}

export default PaymentMethods;