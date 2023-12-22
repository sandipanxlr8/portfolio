import TechCard from "./TechCard";
import technologies from "@/assets/technologies.json";
import TechCardInterface from "@/interfaces/TechCardInterface";

function Technologies() {
  const techs: TechCardInterface[] = technologies;
  return (
    <div className="mt-[100px]">
      <h2 className="text-[5rem]/[1.15] lg:text-[10rem]/[1.15] font-[monospace]">
        TECHNOLOGIES
      </h2>
      <div className="lg:grid lg:grid-cols-3 lg:gap-2">
        {techs &&
          techs.map((tech) => <TechCard key={tech.cardName} tech={tech} />)}
      </div>
    </div>
  );
}

export default Technologies;
