import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { ExternalLink } from "lucide-react";

function Projects() {
  return (
    <div className="my-[100px]">
      <h2 className="text-[10rem]/[1.15] font-[monospace]">PROJECTS</h2>
      <div className="lg:flex lg:flex-row">
        <div className="px-6 py-6">
          <img
            src="../src/assets/project.png"
            alt="project image"
            className="rounded-2xl lg:w-[46rem] aspect-[16/10]"
          />
        </div>
        <div className="py-6 px-6 sm:px-6 lg:px-14">
          <h3 className="text-2xl">Project name</h3>
          <p className="mt-6">
            Lorem ipsum dolor sit amet consectetur. Ipsum malesuada cras
            volutpat morbi eget a cursus nunc quis. Ac curabitur eleifend non
            est diam est.
          </p>
          <div className="mt-4">
            <Badge className="mx-2">Badge</Badge>
            <Badge className="mx-2">Badge1</Badge>
            <Badge className="mx-2">Badge2</Badge>
          </div>
          <div className="mt-6">
            <Button size={"default"}>
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
