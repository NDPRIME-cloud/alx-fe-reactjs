import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ProfileDetails from "./assets/components/ProfileDetails";
import ProfileSettings from "./assets/components/ProfileSettings";
import ProtectedRoute from "./assets/components/ProctectedRoute";
import Home from "./assets/components/Home";
import About from "./assets/components/About";
import Post from "./assets/components/Post";
import Profile from "./assets/components/profile";

function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <h1>Advanced Router Demo</h1>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />

            {/* Example of Dynamic Routing*/}
            <Route path="/post/:id" element={<Post />} />

            <Route
              path="/profile/*"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
            <Route path="/details" element={<ProfileDetails />} />
            <Route path="/settings" element={<ProfileSettings />} />
          </Routes>

          <Route path="*" element={<Navigate to="/" />} />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
