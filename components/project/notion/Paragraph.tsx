import React from "react";
import { ParagraphBlock, RichTextTextInput } from ".";
import RichTextRenderer from "./RichTextRenderer";

const Paragraph = ({ block }: { block: ParagraphBlock }) => {
  return (
    <p>
      {" "}
      {block.paragraph.rich_text.map((richTextElement: RichTextTextInput) => (
        <RichTextRenderer key={richTextElement.plain_text} richTextElement={richTextElement} />
      ))}
    </p>
  );
};
export default Paragraph;
