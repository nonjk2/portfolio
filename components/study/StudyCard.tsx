import Image from "next/image";
import React from "react";

import { NotionPage } from "../../pages/api/notion";
import { Gubunsun } from "../project/notion/notionRender";
import { SearchCardContainer } from "../../styles/skillStyle/Skill_style";

interface StudyCardProps {
  study: NotionPage;
}
const StudyCard: React.FC<StudyCardProps> = ({ study }) => {
  return (
    <SearchCardContainer>
      <div className="blog-card">
        <div className="meta">
          <div className="photo">
            <Image src={study.cover?.file.url} alt="myback" fill />
          </div>
          <ul className="details">
            <li className="author">
              <a href="#">John Doe</a>
            </li>
            <li className="date">Aug. 24, 2015</li>
            <li className="tags">
              <ul>
                <li>
                  <a href="#">Learn</a>
                </li>
                <li>
                  <a href="#">Code</a>
                </li>
                <li>
                  <a href="#">HTML</a>
                </li>
                <li>
                  <a href="#">CSS</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="description">
          <h1>{study.properties["이름"].title[0].plain_text}</h1>
          <Gubunsun />
          <span> {study.properties["설명"].rich_text[0].plain_text}</span>
          <p className="read-more" />
        </div>
      </div>
    </SearchCardContainer>
  );
};
export default StudyCard;
