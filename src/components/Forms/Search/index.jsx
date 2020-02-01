//@flow

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
        <button type="button" onClick={handleSubmit}>
          SEARCH
        </button>
      </form>
    </>
  );
}
export default FormSearch;
