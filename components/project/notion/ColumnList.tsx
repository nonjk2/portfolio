import React from "react";
import { ColumnListBlock } from ".";
import NotionRenderer from "./notionRender";

interface ColumnListProps {
  block: ColumnListBlock;
}

const ColumnList: React.FC<ColumnListProps> = ({ block }) => {
  return (
    <div style={{ display: "flex" }}>
      {block.column_list.children.map((childBlock) => (
        <NotionRenderer key={childBlock.id} blocks={[childBlock]} />
      ))}
    </div>
  );
};

export default ColumnList;
