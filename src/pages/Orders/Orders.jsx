function Orders() {
  const orders = [
    {
      id: 1,
      status: "Shipped",
    },
    {
      id: 2,
      status: "Delivered",
    },
  ];

  return (
    <div className="container">
      <h1>My Orders</h1>

      <div className="timeline">
        <div>✓ Ordered</div>
        <div>✓ Packed</div>
        <div>✓ Shipped</div>
        <div>Delivered</div>
      </div>

      <h2 style={{ marginTop: "20px" }}>
        Order History
      </h2>

      {orders.map((order) => (
        <div
          key={order.id}
          className="category-card"
        >
          <strong>Order #{order.id}</strong>
          <br />
          Status: {order.status}
        </div>
      ))}
    </div>
  );
}

export default Orders;