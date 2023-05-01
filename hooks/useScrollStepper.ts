// hooks/useScrollOpacity.ts
import { MutableRefObject, useEffect } from "react";

const useScrollStepper = (
  ref: MutableRefObject<HTMLDivElement>,
  stepperRef: MutableRefObject<HTMLDivElement>,
  extraRef?: MutableRefObject<HTMLDivElement>,
) => {
  const handleMouse = (e: MouseEvent) => {
    const { clientX, clientY } = e;
    const WhiteBackgroundTwoContainer = document
      .getElementsByClassName("WhiteBackgroundTwoContainer")
      .item(0) as HTMLDivElement;
    WhiteBackgroundTwoContainer.style.transform = `translateY(${(clientY / 100).toFixed(1)}ch) translateX(${(
      clientX / 100
    ).toFixed(1)}ch)`;
  };
  const handleScroll = () => {
    const scrollPosition = window.pageYOffset;
    const windowHeight = window.innerHeight;
    const sectionScrollHeight = ref.current.scrollHeight;
    const scrollSectionTop = ref.current.offsetTop;
    const extraRefChildren = extraRef?.current?.children as HTMLCollection;
    const percent = ((scrollPosition - scrollSectionTop) / (sectionScrollHeight - windowHeight * 2)) * 100;
    const percentage = Math.min(Math.max(percent, 0), 100);
    const infoHeadings = document.getElementsByClassName("aboutInfoPage");

    const backgroundSecondCircle = document
      .getElementsByClassName("backgroundSecondCircle")
      .item(0) as HTMLDivElement;
    if (extraRefChildren) {
      const childElementThree = extraRefChildren.item(3) as HTMLSpanElement;
      const childElementtwo = extraRefChildren.item(2) as HTMLSpanElement;
      const asdasd = infoHeadings.item(0) as HTMLDivElement;
      backgroundSecondCircle.style.transform = `translateY(${(percentage / 5).toFixed(1)}ch)`;
      if (percentage > 30) {
        childElementThree.style.opacity = `${1}`;
        childElementtwo.style.opacity = `${0}`;
        childElementThree.style.transform = `translateY(0rem)`;
        childElementtwo.style.transform = `translateY(-2rem)`;
      } else if (percentage <= 30) {
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
    window.addEventListener("mousemove", handleMouse);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.addEventListener("mousemove", handleMouse);
    };
  }, [ref]);
};

export default useScrollStepper;
