import { useEffect } from "react";
import { useState } from "react";

export default function useFetch<T>(url: string): T | null {
  const [item, setItem] = useState<T | null>(null);

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
