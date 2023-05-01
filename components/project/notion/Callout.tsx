import React from "react";
import styled from "styled-components";
import { CalloutBlock } from ".";
import RichTextRenderer from "./RichTextRenderer";

const CalloutContainer = styled.div`
  display: flex;
  align-items: center;
  border-left: 2px solid;
  padding-left: 8px;
  margin-bottom: 8px;
`;

const Emoji = styled.span`
  margin-right: 8px;
`;

const Callout: React.FC<{ block: CalloutBlock }> = ({ block }) => {
  const { callout } = block;
  const { rich_text, icon } = callout;

  return (
    <CalloutContainer>
      <Emoji>{icon.emoji}</Emoji>
      <div>
        {rich_text.map((richTextElement, index) => (
          <RichTextRenderer
            key={richTextElement.plain_text + index.toString()}
            richTextElement={richTextElement}
          />
        ))}
      </div>
    </CalloutContainer>
  );
};

export default Callout;
