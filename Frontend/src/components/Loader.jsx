// src/components/Loader.jsx
import React from "react";

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 z-50">
      <div className="relative">
        <div className="w-20 h-20 border-4 border-t-4 border-white rounded-full animate-spin"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xl font-semibold">
          Anime Store
        </div>
      </div>
    </div>
  );
};

export default Loader;
