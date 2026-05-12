import type { MetadataRoute } from "next";

const BASE_URL = "https://tonami-events.vercel.app";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Pages statiques
  const staticPages = [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 1 },
    { url: `${BASE_URL}/agence`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${BASE_URL}/services`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${BASE_URL}/services/audiovisuel`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${BASE_URL}/services/design`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${BASE_URL}/services/numerique`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${BASE_URL}/services/conseil`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${BASE_URL}/services/location`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${BASE_URL}/portfolio`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${BASE_URL}/blog`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${BASE_URL}/contact`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${BASE_URL}/mentions-legales`, lastModified: new Date(), changeFrequency: "yearly" as const, priority: 0.3 },
    { url: `${BASE_URL}/confidentialite`, lastModified: new Date(), changeFrequency: "yearly" as const, priority: 0.3 },
  ];

  // Pages dynamiques (projets)
  let projetUrls: MetadataRoute.Sitemap = [];
  let articleUrls: MetadataRoute.Sitemap = [];

  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://tonami-events.vercel.app";

    const projetsRes = await fetch(`${baseUrl}/api/public/projets`);
    const projets = await projetsRes.json();
    projetUrls = projets.map((p: { id: number; modifieLe: string }) => ({
      url: `${BASE_URL}/portfolio`,
      lastModified: new Date(p.modifieLe || new Date()),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }));

    const articlesRes = await fetch(`${baseUrl}/api/public/articles`);
    const articles = await articlesRes.json();
    articleUrls = articles.map((a: { id: number; modifieLe: string }) => ({
      url: `${BASE_URL}/blog/${a.id}`,
      lastModified: new Date(a.modifieLe || new Date()),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }));
  } catch {
    // En dev, ignorer les erreurs
  }

  return [...staticPages, ...projetUrls, ...articleUrls];
}