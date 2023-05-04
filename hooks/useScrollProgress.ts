// hooks/useScrollOpacity.ts
import { MutableRefObject, useEffect } from "react";

const useScrollProgress = (ref: MutableRefObject<HTMLDivElement>, setOpacity) => {
  const handleScroll = () => {
    const rect = ref.current.getBoundingClientRect();
    const scrollSectionTop = rect.top;
    const viewportHeight = window.innerHeight / 2;
    // const scrollSectionBottom = ref.current.offsetTop + ref.current.offsetHeight;
    const copyref = { ...ref };
    if (scrollSectionTop - viewportHeight < 0) {
      copyref.current.style.opacity = `1`;
      setOpacity(1);
    } else {
      copyref.current.style.opacity = `0`;
      setOpacity(0);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [ref]);
};

export default useScrollProgress;
