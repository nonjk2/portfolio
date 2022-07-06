import { Button, Link } from "@material-ui/core";
import { useRef } from "react";
import AppLayout from "../components/appLayout";
import MainBackground from "../components/mainback";
import MainImage from "../components/mainImage";

function Home() {
  const ref = useRef(null);
  return (
    // <div>
    //   {/* <Headers /> */}
    //   {/* <MainImage /> */}
    //   <div id="div1" style={{ width: "100vw", height: "100vh", background: "red" }}>
    //     <Link href="#div1">
    //       <a>div1</a>
    //     </Link>
    //     <Link href="#div2">
    //       <a>div2</a>
    //     </Link>

    //     <Link href="#div3">
    //       <a>div3</a>
    //     </Link>

    //     <Link href="#div4">
    //       <a>div4</a>
    //     </Link>

    //     <Link href="#div5">
    //       <a>div5</a>
    //     </Link>
    //     {/* <Button onClick={ref.current.scrollIntoView({ behavior: "smooth" })}>
    //       <a>div5</a>
    //     </Button> */}
    //   </div>
    //   <div ref={ref} id="div2" style={{ width: "100vw", height: "100vh", background: "blue" }} />
    //   <div id="div3" style={{ width: "100vw", height: "100vh", background: "gray" }} />
    //   <div id="div4" style={{ width: "100vw", height: "100vh", background: "black" }} />
    //   <div id="div5" style={{ width: "100vw", height: "100vh", background: "red" }} />
    // </div>
    <AppLayout />
  );
}

export default Home;
