import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { db } from "@/db";
import { temoignages } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await getServerSession();
  if (!session) return NextResponse.json({ error: "Non autorisé" }, { status: 401 });

  const { id } = await params;
  const body = await request.json();

  const [modifie] = await db
    .update(temoignages)
    .set({
      nom: body.nom,
      role: body.role,
      entreprise: body.entreprise || null,
      contenu: body.contenu,
      note: body.note || 5,
      publie: body.publie ?? true,
    })
    .where(eq(temoignages.id, parseInt(id)))
    .returning();

  return NextResponse.json(modifie);
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await getServerSession();
  if (!session) return NextResponse.json({ error: "Non autorisé" }, { status: 401 });

  const { id } = await params;
  await db.delete(temoignages).where(eq(temoignages.id, parseInt(id)));

  return NextResponse.json({ success: true });
}