// Loader.jsx
import React from 'react';

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <div className="loader border-t-transparent border-solid rounded-full animate-spin animate-pulse border-4 border-red-500 w-32 h-32"></div>
    </div>
  );
};

export default Loader;


