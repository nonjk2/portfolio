import React from "react";
import { PageObjectResponse, PartialPageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { NextPage } from "next";
import { ProjectLayout } from "../style/layout";
import ProjectCarousel from "../components/project/projectItem";
import { useAppContext } from "../components/appprovider";
import { getStaticProps } from ".";

interface ProjectProps {
  notionDataBase?: (PageObjectResponse | PartialPageObjectResponse)[];
}
const Project: NextPage<ProjectProps> = () => {
  const { activeStep } = useAppContext();

  return (
    <ProjectLayout id="Project">
      <div key={activeStep} style={{ width: "100vw" }}>
        <ProjectCarousel />
      </div>
    </ProjectLayout>
  );
};

export { getStaticProps };
export default Project;
