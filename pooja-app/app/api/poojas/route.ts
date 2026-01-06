import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Pooja from "@/app/models/Pooja";

export async function GET() {
  await connectDB();
  const poojas = await Pooja.find();
  return NextResponse.json(poojas);
}

export async function POST(req: Request) {
  await connectDB();
  const body = await req.json();
  await Pooja.create(body);
  return NextResponse.json({ success: true });
}

export async function DELETE(req: Request) {
  await connectDB();
  const { id } = await req.json();
  await Pooja.findByIdAndDelete(id);
  return NextResponse.json({ success: true });
}
