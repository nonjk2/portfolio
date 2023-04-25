// // hooks/useScrollOpacity.ts
// import { MutableRefObject, useEffect } from "react";

// const useScrollOpacity = (refArray: MutableRefObject<HTMLDivElement>[]) => {
//   const handleScroll = () => {
//     const scrollPosition = window.pageYOffset;
//     const windowHeight = window.innerHeight;
//     // 각 페이지의 opacity와 위치를 업데이트
//     refArray.forEach((ref, index) => {
//       if (ref.current) {
//         const scrollYHeight = ref.current.scrollHeight * (index + 1) - windowHeight * (2 + index);
//         const refCopy = { ...ref };
//         const cureentHeight = refCopy.current.scrollHeight;
//         const opacityFixed =
//           1 - (scrollPosition - scrollYHeight) / windowHeight > 0
//             ? 1 - (scrollPosition - scrollYHeight) / windowHeight
//             : 0;
//         const opacity = scrollPosition > scrollYHeight ? opacityFixed : 1;
//         refCopy.current.style.opacity = opacity.toFixed(2);
//         console.log(
//           "스크롤포지션 : ",
//           scrollPosition,
//           "윈도우height : ",
//           windowHeight,
//           "현재curHeight : ",
//           cureentHeight,
//           "투명도 : ",
//           opacity.toFixed(2),
//         );
//         // refCopy.current.style.scale = opacity.toFixed(2);
//       }
//     });
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [refArray]);
// };

// export default useScrollOpacity;
