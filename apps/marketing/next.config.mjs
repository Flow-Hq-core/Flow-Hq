/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@flow-hq/ui", "@flow-hq/shared"],
  async redirects() {
    return [
      // /product (singular) was the old single-product page, superseded by the
      // /products hub. Permanent so the old URL keeps its search equity.
      { source: "/product", destination: "/products", permanent: true }
    ];
  }
};

export default nextConfig;
