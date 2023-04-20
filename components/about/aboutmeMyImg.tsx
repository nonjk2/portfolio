import { Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import {
  FrontAboutMeOne,
  FrontAboutMeTwo,
  MyAboutPaper,
  Paper,
  PaperContainer,
} from "../../style/abotmeStyle/about_style";

const AboutmeMyImg = () => {
  const imageURL = "https://eundolhealth.s3.ap-northeast-2.amazonaws.com/undongs/1663595285111_IMG_6645.JPG";

  return (
    <PaperContainer>
      <Paper className="paper">
        <FrontAboutMeOne>
          <Image src={imageURL} alt="Eunseokimg" sizes="large" fill style={{ borderRadius: 15 }} />
        </FrontAboutMeOne>
        <FrontAboutMeTwo>
          <MyAboutPaper>
            <div>
              <Typography>
                안녕하세요.원하는것을 언제나 할 수 있을정도로 발전해가려는 개발자 최은석입니다. <br />
                원하는것을 하려면 그에 따른 능력이 필요하거나 운도 필요하고 항상 발전이 있어야된다고
                생각합니다. 최근 1인 앱개발을 하고싶어 항상 배움의 자세로 자료를 찾아보고 공부하며 하루하루
                배우고 있습니다. 아키텍쳐 구조에 관해 관심히 많고 공부할것이 뚜렷해지는것에기쁨을 느끼며 이를
                적용시키는것에 재미를 느낍니다. 계속 발전해나가는 개발의 세계에서 새로운 기술들이 탄생하고
                오래된 기술들이 점점 사라지는 생태계에서도 중요한 필요성을 정확히 깨닫기 위해 노력중입니다.
              </Typography>
            </div>
          </MyAboutPaper>
        </FrontAboutMeTwo>
      </Paper>
    </PaperContainer>
  );
};
export default AboutmeMyImg;
