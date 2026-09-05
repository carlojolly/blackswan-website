import type { MetadataRoute } from "next";
import { site } from "@/content/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Internal type and motion references, not part of the site.
      disallow: "/specimen",
    },
    sitemap: `${site.url}/sitemap.xml`,
  };
}
