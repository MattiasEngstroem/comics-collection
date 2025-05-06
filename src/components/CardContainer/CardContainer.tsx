import { issueObject } from "../../types/types";
import Card from "../Card/Card";
import "./CardContainer.scss";

type CardContainerProps = {
  arrayToRender: issueObject[];
};

export default function CardContainer({ arrayToRender }: CardContainerProps) {
  if (arrayToRender && arrayToRender.length > 0) {
    return (
      <div className="card-container">
        {arrayToRender.map((issue) => (
          <Card key={issue.id} issue={issue} />
        ))}
      </div>
    );
  } else {
    return <h1>Sorry nothing here</h1>;
  }
}
