import React from "react";
import { useIssues } from "../../hooks/useIssues";

export default function IssuesList() {
  const { issues } = useIssues();

  return (
    <>
      <ul>
        {issues.map((issue) => (
          <li key={issue.id}>
            Issue number: {issue.issue_number} Name: {issue.name} Date:{" "}
            {issue.cover_date} id: {issue.id}
          </li>
        ))}
      </ul>
    </>
  );
}
