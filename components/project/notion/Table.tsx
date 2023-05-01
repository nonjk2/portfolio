import React from "react";
import styled from "styled-components";
import { Cells, NotionTableRow, TableBlock } from ".";

const TableEl = styled.table`
  border-collapse: collapse;
  width: 100%;
  & th,
  td {
    border: 1px solid #d3d3d3;
    padding: 8px;
    text-align: left;
  }
  & th {
    background-color: #f2f2f2;
  }
`;

interface TableProps {
  block: TableBlock;
}

const Table: React.FC<TableProps> = ({ block }) => {
  return (
    <TableEl>
      <thead>
        <tr>
          {block.table.children[0].table_row.cells.map((cell: Cells[], i) => (
            <th key={cell[0].text + i.toString()}>{cell[0].plain_text}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {block.table.children.slice(1).map((row: NotionTableRow, index: number) => (
          <tr key={row.table_row[index] + index.toString()}>
            {row.table_row.cells.map((cell: Cells[], idx) =>
              cell.map((e) => (
                <td style={{ color: e.annotations.color }} key={e.text.content + idx.toString()}>
                  {e.text.content}
                </td>
              )),
            )}
          </tr>
        ))}
      </tbody>
    </TableEl>
  );
};

export default Table;
