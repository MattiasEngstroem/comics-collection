import { useCollection } from "../../hooks/useCollection";
import { useIssues } from "../../hooks/useIssues";
import { issueObject } from "../../types/types";
import CardContainer from "../CardContainer/CardContainer";
import "./Collection.scss";

export default function Collection() {
  const collectionIssues: issueObject[] = [];
  const { items } = useCollection();
  const { issues } = useIssues();
  items.forEach((item) => {
    issues.forEach((issue) => {
      if (item.id === issue.id) {
        collectionIssues.push(issue);
      }
    });
  });
  console.log(collectionIssues);

  return (
    <div>
      <CardContainer arrayToRender={collectionIssues} />
    </div>
  );
}
