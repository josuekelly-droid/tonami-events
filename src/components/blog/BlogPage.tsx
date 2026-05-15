"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface Article {
  id: string;
  titre: string;
  categorie: string;
  auteur: string;
  date?: string;
  creeLe?: string;
  resume: string;
  image: string;
  tempsLecture: string;
}

interface BlogPageProps {
  articles: Article[];
}

const categories = [
  "Tous",
  "Audiovisuel",
  "Design",
  "Numérique",
  "Conseil",
  "Location",
];

const couleursCategories: Record<string, string> = {
  Audiovisuel: "#E42425",
  Design: "#7C3AED",
  Numérique: "#3B82F6",
  Conseil: "#10B981",
  Location: "#F59E0B",
};

export function BlogPage({ articles }: BlogPageProps) {
  const [recherche, setRecherche] = useState("");
  const [filtreActif, setFiltreActif] = useState("Tous");

  const articlesFiltres = articles.filter((article) => {
    const matchCategorie =
      filtreActif === "Tous" || article.categorie === filtreActif;
    const matchRecherche =
      article.titre.toLowerCase().includes(recherche.toLowerCase()) ||
      article.resume.toLowerCase().includes(recherche.toLowerCase());
    return matchCategorie && matchRecherche;
  });

  const formatDate = (dateStr?: string) => {
    if (!dateStr) return "";
    const date = new Date(dateStr);
    if (isNaN(date.getTime())) return "";
    return date.toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
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
            Blog
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="font-heading text-4xl sm:text-5xl lg:text-7xl font-bold mb-8 leading-tight"
          >
            Actualités &{" "}
            <span className="relative inline-block">
              <span className="text-primary">Conseils</span>
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
            Découvrez nos articles sur la communication, le design, le digital et bien plus. Restez informé des dernières tendances.
          </motion.p>
        </div>
      </section>

      <section className="py-10 border-b border-gray-light/20 bg-secondary sticky top-16 lg:top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-md mx-auto mb-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Rechercher un article..."
                value={recherche}
                onChange={(e) => setRecherche(e.target.value)}
                className="w-full bg-gray-light/10 border border-gray-light/30 rounded-xl px-4 py-3 pl-11 text-tertiary placeholder:text-gray-medium focus:outline-none focus:border-primary transition-colors"
              />
              <svg
                className="absolute left-3.5 top-3.5 text-gray-medium"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFiltreActif(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  filtreActif === cat
                    ? "bg-primary text-secondary shadow-lg shadow-primary/20"
                    : "bg-gray-light/10 text-tertiary hover:bg-gray-light/30"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-gradient-to-b from-gray-light/5 to-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {articlesFiltres.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <span className="text-6xl mb-6 block">📝</span>
              <p className="text-gray-medium text-lg">
                Aucun article trouvé.
              </p>
              <p className="text-gray-medium text-sm mt-2">
                Essayez avec d&apos;autres mots-clés ou une autre catégorie.
              </p>
            </motion.div>
          ) : (
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence mode="popLayout">
                {articlesFiltres.map((article, index) => (
                  <motion.article
                    key={article.id}
                    layout
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ delay: index * 0.05, duration: 0.5 }}
                    className="group bg-secondary rounded-3xl overflow-hidden border border-gray-light/20 hover:border-transparent hover:shadow-2xl transition-all duration-500"
                  >
                    <Link href={`/blog/${article.id}`} className="block">
                      <div className="relative aspect-[16/10] overflow-hidden bg-gray-light/10">
                        <Image
                          src={article.image}
                          alt={article.titre}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-700"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-tertiary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="absolute top-4 left-4">
                          <span
                            className="text-white text-xs font-semibold px-3 py-1.5 rounded-full"
                            style={{
                              backgroundColor: couleursCategories[article.categorie] || "#E42425",
                            }}
                          >
                            {article.categorie}
                          </span>
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-3 text-xs text-gray-medium mb-3 flex-wrap">
                          <span className="font-medium text-tertiary">{article.auteur}</span>
                          <span>•</span>
                          <span>{formatDate(article.date || article.creeLe)}</span>
                          <span>•</span>
                          <span className="bg-gray-light/10 px-2 py-0.5 rounded-full">{article.tempsLecture}</span>
                        </div>
                        <h2 className="font-heading font-semibold text-lg text-tertiary mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                          {article.titre}
                        </h2>
                        <p className="text-gray-medium text-sm leading-relaxed line-clamp-3">
                          {article.resume}
                        </p>
                        <span className="inline-flex items-center gap-1 text-primary text-sm font-semibold mt-4 group-hover:gap-2 transition-all duration-300">
                          Lire la suite
                          <span>→</span>
                        </span>
                      </div>
                    </Link>
                  </motion.article>
                ))}
              </AnimatePresence>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 relative bg-tertiary rounded-3xl p-10 sm:p-16 text-center overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/5 rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10">
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-secondary mb-4">
                Restez informé
              </h3>
              <p className="text-gray-light max-w-md mx-auto mb-8">
                Inscrivez-vous à notre newsletter pour recevoir nos derniers articles et conseils directement dans votre boîte mail.
              </p>
              <form
                onSubmit={async (e) => {
                  e.preventDefault();
                  const email = (e.currentTarget.elements.namedItem("email") as HTMLInputElement).value;
                  try {
                    const res = await fetch("/api/newsletter", {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify({ email }),
                    });
                    const data = await res.json();
                    if (res.ok) {
                      alert("Merci ! Vous êtes inscrit à la newsletter.");
                      (e.target as HTMLFormElement).reset();
                    } else {
                      alert(data.error || "Une erreur est survenue.");
                    }
                  } catch {
                    alert("Erreur réseau.");
                  }
                }}
                className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              >
                <input
                  type="email"
                  name="email"
                  placeholder="Votre adresse email"
                  required
                  className="flex-1 bg-secondary/10 border border-gray-medium/30 rounded-xl px-4 py-3 text-secondary placeholder:text-gray-medium focus:outline-none focus:border-primary transition-colors"
                />
                <button
                  type="submit"
                  className="bg-primary text-secondary px-6 py-3 rounded-xl font-semibold hover:bg-primary/90 transition-colors whitespace-nowrap"
                >
                  S&apos;inscrire
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}