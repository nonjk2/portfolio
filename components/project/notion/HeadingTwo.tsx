import React from "react";
import { HeadingTwoBlock, RichTextTextInput } from ".";
import RichTextRenderer from "./RichTextRenderer";

const HeadingTwo = ({ block }: { block: HeadingTwoBlock }) => {
  return (
    <h2>
      {block.heading_2.rich_text.map((richTextElement: RichTextTextInput) => (
        <RichTextRenderer key={richTextElement.plain_text} richTextElement={richTextElement} />
      ))}
    </h2>
  );
};

export default HeadingTwo;
