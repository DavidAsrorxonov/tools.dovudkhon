import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import ToolBreadcrumb from "@/components/tools/tool-breadcrumb";

interface PageProps {
  params: Promise<{ tool: string }>;
}

export default async function PrivacyPage({ params }: PageProps) {
  const { tool } = await params;

  const filePath = path.join(process.cwd(), "legal", tool, "privacy.html");

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
          { label: tool, href: `/p/${tool}` },
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
