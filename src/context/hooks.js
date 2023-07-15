import { useContext } from "react";
import { Context } from "./context";

const useProvider = () => {
  const context = useContext(Context);
  return context;
};

export default useProvider;