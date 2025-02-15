import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = "https://www.p45.in";

  // Static pages
  const staticPages = [
    "about-sat","about-ib","about-gre","about-gmat","about-igcse","new-fees", "ib-testprep", "igcse-testprep", "about-sat", "sat-testprep",
    "gmat-testprep", "gre-testprep", "free-demo", "about-us", "careers",
    "big-ideas", "training", "remote-learning", "teacher-community",
    "terms-of-conditions", "website-privacy-policy"
  ];

//   let dynamicPages: string[] = [];

  // Fetch dynamic pages from API (optional)
//   try {
//     const res = await fetch(`${baseUrl}/api/get-pages`, { cache: "no-store" });
//     if (!res.ok) throw new Error("Failed to fetch dynamic pages");
//     dynamicPages = await res.json();
//   } catch (error) {
//     console.error("Error fetching dynamic pages:", error);
//   }

  // Combine static & dynamic pages
//   const allPages = [...staticPages, ...dynamicPages];
  const allPages=staticPages;
  // Generate XML Sitemap
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allPages
    .map(
      (page) => `
    <url>
      <loc>${baseUrl}/${page}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
    </url>`
    )
    .join("\n")}
</urlset>`;

  // Return response with XML content-type
  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
