import React from "react";
import { ProjectLayout } from "../style/layout";
import ProjectCarousel from "../components/project/projectItem";
import { useAppContext } from "../components/appprovider";

const Project = ({ notionDataBase }) => {
  const { activeStep } = useAppContext();

  return (
    <ProjectLayout id="Project">
      <div key={activeStep} style={{ width: "100vw" }}>
        <ProjectCarousel notionDataBase={notionDataBase} />
      </div>
    </ProjectLayout>
  );
};

export default Project;
