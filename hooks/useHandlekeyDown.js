import { useCallback, useEffect } from "react";

const useHandleKeyDown = (setActiveStep, Pages) => {
  const handleKeyDown = useCallback(
    (event) => {
      event.preventDefault();
      if (event.key === "ArrowDown") {
        setActiveStep((prev) => (prev < Pages.length - 1 ? prev + 1 : 0));
      } else if (event.key === "ArrowUp") {
        setActiveStep((prev) => (prev > 0 ? prev - 1 : Pages.length - 1));
      }
    },
    [setActiveStep, Pages],
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);
};

export default useHandleKeyDown;
