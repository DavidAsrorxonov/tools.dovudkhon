import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Item,
  ItemContent,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import { Check, ChevronsUpDown } from "lucide-react";

type ToolFeaturesProps = {
  features?: readonly string[];
};

const VISIBLE_FEATURE_COUNT = 4;

const ToolFeatures = ({ features }: ToolFeaturesProps) => {
  if (!features || features.length === 0) {
    return null;
  }

  const visibleFeatures = features.slice(0, VISIBLE_FEATURE_COUNT);
  const hiddenFeatures = features.slice(VISIBLE_FEATURE_COUNT);

  return (
    <section>
      <Collapsible className="group/collapsible space-y-4">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-2xl font-semibold tracking-normal">Features</h2>
          <CollapsibleTrigger className="flex size-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground">
            <ChevronsUpDown className="size-4" />
            <span className="sr-only">Toggle features</span>
          </CollapsibleTrigger>
        </div>

        <ItemGroup className="gap-2">
          {visibleFeatures.map((feature) => (
            <Item key={feature} variant="outline">
              <ItemMedia variant="icon" className="text-muted-foreground">
                <Check className="size-4" />
              </ItemMedia>
              <ItemContent>
                <ItemTitle>{feature}</ItemTitle>
              </ItemContent>
            </Item>
          ))}
        </ItemGroup>

        <CollapsibleContent>
          <ItemGroup className="gap-2">
            {hiddenFeatures.map((feature) => (
              <Item key={feature} variant="outline">
                <ItemMedia variant="icon" className="text-muted-foreground">
                  <Check className="size-4" />
                </ItemMedia>
                <ItemContent>
                  <ItemTitle>{feature}</ItemTitle>
                </ItemContent>
              </Item>
            ))}
          </ItemGroup>
        </CollapsibleContent>

        {hiddenFeatures.length > 0 ? (
          <p className="text-center text-sm text-muted-foreground group-data-open/collapsible:hidden">
            There is more
          </p>
        ) : null}
      </Collapsible>
    </section>
  );
};

export default ToolFeatures;
