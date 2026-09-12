import { Code, Globe, Package, Puzzle } from "lucide-react";

export const linkOptions = [
  {
    key: "github",
    label: "GitHub",
    icon: Code,
  },
  {
    key: "extension",
    label: "Extension",
    icon: Puzzle,
  },
  {
    key: "website",
    label: "Website",
    icon: Globe,
  },
  {
    key: "npm",
    label: "NPM",
    icon: Package,
  },
] as const;
