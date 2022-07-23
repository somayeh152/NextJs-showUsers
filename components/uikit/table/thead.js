import React from "react";

const THead = ({ columns }) => {
  return (
    <thead>
      <tr>
        {Object.keys(columns).map((column, h) => {
          return <th key={h}>{columns[column].header}</th>;
        })}
      </tr>
    </thead>
  );
};

export default THead;
