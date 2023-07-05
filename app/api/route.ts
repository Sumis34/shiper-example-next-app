import { NextResponse } from "next/server";

export async function GET() {
  //5
  return NextResponse.json({ data: process.env });
}
