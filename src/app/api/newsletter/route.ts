import { NextResponse } from "next/server";
import { db } from "@/db";
import { newsletter } from "@/db/schema";

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Email invalide" }, { status: 400 });
    }

    const safeEmail = email.trim().slice(0, 200).toLowerCase();

    await db.insert(newsletter).values({ email: safeEmail });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Cet email est déjà inscrit ou une erreur est survenue." },
      { status: 500 }
    );
  }
}