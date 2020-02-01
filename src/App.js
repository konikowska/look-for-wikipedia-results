import React from "react";

// import "./styles.css";
import FormSearch from "./components/Forms/Search";
import FormReplaceAll from "./components/Forms/ReplaceAll";
import useFetch from "./components/services/useFetch";
import ListResults from "./components/ListResults";

export default function App() {
  const [searchPhrase, setSearchPhrase] = React.useState("search");
  const [replaceWithPhrase, setReplaceWithPhrase] = React.useState("replace");
  const [{ data, isLoading, isError }] = useFetch({
    searchPhrase,
    delay: 300
  });

  const handleSearchChange = e => {
    e.preventDefault();
    e.stopPropagation();
    setSearchPhrase(e.target.value);
  };

  const handleSearchSubmit = e => {
    e.preventDefault();
    setSearchPhrase(e.target.value);
  };

  const handleReplaceChange = e => {
    e.preventDefault();
    e.stopPropagation();
    setReplaceWithPhrase(e.target.value);
  };

  const handleReplaceSubmit = e => {
    e.preventDefault();
    setReplaceWithPhrase(e.target.value);
  };

  return (
    <div className="App">
      <FormSearch
        handleChange={handleSearchChange}
        handleSubmit={handleSearchSubmit}
        searchPhrase={searchPhrase}
      />
      <FormReplaceAll
        handleChange={handleReplaceChange}
        handleSubmit={handleReplaceSubmit}
        searchPhrase={replaceWithPhrase}
      />
      {isLoading || !data || isError ? (
        <p>loading</p>
      ) : (
        <ListResults list={data} />
      )}
    </div>
  );
}
