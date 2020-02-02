import styled from "@emotion/styled";

export const StyledForm = styled("form")`
  display: grid;
  grid-gap: 0.5rem;
  margin-bottom: 1rem;
  width: 30rem;
  justify-items: center;

  label {
    display: flex;
    flex-direction: column;
  }
`;

export const StyledButton = styled("button")`
  border: none;
  border-radius: 4px;
  background-color: #b62f2f;
  max-width: 5rem;
  color: white;
  padding: 0.5rem 1rem;
  white-space: nowrap;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;
