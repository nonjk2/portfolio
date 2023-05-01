import React from "react";
import styled from "styled-components";
import { Typography } from "@mui/material";
import { RichTextBaseInput } from "./notion";
import RichTextRenderer from "./notion/RichTextRenderer";

// Define the necessary interfaces
interface DateRange {
  start: string | null;
  end: string | null;
  time_zone: null;
}

interface MultiSelect {
  id: string;
  name: string;
  color: string;
}

export interface RichTitleInput extends RichTextBaseInput {
  type: "title";
  text: {
    content: string;
    link?: {
      type: "url";
      url: string;
    };
  };
}
interface Property {
  id: string;
  type: string;
  date?: DateRange;
  multi_select?: MultiSelect[];
  title?: RichTitleInput[];
  status?: {
    id: string;
    name: string;
    color: string;
  };
}
interface ProjectFrontEndProps {
  properties: { [key: string]: Property };
}
const ProjectName = styled.div`
  margin-top: 20px;
  margin-bottom: 25px;
  font-size: 44px;
  line-height: 52px;
  font-weight: 300;
  white-space: normal;
`;
const LanguageDiv = styled.div`
  align-items: flex-start;
  width: auto;
  margin-top: 0.5rem;
  border-radius: 10px;
  /* height: 2rem; */
  padding: 0 1rem;
  margin-right: 0.5rem;
  overflow: hidden;
`;
const ValueTypography = styled(Typography)`
  font-weight: 200;
  font-size: 14px;
`;
// Create the ProjectFrontEnd component
const ProjectFrontEnd: React.FC<ProjectFrontEndProps> = ({ properties }) => {
  const period = properties["\b기간"];
  const languageAndFramework = properties["언어 및 프레임워크"].multi_select;

  const personnel = properties["인원"].multi_select;
  const projectStatus = properties["프로젝트 상태"].status;
  console.log(period);
  return (
    <div>
      {/* <h1>Project Front-end</h1> */}
      <ProjectName>
        {properties["이름"].title.map((richTextElement: RichTitleInput) => (
          <RichTextRenderer key={richTextElement.plain_text} richTextElement={richTextElement} />
        ))}
      </ProjectName>
      <div style={{ width: "100%", display: "flex", flexWrap: "wrap" }}>
        {languageAndFramework.map((e) => (
          <LanguageDiv>
            <ValueTypography>{e.name}</ValueTypography>
            {/* <div style={{ backgroundColor: e.color, position: "absolute" }} /> */}
          </LanguageDiv>
        ))}
      </div>
      <p>속성</p>

      {personnel.map((e) => (
        <LanguageDiv>
          <ValueTypography>{e.name}</ValueTypography>
          {/* <div style={{ backgroundColor: e.color, position: "absolute" }} /> */}
        </LanguageDiv>
      ))}
      {period && period.date && period.date.end ? (
        <LanguageDiv>
          <ValueTypography>{`${period.date.start} ~ ${period.date.end}`} </ValueTypography>
        </LanguageDiv>
      ) : (
        <LanguageDiv>
          <ValueTypography>{`${period.date.start} ~`} </ValueTypography>
        </LanguageDiv>
      )}
      <LanguageDiv>
        <ValueTypography>{projectStatus.name}</ValueTypography>
        {/* <div style={{ backgroundColor: e.color, position: "absolute" }} /> */}
      </LanguageDiv>
    </div>
  );
};

export default ProjectFrontEnd;
