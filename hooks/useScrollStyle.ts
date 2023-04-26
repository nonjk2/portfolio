// hooks/useScrollOpacity.ts
import { MutableRefObject, useEffect } from "react";

const useScrollOpacity = (
  ref: MutableRefObject<HTMLDivElement>,
  innerRef: MutableRefObject<HTMLDivElement>,
  containerRef: MutableRefObject<HTMLDivElement>,
  step: number,
) => {
  const handleScroll = () => {
    const scrollPosition = window.pageYOffset;
    const windowHeight = window.innerHeight;
    const sectionScrollHeight = ref.current.scrollHeight;
    const scrollcurrent = ref.current.offsetTop + sectionScrollHeight - windowHeight * 2;
    const scrollYHeight = ref.current.scrollHeight * (step + 1) - windowHeight * (2 + step);
    // 높이 6000 윈도우가 2000 보여지는게 2000 시작은 4000 보여지는건 높이 - 윈도우
    console.log(
      "scrollYHeight :",
      scrollYHeight,
      "windowHeight : ",
      windowHeight,
      "scrollPosition : ",
      scrollPosition,
      "sectionScrollHeight : ",
      sectionScrollHeight,
      "scrollcurrent : ",
      scrollcurrent,
    );

    if (innerRef.current) {
      const innerRefCopy = { ...innerRef };
      const containerRefCopy = { ...containerRef };

      const opacityFixed = Math.max(1 - (scrollPosition - scrollcurrent) / windowHeight, 0);
      const transFormFixed = Math.max(1 - (scrollPosition - scrollcurrent) / windowHeight / 2, 0.5);
      const filterFixed =
        (Math.max(scrollPosition - (scrollcurrent + windowHeight / 2.5), 0) / windowHeight) * 35;
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
