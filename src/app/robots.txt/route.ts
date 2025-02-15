import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = "https://www.p45.in";

  // Define the content of robots.txt
  const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${baseUrl}/sitemap.xml`;

  // Return the response with text content-type
  return new NextResponse(robotsTxt, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
