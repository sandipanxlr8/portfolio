import TechCard from "./TechCard";
import technologies from "@/assets/technologies.json";
import TechCardInterface from "@/interfaces/TechCardInterface";

function Technologies() {
  const techs: TechCardInterface[] = technologies;
  return (
    <div className="mt-[100px]">
      <h2 className="text-[4rem]/[1.15] lg:text-[10rem]/[1.15] font-[monospace] break-words outline-text outline-2">
        TECHNOLOGIES
      </h2>
      <div className="mx-0 md:mx-6 lg:mx-16 lg:grid lg:grid-cols-3 lg:gap-8">
        {techs &&
          techs.map((tech) => <TechCard key={tech.cardName} tech={tech} />)}
      </div>
    </div>
  );
}

export default Technologies;
