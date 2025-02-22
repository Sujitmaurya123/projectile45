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

  // Define the content of robots.txt
  const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml`;

  // Return the response with text content-type
  return new NextResponse(robotsTxt, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}






// import { NextResponse } from "next/server";

// export async function GET() {
//   const baseUrl = "https://www.p45.in";

//   // Define the content of robots.txt
//   const robotsTxt = `User-agent: *
// Allow: /

// Sitemap: ${baseUrl}/sitemap.xml`;

//   // Return the response with text content-type
//   return new NextResponse(robotsTxt, {
//     headers: {
//       "Content-Type": "text/plain",
//     },
//   });
// }
