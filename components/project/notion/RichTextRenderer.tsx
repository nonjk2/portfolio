import React from "react";
import { RichTextTextInput } from ".";
import { RichTitleInput } from "../ProjectInro";

const RichTextRenderer: React.FC<{ richTextElement: RichTextTextInput | RichTitleInput }> = ({
  richTextElement,
}) => {
  const { plain_text, href, annotations } = richTextElement;
  const style: React.CSSProperties = {};

  if (annotations.bold) {
    style.fontWeight = "bold";
  }
  if (annotations.italic) {
    style.fontStyle = "italic";
  }
  if (annotations.strikethrough) {
    style.textDecoration = "line-through";
  }
  if (annotations.underline) {
    style.textDecoration = "underline";
  }
  if (annotations.code) {
    style.fontFamily = "monospace";
  }
  style.color = annotations.color === "default" ? "inherit" : annotations.color;

  return (
    <span style={style}>
      {href ? (
        <a href={href} target="_blank" rel="noopener noreferrer">
          {plain_text}
        </a>
      ) : (
        plain_text
      )}
    </span>
  );
};

export default RichTextRenderer;
