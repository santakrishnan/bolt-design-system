import { type NextRequest, NextResponse } from "next/server";

export function proxy(_request: NextRequest) {
  // Analytics removed - proxy now just passes through requests
  return NextResponse.next();
}
