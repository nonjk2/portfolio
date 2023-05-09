import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { ImageBlock } from ".";

const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledImage = styled(Image)`
  max-width: 100%;
  width: 200px;
  height: auto;
`;
interface ImageProps {
  block: ImageBlock;
}

const ImageRender: React.FC<ImageProps> = ({ block }) => {
  // const date = new Date(block.image.file.expiry_time);
  // const dateKr = `${date.getHours()} 시 + ${date.getMinutes()} 분 + ${date.getDay()};`;
  return (
    <ImageWrapper>
      <StyledImage src={`${block.image.file.url}`} alt="asdf" width={100} height={100} />
    </ImageWrapper>
  );
};

export default ImageRender;
