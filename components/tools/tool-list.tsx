import type { ToolListItem } from "@/types/tool";
import ToolCard from "./tool-card";

type ToolListProps = {
  tools: ToolListItem[];
};

const ToolList = ({ tools }: ToolListProps) => {
  return (
    <div className="space-y-3 sm:space-y-4">
      {tools.map((tool) => (
        <ToolCard key={tool.slug} tool={tool} />
      ))}
    </div>
  );
};

export default ToolList;
