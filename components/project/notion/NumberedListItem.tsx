import React from "react";
import { NumberedListItemBlock, RichTextTextInput } from ".";
import NotionRenderer from "./notionRender";
import RichTextRenderer from "./RichTextRenderer";

interface NumberedListProps {
  block: NumberedListItemBlock;
}

const NumberedListItem: React.FC<NumberedListProps> = ({ block }) => {
  return (
    <li>
      {block.numbered_list_item.rich_text.map((richTextElement: RichTextTextInput) => (
        <RichTextRenderer key={richTextElement.plain_text} richTextElement={richTextElement} />
      ))}
      {block.has_children && (
        <ol>
          {block.numbered_list_item.children.map((childBlock) => (
            <NotionRenderer key={childBlock.id} blocks={[childBlock]} />
          ))}
        </ol>
      )}
    </li>
  );
};

export default NumberedListItem;
