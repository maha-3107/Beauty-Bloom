function PaymentMethods() {
  const methods = [
    "Credit / Debit Card",
    "UPI",
    "Net Banking",
    "Cash on Delivery",
    "Wallets",
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2>Payment Methods</h2>

      {methods.map((method, index) => (
        <div
          key={index}
          style={{
            padding: "14px",
            marginBottom: "10px",
            border: "1px solid #ddd",
            borderRadius: "10px",
          }}
        >
          {method}
        </div>
      ))}
    </div>
  );
}

export default PaymentMethods;