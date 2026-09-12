import { tools } from "@/data/tools";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    tool: string;
  }>;
};

const ToolPage = async ({ params }: Props) => {
  const { tool: slug } = await params;

  const tool = tools[slug as keyof typeof tools];

  if (!tool) {
    notFound();
  }

  return (
    <main>
      <h1>{tool.name}</h1>
      <p>{tool.description}</p>
    </main>
  );
};

export default ToolPage;
