import { NextResponse } from "next/server";

export async function GET() {
  //2
  return NextResponse.json({ data: process.env });
}
