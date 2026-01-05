import Link from "next/link";

export const metadata = {
  title: "Housing Help Worldwide | Global Shelter & Support",
  description:
    "Beyond Shelter Global offers housing assistance, emergency accommodation, and shelter support worldwide.",
};

export default function HousingHelpWorldwidePage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-bs_navy">
        Housing Help Worldwide
      </h1>

      <p className="mt-6 text-lg text-gray-700">
        Beyond Shelter Global connects people across the world to housing help,
        emergency shelter, and accommodation support during times of crisis.
      </p>

      <ul className="mt-8 list-disc list-inside space-y-3 text-gray-700">
        <li>Global housing assistance</li>
        <li>Emergency shelter access</li>
        <li>Support for displaced individuals</li>
        <li>Community and NGO referrals</li>
      </ul>

      <div className="mt-12">
        <a href="https://beyondshelter.org.uk" className="primary-btn">
          Access Housing Support
        </a>
      </div>
    </main>
  );
}
