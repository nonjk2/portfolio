import { MutableRefObject, useEffect } from "react";

const useFadeInEffect = (
  firstref: MutableRefObject<HTMLSpanElement>,
  secondref: MutableRefObject<HTMLSpanElement>,
) => {
  const handleScroll = () => {
    const scrollPosition = window.pageYOffset;
    const elementPosition = firstref.current.offsetTop;
    const windowHeight = window.innerHeight;
    const opacity = (scrollPosition / windowHeight) * 2 < 1 ? (scrollPosition / windowHeight) * 2 : 0.99;
    const opacity2 = Math.min((scrollPosition / windowHeight) * 2, 1);
    const fadeInStart = elementPosition - windowHeight;

    const firstCopyRef = { ...firstref };
    const secondCopyRef = { ...secondref };
    console.log(
      "opacity : ",
      opacity2,

      "windowHeight : ",
      firstCopyRef.current.style.opacity,
    );

    firstCopyRef.current.style.opacity = opacity.toFixed(2);
    secondCopyRef.current.style.opacity = opacity.toFixed(2);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [firstref]);
};

export default useFadeInEffect;
