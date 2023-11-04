import { prisma } from "@/prisma";
import { NextRequest, NextResponse } from "next/server";

import { Prisma } from "@prisma/client";

export async function POST(req: NextRequest) {
  const data: Prisma.UserCreateInput = await req.json();
  if (!data) {
    return NextResponse.json({
      error: "Bad Request",
    });
  }

  const res = await prisma.user.create({
    data,
  });
  return NextResponse.json(res);
}
