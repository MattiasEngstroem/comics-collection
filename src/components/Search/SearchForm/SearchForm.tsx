type SearchFormProps = {
  year: string;
  name: string;
  handleChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function SearchForm({
  year,
  name,
  handleChange,
  handleClick,
}: SearchFormProps) {
  const years: number[] = [];
  for (let i: number = 1963; i < 2015; i++) {
    years.push(i);
  }
  return (
    <div className="search-form">
      <form>
        <label>
          Year:
          <select name="year" onChange={handleChange} value={year}>
            <option>all</option>
            {years.map((year) => (
              <option key={year}>{year}</option>
            ))}
          </select>
        </label>
        <label>
          Name:
          <input name="name" type="text" onChange={handleChange} value={name} />
        </label>
        <button type="submit" onClick={handleClick}>
          Search
        </button>
      </form>
    </div>
  );
}
