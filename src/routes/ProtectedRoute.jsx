import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";

export const ProtectedRoute = ({ redirectPath = "/", children }) => {
  const { isLogged } = useContext(AuthContext);

  if (!isLogged) {
    return <Navigate to={redirectPath} replace />;
  }

  return children;
};
