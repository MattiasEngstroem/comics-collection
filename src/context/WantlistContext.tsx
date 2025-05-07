import { createContext, ReactNode, useState } from "react";
import { useEffect } from "react";

type WantlistContextType = {
  wishes: number[];
  setWishes: React.Dispatch<React.SetStateAction<number[]>>;
};

export const WantlistContext = createContext<WantlistContextType | undefined>(
  undefined
);

export const WantlistProvider = ({ children }: { children: ReactNode }) => {
  const [wishes, setWishes] = useState<number[]>([]);

  //TODO: ta bort detta sedan, bara test
  useEffect(() => {
    const test: number[] = [6985, 7024, 7066, 6937];
    setWishes(test);
  }, []);
  //

  return (
    <WantlistContext.Provider value={{ wishes, setWishes }}>
      {children}
    </WantlistContext.Provider>
  );
};
