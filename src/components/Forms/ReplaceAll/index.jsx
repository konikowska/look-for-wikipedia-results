//@flow

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
        <label>
          replace with:
          <input
            type="text"
            name="name"
            value={searchPhrase}
            onChange={handleChange}
            required
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
