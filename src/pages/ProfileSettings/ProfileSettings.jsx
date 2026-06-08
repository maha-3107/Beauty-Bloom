function ProfileSettings() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Profile Settings</h2>

      <form
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}
      >
        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Email Address" />
        <input type="tel" placeholder="Phone Number" />

        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}

export default ProfileSettings;