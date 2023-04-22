import { useRouter } from "next/router";
import { useEffect } from "react";

const useSmoothScroll = () => {
  const router = useRouter();

  const setSmoothScroll = (isSmooth) => {
    const scrollBehavior = isSmooth ? "smooth" : "auto";
    const style = `html, body { scroll-behavior: ${scrollBehavior}; }`;
    const head = document.querySelector("head");
    const styleTag = document.createElement("style");
    styleTag.setAttribute("type", "text/css");
    styleTag.appendChild(document.createTextNode(style));
    head.appendChild(styleTag);
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
