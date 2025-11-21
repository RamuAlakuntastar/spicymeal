import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

const RedProtectedRoute = ({ children }) => {
  const token = Cookies.get("jwt_token");

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default RedProtectedRoute;
