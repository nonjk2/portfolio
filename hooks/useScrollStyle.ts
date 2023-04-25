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
    const scrollYHeight = ref.current.scrollHeight * (step + 1) - windowHeight * (2 + step);
    // 각 페이지의 opacity와 위치를 업데이트

    if (innerRef.current) {
      const innerRefCopy = { ...innerRef };
      const containerRefCopy = { ...containerRef };

      const opacityFixed = Math.max(1 - (scrollPosition - scrollYHeight) / windowHeight, 0);
      const transFormFixed = Math.max(1 - (scrollPosition - scrollYHeight) / windowHeight / 2, 0.5);
      const filterFixed =
        (Math.max(scrollPosition - (scrollYHeight + windowHeight / 2.5), 0) / windowHeight) * 35;
      const opacity = scrollPosition > scrollYHeight ? opacityFixed : 1;
      const transform = scrollPosition > scrollYHeight ? transFormFixed : 1;
      const filter = scrollPosition > scrollYHeight + windowHeight / 2 ? filterFixed : 0;
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
