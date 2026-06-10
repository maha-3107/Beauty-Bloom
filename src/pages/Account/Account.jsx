import { useNavigate } from "react-router-dom";
import BottomNav from "../../components/BottomNav";

function Account() {
  const navigate = useNavigate();

  const menuItems = [
    {
      title: "My Orders",
      subtitle: "Track, return or buy again",
      path: "/orders",
    },
    {
      title: "Elite Club",
      subtitle: "Exclusive rewards & offers",
      path: "/elite-club",
    },
    {
      title: "Address Book",
      subtitle: "Manage delivery addresses",
      path: "/address-book",
    },
    {
      title: "Payment Methods",
      subtitle: "Cards, UPI & Wallets",
      path: "/payment-methods",
    },
    {
      title: "Profile Settings",
      subtitle: "Edit your personal details",
      path: "/profile-settings",
    },
  ];

  return (
    <>
      <div className="account-page">
        <div className="account-header">
          <div className="profile-avatar">M</div>

          <div>
            <h1>My Account</h1>
            <p>Welcome back, Mahalakshmi 💖</p>
          </div>
        </div>

        <div className="account-menu">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="account-card"
              onClick={() => navigate(item.path)}
            >
              <div>
                <h3>{item.title}</h3>
                <p>{item.subtitle}</p>
              </div>

              <span>›</span>
            </div>
          ))}
        </div>
      </div>

      <BottomNav />
    </>
  );
}

export default Account;