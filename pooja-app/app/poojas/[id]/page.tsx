import { poojaList } from "@/data/poojas";

export default function PoojaDetails({ params }: { params: { id: string } }) {
  const pooja = poojaList.find((p) => p.id === params.id);

  if (!pooja) {
    return <p className="p-6">Pooja not found.</p>;
  }

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold text-gray-800">{pooja.title}</h1>

      <img
        src={pooja.image}
        className="w-full max-w-md rounded-lg shadow mt-4"
      />

      <p className="text-gray-600 mt-4">{pooja.shortDesc}</p>

      <p className="mt-4 font-semibold text-xl">
        Price: ₹{pooja.price.toLocaleString()}
      </p>

      <p className="text-sm text-gray-500 mt-1">
        Duration: {pooja.durationMinutes ?? 60} minutes
      </p>
    </main>
  );
}
