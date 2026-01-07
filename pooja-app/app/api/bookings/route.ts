import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Booking from "@/app/models/Booking";

export async function POST(req: Request) {
  await connectDB();
  const body = await req.json();
  await Booking.create(body);
  return NextResponse.json({ success: true });
}

export async function GET() {
  await connectDB();
  const bookings = await Booking.find().sort({ createdAt: -1 });
  return NextResponse.json(bookings);
}
