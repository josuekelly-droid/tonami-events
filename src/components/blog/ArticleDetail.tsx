"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface ArticleDetailProps {
  titre: string;
  categorie: string;
  auteur: string;
  date: string;
  image: string;
  tempsLecture: string;
  children: React.ReactNode;
}

const couleursCategories: Record<string, string> = {
  Audiovisuel: "#E42425",
  Design: "#7C3AED",
  Numérique: "#3B82F6",
  Conseil: "#10B981",
  Location: "#F59E0B",
};

export function ArticleDetail({
  titre,
  categorie,
  auteur,
  date,
  image,
  tempsLecture,
  children,
}: ArticleDetailProps) {
  const formatDate = (dateStr: string) => {
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return "";
    return d.toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  const couleurCat = couleursCategories[categorie] || "#E42425";

  return (
    <>
      <section className="relative bg-tertiary text-secondary pt-24 lg:pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(228,36,37,0.1),transparent_60%)]" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-gray-light/60 text-sm hover:text-secondary transition-colors group"
              >
                <span className="group-hover:-translate-x-1 transition-transform">←</span>
                Retour au blog
              </Link>
              <span
                className="inline-block text-white text-xs font-semibold px-3 py-1.5 rounded-full"
                style={{ backgroundColor: couleurCat }}
              >
                {categorie}
              </span>
            </div>

            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              {titre}
            </h1>

            <div className="flex items-center gap-4 text-sm text-gray-light/60 flex-wrap">
              <div className="flex items-center gap-2">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold"
                  style={{ backgroundColor: couleurCat }}
                >
                  {auteur.charAt(0)}
                </div>
                <span className="text-gray-light">{auteur}</span>
              </div>
              <span className="text-gray-light/30">•</span>
              <span>{formatDate(date)}</span>
              <span className="text-gray-light/30">•</span>
              <span className="bg-secondary/10 px-2.5 py-0.5 rounded-full text-xs">
                {tempsLecture}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="relative rounded-3xl overflow-hidden aspect-video shadow-2xl"
        >
          <Image
            src={image}
            alt={titre}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </motion.div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="prose prose-lg max-w-none text-gray-medium prose-headings:text-tertiary prose-headings:font-heading prose-a:text-primary prose-strong:text-tertiary"
          >
            {children}
          </motion.div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-gradient-to-b from-gray-light/5 to-secondary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-tertiary mb-4"
          >
            Besoin d&apos;un{" "}
            <span className="text-primary">accompagnement</span> ?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-medium max-w-md mx-auto mb-10 text-lg"
          >
            Nos experts sont à votre disposition pour discuter de votre projet.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary text-secondary px-8 py-4 rounded-xl font-semibold hover:bg-primary/90 transition-all duration-300 hover:gap-3"
            >
              Contactez-nous
              <span>→</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}