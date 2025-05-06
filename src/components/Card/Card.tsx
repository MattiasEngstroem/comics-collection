import { useCollection } from "../../hooks/useCollection";
import { useWantlist } from "../../hooks/useWantlist";
import { issueObject } from "../../types/types";
import "./Card.scss";

type CardProps = {
  issue: issueObject;
};

export default function Card({ issue }: CardProps) {
  const { items } = useCollection();
  const { wishes } = useWantlist();
  const isInCollection = items.some((item) => item.id === issue.id);
  const isInWantlist = wishes.some((wish) => wish === issue.id);

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
      {isInCollection && <p className="in-collection">IN COLLECTION</p>}
      {isInWantlist && <p className="in-wantlist">IN WANTLIST</p>}
    </div>
  );
}
