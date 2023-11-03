import { createContext, useContext, useReducer } from "react";
import { basketReducer } from "../reducers/basketReducer";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const initialState = {
    basket: [],
  };

  const [state, dispatch] = useReducer(basketReducer, initialState);

  const value = { state, dispatch };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useApp = () => useContext(AppContext);
