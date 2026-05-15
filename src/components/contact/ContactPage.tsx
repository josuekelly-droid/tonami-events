"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";

const services = [
  "Production Audiovisuelle",
  "Design Graphique",
  "Services Numériques",
  "Conseil & Formation",
  "Location de Matériel",
  "Autre",
];

const reseaux = [
  {
    nom: "Facebook",
    url: "https://web.facebook.com/tonamicommunication",
    icone: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
    couleur: "#1877F2",
  },
  {
    nom: "Instagram",
    url: "https://instagram.com/tonamicommunication",
    icone: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
    couleur: "#E4405F",
  },
  {
    nom: "LinkedIn",
    url: "https://www.linkedin.com/company/tonami-events/",
    icone: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    couleur: "#0A66C2",
  },
  {
    nom: "YouTube",
    url: "https://www.youtube.com/channel/UCJkA5XL_XD-I-ZUlnWrpNeQ/videos",
    icone: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
    couleur: "#FF0000",
  },
];

export function ContactPage() {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    telephone: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [messageRetour, setMessageRetour] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setMessageRetour("Votre message a été envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.");
        setFormData({ nom: "", email: "", telephone: "", service: "", message: "" });
      } else {
        setStatus("error");
        setMessageRetour(data.error || "Une erreur est survenue. Veuillez réessayer.");
      }
    } catch {
      setStatus("error");
      setMessageRetour("Erreur réseau. Veuillez vérifier votre connexion et réessayer.");
    }
  };

  return (
    <>
      <section className="relative bg-tertiary text-secondary py-24 lg:py-36 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(228,36,37,0.1),transparent_60%)]" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-secondary/10 text-secondary text-sm font-medium px-4 py-2 rounded-full mb-8 backdrop-blur-sm border border-secondary/10"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            Contact
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="font-heading text-4xl sm:text-5xl lg:text-7xl font-bold mb-8 leading-tight"
          >
            Parlons de votre{" "}
            <span className="relative inline-block">
              <span className="text-primary">projet</span>
              <svg className="absolute -bottom-3 left-0 w-full" viewBox="0 0 200 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 5.5C65 1.5 135 1.5 199 5.5" stroke="#E42425" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
              </svg>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-gray-light max-w-2xl mx-auto text-lg leading-relaxed"
          >
            Une question, un projet, une demande de devis ? Remplissez le formulaire ci-dessous et nous vous répondrons rapidement.
          </motion.p>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-gradient-to-b from-secondary to-gray-light/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-2xl lg:text-3xl font-bold text-tertiary mb-8">
                Envoyez-nous un message
              </h2>

              {status === "success" && (
                <div className="bg-green-50 border border-green-200 text-green-700 rounded-2xl p-5 mb-6 text-sm flex items-center gap-3">
                  <span className="text-xl">✅</span>
                  {messageRetour}
                </div>
              )}
              {status === "error" && (
                <div className="bg-red-50 border border-red-200 text-red-700 rounded-2xl p-5 mb-6 text-sm flex items-center gap-3">
                  <span className="text-xl">❌</span>
                  {messageRetour}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="nom" className="block text-sm font-medium text-tertiary mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="nom"
                      required
                      value={formData.nom}
                      onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                      className="w-full bg-gray-light/10 border border-gray-light/30 rounded-2xl px-4 py-3 text-tertiary placeholder:text-gray-medium focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-tertiary mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-gray-light/10 border border-gray-light/30 rounded-2xl px-4 py-3 text-tertiary placeholder:text-gray-medium focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all"
                      placeholder="vous@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="telephone" className="block text-sm font-medium text-tertiary mb-2">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    id="telephone"
                    value={formData.telephone}
                    onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}
                    className="w-full bg-gray-light/10 border border-gray-light/30 rounded-2xl px-4 py-3 text-tertiary placeholder:text-gray-medium focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all"
                    placeholder="+229 XX XX XX XX"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-tertiary mb-2">
                    Type de service *
                  </label>
                  <select
                    id="service"
                    required
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full bg-gray-light/10 border border-gray-light/30 rounded-2xl px-4 py-3 text-tertiary focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all"
                  >
                    <option value="">Sélectionnez un service</option>
                    {services.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-tertiary mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-gray-light/10 border border-gray-light/30 rounded-2xl px-4 py-3 text-tertiary placeholder:text-gray-medium focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all resize-none"
                    placeholder="Décrivez votre projet..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full bg-primary text-secondary px-8 py-4 rounded-2xl font-semibold hover:bg-primary/90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-primary/20"
                >
                  {status === "loading" ? (
                    <>
                      <span className="w-5 h-5 border-2 border-secondary/30 border-t-secondary rounded-full animate-spin" />
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      Envoyer le message
                      <span>→</span>
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="font-heading text-2xl lg:text-3xl font-bold text-tertiary mb-8">
                Nos coordonnées
              </h2>

              <div className="space-y-8 mb-12">
                {[
                  {
                    icone: (
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    ),
                    titre: "Adresse",
                    contenu: "Cotonou, Bénin — Quartier Zogbo",
                  },
                  {
                    icone: (
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.362 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                      </svg>
                    ),
                    titre: "Téléphone",
                    contenu: "+229 01 66 41 88 95",
                    lien: "tel:+2290166418895",
                  },
                  {
                    icone: (
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                    ),
                    titre: "Email",
                    contenu: "contact@tonami-events.com",
                    lien: "mailto:contact@tonami-events.com",
                  },
                ].map((info) => (
                  <div key={info.titre} className="flex items-start gap-5 group">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary group-hover:bg-primary group-hover:text-secondary transition-all duration-300">
                      {info.icone}
                    </div>
                    <div>
                      <h3 className="font-semibold text-tertiary mb-1">{info.titre}</h3>
                      {info.lien ? (
                        <a
                          href={info.lien}
                          className="text-gray-medium hover:text-primary transition-colors"
                        >
                          {info.contenu}
                        </a>
                      ) : (
                        <p className="text-gray-medium">{info.contenu}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <h3 className="font-semibold text-tertiary mb-5">Suivez-nous</h3>
                <div className="flex gap-3">
                  {reseaux.map((reseau) => (
                    <a
                      key={reseau.nom}
                      href={reseau.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={reseau.nom}
                      className="w-12 h-12 rounded-2xl bg-gray-light/10 hover:bg-primary hover:text-secondary text-tertiary flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
                    >
                      {reseau.icone}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="pb-24 lg:pb-32 bg-gradient-to-b from-gray-light/5 to-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden aspect-[16/6] shadow-2xl"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.1!2d2.4266882!3d6.3456658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x82986ec2c389da35%3A0xb0f4aa55030cac4b!2sTonami%20Events!5e0!3m2!1sfr!2sbj!4v1712345678901!5m2!1sfr!2sbj"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Tonami Events - Cotonou"
            />
          </motion.div>
          <p className="text-center text-gray-medium text-sm mt-5">
            Immeuble Maison des Entreprises, Derrière Stade de l&apos;Amitié MK, Cotonou
          </p>
        </div>
      </section>
    </>
  );
}