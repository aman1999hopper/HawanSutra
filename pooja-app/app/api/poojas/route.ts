import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "src/data/poojas.ts");

type Pooja = {
  id: string;
  title: string;
  shortDesc: string;
  price: number;
};

// GET all poojas
export async function GET() {
  const data = fs.readFileSync(filePath, "utf-8");
  return NextResponse.json(JSON.parse(data));
}

// ADD new pooja
export async function POST(req: Request) {
  const body = await req.json();
  const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));

  data.unshift(body);

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  return NextResponse.json({ success: true });
}

// DELETE pooja
export async function DELETE(req: Request) {
  const { id } = await req.json();
  const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));

  const filtered = data.filter((p: Pooja) => p.id !== id);
  fs.writeFileSync(filePath, JSON.stringify(filtered, null, 2));

  return NextResponse.json({ success: true });
}
