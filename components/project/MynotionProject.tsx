import React, { useRef, useState } from "react";
import {
  ProjectWarpper,
  ProjectSectionDiv,
  ProjectNameContainer,
  ProjectAbout,
  CoverImagediv,
  ProjectCoverImage,
  ProjectContainer,
  ProjectIntroContainer,
} from "../../styles/projectStyle/project_style";
import ProjectFrontEnd from "./ProjectInro";
import NotionRenderer from "./notion/notionRender";
import { NotionPage } from "../../pages/api/notion";
import { useAppContext } from "../appprovider";
import useScrollProgress from "../../hooks/useScrollProgress";
import { Block } from "./notion";

interface notionProjectProps {
  e: NotionPage;
  index: number;
}

const MynotionProject: React.FC<notionProjectProps> = ({ e, index }) => {
  const { notionDataBase, blocks, repositories } = useAppContext();
  const [opacity, setOpacity] = useState<number>(0);
  const projectName = notionDataBase.map((v) => v.properties["이름"].title[0].plain_text.toLowerCase());
  const gitLang = repositories.filter((v) => projectName.includes(v.name.toLowerCase()));
  const NameOrLangRepositories = projectName
    .map((name) => {
      return gitLang.find((repo) => repo.name.toLowerCase() === name);
    })
    .filter((repo) => repo !== undefined)
    .map((v) => ({ name: v.name, languages: v.languages, url: v.html_url }));
  const createRefs = (length: number): React.RefObject<HTMLDivElement>[] => {
    return Array.from({ length }, () => useRef<HTMLDivElement>(null));
  };
  const projectAboutRefs = createRefs(notionDataBase.length);
  useScrollProgress(projectAboutRefs[index], setOpacity);
  const sliceBlocks = blocks.map((val: Block[]) => {
    const newBlock = val.slice(
      0,
      val.findIndex((v) => v.type === "heading_1"),
    );
    return newBlock;
  });
  return (
    <ProjectWarpper key={e.id}>
      <ProjectSectionDiv>
        <ProjectContainer>
          <ProjectIntroContainer>
            <ProjectNameContainer>
              <ProjectFrontEnd
                url={e.url}
                properties={e.properties}
                githubLang={NameOrLangRepositories[index]}
                opacity={opacity}
              />
            </ProjectNameContainer>
          </ProjectIntroContainer>
          <ProjectAbout ref={projectAboutRefs[index]}>
            <CoverImagediv>
              {e.cover && <ProjectCoverImage fill src={e.cover.file.url} alt="" className="coverImage" />}
            </CoverImagediv>
            <NotionRenderer blocks={sliceBlocks[index]} />
          </ProjectAbout>
        </ProjectContainer>
      </ProjectSectionDiv>
    </ProjectWarpper>
  );
};

export default MynotionProject;
