// hooks/useScrollOpacity.ts
import { MutableRefObject, useEffect } from "react";

const useScrollStepper = (
  ref: MutableRefObject<HTMLDivElement>,
  stepperRef: MutableRefObject<HTMLDivElement>,
  extraRef?: MutableRefObject<HTMLDivElement>,
) => {
  const handleScroll = () => {
    const scrollPosition = window.pageYOffset;
    const windowHeight = window.innerHeight;
    const sectionScrollHeight = ref.current.scrollHeight;
    const scrollSectionTop = ref.current.offsetTop;
    const extraRefChildren = extraRef?.current?.children as HTMLCollection;
    const percent = ((scrollPosition - scrollSectionTop) / (sectionScrollHeight - windowHeight * 2)) * 100;
    const percentage = Math.min(Math.max(percent, 0), 100);
    const infoHeadings = document.getElementsByClassName("aboutInfoPage");
    const infoMap = document.getElementsByClassName("aboutInfoMap");
    const infoIntro = document.getElementsByClassName("aboutInfo");
    if (extraRefChildren) {
      const childElementThree = extraRefChildren.item(3) as HTMLSpanElement;
      const childElementtwo = extraRefChildren.item(2) as HTMLSpanElement;
      const asdasd = infoHeadings.item(0) as HTMLDivElement;
      const Map = infoMap.item(0) as HTMLDivElement;
      //   const Info = infoIntro.item(0) as HTMLDivElement;
      console.log(asdasd);
      if (percentage > 30) {
        Map.style.opacity = `${1}`;
        asdasd.style.scale = `1.5`;
        childElementThree.style.opacity = `${1}`;
        childElementtwo.style.opacity = `${0}`;
        childElementThree.style.transform = `translateY(0rem)`;
        childElementtwo.style.transform = `translateY(-2rem)`;
      } else if (percentage <= 30) {
        Map.style.opacity = `${0}`;
        asdasd.style.scale = `1`;
        asdasd.style.width = `${30}vw`;
        asdasd.style.opacity = `${1}`;
        childElementThree.style.opacity = `${0}`;
        childElementtwo.style.opacity = `${1}`;
        childElementThree.style.transform = `translateY(-2rem)`;
        childElementtwo.style.transform = `translateY(0rem)`;
      }
    }

    if (ref.current && scrollPosition > scrollSectionTop) {
      const copyStepperRef = { ...stepperRef };
      copyStepperRef.current.style.width = `${percentage.toFixed(2)}%`;
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [ref]);
};

export default useScrollStepper;
