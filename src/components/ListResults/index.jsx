// @flow

import * as React from "react";
import _isEmpty from 'lodash/isEmpty'
import ListItem from "./ListItem";

function ListResults({ list }: { list: ?Object }) {
  if (_isEmpty(list)) {
    console.error('List of results is empty')
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
