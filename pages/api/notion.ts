import { Client } from "@notionhq/client";
import { ListBlockChildrenResponse } from "@notionhq/client/build/src/api-endpoints";
import { Block, Property } from "../../components/project/notion";

const notion = new Client({ auth: process.env.NOTION_API_KEY, notionVersion: "2022-06-28" });
interface User {
  object: string;
  id: string;
}

interface Cover {
  type: string;
  file: {
    expiry_time: string;
    url: string;
  };
}
export interface NotionPage {
  object: string;
  id: string;
  created_time: string;
  last_edited_time: string;
  created_by: User;
  last_edited_by: User;
  cover: Cover | null;
  icon: {
    type: string;
    emoji: string;
  };
  parent: {
    type: string;
    database_id: string;
  };
  archived: boolean;
  properties: { [key: string]: Property };
  url: string;
}

interface User {
  object: string;
  id: string;
}

export const getUsers = async () => {
  const listUsersResponse = await notion.users.list({});
  return listUsersResponse.results;
};

export interface GetStaticPropsResponse {
  notfound?: boolean;
  props?: {
    notionDataBase: NotionPage[];
  };
}
export const getBlocks = async (
  blockId: string,
  {
    start_cursor,
    page_size,
  }: {
    start_cursor?: string;
    page_size: number;
  } = {
    page_size: 40,
  },
) => {
  const response: ListBlockChildrenResponse = await notion.blocks.children.list({
    block_id: blockId,
    page_size,
    start_cursor,
  });
  const imageResponse = response.results;
  return imageResponse;
};
export const getBlocksWithChildren = async (blocks: Block[]) => {
  return Promise.all(
    blocks.map(async (block) => {
      return getBlockWithChildren(block);
    }),
  );
};
export const getBlockWithChildren = async (block: Block) => {
  if (block.has_children === true) {
    const children: any[] = await getBlocks(block.id);
    const updatedBlock = { ...block };
    switch (updatedBlock.type) {
      case "column":
        if (typeof updatedBlock.column.children === "undefined" && updatedBlock.column) {
          updatedBlock.column.children = await getBlocksWithChildren(children);
        }
        break;
      case "column_list":
        if (typeof updatedBlock.column_list.children === "undefined") {
          updatedBlock.column_list.children = await getBlocksWithChildren(children);
        }
        break;
      case "paragraph":
        if (typeof updatedBlock.paragraph.children === "undefined") {
          updatedBlock.paragraph.children = await getBlocksWithChildren(children);
        }
        break;
      case "bulleted_list_item":
        if (typeof updatedBlock.bulleted_list_item.children === "undefined") {
          updatedBlock.bulleted_list_item.children = await getBlocksWithChildren(children);
        }
        break;
      case "numbered_list_item":
        if (typeof updatedBlock.numbered_list_item.children === "undefined") {
          updatedBlock.numbered_list_item.children = await getBlocksWithChildren(children);
        }
        break;
      case "to_do":
        if (typeof updatedBlock.to_do.children === "undefined") {
          updatedBlock.to_do.children = await getBlocksWithChildren(children);
        }
        break;
      case "quote":
        if (typeof updatedBlock.quote.children === "undefined") {
          updatedBlock.quote.children = await getBlocksWithChildren(children);
        }
        break;
      case "toggle":
        if (typeof updatedBlock.toggle.children === "undefined") {
          updatedBlock.toggle.children = await getBlocksWithChildren(children);
        }
        break;
      case "table":
        if (typeof updatedBlock.table.children === "undefined") {
          updatedBlock.table.children = await getBlocksWithChildren(children);
        }
        break;
      default:
        break;
    }
  }
  return block;
};

export const getDataBase = async () => {
  const response = await notion.databases.query({
    database_id: "464b609c5c9e44ab868f511bfaac782c",
  });
  const notionDataBase = response.results;
  // const ProjectId = response.results
  return { notionDataBase };
};
export const getPagesBlock = async () => {
  const { notionDataBase } = await getDataBase();
  const PageBlocks = await Promise.all(
    notionDataBase.map(async (e) => {
      const blockArray = await getBlocks(e.id);
      const pageBlocksWithChildren = await getBlocksWithChildren(blockArray as Block[]);
      return pageBlocksWithChildren;
    }),
  );
  return { PageBlocks };
};
