// Loader.jsx
import React from 'react';

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-purple-500">
      <div className="loader border-t-transparent border-solid rounded-full animate-spin border-4 border-red-500 w-16 h-16"></div>
    </div>
  );
};

export default Loader;


