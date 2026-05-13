import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { db } from "@/db";
import { projets } from "@/db/schema";
import { eq } from "drizzle-orm";


export async function GET() {
  const session = await getServerSession();
  if (!session) {
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  }

  const data = await db.select().from(projets).orderBy(projets.creeLe);
  return NextResponse.json(data);
}

// POST - Créer un projet
export async function POST(request: Request) {
  const session = await getServerSession();
  if (!session) {
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  }

  const body = await request.json();
  const [nouveau] = await db.insert(projets).values({
    titre: body.titre,
    description: body.description,
    categorie: body.categorie,
    image: body.image,
    video: body.video || null,
    lien: body.lien || null,
    client: body.client || null,
    dateRealisation: body.dateRealisation || null,
    misEnAvant: body.misEnAvant || false,
  }).returning();

  return NextResponse.json(nouveau, { status: 201 });
}