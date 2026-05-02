"use client";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);

  const login = (email, password) => {
    const saved = JSON.parse(localStorage.getItem("registeredUser"));

    if (saved && saved.email === email && saved.password === password) {
      setUser(saved);
      localStorage.setItem("user", JSON.stringify(saved));
      return true;
    }
    return false;
  };

  const register = (data) => {
    localStorage.setItem("registeredUser", JSON.stringify(data));
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);