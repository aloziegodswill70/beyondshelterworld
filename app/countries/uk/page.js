export const metadata = {
  title: "Beyond Shelter UK | Housing & Emergency Support",
  description:
    "Beyond Shelter UK provides housing, emergency accommodation, abuse support, and crisis services across the United Kingdom.",
};

export default function UKPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-bs_navy">
        Beyond Shelter UK
      </h1>

      <p className="mt-6 text-lg text-gray-700">
        Beyond Shelter UK supports individuals and families experiencing
        homelessness, abuse, displacement, and crisis across the United Kingdom.
      </p>

      <a
        href="https://beyondshelter.org.uk"
        className="inline-block mt-8 primary-btn"
      >
        Visit Beyond Shelter UK
      </a>
    </main>
  );
}
