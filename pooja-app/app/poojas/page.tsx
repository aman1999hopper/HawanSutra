import { poojaList } from "@/data/poojas";
import PoojaCard from "@/components/PoojaCard";

export default function PoojaListPage() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-6">All Poojas</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {poojaList.map((p) => (
          <PoojaCard key={p.id} pooja={p} />
        ))}
      </div>
    </main>
  );
}
