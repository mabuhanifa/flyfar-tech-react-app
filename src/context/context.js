import { createContext } from "react";

export const Context = createContext();

export const Provider = ({ children }) => {
  <Context.Provider value={{ hi: "hi" }}>{children}</Context.Provider>;
};


