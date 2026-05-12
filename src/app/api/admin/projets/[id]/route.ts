import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { db } from "@/db";
import { projets } from "@/db/schema";
import { eq } from "drizzle-orm";

// GET - Récupérer un projet
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await getServerSession();
  if (!session) {
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  }

  const { id } = await params;
  const [projet] = await db.select().from(projets).where(eq(projets.id, parseInt(id)));

  if (!projet) {
    return NextResponse.json({ error: "Projet non trouvé" }, { status: 404 });
  }

  return NextResponse.json(projet);
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
    .update(projets)
    .set({
      titre: body.titre,
      description: body.description,
      categorie: body.categorie,
      image: body.image,
      video: body.video || null,
      client: body.client || null,
      dateRealisation: body.dateRealisation || null,
      misEnAvant: body.misEnAvant || false,
      modifieLe: new Date(),
    })
    .where(eq(projets.id, parseInt(id)))
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
  await db.delete(projets).where(eq(projets.id, parseInt(id)));

  return NextResponse.json({ success: true });
}