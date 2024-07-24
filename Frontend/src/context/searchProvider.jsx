import React, { createContext, useState, useContext } from "react";

//creating context
export const searchContext = createContext(); // 0 is the initial value in this case

//creating provider
const SearchProvider = ({ children }) => {
  const [search, setSearch] = useState("");

  return (
    <searchContext.Provider value={[search, setSearch]}>
      {children}
    </searchContext.Provider>
  );
};

// Creating a custom searchedAnime hook
export const useSearchedAnime = () => {
  const context = useContext(searchContext);
  if (!context) {
    throw new Error("useSearchedAnime must be used within a SearchProvider");
  }
  return context;
};

export default SearchProvider;
