import React from "react";

import "./styles.css";
import FormSearch from "./components/Forms/Search";
import FormReplaceAll from "./components/Forms/ReplaceAll";
import useFetch from "./components/services/useFetch";
import ListResults from "./components/ListResults";
import replaceWith from "./components/services/replaceWith";

export default function App() {
  const [searchPhrase, setSearchPhrase] = React.useState("search");
  const [replaceWithPhrase, setReplaceWithPhrase] = React.useState("replace");
  const [{ data, isLoading, isError, fetchData }] = useFetch({
    searchPhrase,
    delay: 300
  });

  const handleSearchChange = e => {
    e.preventDefault();
    setSearchPhrase(e.target.value);
  };

  const handleSearchSubmit = e => {
    e.preventDefault();
    fetchData()
  };

  const handleReplaceChange = e => {
    e.preventDefault();
    setReplaceWithPhrase(e.target.value);
  };

  const handleReplaceSubmit = e => {
    handleReplaceChange(e);
  };

  const handleReplace = e => {
    e.preventDefault();
    replaceWith({ replaceWithPhrase, mode: "SINGLE" });
  };

  const handleReplaceAll = e => {
    e.preventDefault();
    replaceWith({ replaceWithPhrase, mode: "ALL" });
  };

  return (
    <div className="App">
      <FormSearch
        handleChange={handleSearchChange}
        handleSubmit={handleSearchSubmit}
        searchPhrase={searchPhrase}
      />
      <FormReplaceAll
        replaceWithPhrase={replaceWithPhrase}
        handleReplaceAll={handleReplaceAll}
        handleReplace={handleReplace}
        handleOnSubmit={handleReplaceSubmit}
        handleOnChange={handleReplaceChange}
      />{" "}
      {isError && <p>Fetching error</p>}
      {isLoading || !data ? <p>loading</p> : <ListResults list={data} />}
    </div>
  );
}
