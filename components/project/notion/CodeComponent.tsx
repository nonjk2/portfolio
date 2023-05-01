"use client";

import React from "react";
import { LightAsync as SyntaxHighlighter } from "react-syntax-highlighter";
import { vs } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { CodeBlock } from ".";

interface CodeComponentProps {
  block: CodeBlock;
}

const CodeComponent: React.FC<CodeComponentProps> = ({ block }) => {
  const { language, rich_text } = block.code;

  // You can extract the code content from rich_text, or use plain_text from RichTextTextInput in the interface definition
  const codeContent = rich_text.map((richText) => richText.plain_text).join("");

  return (
    <div style={{ background: "#eae5e5", width: "100%" }}>
      <SyntaxHighlighter PreTag="div" language={language} style={vs}>
        {codeContent}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeComponent;
