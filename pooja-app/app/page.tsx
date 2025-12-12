import PoojaCard from "@/components/PoojaCard";
import { poojaList } from "@/data/poojas";
import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[url('https://media.istockphoto.com/id/1467233037/photo/hindu-pooja-ritual-yagya-or-yajna-which-is-fire-ceremony-performed-during-marriage-puja-and.jpg?s=612x612&w=0&k=20&c=ipxovRSdiQjFrtazlU6Nv1UaYBLF3OGNp6j4MLoU9OA=')] bg-cover bg-center h-[60vh] flex items-center justify-center text-white relative">
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative text-center max-w-2xl px-4">
          <h1 className="text-4xl font-bold mb-4">
            Bring Devotion & Blessings to Your Home 🕉️
          </h1>
          <p className="text-lg mb-6">
            Book authentic Hindu Poojas, Yagyas & Rituals performed by
            experienced Pandits.
          </p>

          <Link
            href="/poojas"
            className="bg-orange-600 px-6 py-3 rounded-md text-white shadow hover:bg-orange-700 transition"
          >
            Explore Poojas →
          </Link>
        </div>
      </section>

      {/* Popular Pooja section is here  */}
      <section className="py-10 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Popular Poojas</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {poojaList.slice(0, 3).map((pooja) => (
            <PoojaCard key={pooja.id} pooja={pooja} />
          ))}
        </div>

        <div className="mt-6 text-center">
          <Link
            href="/poojas"
            className="text-orange-600 font-medium hover:underline"
          >
            View All →
          </Link>
        </div>
      </section>
    </div>
  );
}
