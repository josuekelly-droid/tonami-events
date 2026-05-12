import type { Metadata } from "next";
import { ContactPage } from "@/components/contact/ContactPage";

export const metadata: Metadata = {
  title: "Contact | Tonami Events",
  description:
    "Contactez Tonami Events pour vos projets audiovisuels, design graphique, services numériques ou conseil en communication. Demandez un devis gratuit.",
  openGraph: {
    title: "Contact | Tonami Events",
    description:
      "Parlons de votre projet. Contactez-nous dès aujourd'hui.",
  },
};

export default function Contact() {
  return <ContactPage />;
}