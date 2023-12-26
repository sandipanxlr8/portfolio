import TechCard from "./TechCard";
import technologies from "@/assets/technologies.json";
import TechCardInterface from "@/interfaces/TechCardInterface";

function Technologies() {
  const techs: TechCardInterface[] = technologies;
  return (
    <div className="mt-[100px]">
      <h2 className="text-[3.5rem]/[1.15] lg:text-[8rem]/[1.15] break-words font-medium">
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
