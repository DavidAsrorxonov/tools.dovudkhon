import LanguageChip from "@/components/helper/language-chip";
import type { Tool } from "@/types/tool";
import { Wrench } from "lucide-react";
import Image from "next/image";

type ToolOverviewProps = {
  tool: Tool;
};

const ToolOverview = ({ tool }: ToolOverviewProps) => {
  return (
    <div className="space-y-5 sm:space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-5">
        <div className="flex size-14 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-secondary text-secondary-foreground sm:size-16">
          {tool.icon ? (
            <Image
              src={tool.icon}
              alt={`${tool.name} icon`}
              width={64}
              height={64}
              className="size-full object-cover"
              fetchPriority="high"
            />
          ) : (
            <Wrench className="size-6 sm:size-7" strokeWidth={1.5} />
          )}
        </div>

        <div className="min-w-0 space-y-3">
          <p className="text-sm font-medium uppercase text-muted-foreground">
            Tool
          </p>
          <h1 className="text-3xl font-bold tracking-normal text-foreground sm:text-5xl lg:text-6xl">
            {tool.name}
          </h1>
          <p className="max-w-3xl text-base leading-7 text-muted-foreground sm:text-xl sm:leading-8">
            {tool.summary}
          </p>
        </div>
      </div>

      <p className="max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg">
        {tool.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {tool.categories.map((item) => (
          <span
            key={item}
            className="rounded-md bg-secondary px-2.5 py-1 text-xs text-secondary-foreground"
          >
            {item}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap gap-2">
        {tool.languages.map((language) => {
          return <LanguageChip key={language} language={language} />;
        })}
      </div>
    </div>
  );
};

export default ToolOverview;
