import { getTest, updateTest } from "@/lib/refresh.action";
import { NextResponse } from "next/server";

const { REFRESH_SECRET } = process.env;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  if (searchParams.get("refreshSecret") !== REFRESH_SECRET) {
    return new Response("Invalid token", { status: 401 });
  }

  const timestamp = new Date().toLocaleTimeString();

  await updateTest(timestamp);

  const name = await getTest();

  return NextResponse.json({ message: "OK", name });
}
