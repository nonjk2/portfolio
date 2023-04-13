import { Paper } from "@material-ui/core";
import { PaperContainer } from "../../style/layout";

const AboutmeMyImg = ({ classes }) => {
  return (
    <PaperContainer className={classes.paperContainer}>
      <div elevation={3} className={classes.paper}>
        <div className={classes.frontAboutMeOne}>
          <img
            src="https://eundolhealth.s3.ap-northeast-2.amazonaws.com/undongs/1663595285111_IMG_6645.JPG"
            width="100%"
            height="100%"
            alt="Eunseokimg"
            className={classes.eunImg}
          />
        </div>
        <div className={classes.frontAboutMeTwo}>
          <Paper elevation={2} className={classes.myAboutPaper}>
            <div>1234</div>
          </Paper>
        </div>
      </div>
    </PaperContainer>
  );
};
export default AboutmeMyImg;
