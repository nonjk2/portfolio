import { Octokit } from "@octokit/rest";

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN, // Use your GitHub personal access token
});

export const GitHub = async () => {
  const response = await octokit.repos.listForAuthenticatedUser();
  return response;
};

export const getGitHubRepositories = async () => {
  const response = await octokit.repos.listForAuthenticatedUser();
  return response.data;
};

export async function fetchLanguages(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}
