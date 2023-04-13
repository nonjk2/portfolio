import { useEffect } from "react";
import { useRouter } from "next/router";

const useSmoothScroll = () => {
  const router = useRouter();

  const setSmoothScroll = (isSmooth) => {
    document.documentElement.style.scrollBehavior = isSmooth ? "smooth" : "auto";
  };

  useEffect(() => {
    setSmoothScroll(true);
    const handleStart = () => setSmoothScroll(false);
    const handleStop = () => setSmoothScroll(true);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleStop);
    router.events.on("routeChangeError", handleStop);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleStop);
      router.events.off("routeChangeError", handleStop);
    };
  }, [router]);
};

export default useSmoothScroll;
