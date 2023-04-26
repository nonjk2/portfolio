import { MutableRefObject, useEffect, useState } from "react";

export const useScrollRefPercent = (ref: MutableRefObject<HTMLDivElement>) => {
  const [scrollPercentage, setScrollPercentage] = useState<number>(0);
  const [step, setStep] = useState<number>(0);
  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const rect = ref.current.getBoundingClientRect();
    const elementTop = rect.top + scrollTop;
    const elementBottom = rect.bottom + scrollTop;

    const windowHeight = window.innerHeight;
    const scrollHeight = elementBottom - elementTop;
    const scrollableHeight = windowHeight + scrollHeight;
    const scrollPosition = scrollTop - elementTop;

    const rawPercentage = (scrollPosition / scrollableHeight) * 100;
    const roundedPercentage = Math.round(rawPercentage); // 반올림
    if (scrollPercentage * 4 > 50) {
      setStep(1);
    }
    // 정수형태일때만

    setScrollPercentage(Math.max(0, Math.min(100, roundedPercentage)));
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [ref]);

  return { scrollPercentage, step };
};
