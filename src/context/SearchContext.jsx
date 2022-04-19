import React, { useState, createContext } from "react";

// query is the state
// SearchHandler is a function for changing the state.
export const SearchContext = createContext({
  query: "",
  searchHandler: () => {},
});

// Defining a simple HOC component
const SearchContextProvider = (props) => {
  const [query, setQuery] = useState("");

  const searchHandler = (query) => {
    setQuery(query);
  };

  return (
    <SearchContext.Provider
      value={{ query: query, searchHandler: searchHandler }}
    >
      {props.children}
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;