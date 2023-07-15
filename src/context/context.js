import { createContext } from "react";
const initialState = { hi: "HI" };
export const Context = createContext();

export const Provider = ({ children }) => {
  return <Context.Provider value={initialState}>{children}</Context.Provider>;
};
