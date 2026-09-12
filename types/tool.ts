import { LanguageName } from "./linguist";

export type ToolLinks = {
  github?: string;
  npm?: string;
  website?: string;
  extension?: string;
};

export type Tool = {
  slug: string;
  name: string;
  summary: string;
  description: string;
  icon?: string;

  screenshots?: readonly string[];
  video?: string;

  links?: ToolLinks;

  languages: readonly LanguageName[];
  categories: readonly string[];

  features?: readonly string[];
};

export type ToolListItem = Pick<
  Tool,
  "slug" | "name" | "summary" | "icon" | "languages"
>;
