import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { db } from "@/db";
import { newsletter } from "@/db/schema";
import { eq } from "drizzle-orm";

// GET - Tous les abonnés
export async function GET() {
  const session = await getServerSession();
  if (!session) return NextResponse.json({ error: "Non autorisé" }, { status: 401 });

  const data = await db.select().from(newsletter).orderBy(newsletter.inscritLe);
  return NextResponse.json(data);
}


export async function DELETE(request: Request) {
  const session = await getServerSession();
  if (!session) return NextResponse.json({ error: "Non autorisé" }, { status: 401 });

  const { id } = await request.json();
  await db.delete(newsletter).where(eq(newsletter.id, id));

  return NextResponse.json({ success: true });
}