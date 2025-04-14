const nextConfig = {
  basePath: "/mn/alumni1",
  async redirects() {
    return [
      {
        source: "/",
        destination: "/mn/alumni1",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
