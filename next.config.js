/** @type {import('next').NextConfig} */
nextConfig = {
  async rewrites() {
    return [
      {
        source: "/todo:match(.*)",
        destination: "https://quad-b-frontend-assignment.vercel.app:match",
      },
    ];
  },
};
module.exports = nextConfig;
