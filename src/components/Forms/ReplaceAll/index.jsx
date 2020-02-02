// @flow

import * as React from "react";
import { StyledForm, StyledButton } from "../styles";

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
      <StyledForm onSubmit={handleOnSubmit}>
        <label htmlFor="replaceWith">
          Replace with:
          <input
            type="text"
            id="replaceWith"
            value={replaceWithPhrase}
            onChange={handleOnChange}
          />
        </label>
        <StyledButton type="button" onClick={handleReplace}>
          replace
        </StyledButton>
        <StyledButton type="button" onClick={handleReplaceAll}>
          replace all
        </StyledButton>
      </StyledForm>
    </>
  );
}
export default FormReplaceAll;
