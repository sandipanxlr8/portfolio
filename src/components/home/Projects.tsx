import Project from "./Project";
import projects from "@/assets/projects.json";

function Projects() {
  return (
    <div className="mt-[100px]">
      <h2 className="text-[10rem]/[1.15] font-[monospace]">PROJECTS</h2>
      {projects.map((project) => (
        <Project key={project.name} project={project} />
      ))}
    </div>
  );
}

export default Projects;
