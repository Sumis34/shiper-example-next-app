import { NextResponse } from "next/server";

export async function GET() {
  //3
  return NextResponse.json({ data: process.env });
}
