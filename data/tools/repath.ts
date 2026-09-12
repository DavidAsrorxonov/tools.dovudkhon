import type { Tool } from "@/types/tool";

export const repath: Tool = {
  slug: "repath",
  name: "RePath",
  summary: "Create custom redirect rules for URLs.",
  description:
    "Repath lets you create custom URL redirect rules in Chrome. Add original URLs and redirect targets, choose match modes, pause redirects, and import or export your rules locally.",
  icon: "/tools/repath/repath128x128.png",
  screenshots: [
    "/tools/repath/screenshot-1.png",
    "/tools/repath/screenshot-2.png",
  ],
  links: {
    extension:
      "https://chromewebstore.google.com/detail/repath/eoebnajapljofnodikkecblehplaiadb",
  },
  languages: ["TypeScript"],
  categories: ["Chrome extension", "Developer Tools", "Utility"],
  features: [
    "Instant URL redirection using Chrome's native declarativeNetRequest API",
    "Custom, user-defined redirect rules with flexible URL pattern matching",
    "Automatic loop detection to prevent circular redirects",
    "Zod-based schema validation for all redirect rules",
    "Persistent rule storage across browser sessions",
    "Fully type-safe codebase built with TypeScript",
  ],
};
