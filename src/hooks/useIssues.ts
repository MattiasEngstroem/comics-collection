import { useContext } from "react";
import { IssuesContext } from "../context/IssuesContext";

export const useIssues = () => {
  const context = useContext(IssuesContext);

  if (context === undefined) {
    throw new Error("useIssues måste användas inom en IssuesProvider");
  }

  return context;
};
