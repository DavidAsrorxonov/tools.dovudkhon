import { Tool } from "@/types/tool";
import { jsonLens } from "./json-lens";
import { repath } from "./repath";

export const tools = {
  repath,
  "json-lens": jsonLens,
} satisfies Record<string, Tool>;

export type ToolSlug = keyof typeof tools;
