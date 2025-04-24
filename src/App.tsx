import "./App.scss";
import useFetch from "./hooks/useFetch";

function App() {
  console.log(
    useFetch(
      `/issues?filter=volume:2127&limit=100&offset=0&field_list=cover_date,id,image,issue_number,name`
    )
  );

  return (
    <>
      <h1>Comics Collection</h1>
    </>
  );
}

export default App;
