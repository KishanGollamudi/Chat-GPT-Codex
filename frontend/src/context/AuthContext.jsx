import { createContext, useContext, useMemo, useState } from 'react';

const AuthContext = createContext(null);

const storageKey = 'devops_app_token';

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(() => localStorage.getItem(storageKey));

  const login = (newToken) => {
    localStorage.setItem(storageKey, newToken);
    setToken(newToken);
  };

  const logout = () => {
    localStorage.removeItem(storageKey);
    setToken(null);
  };

  const value = useMemo(() => ({ token, login, logout }), [token]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
