"use client";

import { useCallback, useEffect, useState } from "react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

type Pooja = {
  id: string;
  title: string;
  shortDesc: string;
  price: number;
};

type Booking = {
  _id: string;
  poojaId: string;
  name: string;
  phone: string;
  date: string;
  createdAt: string;
};

export default function AdminPage() {
  const [poojas, setPoojas] = useState<Pooja[]>([]);
  const [bookings, setBookings] = useState<Booking[]>([]);

  // Load Poojas
  const loadBookings = useCallback(async () => {
    try {
      const res = await fetch("/api/bookings");
      const data = await res.json();
      setBookings(data);
    } catch (error) {
      console.error("Failed to load bookings", error);
    }
  }, []);

  useEffect(() => {
    // loadBookings();
  }, [loadBookings]);

  // Load data
  const loadPoojas = async () => {
    const res = await fetch("/api/poojas");
    const data = await res.json();
    setPoojas(data);
  };

  useEffect(() => {
    const isAdmin = localStorage.getItem("isAdmin");
    if (!isAdmin) {
      window.location.href = "/login";
    }

    let isMounted = true;

    const fetchData = async () => {
      const res = await fetch("/api/poojas");
      const data = await res.json();

      if (isMounted) {
        setPoojas(data);
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, []);

  // Add
  const addPooja = async () => {
    const newPooja: Pooja = {
      id: crypto.randomUUID(),
      title: "New Pooja",
      shortDesc: "Edit description",
      price: 1000,
    };

    await fetch("/api/poojas", {
      method: "POST",
      body: JSON.stringify(newPooja),
    });

    loadPoojas();
  };

  // Delete
  const deletePooja = async (id: string) => {
    await fetch("/api/poojas", {
      method: "DELETE",
      body: JSON.stringify({ id }),
    });

    loadPoojas();
  };

  return (
    <div className="space-y-6">
      <div>
        <Button
          variant="outline"
          onClick={() => {
            localStorage.removeItem("isAdmin");
            window.location.href = "/login";
          }}
        >
          Logout
        </Button>
      </div>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Manage Poojas</h1>
        <Button onClick={addPooja}>+ Add Pooja</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {poojas.map((pooja) => (
          <Card key={pooja.id} className="p-4 flex justify-between">
            <div>
              <h3 className="font-semibold text-gray-600">{pooja.title}</h3>
              <p className="text-sm text-gray-600">{pooja.shortDesc}</p>
              <p className="text-sm text-gray-600">₹{pooja.price}</p>
            </div>

            <Button variant="outline" onClick={() => deletePooja(pooja.id)}>
              Delete
            </Button>
          </Card>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {bookings.map((b) => (
          <Card key={b._id} className="p-4">
            <p>
              <b>Name:</b> {b.name}
            </p>
            <p>
              <b>Phone:</b> {b.phone}
            </p>
            <p>
              <b>Date:</b> {b.date}
            </p>
            <p className="text-xs text-gray-500 mt-1">
              {new Date(b.createdAt).toLocaleString()}
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
}
