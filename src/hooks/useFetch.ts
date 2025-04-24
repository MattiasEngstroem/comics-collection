import { useEffect } from "react";
import { useState } from "react";

export default function useFetch(url: string) {
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(url);
      const data = await result.json();

      setItem(data);
    };
    fetchData();
  }, []);

  return item;
}
