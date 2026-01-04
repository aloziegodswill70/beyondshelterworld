export default function sitemap() {
  const baseUrl = "https://beyondshelter.world";

  return [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/network`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },

    // ===== COUNTRY / REGION PAGES =====
    {
      url: `${baseUrl}/network/uk`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/network/nigeria`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/network/usa`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/network/canada`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/network/africa`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/network/europe`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/network/asia`,
      lastModified: new Date(),
      priority: 0.8,
    },
  ];
}
