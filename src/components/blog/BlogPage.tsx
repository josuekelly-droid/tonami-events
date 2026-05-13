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
      
      <section className="bg-tertiary text-secondary py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-primary font-semibold text-sm uppercase tracking-wider"
          >
            Blog
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-heading text-4xl sm:text-5xl font-bold mt-4 mb-6"
          >
            Actualités & Conseils
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-light max-w-2xl mx-auto text-lg"
          >
            Découvrez nos articles sur la communication, le design, le digital
            et bien plus. Restez informé des dernières tendances.
          </motion.p>
        </div>
      </section>

      
      <section className="py-12 border-b border-gray-light/20">
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
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  filtreActif === cat
                    ? "bg-primary text-secondary"
                    : "bg-gray-light/10 text-tertiary hover:bg-gray-light/30"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {articlesFiltres.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <span className="text-6xl mb-4 block">📝</span>
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
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ delay: index * 0.05, duration: 0.4 }}
                    className="group bg-secondary border border-gray-light/30 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
                  >
                    <Link
                      href={`/blog/${article.id}`}
                      className="block"
                    >
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <Image
                          src={article.image}
                          alt={article.titre}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="bg-primary text-secondary text-xs font-semibold px-3 py-1 rounded-full">
                            {article.categorie}
                          </span>
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-4 text-xs text-gray-medium mb-3">
                          <span>{article.auteur}</span>
                          <span>•</span>
                          <span>{formatDate(article.date || article.creeLe)}</span>
                          <span>•</span>
                          <span>{article.tempsLecture} de lecture</span>
                        </div>
                        <h2 className="font-heading font-semibold text-lg text-tertiary mb-2 group-hover:text-primary transition-colors line-clamp-2">
                          {article.titre}
                        </h2>
                        <p className="text-gray-medium text-sm leading-relaxed line-clamp-3">
                          {article.resume}
                        </p>
                        <span className="inline-flex items-center gap-1 text-primary text-sm font-semibold mt-4 group-hover:gap-2 transition-all">
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
            className="mt-20 bg-tertiary rounded-3xl p-10 sm:p-16 text-center"
          >
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-secondary mb-4">
              Restez informé
            </h3>
            <p className="text-gray-light max-w-md mx-auto mb-8">
              Inscrivez-vous à notre newsletter pour recevoir nos derniers
              articles et conseils directement dans votre boîte mail.
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
          </motion.div>
        </div>
      </section>
    </>
  );
}