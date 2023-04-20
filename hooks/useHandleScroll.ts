import { useEffect } from "react";
import { debounce } from "lodash";
import { useAppContext } from "../components/appprovider";

const useWheelHandler = (outerDivRef, Pages) => {
  const { activeStep, setActiveStep } = useAppContext();

  const handleStepChange = debounce((deltaY) => {
    if (deltaY < 0) {
      setActiveStep(activeStep > 0 ? activeStep - 1 : Pages.length - 1);
    } else {
      setActiveStep(activeStep < Pages.length - 1 ? activeStep + 1 : 0);
    }
  }, 350);

  useEffect(() => {
    const wheelHandler = (e) => {
      e.preventDefault();
      // handleStep(e.deltaY);
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
