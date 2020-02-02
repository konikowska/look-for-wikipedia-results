// @flow

import * as React from "react";

function FormSearch({
  handleChange,
  handleSubmit,
  searchPhrase
}: {
  handleChange: () => void,
  handleSubmit: () => void,
  searchPhrase: string
}) {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="search">
          search phrase:
          <input
            type="text"
            name="name"
            value={searchPhrase}
            onChange={handleChange}
            id="search"
            required
          />
        </label>
        <button type="submit">
          SEARCH
        </button>
      </form>
    </>
  );
}
export default FormSearch;
