import Link from "next/link";

export const metadata = {
  title: "Support for Vulnerable People | Beyond Shelter Global",
  description:
    "Beyond Shelter Global supports vulnerable individuals with housing, emergency care, and crisis assistance worldwide.",
};

export default function SupportForVulnerablePeoplePage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-bs_navy">
        Support for Vulnerable People
      </h1>

      <p className="mt-6 text-lg text-gray-700">
        We help vulnerable people affected by homelessness, abuse, displacement,
        poverty, and crisis access safe housing and essential support services.
      </p>

      <ul className="mt-8 list-disc list-inside space-y-3 text-gray-700">
        <li>Emergency housing support</li>
        <li>Abuse and safeguarding assistance</li>
        <li>Crisis intervention pathways</li>
        <li>Long-term recovery support</li>
      </ul>

      <div className="mt-12 flex gap-4 flex-wrap">
        <a href="https://beyondshelter.org.uk/get-support" className="primary-btn">
          Request Support
        </a>
        <Link href="/help-for-refugees" className="secondary-btn">
          Refugee Assistance
        </Link>
      </div>
    </main>
  );
}
