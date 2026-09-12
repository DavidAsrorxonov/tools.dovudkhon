import type { Tool } from "@/types/tool";

export const jsonLens: Tool = {
  slug: "json-lens",
  name: "JSON Lens",
  summary: "Inspect JSON documents and JSON network responses in Chrome.",
  description:
    "JSON Lens helps developers inspect JSON directly in Chrome. It replaces raw JSON documents with a structured viewer and adds a DevTools panel for captured JSON network responses. Use it to read API responses, search nested keys and values, switch between tree and raw views, copy JSON paths or values, and keep large payloads usable with rendering limits and virtualization.",
  icon: "/tools/json-lens/json-lens128x128.png",
  screenshots: [
    "/tools/json-lens/screenshot-1.png",
    "/tools/json-lens/screenshot-2.png",
  ],
  links: {
    github: "https://github.com/DavidAsrorxonov/json-lens",
  },
  languages: ["TypeScript"],
  categories: ["Chrome extension", "Developer Tools", "JSON Viewer"],
  features: [
    "Direct JSON document viewer",
    "DevTools JSON network response inspector",
    "Searchable JSON tree view",
    "Raw JSON view",
    "Key, value, and path search",
    "Previous and next search navigation",
    "Copy raw JSON",
    "Copy JSON paths",
    "Copy JSON values",
    "Mislabeled JSON text detection",
    "Parse error display",
    "Large payload warnings",
    "Virtualized rendering",
    "Persisted viewer preferences",
    "Configurable expansion depth",
    "Configurable string preview length",
    "Configurable rendered row limit",
  ],
};
