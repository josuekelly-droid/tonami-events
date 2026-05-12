import { db } from "../src/db";
import { utilisateurs } from "../src/db/schema";
import bcrypt from "bcryptjs";

async function createAdmin() {
  const email = "admin@tonami-events.com";
  const motDePasse = "gogovivi-hahaha-lol-belelou"; 
  const hash = await bcrypt.hash(motDePasse, 12);

  await db.insert(utilisateurs).values({
    nom: "Admin",
    email,
    motDePasse: hash,
    role: "admin",
  });

  console.log("✅ Admin créé avec succès !");
  console.log(`Email : ${email}`);
  console.log(`Mot de passe : ${motDePasse}`);
  process.exit(0);
}

createAdmin().catch((err) => {
  console.error("❌ Erreur :", err);
  process.exit(1);
});