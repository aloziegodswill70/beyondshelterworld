import Link from "next/link";

export const metadata = {
  title: "Global Housing & Emergency Support Network | Beyond Shelter",
  description:
    "Explore Beyond Shelter’s global housing, emergency help, and crisis support network across countries and regions.",
};

export default function CountriesPage() {
  const countries = [
    "UK",
    "Nigeria",
    "USA",
    "Canada",
    "Africa",
    "Europe",
    "Asia",
  ];

  return (
    <main className="max-w-5xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-bs_navy">
        Beyond Shelter Global Network
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
        {countries.map((c) => (
          <Link
            key={c}
            href={`/countries/${c.toLowerCase()}`}
            className="border rounded-xl p-6 text-center hover:bg-bs_navy hover:text-white transition"
          >
            Beyond Shelter {c}
          </Link>
        ))}
      </div>
    </main>
  );
}
