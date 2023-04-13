import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles((theme) => ({
  Container: {
    height: "100vh",
    width: "100vw",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  SmallpaperContainer: {
    perspective: "1000px",
    flex: "1",
    "&:hover , &:focus": {
      "& $paper": { transform: "rotateY(180deg)" },
    },
    // margin: "5px",
  },
  paper: {
    position: "relative",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.13)",
    // backdropFilter: "blur(2px)",
    border: "2px solid rgba(255,255,255,0.1)",
    boxShadow: "0 0 40px rgba(8,7,16,0.1)",
    borderRadius: 15,
    transition: "transform 0.2s",
    transformStyle: "preserve-3d",
    transform: "rotateY(0deg)",

    // zIndex: "3",
  },
  paperContainer: {
    perspective: "1000px",
    width: "40vw",
    height: "60vh",
    "&:hover , &:focus": {
      "& $paper": { transform: "rotateY(180deg)" },
    },
    // margin: "5px",
  },
  /** 카드 플립효과 */
  frontAboutMeOne: {
    backfaceVisibility: "hidden",
    MozBackfaceVisibility: "hidden",
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: "2",
  },
  /** 카드 플립효과 뒷면 */
  frontAboutMeTwo: {
    backfaceVisibility: "hidden",
    MozBackfaceVisibility: "hidden",
    borderRadius: 15,
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: "1",
    transform: "rotateY(180deg)",
  },
  eunImg: {
    objectFit: "cover",
    borderRadius: 15,
  },
  myAboutPaperContainer: {
    width: "20vw",
    height: "50vh",
    display: "flex",
    flexDirection: "column",
    marginLeft: "10px",
  },
  myAboutAddContainer: {
    width: "30vw",
    height: "50vh",
    display: "flex",
    flexDirection: "column",
    marginLeft: "10px",
  },
  myAboutPaper: {
    borderRadius: 15,
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  myAboutSmallPaperContainer: {
    flex: "1",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  myAboutSmallPaper: {
    // height: "25%",
    flex: "1",
    // margin: "5px",
    display: "flex",
    lineHeight: "50%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },

  bottompaper: {
    flex: "0.15",
    borderRadius: "30",
    marginTop: "5px",
    backgroundColor: "rgba(255, 255, 255, 0.13)",
    // backdropFilter: "blur(2px)",
    border: "2px solid rgba(255,255,255,0.1)",
    boxShadow: "0 0 40px rgba(8,7,16,0.1)",
    display: "flex",
    justifyContent: "center",
  },
}));
