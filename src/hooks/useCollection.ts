import { useContext } from "react";
import { CollectionContext } from "../context/CollectionContext";

export const useCollection = () => {
  const context = useContext(CollectionContext);

  if (context === undefined) {
    throw new Error("useCollection måste användas inom en CollectionProvider");
  }

  return context;
};
