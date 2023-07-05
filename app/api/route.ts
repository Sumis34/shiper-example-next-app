import { NextResponse } from "next/server";

export async function GET() {
  //4
  return NextResponse.json({ data: process.env });
}
