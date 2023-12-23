import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import TechCardInterface from "@/interfaces/TechCardInterface";

interface TechCardProps {
  tech: TechCardInterface;
}

function TechCard({ tech }: TechCardProps) {
  return (
    <div className="mt-8">
      <Card className="rounded-2xl">
        <CardHeader>
          <CardTitle className="text-center">{tech.cardName}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-3">
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

              return (
                <div
                  key={iconData.iconName}
                  className="flex flex-col items-center justify-between rounded-3xl border-2 bg-popover px-4 py-6 hover:bg-accent hover:text-accent-foreground text-center"
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
