import Link from "next/link";

type Pooja = {
  id: string;
  title: string;
  shortDesc: string;
  price: number;
  durationMinutes?: number;
  image?: string;
};

export default function PoojaCard({ pooja }: { pooja: Pooja }) {
  return (
    <Link
      href={`/poojas/${pooja.id}`}
      className="block bg-white shadow hover:shadow-lg transition rounded-lg overflow-hidden"
    >
      <div className="h-40 bg-gray-100">
        {pooja.image ? (
          <img src={pooja.image} className="w-full h-full object-cover" />
        ) : (
          <div className="flex items-center justify-center h-full text-gray-500">
            No Image
          </div>
        )}
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-lg text-gray-700">{pooja.title}</h3>
        <p className="text-gray-600 text-sm mt-1">{pooja.shortDesc}</p>

        <div className="mt-3 flex justify-between items-center">
          <span className="font-bold text-green-600">
            ₹{pooja.price.toLocaleString()}
          </span>
          <span className="text-sm text-gray-500">
            {pooja.durationMinutes ?? 60} min
          </span>
        </div>
      </div>
    </Link>
  );
}
