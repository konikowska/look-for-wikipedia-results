// @flow

import * as React from "react";
import { StyledForm, StyledButton } from "../styles";

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
    <StyledForm onSubmit={handleSubmit}>
      <label htmlFor="search">
        Search phrase:
        <input
          type="text"
          name="name"
          value={searchPhrase}
          onChange={handleChange}
          id="search"
          required
        />
      </label>
      <StyledButton type="submit">search</StyledButton>
    </StyledForm>
  );
}
export default FormSearch;
