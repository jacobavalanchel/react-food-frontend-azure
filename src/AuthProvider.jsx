import * as React from "react";
import { useContext } from "react";

const authContext = React.createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken_] = React.useState(
    localStorage.getItem("nutri-daiet-token"),
  );
  const setToken = (newToken) => {
    setToken_(newToken);
  };
  React.useEffect(() => {
    if (token) {
      localStorage.setItem("nutri-daiet-token", token);
    } else {
      localStorage.removeItem("nutri-daiet-token");
    }
  }, [token]);

  const contextValue = React.useMemo(() => ({ token, setToken }), [token]);
  return (
    <authContext.Provider value={contextValue}>{children}</authContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(authContext);
};

export default AuthProvider;
