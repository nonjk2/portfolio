import React from "react";
import styled from "styled-components";
import {
  ParagraphBlock,
  HeadingOneBlock,
  HeadingTwoBlock,
  HeadingThreeBlock,
  BulletedListItemBlock,
  NumberedListItemBlock,
  Block,
  CalloutBlock,
  ColumnListBlock,
  ColumnBlock,
  ImageBlock,
  CodeBlock,
  TableBlock,
} from ".";
import Paragraph from "./Paragraph";

import BulletedListItem from "./BulletedListItem";
import NumberedListItem from "./NumberedListItem";
import HeadingOne from "./HeadingOne";
import HeadingTwo from "./HeadingTwo";
import HeadingThree from "./HeadingThree";
import Callout from "./Callout";
import ColumnList from "./ColumnList";
import Column from "./Column";
import ImageRender from "./\bImage";
import CodeComponent from "./CodeComponent";
import Table from "./Table";
import Quote from "./Quote";

export const Gubunsun = styled.hr`
  background-color: #fff;
  padding: -1px;
  opacity: 0.7;
  .hr-1 {
    border: 0;
    height: 0.5px;
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0));
  }
`;
const NotionRenderer = ({ blocks }: { blocks: Block[] }) => {
  return (
    <>
      {blocks.map((block) => {
        switch (block.type) {
          case "code":
            return <CodeComponent key={block.id} block={block as CodeBlock} />;
          case "divider":
            return <Gubunsun key={block.id} className="hr-1" />;
          case "paragraph":
            return <Paragraph key={block.id} block={block as ParagraphBlock} />;
          case "heading_1":
            return <HeadingOne key={block.id} block={block as HeadingOneBlock} />;
          case "heading_2":
            return <HeadingTwo key={block.id} block={block as HeadingTwoBlock} />;
          case "heading_3":
            return <HeadingThree key={block.id} block={block as HeadingThreeBlock} />;
          case "bulleted_list_item":
            return <BulletedListItem key={block.id} block={block as BulletedListItemBlock} />;
          case "numbered_list_item":
            return <NumberedListItem key={block.id} block={block as NumberedListItemBlock} />;
          case "callout":
            return <Callout key={block.id} block={block as CalloutBlock} />;
          case "column_list":
            return <ColumnList key={block.id} block={block as ColumnListBlock} />;
          case "column":
            return <Column key={block.id} block={block as ColumnBlock} />;
          case "image":
            return <ImageRender key={block.id} block={block as ImageBlock} />;
          case "table":
            return <Table key={block.id} block={block as TableBlock} />;
          case "quote":
            return <Quote key={block.id} block={block} />;
          default:
            return null;
        }
      })}
    </>
  );
};

export default NotionRenderer;
