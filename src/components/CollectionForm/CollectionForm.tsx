import { useEffect, useState } from "react";
import "./CollectionForm.scss";
import { useParams } from "react-router-dom";
import { useCollection } from "../../hooks/useCollection";
import { collectionItem } from "../../types/types";
import { useWantlist } from "../../hooks/useWantlist";

export default function CollectionForm() {
  const [grade, setGrade] = useState("😁");
  const [comment, setComment] = useState("");
  const [condition, setCondition] = useState("NM");
  const [pages, setPages] = useState("");

  const { items, setItems } = useCollection();
  const { wishes, setWishes } = useWantlist();

  const { id } = useParams();
  const issueId = Number(id);

  const thisItem = items.find((item) => item.id === issueId);

  useEffect(() => {
    if (thisItem) {
      setGrade(thisItem.grade);
      setComment(thisItem.comment);
      setCondition(thisItem.condition);
      setPages(String(thisItem.pages));
    }
  }, [thisItem]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newItem: collectionItem = {
      id: issueId,
      grade: grade,
      comment: comment,
      condition: condition,
      pages: Number(pages),
    };
    const newCollection = items.filter((item) => item.id != issueId);
    newCollection.push(newItem);
    setItems(newCollection);

    const newWantlist = wishes.filter((wish) => wish != issueId);
    setWishes(newWantlist);
  };

  return (
    <form className="collection-form" onSubmit={handleSubmit}>
      <label>
        grade:
        <select
          name="grade"
          value={grade}
          onChange={(e) => setGrade(e.target.value)}
        >
          <option>😠</option>
          <option>😐</option>
          <option>😊</option>
          <option>😁</option>
        </select>
      </label>
      <label>
        condition:
        <select
          name="condition"
          value={condition}
          onChange={(e) => setCondition(e.target.value)}
        >
          <option>PR</option>
          <option>FR</option>
          <option>GD</option>
          <option>VG</option>
          <option>FN</option>
          <option>VF</option>
          <option>NM</option>
        </select>
      </label>
      <label>
        number of pages:
        <input
          type="number"
          name="pages"
          value={pages}
          onChange={(e) => setPages(e.target.value)}
        />
      </label>
      <label>
        comment:
        <textarea
          name="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
      </label>
      <button type="submit">{thisItem ? "EDIT" : "ADD TO COLLECTION"}</button>
    </form>
  );
}
