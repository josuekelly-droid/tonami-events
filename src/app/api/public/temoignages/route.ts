import { NextResponse } from "next/server";
import { db } from "@/db";
import { temoignages } from "@/db/schema";
import { desc, eq } from "drizzle-orm";

export async function GET() {
  const data = await db
    .select()
    .from(temoignages)
    .where(eq(temoignages.publie, true))
    .orderBy(desc(temoignages.creeLe));

  return NextResponse.json(data);
}