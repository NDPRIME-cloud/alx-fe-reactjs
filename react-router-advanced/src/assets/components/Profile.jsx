import { Link, Outlet } from "react-router-dom";

 function Profile() {
  return (
    <div>
      <h2>User Profile</h2>
      <nav style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
        <Link to="details">Profile Details</Link>
        <Link to="settings">Profile Settings</Link>
      </nav>

      <hr />
      {/* Outlet renders nested child components */}
      <Outlet />
    </div>
  );
}

export default Profile
