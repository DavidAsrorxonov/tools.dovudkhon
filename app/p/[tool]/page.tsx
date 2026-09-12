import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import ToolFeatures from "@/components/tools/tool-features";
import ToolScreenshotsCarousel from "@/components/tools/tool-screenshots-carousel";
import { tools } from "@/data/tools";
import type { Tool } from "@/types/tool";
import { Wrench } from "lucide-react";
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
