import ToolBreadcrumb from "@/components/tools/tool-breadcrumb";
import ToolFeatures from "@/components/tools/tool-features";
import ToolLinksPanel from "@/components/tools/tool-links-panel";
import ToolOverview from "@/components/tools/tool-overview";
import ToolScreenshotsCarousel from "@/components/tools/tool-screenshots-carousel";
import { tools } from "@/data/tools";
import type { Tool } from "@/types/tool";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    tool: string;
  }>;
};

const getTool = (slug: string): Tool | undefined =>
  tools[slug as keyof typeof tools];

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const { tool: slug } = await params;
  const tool = getTool(slug);

  if (!tool) {
    notFound();
  }

  const title = `${tool.name} | Dovudkhon Tools`;
  const image = tool.screenshots?.[0] ?? tool.icon;

  return {
    title,
    description: tool.summary,
    openGraph: {
      title,
      description: tool.description,
      type: "website",
      images: image
        ? [
            {
              url: image,
              alt: `${tool.name} preview`,
            },
          ]
        : undefined,
    },
    twitter: {
      card: image ? "summary_large_image" : "summary",
      title,
      description: tool.summary,
      images: image ? [image] : undefined,
    },
  };
};

const ToolPage = async ({ params }: Props) => {
  const { tool: slug } = await params;

  const tool = getTool(slug);

  if (!tool) {
    notFound();
  }

  return (
    <main className="w-full px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
      <article className="mx-auto w-full max-w-5xl space-y-8 sm:space-y-10">
        <ToolBreadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Tools", href: "/p" },
            { label: tool.name },
          ]}
        />

        <section className="grid gap-8 lg:grid-cols-[minmax(0,7fr)_minmax(16rem,3fr)] lg:items-start">
          <ToolOverview tool={tool} />
          <ToolLinksPanel tool={tool} />
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
