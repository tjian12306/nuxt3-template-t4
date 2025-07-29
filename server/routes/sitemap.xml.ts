import { defineEventHandler, setHeader } from "h3"

export default defineEventHandler(async (event) => {
  const baseURL = process.env.NUXT_PUBLIC_SITE_URL || "http://localhost:3000"

  const routes = ["/", "/dashboard", "/docs"]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `  <url>
    <loc>${baseURL}${route}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`,
  )
  .join("\n")}
</urlset>`

  setHeader(event, "content-type", "application/xml")
  return sitemap
})
