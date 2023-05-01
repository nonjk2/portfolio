const nextConfig = {
  swcMinify: true,
  module: {
    rules: [
      // ...
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
      },
    ],
  },
  compiler: {
    styledComponents: true,
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

module.exports = nextConfig;
