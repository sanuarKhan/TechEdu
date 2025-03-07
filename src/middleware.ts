import { getToken } from "next-auth/jwt";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import dbConnect from "./lib/db";
import User from "./models/User";

export async function middleware(req: NextRequest) {
  const token = await getToken({ req });
  const { pathname } = req.nextUrl;

  // Redirect unauthenticated users to the signin page
  if (!token) {
    return NextResponse.redirect(new URL("/api/auth/signin", req.url));
  }
  // Fetch user from MongoDB
  await dbConnect();
  const user = await User.findById(token.sub);

  // Protect teacher routes
  if (pathname.startsWith("/teacher") && user.role !== "TEACHER") {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  // Protect admin routes
  if (pathname.startsWith("/admin") && user.role !== "ADMIN") {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  return NextResponse.next();
}
