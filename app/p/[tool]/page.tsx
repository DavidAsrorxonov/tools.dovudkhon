import ToolBreadcrumb from "@/components/tools/tool-breadcrumb";
import ToolFeatures from "@/components/tools/tool-features";
import ToolScreenshotsCarousel from "@/components/tools/tool-screenshots-carousel";
import { buttonVariants } from "@/components/ui/button";
import { linkOptions } from "@/constants/link-options";
import { tools } from "@/data/tools";
import { cn } from "@/lib/utils";
import type { Tool } from "@/types/tool";
import { FileText, Wrench } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    tool: string;
  }>;
};

const ToolPage = async ({ params }: Props) => {
  const { tool: slug } = await params;

  const tool: Tool | undefined = tools[slug as keyof typeof tools];

  if (!tool) {
    notFound();
  }

  const visibleLinks = linkOptions.filter(({ key }) => tool.links?.[key]);

  return (
    <main className="w-full px-4 py-8 sm:px-6 lg:px-8">
      <article className="mx-auto w-full max-w-5xl space-y-10">
        <ToolBreadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Tools", href: "/p" },
            { label: tool.name },
          ]}
        />

        <section className="grid gap-8 lg:grid-cols-[minmax(0,7fr)_minmax(16rem,3fr)] lg:items-start">
          <div className="space-y-6">
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
          </div>

          <aside className="space-y-6">
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

            <div className="space-y-3 border-t pt-6">
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
        </section>

        <ToolScreenshotsCarousel
          toolName={tool.name}
          screenshots={tool.screenshots}
        />

        <ToolFeatures features={tool.features} />
      </article>
    </main>
  );
};

export default ToolPage;
