import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { issueObject, imageObject, replyObject } from "../types/types";
import useFetch from "../hooks/useFetch";

type IssuesContextType = {
  issues: issueObject[];
};

const IssuesContext = createContext<IssuesContextType | undefined>(undefined);

export const IssuesProvider = ({ children }: { children: ReactNode }) => {
  const [issues, setIssues] = useState<issueObject[]>([]);

  const allIssues: issueObject[] = [];

  for (let os = 0; os < 700; os += 100) {
    const reply: replyObject | null = useFetch(
      `/issues&filter=volume:2127&limit=100&offset=${os}&field_list=cover_date,id,image,issue_number,name`
    );

    if (reply && reply.results) {
      for (let i = 0; i < reply.results.length; i++) {
        allIssues.push(reply.results[i]);
      }
    }
  }

  const sortedIssues = allIssues.sort((a: issueObject, b: issueObject) =>
    a.cover_date.localeCompare(b.cover_date)
  );

  setIssues(sortedIssues);

  return (
    <IssuesContext.Provider value={{ issues }}>
      {children}
    </IssuesContext.Provider>
  );
};
