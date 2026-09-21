import { MetadataRoute } from "next";
import { servicesData, orthodonticProblemsData, dentalProblemsData, locationsData, blogPostsData } from "@/data/clinicData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://aligndentofacial.in";

  const staticPages = [
    "",
    "/about-clinic",
    "/meet-dr-jyoti-chauhan",
    "/smile-assessment",
    "/gallery",
    "/blog",
    "/contact",
    "/privacy-policy",
    "/terms-and-conditions",
    "/medical-disclaimer"
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const servicePages = servicesData.map((srv) => ({
    url: `${baseUrl}/services/${srv.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const orthoPages = orthodonticProblemsData.map((prob) => ({
    url: `${baseUrl}/orthodontics/${prob.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const dentalPages = dentalProblemsData.map((prob) => ({
    url: `${baseUrl}/dental-problems/${prob.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const locationPages = locationsData.map((loc) => ({
    url: `${baseUrl}/${loc.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  const blogPages = blogPostsData.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    ...staticPages,
    ...servicePages,
    ...orthoPages,
    ...dentalPages,
    ...locationPages,
    ...blogPages,
  ];
}
