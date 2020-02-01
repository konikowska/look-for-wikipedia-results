// @flow

import * as React from "react";

function ListItem({ children }: { children: React.Node | string }) {
  return <li>{children}</li>;
}

export default ListItem;
