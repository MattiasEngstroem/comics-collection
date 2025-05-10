import "./IssueDetails.scss";
import { useParams } from "react-router-dom";
import { useIssues } from "../../hooks/useIssues";
import { useCollection } from "../../hooks/useCollection";
import { useWantlist } from "../../hooks/useWantlist";
import CollectionForm from "../CollectionForm/CollectionForm";

export default function IssueDetails() {
  const { id } = useParams();
  const { issues } = useIssues();
  const { items, setItems } = useCollection();
  const { wishes, setWishes } = useWantlist();

  const issueId = Number(id);
  const thisIssue = issues.find((issue) => issueId === issue.id);
  const thisItem = items.find((item) => issueId === item.id);
  const isWish = wishes.includes(issueId);

  const removeCollection = () => {
    const filteredItems = items.filter((item) => item.id != issueId);
    setItems(filteredItems);
  };

  const addWantlist = () => {
    const tempWishes = [...wishes, issueId];
    setWishes(tempWishes);
  };

  const removeWantlist = () => {
    console.log("remove from wantlist");
    const filteredWishes = wishes.filter((wish) => wish != issueId);
    setWishes(filteredWishes);
  };

  if (!thisIssue) {
    return <p>No issue found.</p>;
  }

  return (
    <div className="issue-details">
      <div className="details-text">
        <p>
          #{thisIssue.issue_number}: {thisIssue.name}
        </p>
        <p>date: {thisIssue.cover_date}</p>
        {thisItem && (
          <>
            <p>grade: {thisItem.grade}</p>
            <p>condition: {thisItem.condition}</p>
            <p>number of pages: {thisItem.pages}</p>
            <p className="comment">{thisItem.comment}</p>
            <button onClick={removeCollection}>REMOVE FROM COLLECTION</button>
          </>
        )}
        {!isWish && !thisItem && (
          <button onClick={addWantlist}>ADD TO WANTLIST</button>
        )}
        {isWish && (
          <button onClick={removeWantlist}>REMOVE FROM WANTLIST</button>
        )}
      </div>
      <img className="details-image" src={thisIssue.image.original_url} />
      <CollectionForm />
    </div>
  );
}
