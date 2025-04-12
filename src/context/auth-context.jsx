import { createContext, useContext, useState, useEffect } from "react";
import axios from "../utils/axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    isLoading: true,
    user: null,
  });

  useEffect(() => {
    const verifyToken = async () => {
      try {
        const res = await axios.get("/auth/check-token");
        setAuth({ isLoading: false, user: res.data.user });
      } catch (error) {
        setAuth({ isLoading: false, user: null });
      }
    };
    verifyToken();
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("menu");
    setAuth({
      isLoading: false,
      user: null,
    });
  };

  const login = (user) => {
    setAuth({
      isLoading: false,
      user,
    });
  };

  return (
    <AuthContext.Provider value={{ login, logout, auth }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
