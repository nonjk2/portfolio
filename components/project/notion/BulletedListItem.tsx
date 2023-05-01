import React from "react";
import { BulletedListItemBlock, RichTextTextInput } from ".";
import NotionRenderer from "./notionRender";
import RichTextRenderer from "./RichTextRenderer";

interface BulletedListProps {
  block: BulletedListItemBlock;
}

const BulletedListItem: React.FC<BulletedListProps> = ({ block }) => {
  return (
    <>
      {block.has_children ? (
        <li>
          {block.bulleted_list_item.rich_text.map((richTextElement: RichTextTextInput) => (
            <RichTextRenderer key={richTextElement.plain_text} richTextElement={richTextElement} />
          ))}
          <ul>
            {block.bulleted_list_item.children.map((childBlock) => (
              <NotionRenderer key={childBlock.id} blocks={[childBlock]} />
            ))}
          </ul>
        </li>
      ) : (
        <ul>
          <li>
            {block.bulleted_list_item.rich_text.map((richTextElement: RichTextTextInput) => (
              <RichTextRenderer key={richTextElement.plain_text} richTextElement={richTextElement} />
            ))}
          </li>
        </ul>
      )}
    </>
  );
};

export default BulletedListItem;
