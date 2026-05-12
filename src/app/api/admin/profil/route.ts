import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { db } from "@/db";
import { utilisateurs } from "@/db/schema";
import { eq } from "drizzle-orm";
import bcrypt from "bcryptjs";


export async function GET() {
  const session = await getServerSession();
  if (!session?.user?.email) {
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  }

  const [user] = await db
    .select({ id: utilisateurs.id, nom: utilisateurs.nom, email: utilisateurs.email })
    .from(utilisateurs)
    .where(eq(utilisateurs.email, session.user.email));

  if (!user) {
    return NextResponse.json({ error: "Utilisateur non trouvé" }, { status: 404 });
  }

  return NextResponse.json(user);
}


export async function PUT(request: Request) {
  const session = await getServerSession();
  if (!session?.user?.email) {
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  }

  const { nom, email, motDePasseActuel, nouveauMotDePasse } = await request.json();

  const [user] = await db
    .select()
    .from(utilisateurs)
    .where(eq(utilisateurs.email, session.user.email));

  if (!user) {
    return NextResponse.json({ error: "Utilisateur non trouvé" }, { status: 404 });
  }

  if (nouveauMotDePasse) {
    if (!motDePasseActuel) {
      return NextResponse.json({ error: "Mot de passe actuel requis" }, { status: 400 });
    }

    const valide = await bcrypt.compare(motDePasseActuel, user.motDePasse);
    if (!valide) {
      return NextResponse.json({ error: "Mot de passe actuel incorrect" }, { status: 400 });
    }

    const hash = await bcrypt.hash(nouveauMotDePasse, 12);
    await db
      .update(utilisateurs)
      .set({ nom, email, motDePasse: hash })
      .where(eq(utilisateurs.id, user.id));

    return NextResponse.json({ success: true, message: "Profil et mot de passe mis à jour." });
  }

  await db
    .update(utilisateurs)
    .set({ nom, email })
    .where(eq(utilisateurs.id, user.id));

  return NextResponse.json({ success: true, message: "Profil mis à jour." });
}