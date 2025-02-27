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
const servicesSlugs = ["UI Designing", "Web Development", "Social Media Ads", "Search Engine Optimization (SEO)", "Content Writing", "Google Ads"];
const blogSlugs = ["Copywriting vs. Content Writing: Understanding the Key Differences", "Social Media Campaign Examples: Successful Strategies to Inspire Your Marketing", "UX-UI Design Career Trends: What You Need to Know","Google Ads Agency: How to Choose the Right One for Your Business","The Role of a Search Engine Optimization Consultant: Boosting Online Visibility"];

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
