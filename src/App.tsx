import "./App.scss";
import useFetch from "./hooks/useFetch";
import { issueObject, replyObject } from "./types/types";

function App() {
  const allIssues: issueObject[] = [];

  for (let os = 0; os < 700; os += 100) {
    const reply: replyObject | null = useFetch(
      `/issues&filter=volume:2127&limit=100&offset=${os}&field_list=cover_date,id,image,issue_number,name`
    );

    if (reply && reply.results) {
      for (let i = 0; i < reply.results.length; i++) {
        allIssues.push(reply.results[i]);
      }
    }
  }

  const sortedIssues = allIssues.sort((a: issueObject, b: issueObject) =>
    a.cover_date.localeCompare(b.cover_date)
  );

  console.log(sortedIssues);

  return (
    <>
      <h1>Comics Collection</h1>
    </>
  );
}

export default App;
