import Project from "./Project";
import projects from "@/assets/projects.json";

function Projects() {
  return (
    <div className="mt-[100px]">
      <h2 className="text-[3.5rem]/[1.15] lg:text-[8rem]/[1.15] break-words font-medium">
        PROJECTS
      </h2>
      {projects.map((project) => (
        <Project key={project.name} project={project} />
      ))}
    </div>
  );
}

export default Projects;
