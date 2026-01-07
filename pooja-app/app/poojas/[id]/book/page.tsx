"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

export default function BookPoojaPage() {
  const { id } = useParams();
  const router = useRouter();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = async () => {
    await fetch("/api/bookings", {
      method: "POST",
      body: JSON.stringify({
        poojaId: id,
        name,
        phone,
        date,
      }),
    });

    alert("Booking Successful 🙏");
    router.push("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Card className="p-6 w-full max-w-md">
        <h1 className="text-xl font-bold mb-4">
          Book Pooja
        </h1>

        <input
          placeholder="Your Name"
          className="w-full p-2 border rounded mb-3"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          placeholder="Phone Number"
          className="w-full p-2 border rounded mb-3"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <input
          type="date"
          className="w-full p-2 border rounded mb-4"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <Button className="w-full" onClick={handleSubmit}>
          Confirm Booking
        </Button>
      </Card>
    </div>
  );
}
