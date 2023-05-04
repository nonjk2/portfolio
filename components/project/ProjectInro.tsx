import React from "react";
import styled from "styled-components";
import { GitHub } from "@mui/icons-material/";
import Link from "next/link";
import Image from "next/image";
import { RichTextBaseInput } from "./notion";
import RichTextRenderer from "./notion/RichTextRenderer";
import notion from "../../public/notion.ico";

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
  height: 0.5rem;
  background-color: ${({ backcolor }) => backcolor};
  border-radius: inherit;
  width: ${({ progress }) => progress}%;
  transition: width 1s;
`;

interface LanguageCounts {
  [key: string]: number;
}

interface ProjectLang {
  languages: LanguageCounts;
  name: string;
  url: string;
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
  opacity: number;
  url: string;
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
const IconDiv = styled.div`
  align-items: flex-start;

  width: auto;
  display: flex;
  margin-top: 1rem;
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
const ProjectFrontEnd: React.FC<ProjectFrontEndProps> = ({ properties, githubLang, opacity, url }) => {
  const period = properties["\b기간"];
  const languageAndFramework = properties["언어 및 프레임워크"].multi_select;
  const personnel = properties["인원"].multi_select;
  const projectStatus = properties["프로젝트 상태"].status;
  const totalCount = Object.values(githubLang.languages).reduce((sum, count) => sum + count, 0);

  return (
    <div>
      <ProjectName>
        {properties["이름"].title.map((richTextElement: RichTitleInput) => (
          <RichTextRenderer key={richTextElement.plain_text} richTextElement={richTextElement} />
        ))}
      </ProjectName>
      <div style={{ width: "100%", display: "flex", flexWrap: "wrap" }}>
        {languageAndFramework.map((e) => (
          <LanguageDiv key={e.id}>
            <ValueTypography>{e.name}</ValueTypography>
          </LanguageDiv>
        ))}
      </div>

      {personnel.map((e) => (
        <LanguageDiv key={e.id}>
          <ValueTypography>{e.name}</ValueTypography>
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
      </LanguageDiv>
      {languageAndFramework.map((language) => {
        if (Object.prototype.hasOwnProperty.call(githubLang.languages, language.name)) {
          const progressValue = (githubLang.languages[language.name] / totalCount) * 100;
          const progressWidthValue = opacity === 1 ? progressValue : 0;
          return (
            <ProgressDiv key={language.id}>
              {language.name}
              <ProgressBarContainer>
                <ProgressBarFiller backcolor={`${language.color}`} progress={progressWidthValue} />
              </ProgressBarContainer>
            </ProgressDiv>
          );
        }
        return null;
      })}
      <IconDiv>
        <Link href={`${githubLang.url}`} target="_blank" style={{ marginRight: "2rem" }}>
          <GitHub fontSize="large" />
        </Link>
        <Link href={`${url}`} target="_blank" style={{ marginRight: "2rem" }}>
          <Image src={notion} alt="asdf" width={35} height={35} />
        </Link>
      </IconDiv>
    </div>
  );
};

export default ProjectFrontEnd;
