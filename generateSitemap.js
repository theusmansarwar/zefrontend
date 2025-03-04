const fs = require("fs");
const path = require("path");
const { SitemapStream, streamToPromise } = require("sitemap");

// Base URL of your website (Change this to your domain)
const BASE_URL = "https://zemalt.com";

// Static pages
const links = [
  { url: "/", changefreq: "daily", priority: 1.0 },
  { url: "/services", changefreq: "monthly", priority: 0.8 },
  { url: "/contact", changefreq: "yearly", priority: 0.5 },
  { url: "/about", changefreq: "yearly", priority: 0.5 },
  { url: "/terms", changefreq: "yearly", priority: 0.5 },
  { url: "/team", changefreq: "yearly", priority: 0.5 },
  { url: "/blog", changefreq: "weekly", priority: 0.7 },
  { url: "/privacy", changefreq: "yearly", priority: 0.5 },
  { url: "/disclaimer", changefreq: "yearly", priority: 0.5 }
];

// Simulating dynamic routes (You should replace this with actual data fetching)
const servicesSlugs = ["google-ads", "content-writing", "social-media-ads", "ui-ux", "web-development", "seo"];
const blogSlugs = ["Digital-Marketing-Agency","Digital-Marketing-Strategies","Chiropractor-Digital-Marketing","NFT-search-engine-optimization","Companies-Near-Me","Rapid-Url-Indexer"];

// Adding dynamic service pages
servicesSlugs.forEach(slug => {
  links.push({ url: `/services/${slug}`, changefreq: "monthly", priority: 0.8 });
});

// Adding dynamic blog pages
blogSlugs.forEach(slug => {
  links.push({ url: `/blog/${slug}`, changefreq: "weekly", priority: 0.7 });
});

// Generate sitemap
const sitemap = new SitemapStream({ hostname: BASE_URL });

streamToPromise(sitemap).then(data => {
  fs.writeFileSync(path.join(__dirname, "public", "sitemap.xml"), data.toString());
  console.log("✅ Sitemap generated successfully!");
});

links.forEach(link => sitemap.write(link));
sitemap.end();
