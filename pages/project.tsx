import React from "react";
import { PageObjectResponse, PartialPageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { NextPage } from "next";

import { getStaticProps } from ".";
import ProjectSection from "../sections/projectSection";

interface ProjectProps {
  notionDataBase?: (PageObjectResponse | PartialPageObjectResponse)[];
}
const Project: NextPage<ProjectProps> = () => {
  return (
    <div>
      <ProjectSection />
    </div>
  );
};

export { getStaticProps };
export default Project;
