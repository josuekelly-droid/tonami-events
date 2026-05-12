import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { db } from "@/db";
import { contacts } from "@/db/schema";
import { eq } from "drizzle-orm";

// PATCH - Marquer comme traité
export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await getServerSession();
  if (!session) return NextResponse.json({ error: "Non autorisé" }, { status: 401 });

  const { id } = await params;
  const [contact] = await db.select().from(contacts).where(eq(contacts.id, parseInt(id)));
  
  const [modifie] = await db
    .update(contacts)
    .set({ traite: !contact.traite })
    .where(eq(contacts.id, parseInt(id)))
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
  await db.delete(contacts).where(eq(contacts.id, parseInt(id)));

  return NextResponse.json({ success: true });
}