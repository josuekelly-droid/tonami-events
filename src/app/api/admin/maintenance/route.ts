import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { db } from "@/db";
import { parametres } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function GET() {
  const [row] = await db
    .select()
    .from(parametres)
    .where(eq(parametres.cle, "maintenance"));

  const isActive = row?.valeur === "true";
  return NextResponse.json({ maintenance: isActive });
}

export async function POST() {
  const session = await getServerSession();
  if (!session) return NextResponse.json({ error: "Non autorisé" }, { status: 401 });

  const [existing] = await db
    .select()
    .from(parametres)
    .where(eq(parametres.cle, "maintenance"));

  const newValue = existing?.valeur === "true" ? "false" : "true";

  if (existing) {
    await db
      .update(parametres)
      .set({ valeur: newValue, modifieLe: new Date() })
      .where(eq(parametres.cle, "maintenance"));
  } else {
    await db.insert(parametres).values({ cle: "maintenance", valeur: newValue });
  }

  return NextResponse.json({ maintenance: newValue === "true" });
}