import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verifyToken = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const response = await axios.get(
            `${VITE_BASE_API}/auth/check-token`,
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          );
          setUser(response.data.user);
          setToken(token);
        } catch (error) {
          setToken(null);
          setUser(null);
          localStorage.removeItem("token");
        }
      }
      setLoading(false);
    };
    verifyToken();
  }, []);

  const login = (userData) => {
    setUser(userData.user);
    setToken(userData.token);
    localStorage.setItem("token", userData.token);
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading, token }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
