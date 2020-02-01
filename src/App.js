import React from "react";
import "./styles.css";
import SearchForm from "./components/SearchForm";
import useGetResponse from "./components/services/getResponse";
import ListResults from "./components/ListResults";

export default function App() {
  const [searchPhrase, setSearchPhrase] = React.useState("s");
  const [listItems, setListItems] = React.useState(null);
  const { response, errors } = useGetResponse(searchPhrase);

  React.useEffect(() => {
    if (response && !errors) {
      setListItems(response);
    }
  }, [response, errors]);

  const handleChange = e => {
    e.preventDefault();
    e.stopPropagation();
    setSearchPhrase(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (response && !errors) {
      console.log("submit", searchPhrase, response);
      setListItems(response);
    }
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
      {listItems != null && <ListResults response={listItems} />}
    </div>
  );
}
