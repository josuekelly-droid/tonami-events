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
    return d.toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <>
      
      <section className="bg-tertiary text-secondary pt-24 lg:pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex flex-wrap items-center gap-3 mb-6">
  <Link
    href="/blog"
    className="inline-flex items-center gap-2 text-gray-light text-sm hover:text-secondary transition-colors"
  >
    <span>←</span> Retour au blog
  </Link>
  <span className="inline-block bg-primary text-secondary text-xs font-semibold px-3 py-1 rounded-full">
    {categorie}
  </span>
</div>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              {titre}
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-light">
              <span>{auteur}</span>
              <span>•</span>
              <span>{formatDate(date)}</span>
              <span>•</span>
              <span>{tempsLecture} de lecture</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Image */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="relative rounded-2xl overflow-hidden aspect-video"
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

      {/* Contenu */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="prose prose-lg max-w-none text-gray-medium prose-headings:text-tertiary prose-headings:font-heading prose-a:text-primary prose-strong:text-tertiary"
          >
            {children}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-light/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-2xl font-bold text-tertiary mb-4">
            Besoin d&apos;un accompagnement ?
          </h2>
          <p className="text-gray-medium mb-8">
            Nos experts sont à votre disposition pour discuter de votre projet.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-primary text-secondary px-8 py-3.5 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Contactez-nous
            <span>→</span>
          </Link>
        </div>
      </section>
    </>
  );
}