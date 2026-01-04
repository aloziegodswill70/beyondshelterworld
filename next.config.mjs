/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // 🔹 Force all major sections to UK site
      {
        source: "/get-support",
        destination: "https://beyondshelter.org.uk/get-support",
        permanent: true,
      },
      {
        source: "/emergency-help",
        destination: "https://beyondshelter.org.uk/emergency-help",
        permanent: true,
      },
      {
        source: "/beyondshelter-nigeria",
        destination: "https://beyondshelter.org.uk/beyondshelter-nigeria",
        permanent: true,
      },
      {
        source: "/beyondshelter-usa",
        destination: "https://beyondshelter.org.uk/beyondshelter-usa",
        permanent: true,
      },
      {
        source: "/beyondshelter-canada",
        destination: "https://beyondshelter.org.uk/beyondshelter-canada",
        permanent: true,
      },
      {
        source: "/beyondshelter-africa",
        destination: "https://beyondshelter.org.uk/beyondshelter-africa",
        permanent: true,
      },

      // 🔹 Catch-all redirect for deep pages
      {
        source: "/:path*",
        destination: "https://beyondshelter.org.uk/:path*",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
