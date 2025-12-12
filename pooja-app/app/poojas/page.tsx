"use client";

import { useState } from "react";
import { poojaList } from "@/data/poojas";
import PoojaCard from "@/components/PoojaCard";

export default function PoojaListPage() {
  const [query, setQuery] = useState("");
  const categories = ["All", "Health", "Prosperity", "Planets"];

  const [activeCat, setActiveCat] = useState("All");

  const filtered = poojaList.filter(
    (p) =>
      (activeCat === "All" ? true : p.category === activeCat) &&
      p.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <main className="p-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">All Poojas</h1>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search for Ganesh Puja, Rudra Abhishek..."
        className="w-full p-3 border border-gray-300 rounded-lg mb-6 focus:ring focus:ring-orange-200 focus:outline-none"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.length ? (
          filtered.map((p) => <PoojaCard key={p.id} pooja={p} />)
        ) : (
          <p className="text-gray-500 col-span-full">No poojas found.</p>
        )}
      </div>

      {/* Category Filter */}
      <div className="flex gap-3 mb-6 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCat(cat)}
            className={`px-4 py-2 rounded-full border transition ${
              activeCat === cat
                ? "bg-orange-600 text-white"
                : "bg-white border-gray-300 text-gray-600"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </main>
  );
}
