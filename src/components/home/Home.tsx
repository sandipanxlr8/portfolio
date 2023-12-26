import { saveAs } from "file-saver";
import Navbar from "../Navbar";
import Working from "@/assets/working.svg";
import { Button } from "../ui/button";
import { Download } from "lucide-react";
// import { Copy } from "lucide-react";
import Projects from "./projects/Projects";
import Technologies from "./technologies/Technologies";
import Contact from "./contact/Contact";

function Home() {
  const handlePdfDownload = () => {
    const pdfPath = "./src/assets/resume.pdf";

    saveAs(pdfPath, "sandipan_resume.pdf");
  };

  return (
    <div className="px-7 sm:px-7 md:px-[9rem]">
      {/* Navbar section */}
      <Navbar />
      {/* Navbar section ends */}
      {/* landing section */}
      <div className="mt-12 lg:flex lg:flex-row">
        <div className="pt-6 md:pl-6 lg:pt-[120px] text-xl/10">
          <p>
            Hello 👋, I'm Sandipan Kalita.
            <br />A passionate
          </p>
          <span className="text-[3rem]/[1.15] md:text-[3.5rem]/[1.15] font-[monospace] half-highlight-accent-bg">
            Full Stack Developer
          </span>

          <div className="mt-10">
            <Button
              size={"lg"}
              className="neumorph-shadow"
              onClick={handlePdfDownload}
            >
              Download Resume
              <Download className="ml-2 h-5 w-5" />
            </Button>
            {/* <Button className="ml-3" size={"lg"}>
              Copy Email
              <Copy className="ml-2 h-5 w-5" />
            </Button> */}
          </div>
        </div>
        <div className="flex align-middle mt-4 md:pr-6">
          <img src={Working} alt="working logo" />
        </div>
      </div>
      {/* landing section ends*/}

      {/* projects section */}
      <Projects />
      {/* projects section ends */}

      {/* Technologies section */}
      <Technologies />
      {/* Technologies section ends */}

      {/* Contact section */}
      <Contact />
      {/* Contact section ends */}
    </div>
  );
}

export default Home;
