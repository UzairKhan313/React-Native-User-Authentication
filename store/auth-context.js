import { createContext, useState } from "react";

export const AuthContext = createContext({
  token: "",
  isLoggedIn: false,
  authenticate: (token) => {},
  logout: () => {},
});

export default function AuthContextProvider({ children }) {
  const [authToken, setAuthToken] = useState();

  function authenticate(token) {
    setAuthToken(token);
  }
  function logout() {
    setAuthToken(null);
  }

  const value = {
    token: authToken,
    isLoggedIn: !!authToken,
    authenticate: authenticate,
    logout: logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
