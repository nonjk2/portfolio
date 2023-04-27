import { styled } from "@mui/material";
import Image from "next/image";

interface ContainerProps {
  activeStep: number;
}
export const Container = styled("div")(({ activeStep }: ContainerProps) => ({
  position: activeStep === 1 ? "sticky" : "sticky",
  top: "0",
  height: "100vh",
  width: "80vw",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "@media (max-width: 768px)": {
    display: "none",
  },
}));

export const SmallpaperContainer = styled("div")(() => ({
  perspective: "1000px",
  flex: "1",
  "&:hover , &:focus": {
    "& .paper": { transform: "rotateY(180deg)" },
  },
}));

export const Paper = styled("div")(({ theme }) => ({
  flex: 1,
  position: "relative",
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  backgroundColor: "rgba(255, 255, 255, 0.13)",
  border: "2px solid rgba(255,255,255,0.1)",
  boxShadow: "0 0 40px rgba(8,7,16,0.1)",
  borderRadius: 15,
  transition: "transform 0.2s",
  transformStyle: "preserve-3d",
  transform: "rotateY(0deg)",
  color: theme.palette.primary.main,
}));

export const PaperContainer = styled("div")(() => ({
  position: "sticky",
  perspective: "1000px",
  width: "40vw",
  height: "60vh",
  "&:hover , &:focus": {
    "& .paper": { transform: "rotateY(180deg)" },
  },
}));

export const FrontAboutMeOne = styled("div")({
  display: "flex",
  alignContent: "center",
  justifyContent: "center",
  backfaceVisibility: "hidden",
  MozBackfaceVisibility: "hidden",
  position: "absolute",
  width: "100%",
  height: "100%",
  zIndex: "2",
  // overflow: "hidden",
});

export const FrontAboutMeTwo = styled("div")({
  backfaceVisibility: "hidden",
  MozBackfaceVisibility: "hidden",
  borderRadius: 15,
  position: "absolute",
  width: "100%",
  height: "100%",
  zIndex: "1",
  transform: "rotateY(180deg)",
});

export const EunImg = styled(Image)({
  objectFit: "cover",
  borderRadius: 15,
});

export const MyAboutPaperContainer = styled("div")({
  width: "20vw",
  height: "50vh",
  display: "flex",
  flexDirection: "column",
  marginLeft: "10px",
});

export const MyAboutAddContainer = styled("div")({
  position: "absolute",
  overflow: "hidden",
  right: "15%",
  // top: "auto",
  maxWidth: "25vw",
  width: "30vw",
  height: "50vh",
  bottom: "30%",
  display: "flex",
  flexDirection: "column",
  marginLeft: "10px",
  transition: "all 0.3s",
});

export const MyAboutPaper = styled(Paper)({
  borderRadius: 15,
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const MyAboutSmallPaperContainer = styled("div")({
  flex: "1",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
});

export const MyAboutSmallPaper = styled("div")({
  flex: "1",
  display: "flex",
  width: "100%",
  height: "100%",
  lineHeight: "50%",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
});

export const Bottompaper = styled("div")({
  flex: "0.15",
  borderRadius: "30",
  marginTop: "5px",
  backgroundColor: "rgba(255, 255, 255, 0.13)",
  border: "2px solid rgba(255,255,255,0.1)",
  boxShadow: "0 0 40px rgba(8,7,16,0.1)",
  display: "flex",
  justifyContent: "center",
});

// ... 나머지 스타일드 컴포넌트들

// export const useStyles = styled((theme) => ({
//   Container: {
//     height: "100vh",
//     width: "100vw",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   SmallpaperContainer: {
//     perspective: "1000px",
//     flex: "1",
//     "&:hover , &:focus": {
//       "& $paper": { transform: "rotateY(180deg)" },
//     },
//     // margin: "5px",
//   },
//   paper: {
//     position: "relative",
//     width: "100%",
//     height: "100%",
//     backgroundColor: "rgba(255, 255, 255, 0.13)",
//     // backdropFilter: "blur(2px)",
//     border: "2px solid rgba(255,255,255,0.1)",
//     boxShadow: "0 0 40px rgba(8,7,16,0.1)",
//     borderRadius: 15,
//     transition: "transform 0.2s",
//     transformStyle: "preserve-3d",
//     transform: "rotateY(0deg)",

//     // zIndex: "3",
//   },
//   paperContainer: {
//     perspective: "1000px",
//     width: "40vw",
//     height: "60vh",
//     "&:hover , &:focus": {
//       "& $paper": { transform: "rotateY(180deg)" },
//     },
//     // margin: "5px",
//   },
//   /** 카드 플립효과 */
//   frontAboutMeOne: {
//     backfaceVisibility: "hidden",
//     MozBackfaceVisibility: "hidden",
//     position: "absolute",
//     width: "100%",
//     height: "100%",
//     zIndex: "2",
//   },
//   /** 카드 플립효과 뒷면 */
//   frontAboutMeTwo: {
//     backfaceVisibility: "hidden",
//     MozBackfaceVisibility: "hidden",
//     borderRadius: 15,
//     position: "absolute",
//     width: "100%",
//     height: "100%",
//     zIndex: "1",
//     transform: "rotateY(180deg)",
//   },
//   eunImg: {
//     objectFit: "cover",
//     borderRadius: 15,
//   },
//   myAboutPaperContainer: {
//     width: "20vw",
//     height: "50vh",
//     display: "flex",
//     flexDirection: "column",
//     marginLeft: "10px",
//   },
//   myAboutAddContainer: {
//     width: "30vw",
//     height: "50vh",
//     display: "flex",
//     flexDirection: "column",
//     marginLeft: "10px",
//   },
//   myAboutPaper: {
//     borderRadius: 15,
//     width: "100%",
//     height: "100%",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   myAboutSmallPaperContainer: {
//     flex: "1",
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//   },
//   myAboutSmallPaper: {
//     // height: "25%",
//     flex: "1",
//     // margin: "5px",
//     display: "flex",
//     lineHeight: "50%",
//     alignItems: "center",
//     justifyContent: "center",
//     flexDirection: "column",
//   },

//   bottompaper: {
//     flex: "0.15",
//     borderRadius: "30",
//     marginTop: "5px",
//     backgroundColor: "rgba(255, 255, 255, 0.13)",
//     // backdropFilter: "blur(2px)",
//     border: "2px solid rgba(255,255,255,0.1)",
//     boxShadow: "0 0 40px rgba(8,7,16,0.1)",
//     display: "flex",
//     justifyContent: "center",
//   },
// }));
