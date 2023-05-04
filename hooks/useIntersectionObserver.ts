import { useEffect, MutableRefObject } from "react";

type SectionRefs = Array<MutableRefObject<HTMLElement | null>>;

export const useIntersectionSetActiveStep = (
  setActiveStep: (step: number) => void,
  sectionRefs: SectionRefs,
): void => {
  const handleScroll = () => {
    sectionRefs.forEach((e, i) => {
      const scroll = e.current.getBoundingClientRect();
      const scrollTop = scroll.top;
      const scrollBot = scroll.bottom;
      const veiwPortHeight = window.innerHeight;
      const upScroll = scrollBot - veiwPortHeight * 2;
      if (scrollTop > 0 && scrollTop < 100) {
        setActiveStep(i);
      } else if (upScroll > 0 && upScroll < 200) {
        setActiveStep(i);
      }
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sectionRefs]);
};
