import React from "react";
import { HeadingOneBlock, RichTextTextInput } from ".";
import RichTextRenderer from "./RichTextRenderer";

const HeadingOne = ({ block }: { block: HeadingOneBlock }) => {
  return (
    <h1>
      {block.heading_1.rich_text.map((richTextElement: RichTextTextInput) => (
        <RichTextRenderer key={richTextElement.plain_text} richTextElement={richTextElement} />
      ))}
    </h1>
  );
};
export default HeadingOne;
