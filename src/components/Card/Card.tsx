import { issueObject } from "../../types/types";
import "./Card.scss";

type CardProps = {
  issue: issueObject;
};

export default function Card({ issue }: CardProps) {
  return (
    <div className="card">
      <img
        className="cover-image"
        src={issue.image.original_url}
        alt="tidningens omslag"
      />
      <p>
        #{issue.issue_number}: {issue.name}
      </p>
    </div>
  );
}
