// hooks/useScrollOpacity.ts
import { MutableRefObject, useEffect, useState } from "react";

const useScrollProgress = (ref: MutableRefObject<HTMLDivElement>) => {
  const [active, setActive] = useState<boolean>(false);
  const handleScroll = () => {
    const scrollPosition = window.pageYOffset;
    const scrollSectionTop = ref.current.offsetTop;
    const scrollSectionBottom = ref.current.offsetTop + ref.current.offsetHeight;
    if (ref.current && scrollPosition > scrollSectionTop) {
      setActive(true);
    } else if (ref.current && scrollPosition > scrollSectionBottom) {
      setActive(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [ref]);
  return { active };
};

export default useScrollProgress;
