import "./App.scss";
import useFetch from "./hooks/useFetch";

function App() {
  const allIssues: any = []; //TODO:typa upp

  for (let os = 0; os < 700; os += 100) {
    const reply: any | null = useFetch(
      //TODO:typa upp
      `/issues&filter=volume:2127&limit=100&offset=${os}&field_list=cover_date,id,image,issue_number,name`
    );

    if (reply) {
      for (let i = 0; i < reply.results.length; i++) {
        allIssues.push(reply.results[i]);
      }
    }
  }

  const sortedIssues = allIssues.sort(
    (
      a: any,
      b: any //TODO:typa upp
    ) => a.cover_date.localeCompare(b.cover_date)
  );

  console.log(sortedIssues);

  return (
    <>
      <h1>Comics Collection</h1>
    </>
  );
}

export default App;
