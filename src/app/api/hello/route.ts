import { NextResponse } from "next/server";

// Handles GET requests to /api
export async function GET(request: Request) {
  // ...
  //console.log(request);
  return NextResponse.json({ message: "Hello World" });
}

// Handles POST requests to /api
export async function POST(request: Request) {
  // ...
  //console.log(request);
  const res = await request.json();
  //console.log(res)
  return NextResponse.json({ message: res });
}