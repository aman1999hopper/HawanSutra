import Link from "next/link";
import Card from "@/components/ui/Card";

type Pooja = {
  id: string;
  title: string;
  shortDesc: string;
  price: number;
  durationMinutes?: number;
  image?: string;
};

const PoojaCard = ({ pooja }: { pooja: Pooja }) => {
  return (
    <Link
      href={`/poojas/${pooja.id}`}
      className="block"
    >
      <Card className="overflow-hidden">
        {/* Image */}
        <div className="h-40 bg-gray-100 flex items-center justify-center text-gray-500">
          {pooja.image ? (
            <img
              src={pooja.image}
              alt={pooja.title}
              className="object-cover h-full w-full"
            />
          ) : (
            <span className="text-sm">No image</span>
          )}
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="font-semibold text-lg text-gray-800">
            {pooja.title}
          </h3>

          <p className="text-sm text-gray-600 mt-1">
            {pooja.shortDesc}
          </p>

          <div className="mt-3 flex items-center justify-between">
            <span className="font-medium text-gray-800">
              ₹{(pooja.price / 100).toFixed(2)}
            </span>

            <span className="text-xs text-gray-500">
              {pooja.durationMinutes ?? 60} mins
            </span>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default PoojaCard;
