import { useState } from "react";
import { MapPin, Plus, Trash2 } from "lucide-react";
import BottomNav from "../../components/BottomNav";

function AddressBook() {
  const [addresses, setAddresses] = useState([]);

  const addAddress = () => {
    const name = prompt("Enter Full Name");
    const street = prompt("Enter Street Address");
    const city = prompt("Enter City");
    const pincode = prompt("Enter Pincode");

    if (!name || !street || !city || !pincode) return;

    const newAddress = {
      id: Date.now(),
      name,
      street,
      city,
      pincode,
    };

    setAddresses([...addresses, newAddress]);
  };

  const deleteAddress = (id) => {
    setAddresses(
      addresses.filter((address) => address.id !== id)
    );
  };

  return (
    <>
      <div className="container">
        <div className="page-header">
          <h1>📍 Address Book</h1>
          <p>Manage your delivery addresses</p>
        </div>

        <button
          className="primary-btn"
          onClick={addAddress}
        >
          <Plus size={18} />
          Add New Address
        </button>

        {addresses.length === 0 ? (
          <div className="empty-address-card">
            <MapPin size={60} />

            <h2>No Address Added</h2>

            <p>
              Save your addresses for faster checkout.
            </p>
          </div>
        ) : (
          <div className="address-list">
            {addresses.map((address) => (
              <div
                key={address.id}
                className="address-card"
              >
                <h3>{address.name}</h3>

                <p>
                  {address.street}
                  <br />
                  {address.city}
                  <br />
                  {address.pincode}
                </p>

                <button
                  className="delete-btn"
                  onClick={() =>
                    deleteAddress(address.id)
                  }
                >
                  <Trash2 size={18} />
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      <BottomNav />
    </>
  );
}

export default AddressBook;