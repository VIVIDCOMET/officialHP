import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://vividcomet.jp/",
      priority: 1.0,
    },
    {
      url: "https://vividcomet.jp/about",
      priority: 0.8,
    },
    {
      url: "https://vividcomet.jp/contact",
      priority: 0.5,
    },
    {
      url: "https://vividcomet.jp/works",
      priority: 0.7,
    },
    {
      url: "https://vividcomet.jp/sitemap.xml",
      priority: 0.1,
    },
    {
      url: "https://vividcomet.jp/robots.txt",
      priority: 0.1,
    },
    {
      url: "https://vividcomet.jp/cookies",
      priority: 0.5,
    },
  ];
}
