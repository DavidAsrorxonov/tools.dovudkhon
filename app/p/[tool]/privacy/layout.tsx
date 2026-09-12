import ToolBreadcrumb from "@/components/tools/tool-breadcrumb";

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-3xl mx-auto py-10">
      <div className="w-full flex items-center justify-center">
        <h1 className="font-bold text-2xl">Legal</h1>
      </div>
      {children}
    </div>
  );
}
