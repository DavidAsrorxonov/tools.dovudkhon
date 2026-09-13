import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import ToolBreadcrumb from "@/components/tools/tool-breadcrumb";
import { tools } from "@/data/tools";
import type { Tool } from "@/types/tool";

interface PageProps {
  params: Promise<{ tool: string }>;
}

export default async function PrivacyPage({ params }: PageProps) {
  const { tool: slug } = await params;

  const tool: Tool | undefined = tools[slug as keyof typeof tools];

  if (!tool) {
    notFound();
  }

  const filePath = path.join(process.cwd(), "legal", tool.slug, "privacy.html");

  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const html = fs.readFileSync(filePath, "utf-8");

  return (
    <>
      <ToolBreadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Tools", href: "/p" },
          { label: tool.name, href: `/p/${tool.slug}` },
          { label: "Privacy" },
        ]}
      />

      <div
        className="max-w-3xl mx-auto py-10"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </>
  );
}
