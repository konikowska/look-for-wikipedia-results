import React from "react";
import "./styles.css";
import SearchForm from "./components/SearchForm";
import useFetch from "./components/services/useFetch";
import ListResults from "./components/ListResults";

export default function App() {
  const [searchPhrase, setSearchPhrase] = React.useState("s");
  const [listItems, setListItems] = React.useState("s");
  const [{ data, isLoading, isError }] = useFetch(searchPhrase);
  console.log(data, isLoading, isError);
  // React.useEffect(() => {
  //   if (response && !errors) {
  //     setListItems(response);
  //   }
  // }, [response, errors]);

  const handleChange = e => {
    e.preventDefault();
    e.stopPropagation();
    // setSearchPhrase(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    // setSearchPhrase(e.target.value);
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <SearchForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        searchPhrase={searchPhrase}
      />
      {!data ? <p>loading</p> : <ListResults list={data} />}
    </div>
  );
}
