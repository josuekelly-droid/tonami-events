import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { db } from "@/db";
import { temoignages } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function GET() {
  const session = await getServerSession();
  if (!session) return NextResponse.json({ error: "Non autorisé" }, { status: 401 });

  const data = await db.select().from(temoignages).orderBy(temoignages.creeLe);
  return NextResponse.json(data);
}

export async function POST(request: Request) {
  const session = await getServerSession();
  if (!session) return NextResponse.json({ error: "Non autorisé" }, { status: 401 });

  const body = await request.json();
  const [nouveau] = await db.insert(temoignages).values({
    nom: body.nom,
    role: body.role,
    entreprise: body.entreprise || null,
    contenu: body.contenu,
    note: body.note || 5,
    publie: body.publie ?? true,
  }).returning();

  return NextResponse.json(nouveau, { status: 201 });
}