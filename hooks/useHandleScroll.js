import { useEffect } from "react";
import { debounce } from "lodash";
import { useAppContext } from "../components/appprovider"; // Adjust the import path as needed

const useWheelHandler = (outerDivRef, Pages) => {
  const { activeStep, setActiveStep } = useAppContext();

  const handleStepChange = debounce((deltaY) => {
    if (deltaY < 0) {
      setActiveStep((prev) => (prev > 0 ? prev - 1 : Pages.length - 1));
    } else {
      setActiveStep((prev) => (prev < Pages.length - 1 ? prev + 1 : 0));
    }
  }, 350); // Adjust the delay as needed, 1000ms = 1 second

  useEffect(() => {
    const wheelHandler = (e) => {
      e.preventDefault();
      handleStepChange(e.deltaY);
    };

    const outerDivRefCurrent = outerDivRef.current;
    outerDivRefCurrent.addEventListener("wheel", wheelHandler);

    return () => {
      outerDivRefCurrent.removeEventListener("wheel", wheelHandler);
    };
  }, [outerDivRef, activeStep, setActiveStep]);
};

export default useWheelHandler;
