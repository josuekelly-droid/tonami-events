import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { db } from "@/db";
import { articles } from "@/db/schema";
import { eq } from "drizzle-orm";


export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await getServerSession();
  if (!session) {
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  }

  const { id } = await params;
  const [article] = await db.select().from(articles).where(eq(articles.id, parseInt(id)));

  if (!article) {
    return NextResponse.json({ error: "Article non trouvé" }, { status: 404 });
  }

  return NextResponse.json(article);
}


export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await getServerSession();
  if (!session) {
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  }

  const { id } = await params;
  const body = await request.json();

  const [modifie] = await db
    .update(articles)
    .set({
      titre: body.titre,
      resume: body.resume,
      contenu: body.contenu,
      categorie: body.categorie,
      auteur: body.auteur,
      image: body.image,
      tempsLecture: body.tempsLecture || "5 min",
      publie: body.publie || false,
      modifieLe: new Date(),
    })
    .where(eq(articles.id, parseInt(id)))
    .returning();

  return NextResponse.json(modifie);
}


export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await getServerSession();
  if (!session) {
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  }

  const { id } = await params;
  await db.delete(articles).where(eq(articles.id, parseInt(id)));

  return NextResponse.json({ success: true });
}