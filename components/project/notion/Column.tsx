import React from "react";
import { ColumnBlock } from ".";
import NotionRenderer from "./notionRender";

interface ColumnProps {
  block: ColumnBlock;
}

const Column: React.FC<ColumnProps> = ({ block }) => {
  return (
    <div>
      {block.column?.children.map((childBlock) => (
        <NotionRenderer key={childBlock.id} blocks={[childBlock]} />
      ))}
    </div>
  );
};

export default Column;
