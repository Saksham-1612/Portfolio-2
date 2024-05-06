/** @type {import('next').NextConfig} */
nextConfig = {
  async rewrites() {
    return [
      {
        source: "/about",
        destination: "https://www.bottomstreet.com/market/stocks",
      },
    ];
  },
};
module.exports = nextConfig;
