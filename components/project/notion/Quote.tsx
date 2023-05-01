import React from "react";
import { QuoteBlock, RichTextTextInput } from ".";
import NotionRenderer from "./notionRender";
import RichTextRenderer from "./RichTextRenderer";

interface QuoteProps {
  block: QuoteBlock;
}

const Quote: React.FC<QuoteProps> = ({ block }) => {
  return (
    <blockquote>
      {block.quote.rich_text.map((richTextElement: RichTextTextInput) => (
        <RichTextRenderer key={richTextElement.plain_text} richTextElement={richTextElement} />
      ))}
      {block.quote.children && <NotionRenderer blocks={block.quote.children} />}
    </blockquote>
  );
};

export default Quote;
