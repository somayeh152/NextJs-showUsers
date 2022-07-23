import React from "react";
import Cell from "./cell";

const TRow = ({ item, columns }) => {
  return (
    <tr>
      {columns.map((column, i) => {
        return <Cell key={i} item={item} column={column}></Cell>;
      })}
    </tr>
  );
};

export default TRow;
