/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  output: "export",

  // Optional: Change the output directory `out` -> `dist`
  distDir: "dist",
  images: {
    unoptimized: true,
  },
  env:{
    BASE_URL: process.env.BASE_URL,
    NEXT_PUBLIC_ACCESS_KEY: process.env.NEXT_PUBLIC_ACCESS_KEY
  }
};

module.exports = nextConfig;
