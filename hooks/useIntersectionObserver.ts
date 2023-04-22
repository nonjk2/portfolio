import { useEffect, MutableRefObject } from "react";

type SectionRefs = Array<MutableRefObject<HTMLElement | null>>;

export const useIntersectionSetActiveStep = (
  setActiveStep: (step: number) => void,
  sectionRefs: SectionRefs,
): void => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionRefs.findIndex((ref) => ref.current === entry.target);
            setActiveStep(index);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
      },
    );

    sectionRefs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      sectionRefs.forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, [setActiveStep, sectionRefs]);
};
