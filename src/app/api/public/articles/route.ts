import { NextResponse } from "next/server";
import { db } from "@/db";
import { articles } from "@/db/schema";
import { desc, eq } from "drizzle-orm";

export async function GET() {
  const data = await db
    .select()
    .from(articles)
    .where(eq(articles.publie, true))
    .orderBy(desc(articles.creeLe));

  return NextResponse.json(data);
}