/** @type {import('next').NextConfig} */ // Recommended for better type checking
const config = {
  output: "standalone", // <--- Add this line to enable standalone output
  plugins: ["@tailwindcss/postcss"],

  // You can add other Next.js configurations here if needed
  // e.g., images: { unoptimized: true },
  //       trailingSlash: true,
};

export default config;
