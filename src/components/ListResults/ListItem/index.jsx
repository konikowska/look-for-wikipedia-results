// @flow

import * as React from "react";
import { StyledListItem, StyledSpan } from "./styles";

function ListItem({ title, snippet, domProps }: { title: string, snippet: string, domProps: Object }) {
  const markup = { __html: `${snippet}` };
  return (
    <StyledListItem {...domProps}>
      <StyledSpan>{title}</StyledSpan>
      <p dangerouslySetInnerHTML={markup} />
    </StyledListItem>
  );
}

export default ListItem;
