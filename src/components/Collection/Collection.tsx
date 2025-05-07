import { useCollection } from "../../hooks/useCollection";
import { useIssues } from "../../hooks/useIssues";
import { issueObject } from "../../types/types";
import CardContainer from "../CardContainer/CardContainer";
import "./Collection.scss";

export default function Collection() {
  const collectionIssues: issueObject[] = [];
  const { items } = useCollection();
  const { issues } = useIssues();
  let totalPages: number = 0;

  items.forEach((item) => {
    totalPages += item.pages;

    issues.forEach((issue) => {
      if (item.id === issue.id) {
        collectionIssues.push(issue);
      }
    });
  });

  const sortedIssues = collectionIssues.sort((a: issueObject, b: issueObject) =>
    a.cover_date.localeCompare(b.cover_date)
  );

  return (
    <div>
      <h1>Number of issues in collection: {items.length}</h1>
      <h2>Total number of pages in issues: {totalPages}</h2>
      <CardContainer arrayToRender={sortedIssues} />
    </div>
  );
}
