import type { MetadataRoute } from "next";
import { site } from "@/content/site";

/** The two public routes. /specimen is an internal reference for type and
    motion, so it stays out of here and is disallowed in robots.ts. */
export default function sitemap(): MetadataRoute.Sitemap {
  // Static site: the build is the only thing that can change a page.
  const lastModified = new Date();

  return [
    {
      url: site.url,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${site.url}/board`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
