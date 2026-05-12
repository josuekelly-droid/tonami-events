import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { db } from "@/db";
import { articles } from "@/db/schema";
import { eq } from "drizzle-orm";

// GET - Tous les articles
export async function GET() {
  const session = await getServerSession();
  if (!session) {
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  }

  const data = await db.select().from(articles).orderBy(articles.creeLe);
  return NextResponse.json(data);
}

// POST - Créer un article
export async function POST(request: Request) {
  const session = await getServerSession();
  if (!session) {
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  }

  const body = await request.json();
  const [nouveau] = await db.insert(articles).values({
    titre: body.titre,
    resume: body.resume,
    contenu: body.contenu,
    categorie: body.categorie,
    auteur: body.auteur,
    image: body.image,
    tempsLecture: body.tempsLecture || "5 min",
    publie: body.publie || false,
  }).returning();

  return NextResponse.json(nouveau, { status: 201 });
}