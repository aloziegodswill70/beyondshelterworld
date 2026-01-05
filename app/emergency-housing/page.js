import Link from "next/link";

export const metadata = {
  title: "Emergency Housing & Shelter Support | Beyond Shelter Global",
  description:
    "Beyond Shelter Global provides emergency housing, shelter, and crisis accommodation support for vulnerable people worldwide.",
};

export default function EmergencyHousingPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-bs_navy">
        Emergency Housing & Shelter Support
      </h1>

      <p className="mt-6 text-lg text-gray-700">
        Beyond Shelter Global connects individuals and families facing housing
        emergencies to trusted shelter, accommodation, and crisis support
        services across countries and communities.
      </p>

      <h2 className="mt-10 text-2xl font-semibold text-bs_navy">
        How We Help
      </h2>

      <ul className="mt-4 space-y-3 text-gray-700 list-disc list-inside">
        <li>Emergency shelter referrals</li>
        <li>Temporary accommodation support</li>
        <li>Domestic abuse safe housing pathways</li>
        <li>Refugee and displacement assistance</li>
        <li>Crisis intervention and safeguarding</li>
      </ul>

      <div className="mt-12 flex gap-4 flex-wrap">
        <a
          href="https://beyondshelter.org.uk"
          className="primary-btn"
        >
          Get Help Now
        </a>

        <Link href="/countries" className="secondary-btn">
          Find Support by Country
        </Link>
      </div>
    </main>
  );
}
