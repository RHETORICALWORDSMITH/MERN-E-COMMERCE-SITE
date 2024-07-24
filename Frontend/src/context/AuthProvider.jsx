import React, { createContext, useState, useContext } from "react";

// Creating context
export const AuthContext = createContext();

// Provider component
const AuthProvider = ({ children }) => {
  const initialAuthUser = localStorage.getItem("userInfo");
  const [authUser, setAuthUser] = useState(
    initialAuthUser ? JSON.parse(initialAuthUser) : undefined
  );

  return (
    <AuthContext.Provider value={[authUser, setAuthUser]}>
      {children}
    </AuthContext.Provider>
  );
};

// Creating a custom useAuth hook
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export default AuthProvider;
