import { join } from "path";

const nextConfig = {
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  transpilePackages: ["@studio-freight/compono"],
  sassOptions: {
    includePaths: [join(__dirname, "styles")],
    prependData: `@import 'styles/_functions';`,
  },
  images: {
    domains: ["www.notion.so", "images.unsplash.com", "s3.us-west-2.amazonaws.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "eundolhealth.s3.ap-northeast-2.amazonaws.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
