import { Client } from "@notionhq/client";
import { PageObjectResponse, PartialPageObjectResponse } from "@notionhq/client/build/src/api-endpoints";

const notion = new Client({ auth: process.env.NOTION_API_KEY, notionVersion: "2022-06-28" });

export const getUsers = async () => {
  const listUsersResponse = await notion.users.list({});
  return listUsersResponse.results;
};
export interface GetDatabaseResponse {
  notionDataBase: (PageObjectResponse | PartialPageObjectResponse)[];
}
export interface GetStaticPropsResponse {
  notfound?: boolean;
  props?: {
    notionDataBase: (PageObjectResponse | PartialPageObjectResponse)[];
  };
}

export const getDataBase = async (): Promise<GetDatabaseResponse> => {
  const response = await notion.databases.query({
    database_id: "464b609c5c9e44ab868f511bfaac782c",
  });
  const notionDataBase = response.results;

  return { notionDataBase };
};
