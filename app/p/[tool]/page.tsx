import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
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
import { tools } from "@/data/tools";
import type { Tool } from "@/types/tool";
import { Check, Wrench } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    tool: string;
  }>;
};

const VISIBLE_FEATURE_COUNT = 5;

const ToolPage = async ({ params }: Props) => {
  const { tool: slug } = await params;

  const tool: Tool | undefined = tools[slug as keyof typeof tools];

  if (!tool) {
    notFound();
  }

  const visibleFeatures = tool.features?.slice(0, VISIBLE_FEATURE_COUNT) ?? [];
  const hiddenFeatures = tool.features?.slice(VISIBLE_FEATURE_COUNT) ?? [];

  return (
    <main className="w-full px-4 py-8 sm:px-6 lg:px-8">
      <article className="mx-auto w-full max-w-5xl space-y-10">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <Link
                href="/"
                className="transition-colors hover:text-foreground"
              >
                Home
              </Link>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <Link
                href="/p"
                className="transition-colors hover:text-foreground"
              >
                Tools
              </Link>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{tool.name}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <section className="space-y-6">
          <div className="flex items-start gap-5">
            <div className="flex size-16 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-secondary text-secondary-foreground">
              {tool.icon ? (
                <Image
                  src={tool.icon}
                  alt={`${tool.name} icon`}
                  width={64}
                  height={64}
                  className="size-full object-cover"
                />
              ) : (
                <Wrench className="size-7" strokeWidth={1.5} />
              )}
            </div>

            <div className="min-w-0 space-y-3">
              <p className="text-sm font-medium uppercase text-muted-foreground">
                Tool
              </p>
              <h1 className="text-4xl font-bold tracking-normal text-foreground sm:text-5xl lg:text-6xl">
                {tool.name}
              </h1>
              <p className="max-w-3xl text-lg leading-8 text-muted-foreground sm:text-xl">
                {tool.summary}
              </p>
            </div>
          </div>

          <p className="max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg">
            {tool.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {[...tool.languages, ...tool.categories].map((item) => (
              <span
                key={item}
                className="rounded-md bg-secondary px-2.5 py-1 text-xs text-secondary-foreground"
              >
                {item}
              </span>
            ))}
          </div>
        </section>

        {tool.screenshots && tool.screenshots.length > 0 ? (
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-normal">
              Screenshots
            </h2>

            <Carousel opts={{ align: "start" }} className="w-full">
              <CarouselContent>
                {tool.screenshots.map((screenshot, index) => (
                  <CarouselItem key={screenshot} className="basis-full">
                    <div className="relative aspect-16/10 overflow-hidden rounded-lg border bg-muted">
                      <Image
                        src={screenshot}
                        alt={`${tool.name} screenshot ${index + 1}`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 64rem"
                        className="object-cover"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2 sm:-left-10" />
              <CarouselNext className="right-2 sm:-right-10" />
            </Carousel>
          </section>
        ) : null}

        {tool.features && tool.features.length > 0 ? (
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-normal">Features</h2>
            <Collapsible className="space-y-3">
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

              {hiddenFeatures.length > 0 ? (
                <>
                  <CollapsibleContent>
                    <ItemGroup className="gap-2 pt-2">
                      {hiddenFeatures.map((feature) => (
                        <Item key={feature} variant="outline">
                          <ItemMedia
                            variant="icon"
                            className="text-muted-foreground"
                          >
                            <Check className="size-4" />
                          </ItemMedia>
                          <ItemContent>
                            <ItemTitle>{feature}</ItemTitle>
                          </ItemContent>
                        </Item>
                      ))}
                    </ItemGroup>
                  </CollapsibleContent>

                  <CollapsibleTrigger className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
                    Show {hiddenFeatures.length} more features
                  </CollapsibleTrigger>
                </>
              ) : null}
            </Collapsible>
          </section>
        ) : null}
      </article>
    </main>
  );
};

export default ToolPage;
