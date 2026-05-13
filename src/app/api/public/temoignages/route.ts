import { NextResponse } from "next/server";
import { db } from "@/db";
import { temoignages, avis } from "@/db/schema";
import { desc, eq } from "drizzle-orm";

export async function GET() {
  // Récupérer les témoignages publiés
  const dataTemoignages = await db
    .select()
    .from(temoignages)
    .where(eq(temoignages.publie, true))
    .orderBy(desc(temoignages.creeLe));

  
  const dataAvis = await db
    .select()
    .from(avis)
    .where(eq(avis.statut, "approuve"))
    .orderBy(desc(avis.creeLe));

  
  const tous = [
    ...dataTemoignages.map((t) => ({
      id: t.id,
      nom: t.nom,
      role: t.role,
      entreprise: t.entreprise,
      contenu: t.contenu,
      note: t.note,
      source: "temoignage",
    })),
    ...dataAvis.map((a) => ({
      id: a.id + 10000, 
      nom: a.nom,
      role: "Client",
      entreprise: a.entreprise,
      contenu: a.contenu,
      note: a.note,
      source: "avis",
    })),
  ];

  return NextResponse.json(tous);
}