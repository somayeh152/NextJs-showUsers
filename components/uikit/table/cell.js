import React from "react";

const Cell = ({ item, column }) => {
  return <td>{item[column.accessor]}</td>;
};

export default Cell;
