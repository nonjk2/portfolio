import React from "react";
import styled from "styled-components";
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
interface BorderLinearProgressProps {
  backcolor: string;
  progress: number;
}

const ProgressBarContainer = styled.div`
  width: 100%;
  background-color: #f3f3f3;
  border-radius: 5px;
`;

const ProgressBarFiller = styled.div<BorderLinearProgressProps>`
  height: 20px;
  background-color: ${({ backcolor }) => backcolor};
  border-radius: inherit;
  width: ${({ progress }) => progress}%;
`;

interface LanguageCounts {
  [key: string]: number;
}

interface ProjectLang {
  languages: LanguageCounts;
  name: string;
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
  githubLang: ProjectLang;
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
const ProgressDiv = styled.div`
  align-items: flex-start;
  margin-top: 0.5rem;
  border-radius: 10px;
  /* height: 2rem; */

  margin-right: 2rem;
  overflow: hidden;
`;
const ValueTypography = styled.span`
  font-weight: 200;
  font-size: 14px;
`;
// Create the ProjectFrontEnd component
const ProjectFrontEnd: React.FC<ProjectFrontEndProps> = ({ properties, githubLang }) => {
  const period = properties["\b기간"];
  const languageAndFramework = properties["언어 및 프레임워크"].multi_select;
  const personnel = properties["인원"].multi_select;
  const projectStatus = properties["프로젝트 상태"].status;
  const totalCount = Object.values(githubLang.languages).reduce((sum, count) => sum + count, 0);
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
          <LanguageDiv key={e.id}>
            <ValueTypography>{e.name}</ValueTypography>
            {/* <div style={{ backgroundColor: e.color, position: "absolute" }} /> */}
          </LanguageDiv>
        ))}
      </div>

      {personnel.map((e) => (
        <LanguageDiv key={e.id}>
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
      {languageAndFramework.map((language) => {
        if (Object.prototype.hasOwnProperty.call(githubLang.languages, language.name)) {
          // Calculate the value for the progress bar
          const progressValue = (githubLang.languages[language.name] / totalCount) * 100;

          return (
            <ProgressDiv key={language.id}>
              {language.name}
              <ProgressBarContainer>
                <ProgressBarFiller backcolor={`${language.color}`} progress={progressValue} />
              </ProgressBarContainer>
            </ProgressDiv>
          );
        }
        return null;
      })}
    </div>
  );
};

export default ProjectFrontEnd;
