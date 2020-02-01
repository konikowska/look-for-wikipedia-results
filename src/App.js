import React from "react";
import "./styles.css";
import SearchForm from "./components/SearchForm";
import useFetch from "./components/services/useFetch";
import ListResults from "./components/ListResults";

export default function App() {
  const [searchPhrase, setSearchPhrase] = React.useState("s");
  const [{ data, isLoading, isError }] = useFetch(searchPhrase);

  const handleChange = e => {
    e.preventDefault();
    e.stopPropagation();
    setSearchPhrase(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSearchPhrase(e.target.value);
  };

  return (
    <div className="App">
      <SearchForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        searchPhrase={searchPhrase}
      />
      {isLoading || !data || isError ? (
        <p>loading</p>
      ) : (
        <ListResults list={data} />
      )}
    </div>
  );
}
