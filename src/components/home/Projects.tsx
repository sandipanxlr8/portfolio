import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { ExternalLink } from "lucide-react";

function Projects() {
  return (
    <div className="mt-[100px]">
      <h2 className="text-[10rem]/[1.15] font-[monospace]">PROJECTS</h2>
      <div className="lg:flex lg:flex-row">
        <div className="lg:w-1/2 p-6">
          <img src="../src/assets/project.png" alt="" className="" />
        </div>
        <div className="lg:w-1/2 p-6">
          <h3>Project name</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur. Ipsum malesuada cras
            volutpat morbi eget a cursus nunc quis. Ac curabitur eleifend non
            est diam est.
          </p>
          <Badge>Badge</Badge>
          <Badge>Badge1</Badge>
          <Badge>Badge2</Badge>
          <div>
            <Button size={"lg"}>
              Check on GitHub
              <ExternalLink className="ml-3 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
