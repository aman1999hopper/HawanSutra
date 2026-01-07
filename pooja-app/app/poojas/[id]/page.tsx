import { notFound } from "next/navigation";
import Button from "@/components/ui/Button";
import Link from "next/link";
import Pooja from "@/app/models/Pooja";
import { connectDB } from "@/lib/db";

type Props = {
  params: {
    id: string;
  };
};

export default async function PoojaDetailPage({ params }: Props) {
  const { id } = await params 
  await connectDB();

  const pooja = await Pooja.findOne({ slug: id }).lean();

  if (!pooja) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold">{pooja.title}</h1>

      <p className="text-gray-600 mt-3">
        {pooja.shortDesc}
      </p>

      <p className="mt-4 font-semibold text-lg text-orange-600">
        ₹{pooja.price}
      </p>

      <Link
        href={`/poojas/${pooja._id}/book`}
        className="inline-block mt-6"
      >
        <Button>Book Now</Button>
      </Link>
    </div>
  );
}
