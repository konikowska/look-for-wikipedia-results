// @flow

import * as React from "react";

function FormReplaceAll({
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
        <label htmlFor="replaceWith">
          replace with:
          <input
            type="text"
            id="replaceWith"
            value={searchPhrase}
            onChange={handleChange}
          />
        </label>
        <button type="button" onClick={handleSubmit}>
          replace
        </button>
        <button type="button" onClick={handleSubmit}>
          replace all
        </button>
      </form>
    </>
  );
}
export default FormReplaceAll;
