// src/App.jsx
import React, { useState, useEffect } from "react";
import Home from "./home/Home";
import Collections from "./collections/Collections";
import { Routes, Route, Navigate } from "react-router-dom";
import Signup from "./components/Signup";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";
import Cart from "./components/Cart";
import SearchProvider from "./context/searchProvider.jsx";
import PurchaseHistory from "./components/PurchaseHistory.jsx";
import AddItem from "./components/AddItem";
import AdminDashboard from "./components/AdminDashboard.jsx";
import Loader from "./components/Loader"; // Import the Loader component

function App() {
  const [authUser, setAuthUser] = useAuth();
  const [loading, setLoading] = useState(true); // Initialize loading state

  useEffect(() => {
    // Simulate an initial loading time (e.g., API call)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // 1.5 seconds

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />; // Show loader while loading
  }

  return (
    <SearchProvider>
      <div className="bg-white text-black dark:bg-slate-900 dark:text-white min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/collection"
            element={
              authUser ? (
                <Collections />
              ) : (
                <Navigate to="/Signup" state={{ from: "/collection" }} />
              )
            }
          />
          <Route
            path="/purchaseHistory"
            element={
              authUser ? (
                <PurchaseHistory />
              ) : (
                <Navigate to="/Signup" state={{ from: "/purchaseHistory" }} />
              )
            }
          />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/dashboard" element={<AdminDashboard />} />
        </Routes>
        <Toaster />
      </div>
    </SearchProvider>
  );
}

export default App;
