// @flow

import * as React from "react";
import ListResults from "../ListResults";

function Form() {
  const [searchPhrase, setSearchPhrase] = React.useState("");
  const [response, setResponse] = React.useState(null);

  React.useEffect(() => {
    getResponse(searchPhrase).then(res => {
      console.log(searchPhrase, res);
      setResponse(res);
    });
  }, [searchPhrase]);

  const handleChange = e => {
    e.preventDefault();
    e.stopPropagation();
    setSearchPhrase(e.target.value);
  };
  const onSubmit = e => {
    e.preventDefault();
    console.log("click", searchPhrase);
    getResponse(searchPhrase).then(res => {
      console.log("submit", searchPhrase, res);
      setResponse(res);
    });
  };
  return (
    <>
      <form>
        <label>
          search phrase:
          <input
            type="text"
            name="name"
            value={searchPhrase}
            onChange={handleChange}
            required
          />
        </label>
        <button type="button" onClick={onSubmit}>
          SEARCH
        </button>
        <br />
        <label> replace with </label>
        <input type="submit" value="Replace" />
        <br />
        <input type="submit" value="Replace All" />
      </form>
      {response && <ListResults list={response} />}
    </>
  );
}
export default Form;
