import { useState, createContext } from "react";

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [data, setData] = useState(true);
  return (
    <AppContext.Provider value={{ data, setData }}>
      {props.children}
    </AppContext.Provider>
  );
};
