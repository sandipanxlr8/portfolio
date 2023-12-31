import { Badge } from "../../ui/badge";
import { Button } from "../../ui/button";
import { ExternalLink } from "lucide-react";

interface ProjectInterface {
  name: string;
  desc: string;
  tech: string[];
  isGithub: boolean;
  githubUrl: string;
  isLive: boolean;
  liveUrl: string;
}

interface ProjectPropsInterface {
  project: ProjectInterface;
}

function Project({ project }: ProjectPropsInterface) {
  return (
    <div className="lg:flex lg:flex-row mt-4 sm:mt-0">
      <div className="px-6 py-6 lg:w-[45%]">
        <img
          src="../src/assets/project.png"
          alt="project image"
          className="rounded-2xl lg:w-[46rem] aspect-[16/10] neumorph-shadow"
        />
      </div>
      <div className="pt-0 sm:pt-0 lg:pt-6 pb-6 px-6 sm:px-6 lg:px-14 lg:w-[55%]">
        <h3 className="text-2xl">{project.name}</h3>
        <p className="mt-2">{project.desc}</p>
        <div className="mt-2">
          {project.tech &&
            project.tech.map((tech) => (
              <Badge key={tech} className="mt-2 mx-2 neumorph-shadow">
                {tech}
              </Badge>
            ))}
        </div>
        <div>
          {project.isGithub && (
            <Button
              className="mt-4 mr-4 rounded-xl neumorph-shadow"
              size={"default"}
            >
              Check on GitHub
              <ExternalLink className="ml-3 h-5 w-5" />
            </Button>
          )}
          {project.isLive && (
            <Button
              className="mt-4 rounded-xl neumorph-shadow"
              size={"default"}
            >
              Live
              <ExternalLink className="ml-3 h-5 w-5" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Project;
