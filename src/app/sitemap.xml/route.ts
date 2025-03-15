import { NextResponse } from "next/server";

 const domains = ["p45.com", "p45.in", "projectile45.com"];

export async function GET(req: Request) {
  const domain = req.headers.get("host") || "www.p45.in";

  // Normalize the domain (remove 'www.' for checking)
  let normalizedDomain = domain.replace(/^www\./, "");

// Ensure only whitelisted domains are allowed
  if (!domains.includes(normalizedDomain)) {
    normalizedDomain = "p45.in"; // Default domain
  }

  // Use both `domain` and `domains` together (set final domain)
  const finalDomain = domains.includes(normalizedDomain) ? normalizedDomain : "p45.in";
  const siteUrl = `https://www.${finalDomain}`;

  // **Static pages**
  const staticPages = [
    "about-sat", "about-ib", "about-gre", "about-gmat", "about-igcse", "new-fees", 
    "sat-pattern","sat-test-dates",
    "sat-fees-structure","ibdp-subjects","gre-pattern","gre-structure",
    "gmat-structure","gmat-sections","gmat-scoring","igcse-curriculum","igcse-mathematics", "blogs",
    "sat-maths-sample-questions","ibdp-maths-analysis-approaches-papers","ibdp-maths-applications-interpretation-papers",
    "ibpd-physics-papers",
    "free-demo", "about-us", "careers", "terms-of-conditions", "website-privacy-policy",
  ];

  // // **Dynamic pages (Fetch from API)**
  // let dynamicPages: string[] = [];

  // try {
  //   const res = await fetch(`${siteUrl}/api/get-pages`, { cache: "no-store" });

  //   if (res.ok) {
  //     dynamicPages = await res.json();
  //   } else {
  //     console.error("Failed to fetch dynamic pages");
  //   }
  // } catch (error) {
  //   console.error("Error fetching dynamic pages:", error);
  // }

  // // Combine static & dynamic pages
  // const allPages = [...staticPages, ...dynamicPages];

  const allPages=staticPages;

  // **Generate XML Sitemap**
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allPages
    .map(
      (page) => `
    <url>
      <loc>${siteUrl}/${page}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
    </url>`
    )
    .join("\n")}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
