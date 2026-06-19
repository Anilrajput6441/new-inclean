import type { MetadataRoute } from "next";
import { products, projects } from "@/data/siteContent";
import { siteConfig } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = [
    { path: "", priority: 1, changeFrequency: "weekly" as const },
    { path: "/about", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/contact", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/product", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/product/ahu", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/product/ecu", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/project", priority: 0.9, changeFrequency: "monthly" as const },
  ];

  const productRoutes = products
    .filter((product) => product.slug !== "air-handling-unit")
    .map((product) => ({
      url: `${siteConfig.url}/product/${product.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));

  const projectRoutes = projects.map((project) => ({
    url: `${siteConfig.url}${project.href}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    ...staticRoutes.map((route) => ({
      url: `${siteConfig.url}${route.path}`,
      lastModified: now,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    ...productRoutes,
    ...projectRoutes,
  ];
}
