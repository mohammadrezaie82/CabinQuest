/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tarbyqxhppegubkqzjbt.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/cabin-image/**",
      },
    ],
  },
};

export default nextConfig;
