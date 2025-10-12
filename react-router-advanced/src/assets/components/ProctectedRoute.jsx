import { Navigate } from "react-router-dom";
import fakeAuth from "./Auth";

export default function ProtectedRoute({ children }) {
  if (!fakeAuth.isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  return children;
}
