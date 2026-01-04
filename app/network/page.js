import Link from "next/link";

export const metadata = {
  title: "Beyond Shelter Global Network | Countries & Regions",
  description:
    "Explore Beyond Shelter’s global network providing housing, shelter, emergency help, and support across countries and regions.",
};

const regions = [
  { name: "United Kingdom", slug: "uk" },
  { name: "Nigeria", slug: "nigeria" },
  { name: "United States", slug: "usa" },
  { name: "Canada", slug: "canada" },
  { name: "Africa", slug: "africa" },
  { name: "Europe", slug: "europe" },
  { name: "Asia", slug: "asia" },
];

export default function NetworkPage() {
  return (
    <main className="min-h-screen bg-bs_cream">
      <div className="max-w-6xl mx-auto px-6 py-20 text-center">

        <h1 className="text-4xl font-bold text-bs_navy">
          Beyond Shelter Global Network
        </h1>

        <p className="mt-6 text-lg text-gray-700 max-w-3xl mx-auto">
          Our global presence connects people to emergency housing, shelter,
          abuse recovery, and crisis support through a unified system.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {regions.map((region) => (
            <Link
              key={region.slug}
              href={`/network/${region.slug}`}
              className="border rounded-xl p-6 text-center hover:bg-bs_navy hover:text-white transition"
            >
              Beyond Shelter {region.name}
            </Link>
          ))}
        </div>

      </div>
    </main>
  );
}
