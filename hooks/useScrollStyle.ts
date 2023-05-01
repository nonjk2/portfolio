// hooks/useScrollOpacity.ts
import { MutableRefObject, useEffect } from "react";

const useScrollOpacity = (
  ref: MutableRefObject<HTMLDivElement>,
  innerRef: MutableRefObject<HTMLDivElement>,
  containerRef: MutableRefObject<HTMLDivElement>,
) => {
  const handleScroll = () => {
    const scrollPosition = window.pageYOffset;
    const windowHeight = window.innerHeight;
    const sectionScrollHeight = ref.current.scrollHeight;
    const scrollSectionTop = ref.current.offsetTop;
    const scrollcurrent = scrollSectionTop + sectionScrollHeight - windowHeight * 2;
    // 높이 6000 윈도우가 2000 보여지는게 2000 시작은 4000 보여지는건 높이 - 윈도우
    // console.log(ref.current.children.item(1));
    // Array(ref.current.children.length).forEach((e, i) => {

    // });

    if (innerRef.current) {
      const innerRefCopy = { ...innerRef };
      const containerRefCopy = { ...containerRef };

      const opacityFixed = Math.max(1 - (scrollPosition - scrollcurrent) / windowHeight, 0);
      const transFormFixed = Math.max(1 - (scrollPosition - scrollcurrent) / windowHeight / 2, 0.5);
      const filterFixed =
        (Math.max(scrollPosition - (scrollcurrent + windowHeight / 2.0), 0) / windowHeight) * 50;
      const opacity = scrollPosition > scrollcurrent ? opacityFixed : 1;
      const transform = scrollPosition > scrollcurrent ? transFormFixed : 1;
      const filter = scrollPosition > scrollcurrent + windowHeight / 2 ? filterFixed : 0;
      innerRefCopy.current.style.opacity = opacity.toFixed(2);
      innerRefCopy.current.style.filter = `blur(${filter.toFixed(2)}px)`;
      containerRefCopy.current.style.transform = `scale3d(${transform}, ${transform}, 1)`;
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [innerRef, containerRef]);
};

export default useScrollOpacity;
