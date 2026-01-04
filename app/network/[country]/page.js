import { notFound } from "next/navigation";

const COUNTRY_DATA = {
  nigeria: {
    name: "Nigeria",
    description:
      "Beyond Shelter Nigeria connects individuals to emergency housing, shelter support, abuse recovery, and crisis assistance across Nigerian communities.",
  },
  uk: {
    name: "United Kingdom",
    description:
      "Beyond Shelter UK provides emergency housing, domestic abuse support, crisis intervention, counselling, and rehabilitation services.",
  },
  usa: {
    name: "United States",
    description:
      "Beyond Shelter USA connects people to emergency shelter, housing support, and crisis services across the United States.",
  },
  canada: {
    name: "Canada",
    description:
      "Beyond Shelter Canada supports individuals facing homelessness, abuse, and housing insecurity across Canadian communities.",
  },
  africa: {
    name: "Africa",
    description:
      "Beyond Shelter Africa works across countries to connect vulnerable populations to shelter, housing, and emergency support services.",
  },
  europe: {
    name: "Europe",
    description:
      "Beyond Shelter Europe provides pathways to housing, shelter, and crisis support across European regions.",
  },
  asia: {
    name: "Asia",
    description:
      "Beyond Shelter Asia connects communities to emergency housing, shelter, and crisis help across Asia.",
  },
};

export function generateMetadata({ params }) {
  const country = COUNTRY_DATA[params.country];

  if (!country) return {};

  return {
    title: `Beyond Shelter ${country.name} | Emergency Housing & Support`,
    description: country.description,
  };
}

export default function CountryPage({ params }) {
  const country = COUNTRY_DATA[params.country];

  if (!country) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-bs_cream">
      <div className="max-w-5xl mx-auto px-6 py-20 text-center">

        <h1 className="text-4xl font-bold text-bs_navy">
          Beyond Shelter {country.name}
        </h1>

        <p className="mt-6 text-lg text-gray-700 max-w-3xl mx-auto">
          {country.description}
        </p>

        {/* ===== CTA ===== */}
        <div className="mt-10">
          <a
            href="https://beyondshelter.org.uk"
            className="primary-btn"
          >
            Visit Official Beyond Shelter Services
          </a>
        </div>

        {/* ===== SEO TEXT ===== */}
        <div className="mt-16 text-sm text-gray-600 max-w-4xl mx-auto">
          <p>
            Beyond Shelter operates as a global support network. While this page
            represents our presence in {country.name}, all official programmes,
            emergency services, and referrals are coordinated through our
            primary platform.
          </p>
        </div>

      </div>
    </main>
  );
}
