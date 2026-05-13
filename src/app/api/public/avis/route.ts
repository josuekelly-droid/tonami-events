import { NextResponse } from "next/server";
import { db } from "@/db";
import { avis } from "@/db/schema";

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: Request) {
  try {
    const { nom, email, entreprise, note, contenu } = await request.json();

    if (!nom || !email || !contenu) {
      return NextResponse.json(
        { error: "Nom, email et avis sont obligatoires." },
        { status: 400 }
      );
    }

    const safeNom = escapeHtml(nom.trim().slice(0, 100));
    const safeEmail = email.trim().slice(0, 200).toLowerCase();
    const safeEntreprise = entreprise ? escapeHtml(entreprise.trim().slice(0, 100)) : null;
    const safeContenu = escapeHtml(contenu.trim().slice(0, 2000));
    const safeNote = Math.min(5, Math.max(1, parseInt(note) || 5));

    await db.insert(avis).values({
      nom: safeNom,
      email: safeEmail,
      entreprise: safeEntreprise,
      note: safeNote,
      contenu: safeContenu,
    });

    return NextResponse.json({
      success: true,
      message: "Merci ! Votre avis a été soumis et sera examiné avant publication.",
    });
  } catch {
    return NextResponse.json(
      { error: "Erreur serveur. Veuillez réessayer." },
      { status: 500 }
    );
  }
}