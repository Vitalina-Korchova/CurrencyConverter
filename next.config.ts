import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  output: "export",
  basePath: "/currency-converter",
  assetPrefix: "/currency-converter",
};

export default nextConfig;
