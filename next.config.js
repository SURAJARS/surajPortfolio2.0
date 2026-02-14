/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: process.env.GITHUB_PAGES === "true" ? "/portfolio" : "",
  assetPrefix: process.env.GITHUB_PAGES === "true" ? "/portfolio" : "",
};

module.exports = nextConfig;
