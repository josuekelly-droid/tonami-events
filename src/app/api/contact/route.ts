import { NextResponse } from "next/server";
import { Resend } from "resend";
import { db } from "@/db";
import { contacts } from "@/db/schema";

const resend = new Resend(process.env.RESEND_API_KEY);

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
    const { nom, email, telephone, service, message } = await request.json();

    if (!nom || !email || !service || !message) {
      return NextResponse.json(
        { error: "Tous les champs obligatoires doivent être remplis." },
        { status: 400 }
      );
    }

    const safeNom = escapeHtml(nom.trim().slice(0, 100));
    const safeEmail = email.trim().slice(0, 200);
    const safeTelephone = telephone ? telephone.trim().slice(0, 30) : null;
    const safeService = escapeHtml(service.trim().slice(0, 100));
    const safeMessage = escapeHtml(message.trim().slice(0, 5000));

        await db.insert(contacts).values({
      nom: safeNom,
      email: safeEmail,
      telephone: safeTelephone,
      service: safeService as
        | "Production Audiovisuelle"
        | "Design Graphique"
        | "Services Numériques"
        | "Conseil & Formation"
        | "Location de Matériel"
        | "Autre",
      message: safeMessage,
    });

    const { error } = await resend.emails.send({
      from: "Tonami Events <onboarding@resend.dev>",
      to: ["contact@tonami-events.com"],
      replyTo: safeEmail,
      subject: `Nouveau message de ${safeNom} - ${safeService}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #E42425;">Nouveau message depuis le site</h2>
          <hr style="border: 1px solid #eee; margin: 20px 0;" />
          <p><strong>Nom :</strong> ${safeNom}</p>
          <p><strong>Email :</strong> ${safeEmail}</p>
          <p><strong>Téléphone :</strong> ${safeTelephone || "Non renseigné"}</p>
          <p><strong>Service :</strong> ${safeService}</p>
          <hr style="border: 1px solid #eee; margin: 20px 0;" />
          <p><strong>Message :</strong></p>
          <p>${safeMessage}</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Erreur serveur. Veuillez réessayer." },
      { status: 500 }
    );
  }
}