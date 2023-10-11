// import { NextResponse } from "next/server"

export async function GET() {
  const res = await fetch(
    "https://63879ad3e399d2e473040a05.mockapi.io/api/users"
  );
  const data = await res.json();
  // console.log(data);
  return Response.json(data);
}

export async function POST() {
  const res = await fetch(
    "https://63879ad3e399d2e473040a05.mockapi.io/api/users"
  );
  const data = await res.json();
  // console.log(data);
  return Response.json(data);
}