import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_API_KEY, notionVersion: "2022-06-28" });

export const getUsers = async () => {
  const listUsersResponse = await notion.users.list({});
  return listUsersResponse.results;
};

export const getDataBase = async () => {
  const response = await notion.databases.query({
    database_id: "464b609c5c9e44ab868f511bfaac782c",
  });
  const notionDataBase = response.results;

  return { notionDataBase };
};
