import React from "react";
import { HeadingThreeBlock, RichTextTextInput } from ".";
import RichTextRenderer from "./RichTextRenderer";

const HeadingThree = ({ block }: { block: HeadingThreeBlock }) => {
  return (
    <h3>
      {block.heading_3.rich_text.map((richTextElement: RichTextTextInput) => (
        <RichTextRenderer key={richTextElement.plain_text} richTextElement={richTextElement} />
      ))}
    </h3>
  );
};
export default HeadingThree;
