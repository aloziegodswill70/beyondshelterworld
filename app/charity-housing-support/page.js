import Link from "next/link";

export const metadata = {
  title: "Charity Housing Support & Emergency Help | Beyond Shelter",
  description:
    "Beyond Shelter Global partners with charities to provide housing, emergency shelter, and humanitarian support worldwide.",
};

export default function CharityHousingSupportPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-bs_navy">
        Charity Housing Support
      </h1>

      <p className="mt-6 text-lg text-gray-700">
        Beyond Shelter Global collaborates with charities, NGOs, and humanitarian
        organisations to deliver housing assistance and emergency shelter support.
      </p>

      <p className="mt-6 text-gray-700">
        Our mission is to ensure vulnerable individuals receive safe accommodation
        and access to long-term recovery services.
      </p>

      <div className="mt-12 flex gap-4 flex-wrap">
        <a href="https://beyondshelter.org.uk" className="primary-btn">
          Partner With Us
        </a>
        <Link href="/housing-help-worldwide" className="secondary-btn">
          Explore Housing Help
        </Link>
      </div>
    </main>
  );
}
