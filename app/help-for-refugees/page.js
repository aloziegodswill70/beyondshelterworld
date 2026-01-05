import Link from "next/link";

export const metadata = {
  title: "Help for Refugees & Displaced Persons | Beyond Shelter Global",
  description:
    "Beyond Shelter Global connects refugees and displaced persons to housing, emergency shelter, and humanitarian support worldwide.",
};

export default function HelpForRefugeesPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-bs_navy">
        Help for Refugees & Displaced Persons
      </h1>

      <p className="mt-6 text-lg text-gray-700">
        Beyond Shelter Global provides access to housing, emergency accommodation,
        and crisis support for refugees, asylum seekers, and displaced individuals
        across countries and regions.
      </p>

      <ul className="mt-8 list-disc list-inside space-y-3 text-gray-700">
        <li>Emergency refugee shelter referrals</li>
        <li>Temporary housing for displaced families</li>
        <li>Abuse and safeguarding support</li>
        <li>Access to humanitarian organisations</li>
      </ul>

      <div className="mt-12 flex gap-4 flex-wrap">
        <a href="https://beyondshelter.org.uk" className="primary-btn">
          Get Refugee Support
        </a>
        <Link href="/countries" className="secondary-btn">
          Find Help by Country
        </Link>
      </div>
    </main>
  );
}
