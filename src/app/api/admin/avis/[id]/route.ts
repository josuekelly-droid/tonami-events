import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { db } from "@/db";
import { avis, temoignages } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await getServerSession();
  if (!session) return NextResponse.json({ error: "Non autorisé" }, { status: 401 });

  const { id } = await params;
  const { statut, convertir } = await request.json();

  if (convertir) {
    
    const [avisData] = await db.select().from(avis).where(eq(avis.id, parseInt(id)));
    if (avisData) {
      await db.insert(temoignages).values({
        nom: avisData.nom,
        role: "Client",
        entreprise: avisData.entreprise,
        contenu: avisData.contenu,
        note: avisData.note,
        publie: true,
      });
      await db.delete(avis).where(eq(avis.id, parseInt(id)));
      return NextResponse.json({ success: true });
    }
  }

  if (statut) {
    const [modifie] = await db
      .update(avis)
      .set({ statut, modifieLe: new Date() })
      .where(eq(avis.id, parseInt(id)))
      .returning();
    return NextResponse.json(modifie);
  }

  return NextResponse.json({ error: "Aucune action" }, { status: 400 });
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await getServerSession();
  if (!session) return NextResponse.json({ error: "Non autorisé" }, { status: 401 });

  const { id } = await params;
  await db.delete(avis).where(eq(avis.id, parseInt(id)));

  return NextResponse.json({ success: true });
}