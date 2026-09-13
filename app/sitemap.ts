import { tools } from "@/data/tools";
import type { MetadataRoute } from "next";

const SITE_URL = "https://tools.dovudkhon.com";

const createUrl = (path: string) => new URL(path, SITE_URL).toString();

export default function sitemap(): MetadataRoute.Sitemap {
  const toolRoutes = Object.values(tools).flatMap((tool) => [
    {
      url: createUrl(`/p/${tool.slug}`),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: createUrl(`/p/${tool.slug}/privacy`),
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
  ]);

  return [
    {
      url: createUrl("/"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: createUrl("/p"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...toolRoutes,
  ];
}
