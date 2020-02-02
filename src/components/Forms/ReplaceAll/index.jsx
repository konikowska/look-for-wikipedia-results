// @flow

import * as React from "react";

function FormReplaceAll({
  handleReplace,
  handleReplaceAll,
  handleOnSubmit,
  handleOnChange,
  replaceWithPhrase
}: {
  handleReplace: () => void,
  handleReplaceAll: () => void,
  handleOnSubmit: () => void,
  handleOnChange: () => void,
  replaceWithPhrase: string
}) {
  return (
    <>
      <form onSubmit={handleOnSubmit}>
        <label htmlFor="replaceWith">
          replace with:
          <input type="text" id="replaceWith" value={replaceWithPhrase} onChange={handleOnChange} />
        </label>
        <button type="button" onClick={handleReplace}>
          replace
        </button>
        <button type="button" onClick={handleReplaceAll}>
          replace all
        </button>
      </form>
    </>
  );
}
export default FormReplaceAll;
