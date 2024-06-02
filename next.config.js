/** @type {import('next').NextConfig} */
nextConfig = {
  async rewrites() {
    return [
      {
        source: "/todo:match(.*)",
        destination: "https://quad-b-frontend-assignment.vercel.app:match",
      },
      {
        source: "/api/leetcode",
        destination:
          "https://adminapi.takeuforward.org/api/profile/user/leetcode/Saksham1612",
      },
    ];
  },
};
module.exports = nextConfig;
