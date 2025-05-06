import { useState } from "react";
import SearchForm from "./SearchForm/SearchForm";
import { issueObject } from "../../types/types";
import { useIssues } from "../../hooks/useIssues";
import "./Search.scss";
import CardContainer from "../CardContainer/CardContainer";

export default function Search() {
  const [year, setYear] = useState("all");
  const [name, setName] = useState("");
  const [results, setResults] = useState<issueObject[]>([]);
  const [hasSearched, setHasSearched] = useState(false);

  const allIssues = useIssues().issues;

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    if (name === "year") {
      setYear(value);
    } else if (name === "name") {
      setName(value);
    }
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setHasSearched(true);

    if (year === "all") {
      const searchResults = allIssues.filter((issue: issueObject) => {
        return issue.name.toLowerCase().includes(name.toLowerCase());
      });
      setResults(searchResults);
    } else {
      const searchResults = allIssues.filter((issue: issueObject) => {
        return (
          issue.name.toLowerCase().includes(name.toLowerCase()) &&
          issue.cover_date.includes(year)
        );
      });
      setResults(searchResults);
    }
  };

  return (
    <div className="search-container">
      <SearchForm
        year={year}
        name={name}
        handleChange={handleChange}
        handleClick={handleClick}
      />
      {hasSearched && <CardContainer arrayToRender={results} />}
    </div>
  );
}
