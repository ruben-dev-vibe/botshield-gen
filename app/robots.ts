import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: ["meta-externalagent", "GPTBot", "ClaudeBot", "CCBot", "Bytespider"],
        disallow: "/",
      },
    ],
    sitemap: "https://botshield-generator.vercel.app/sitemap.xml",
  };
}
