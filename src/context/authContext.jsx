import { createContext } from "react";
import { useAuth } from "../hooks/useAuth";

const AuthContext = createContext("");

const AuthContextProvider = ({ children }) => {
  const {
    token: isLogged,
    isLoading,
    serverError,
    signin,
    signout,
  } = useAuth();

  return (
    <AuthContext.Provider
      value={{ isLogged, isLoading, serverError, signin, signout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };
