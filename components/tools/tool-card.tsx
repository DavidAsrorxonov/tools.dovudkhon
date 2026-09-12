import { Card, CardContent } from "@/components/ui/card";
import type { ToolListItem } from "@/types/tool";
import { Wrench } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type ToolCardProps = {
  tool: ToolListItem;
};

const ToolCard = ({ tool }: ToolCardProps) => {
  return (
    <Link href={`/p/${tool.slug}`} className="block">
      <Card className="rounded-lg transition-colors hover:bg-accent/50">
        <CardContent>
          <div className="flex items-start gap-4">
            <div className="flex size-14 shrink-0 items-center justify-center overflow-hidden rounded-md bg-secondary text-secondary-foreground">
              {tool.icon ? (
                <Image
                  src={tool.icon}
                  alt={`${tool.name} icon`}
                  width={56}
                  height={56}
                  className="size-full object-cover"
                />
              ) : (
                <Wrench className="size-6" strokeWidth={1.5} />
              )}
            </div>

            <div className="min-w-0 space-y-2">
              <div className="space-y-1">
                <h2 className="text-lg font-semibold">{tool.name}</h2>
                <p className="text-sm leading-6 text-muted-foreground">
                  {tool.summary}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {tool.languages.map((language) => (
                  <span
                    key={language}
                    className="rounded-md bg-secondary px-2 py-1 text-xs text-secondary-foreground"
                  >
                    {language}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ToolCard;
