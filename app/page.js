import Link from "next/link";

export const metadata = {
  title: "Beyond Shelter Global | Housing, Emergency Help & Support",
  description:
    "Beyond Shelter Global connects people worldwide to emergency housing, shelter, abuse support, and crisis services.",
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-bs_cream flex items-center justify-center">
      <div className="max-w-5xl mx-auto px-6 py-20 text-center">

        <h1 className="text-4xl md:text-5xl font-bold text-bs_navy">
          Beyond Shelter Global
        </h1>

        <p className="mt-6 text-lg text-gray-700 max-w-3xl mx-auto">
          A global network connecting people to emergency housing, shelter,
          abuse support, and crisis help across countries and communities.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://beyondshelter.org.uk"
            className="primary-btn"
          >
            Visit Beyond Shelter UK
          </a>

          <Link
            href="/network"
            className="secondary-btn"
          >
            Explore Global Network
          </Link>
        </div>

        {/* ===== GLOBAL NETWORK (SEO SAFE) ===== */}
        <section className="mt-20">
          <h2 className="text-2xl font-bold text-bs_navy">
            Our Global Network
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8 text-sm">
            {[
              "UK",
              "Nigeria",
              "USA",
              "Canada",
              "Africa",
              "Europe",
              "Asia",
            ].map((region) => (
              <a
                key={region}
                href="https://beyondshelter.org.uk"
                className="border rounded-lg p-4 hover:bg-bs_navy hover:text-white transition"
              >
                Beyond Shelter {region}
              </a>
            ))}
          </div>
        </section>

        <p className="mt-16 text-sm text-gray-500">
          © {new Date().getFullYear()} Beyond Shelter Global
        </p>

      </div>
    </main>
  );
}
