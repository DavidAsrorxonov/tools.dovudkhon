import ToolBreadcrumb from "@/components/tools/tool-breadcrumb";
import ToolList from "@/components/tools/tool-list";
import { tools } from "@/data/tools";
import type { ToolListItem } from "@/types/tool";

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
    <main className="w-full px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
      <section className="mx-auto w-full max-w-5xl space-y-6 sm:space-y-8">
        <ToolBreadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Tools" },
          ]}
        />

        <div className="space-y-3">
          <p className="text-sm font-medium uppercase text-muted-foreground">
            Tools
          </p>
          <h1 className="text-2xl font-bold tracking-normal text-foreground sm:text-4xl">
            Developer utilities
          </h1>
          <p className="max-w-2xl text-base leading-7 text-muted-foreground">
            A compact index of tools I have built for browser workflows, JSON
            inspection, redirects, and related developer tasks.
          </p>
        </div>

        <ToolList tools={toolList} />
      </section>
    </main>
  );
};

export default ToolsPage;
