// useArrowKeyNavigation.js
import { useEffect } from "react";

const useHandleProjectArrow = (slideRef) => {
  const handleKeyDown = (event) => {
    if (event.key === "ArrowRight") {
      slideRef.current.slickNext();
    } else if (event.key === "ArrowLeft") {
      slideRef.current.slickPrev();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
};

export default useHandleProjectArrow;
