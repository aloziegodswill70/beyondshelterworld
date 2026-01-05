import Link from "next/link";

export const metadata = {
  title: "Emergency Shelter Near Me | Immediate Housing Help",
  description:
    "Find emergency shelter near you. Beyond Shelter Global connects people in crisis to safe housing and urgent support worldwide.",
};

export default function EmergencyShelterNearMePage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-bs_navy">
        Emergency Shelter Near Me
      </h1>

      <p className="mt-6 text-lg text-gray-700">
        If you or someone you know needs urgent shelter, Beyond Shelter Global
        helps connect individuals to emergency housing and crisis accommodation
        services worldwide.
      </p>

      <p className="mt-6 text-gray-700">
        Our global network supports people affected by homelessness, domestic
        abuse, displacement, and sudden housing emergencies.
      </p>

      <div className="mt-12 flex gap-4 flex-wrap">
        <a href="https://beyondshelter.org.uk/get-support" className="primary-btn">
          Get Emergency Help
        </a>
        <Link href="/countries" className="secondary-btn">
          View Support Locations
        </Link>
      </div>
    </main>
  );
}
