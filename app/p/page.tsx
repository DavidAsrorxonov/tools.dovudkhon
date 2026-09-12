import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import ToolCard from "@/components/tools/tool-card";
import { tools } from "@/data/tools";
import type { ToolListItem } from "@/types/tool";
import Link from "next/link";

const toolList: ToolListItem[] = Object.values(tools).map(
  ({ slug, name, summary, icon, languages }) => ({
    slug,
    name,
    summary,
    icon,
    languages,
  }),
);

const ToolsPage = () => {
  return (
    <main className="w-full px-4 py-8 sm:px-6 lg:px-8">
      <section className="mx-auto w-full max-w-5xl space-y-8">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <Link href="/" className="transition-colors hover:text-foreground">
                Home
              </Link>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Tools</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="space-y-3">
          <p className="text-sm font-medium uppercase text-muted-foreground">
            Tools
          </p>
          <h1 className="text-3xl font-bold tracking-normal text-foreground sm:text-4xl">
            Developer utilities
          </h1>
          <p className="max-w-2xl text-base leading-7 text-muted-foreground">
            A compact index of tools I have built for browser workflows, JSON
            inspection, redirects, and related developer tasks.
          </p>
        </div>

        <div className="space-y-4">
          {toolList.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default ToolsPage;
