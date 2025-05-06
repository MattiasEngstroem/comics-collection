import { collectionItem } from "../types/types";
import { createContext, ReactNode, useState } from "react";
import { useEffect } from "react";

type CollectionContextType = {
  items: collectionItem[];
  setItems: React.Dispatch<React.SetStateAction<collectionItem[]>>;
};

export const CollectionContext = createContext<
  CollectionContextType | undefined
>(undefined);

export const CollectionProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<collectionItem[]>([]);

  //TODO: ta bort detta sedan, bara test
  useEffect(() => {
    const test: collectionItem[] = [
      { id: 6422, grade: "5", comment: "as", condition: "ryry", pages: 32 },
      { id: 6503, grade: "5", comment: "as", condition: "ryry", pages: 32 },
      { id: 6595, grade: "5", comment: "as", condition: "ryry", pages: 32 },
      { id: 6685, grade: "5", comment: "as", condition: "ryry", pages: 31 },
    ];
    setItems(test);
  }, []);
  //

  return (
    <CollectionContext.Provider value={{ items, setItems }}>
      {children}
    </CollectionContext.Provider>
  );
};
