import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // enables `next export`
  images: { unoptimized: true }, // required if you used <Image>
  trailingSlash: true, // avoids some relative-path gotchas
};

export default nextConfig;
