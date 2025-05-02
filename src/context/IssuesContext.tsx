import { createContext, useState, ReactNode } from "react";
import { issueObject, replyObject } from "../types/types";
import useFetch from "../hooks/useFetch";
import { useEffect } from "react";

type IssuesContextType = {
  issues: issueObject[];
};

export const IssuesContext = createContext<IssuesContextType | undefined>(
  undefined
);

export const IssuesProvider = ({ children }: { children: ReactNode }) => {
  const [issues, setIssues] = useState<issueObject[]>([]);

  const allIssues: issueObject[] = [];

  // försökte göra en for-loop av detta men det accepterades inte av react. Därför blev fetch:arna allt annat än DRY
  const reply0: replyObject | null = useFetch(
    `/issues&filter=volume:2127&limit=100&offset=0&field_list=cover_date,id,image,issue_number,name`
  );
  const reply1: replyObject | null = useFetch(
    `/issues&filter=volume:2127&limit=100&offset=100&field_list=cover_date,id,image,issue_number,name`
  );
  const reply2: replyObject | null = useFetch(
    `/issues&filter=volume:2127&limit=100&offset=200&field_list=cover_date,id,image,issue_number,name`
  );
  const reply3: replyObject | null = useFetch(
    `/issues&filter=volume:2127&limit=100&offset=300&field_list=cover_date,id,image,issue_number,name`
  );
  const reply4: replyObject | null = useFetch(
    `/issues&filter=volume:2127&limit=100&offset=400&field_list=cover_date,id,image,issue_number,name`
  );
  const reply5: replyObject | null = useFetch(
    `/issues&filter=volume:2127&limit=100&offset=500&field_list=cover_date,id,image,issue_number,name`
  );
  const reply6: replyObject | null = useFetch(
    `/issues&filter=volume:2127&limit=100&offset=600&field_list=cover_date,id,image,issue_number,name`
  );

  useEffect(() => {
    if (reply0 && reply1 && reply2 && reply3 && reply4 && reply5 && reply6) {
      allIssues.push(
        ...reply0.results,
        ...reply1.results,
        ...reply2.results,
        ...reply3.results,
        ...reply4.results,
        ...reply5.results,
        ...reply6.results
      );

      const sortedIssues = allIssues.sort((a: issueObject, b: issueObject) =>
        a.cover_date.localeCompare(b.cover_date)
      );

      setIssues(sortedIssues);
    }
  }, [reply0, reply1, reply2, reply3, reply4, reply5, reply6]);

  return (
    <IssuesContext.Provider value={{ issues }}>
      {children}
    </IssuesContext.Provider>
  );
};
