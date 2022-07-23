import React from "react";
import { TableWrapper } from "./TableStyle";
import TBody from "./tbody";
import THead from "./thead";

const Table = ({ data, columns, linkId }) => {
  return (
    <div>
      <TableWrapper>
        <THead columns={columns} />
        <TBody data={data} columns={columns} linkId={linkId} />
      </TableWrapper>
    </div>
  );
};

export default Table;
