// @flow

import * as React from "react";
import ListItem from "./ListItem";

function ListResults({ list }: { list: ?Object }) {
  if (!list) {
    console.error('List of results is empty')
    return null;
  }

  return (
    <ul>
      {list.map(item => (
        <ListItem key={item.title}>{item.snippet}</ListItem>
      ))}
    </ul>
  );
}
export default ListResults;
