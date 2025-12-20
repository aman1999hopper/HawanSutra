import Link from "next/link";
import Button from "./ui/Button";

export default function Navbar() {
  return (
    <nav className="w-full sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-orange-600">
          Hawan-Sutra 🕉️
        </Link>

        <div className="flex gap-6 text-gray-700">
          <Link href="/" className="hover:text-orange-600 text-white transition">Home</Link>
          <Link href="/poojas" className="hover:text-orange-600 text-white transition">Poojas</Link>
          <Link href="/booking" className="hover:text-orange-600 text-white transition">Book Now</Link>
          <Link href="/admin" className="hover:text-orange-600 text-white transition">Admin</Link>
        </div>
        <div>
            <Button>Signup</Button>
        </div>
      </div>
    </nav>
  );
}
