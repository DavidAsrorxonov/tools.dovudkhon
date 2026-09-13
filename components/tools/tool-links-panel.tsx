import { buttonVariants } from "@/components/ui/button";
import { linkOptions } from "@/constants/link-options";
import { cn } from "@/lib/utils";
import type { Tool } from "@/types/tool";
import { FileText } from "lucide-react";
import Link from "next/link";

type ToolLinksPanelProps = {
  tool: Tool;
};

const ToolLinksPanel = ({ tool }: ToolLinksPanelProps) => {
  const visibleLinks = linkOptions.filter(({ key }) => tool.links?.[key]);

  return (
    <aside className="space-y-5 border-t pt-6 lg:border-t-0 lg:pt-0">
      <div className="space-y-3">
        <h2 className="text-sm font-medium uppercase text-muted-foreground">
          Links
        </h2>
        <div className="grid gap-2">
          {visibleLinks.length > 0 ? (
            visibleLinks.map(({ key, label, icon: Icon }) => (
              <Link
                key={key}
                href={tool.links?.[key] ?? "#"}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({
                    variant: "outline",
                    className: "w-full justify-start",
                  }),
                )}
              >
                <Icon />
                {label}
              </Link>
            ))
          ) : (
            <p className="text-sm text-muted-foreground">
              No links available yet.
            </p>
          )}
        </div>
      </div>

      <div className="space-y-3 border-t pt-5">
        <h2 className="text-sm font-medium uppercase text-muted-foreground">
          Legal
        </h2>
        <Link
          href={`/p/${tool.slug}/privacy`}
          className={cn(
            buttonVariants({
              variant: "outline",
              className: "w-full justify-start",
            }),
          )}
        >
          <FileText />
          Privacy policy
        </Link>
      </div>
    </aside>
  );
};

export default ToolLinksPanel;
