import { Link } from "react-router-dom";
import fakeAuth from "./Auth";

 function Home() {
  const login = () => fakeAuth.login(() => alert("You are now logged in!"));
  const logout = () => fakeAuth.logout(() => alert("You are logged out!"));

  return (
    <div>
      <h2>Home Page</h2>
      <nav style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
        <Link to="/about">About</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/post/101">View Post 101</Link>
      </nav>

      <div style={{ marginTop: "20px" }}>
        <button onClick={login}>Login</button>
        <button onClick={logout} style={{ marginLeft: "10px" }}>Logout</button>
      </div>
    </div>
  );
}
export default Home