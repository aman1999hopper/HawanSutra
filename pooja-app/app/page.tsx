import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[url('/banner.jpg')] bg-cover bg-center h-[60vh] flex items-center justify-center text-white relative">

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative text-center max-w-2xl px-4">
          <h1 className="text-4xl font-bold mb-4">
            Bring Devotion & Blessings to Your Home 🕉️
          </h1>
          <p className="text-lg mb-6">
            Book authentic Hindu Poojas, Yagyas & Rituals performed by experienced Pandits.
          </p>

          <Link
            href="/poojas"
            className="bg-orange-600 px-6 py-3 rounded-md text-white shadow hover:bg-orange-700 transition"
          >
            Explore Poojas →
          </Link>
        </div>
      </section>

      {/* Section below hero */}
      <section className="py-10 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Popular Poojas</h2>

        <p className="text-gray-600">We will show the top pooja cards here soon.</p>
      </section>
    </div>
  );
}
