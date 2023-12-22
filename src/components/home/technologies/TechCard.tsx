import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import TechCardInterface from "@/interfaces/TechCardInterface";

interface TechCardProps {
  tech: TechCardInterface;
}

function TechCard({ tech }: TechCardProps) {
  return (
    <div className="sm:mt-8">
      <Card className="mx-6 bg-[#778da9]">
        <CardHeader>
          <CardTitle className="text-center">{tech.cardName}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 lg:grid-cols-2 gap-12">
            {tech.icons.map((iconData) => {
              let IconComponent;
              switch (iconData.iconPack) {
                case "fa":
                  // @ts-expect-error: iconname mismatch as its expecting a specific type for it
                  IconComponent = FaIcons[iconData.iconName];
                  break;
                case "si":
                  // @ts-expect-error: iconname mismatch as its expecting a specific type for it
                  IconComponent = SiIcons[iconData.iconName];
                  break;

                default:
                  break;
              }

              // const IconComponent = FaIcons[iconData.iconName];
              return (
                <div
                  key={iconData.iconName}
                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground text-center"
                >
                  {IconComponent && <IconComponent className="mb-3 h-6 w-6" />}
                  {iconData.iconTechName}
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default TechCard;
