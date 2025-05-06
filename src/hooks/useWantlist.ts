import { useContext } from "react";
import { WantlistContext } from "../context/WantlistContext";

export const useWantlist = () => {
  const context = useContext(WantlistContext);

  if (context === undefined) {
    throw new Error("useWantlist måste användas inom en WantlistProvider");
  }

  return context;
};
