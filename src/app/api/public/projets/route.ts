import { NextResponse } from "next/server";
import { db } from "@/db";
import { projets } from "@/db/schema";
import { desc, eq } from "drizzle-orm";

export async function GET() {
  const data = await db
    .select()
    .from(projets)
    .orderBy(desc(projets.creeLe));

  return NextResponse.json(data);
}