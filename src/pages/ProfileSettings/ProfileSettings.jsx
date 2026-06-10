import BottomNav from "../../components/BottomNav";

function ProfileSettings() {
  return (
    <>
      <div className="container">
        <h2>Profile Settings</h2>

        <form className="profile-form">
          <input
            type="text"
            placeholder="Full Name"
          />

          <input
            type="email"
            placeholder="Email Address"
          />

          <input
            type="tel"
            placeholder="Phone Number"
          />

          <button type="submit">
            Save Changes
          </button>
        </form>
      </div>

      <BottomNav />
    </>
  );
}

export default ProfileSettings;