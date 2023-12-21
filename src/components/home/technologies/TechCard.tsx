import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import TechCardInterface from "@/interfaces/TechCardInterface";

interface TechCardProps {
  tech: TechCardInterface;
}

function TechCard({ tech }: TechCardProps) {
  return (
    <div>
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>{tech.cardName}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-4">
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
                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground"
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
