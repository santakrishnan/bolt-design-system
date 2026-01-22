import type { NextRequest } from "next/server";

export function GET(_request: NextRequest) {
  // RSS feed generation removed - analytics SDK dependency removed
  return new Response("RSS feed not available", {
    status: 404,
    headers: { "Content-Type": "text/plain" },
  });
}
