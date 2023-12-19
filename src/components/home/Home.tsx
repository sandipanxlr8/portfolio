import Navbar from "../Navbar";
import Working from "@/assets/working.svg";
import { Button } from "../ui/button";
import { Download } from "lucide-react";
// import { Copy } from "lucide-react";
import Projects from "./Projects";

function Home() {
  return (
    <div className="px-7 sm:px-7 md:px-[9rem]">
      <Navbar />
      {/* landing section */}
      <div className="mt-12 lg:flex lg:flex-row">
        <div className="pt-14 lg:pt-[120px]">
          <h2 className="text-3xl/10">
            Hello 👋, I'm Sandipan Kalita.
            <br />
            you can call me Sandip, a passionate
          </h2>
          <span className="text-[4rem]/[1.15] font-[monospace] half-highlight-accent-bg">
            Full Stack Developer
          </span>
          <div className="mt-10">
            <Button size={"lg"}>
              Download Resume
              <Download className="ml-2 h-5 w-5" />
            </Button>
            {/* <Button className="ml-3" size={"lg"}>
              Copy Email
              <Copy className="ml-2 h-5 w-5" />
            </Button> */}
          </div>
        </div>
        <div className="flex align-middle sm:mt-4">
          <img src={Working} alt="working logo" />
        </div>
      </div>
      {/* landing section ends*/}
      {/* projects section */}
      <Projects />
      {/* projects section ends */}
    </div>
  );
}

export default Home;
