import { NextResponse } from "next/server";

export async function GET(request: Request) {
  //7
  console.log(request.headers.get("x-forwarded-host"));

  return NextResponse.json({ data: process.env });
}
