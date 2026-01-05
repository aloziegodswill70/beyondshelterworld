import "./globals.css";

export const metadata = {
  title: "Beyond Shelter Global | Housing, Emergency Help & Support",
  description:
    "Beyond Shelter is a global humanitarian network providing housing, accommodation, emergency relief, and long-term support worldwide.",

  metadataBase: new URL("https://beyondshelter.world"),

  /* ✅ GOOGLE SEARCH CONSOLE VERIFICATION */
  verification: {
    google:"O_YPb860g_7g0GvqeUPDq49JXaXMlz3saRXsdrRLhGk"
  },

  alternates: {
    canonical: "https://beyondshelter.org.uk",
  },

  openGraph: {
    title: "Beyond Shelter Global",
    description:
      "Housing, emergency help, accommodation, and recovery support worldwide.",
    url: "https://beyondshelter.world",
    siteName: "Beyond Shelter Global",
    images: [
      {
        url: "https://beyondshelter.org.uk/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Beyond Shelter Global",
      },
    ],
    locale: "en_GB",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Beyond Shelter Global",
    description:
      "A global network for housing, emergency help & recovery.",
    images: ["https://beyondshelter.org.uk/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
