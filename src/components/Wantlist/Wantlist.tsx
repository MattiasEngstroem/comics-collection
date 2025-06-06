import { useWantlist } from "../../hooks/useWantlist";
import { useIssues } from "../../hooks/useIssues";
import { issueObject } from "../../types/types";
import CardContainer from "../CardContainer/CardContainer";
import "./Wantlist.scss";

export default function Wantlist() {
  const wantlistIssues: issueObject[] = [];
  const { wishes } = useWantlist();
  const { issues } = useIssues();

  wishes.forEach((wish) => {
    issues.forEach((issue) => {
      if (wish === issue.id) {
        wantlistIssues.push(issue);
      }
    });
  });

  const sortedIssues = wantlistIssues.sort((a: issueObject, b: issueObject) =>
    a.cover_date.localeCompare(b.cover_date)
  );

  return (
    <div>
      <CardContainer arrayToRender={sortedIssues} />
    </div>
  );
}
