"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Avis {
  id: number;
  nom: string;
  role: string;
  entreprise: string | null;
  contenu: string;
  note: number;
}

function StarIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#E42425" stroke="#E42425" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function QuoteIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="#E42425" opacity="0.15">
      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
    </svg>
  );
}

export default function Testimonials() {
  const [temoignages, setTemoignages] = useState<Avis[]>([]);

  useEffect(() => {
    fetch("/api/public/temoignages")
      .then((res) => res.json())
      .then((data) => setTemoignages(data));
  }, []);

  if (temoignages.length === 0) return null;

  return (
    <section className="relative bg-tertiary py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(228,36,37,0.08),transparent_60%)]" />
      <div className="absolute top-10 left-10 w-72 h-72 bg-primary/3 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 lg:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-secondary/10 text-secondary text-sm font-medium px-4 py-2 rounded-full backdrop-blur-sm border border-secondary/10"
          >
            <span className="w-2 h-2 bg-primary rounded-full" />
            Témoignages
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary mt-6 mb-5"
          >
            Ce que nos{" "}
            <span className="text-primary">clients</span> disent
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-light/50 max-w-xl mx-auto"
          >
            La satisfaction de nos clients est notre plus grande fierté.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {temoignages.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="group relative bg-secondary/5 backdrop-blur-sm border border-secondary/10 rounded-3xl p-8 hover:bg-secondary/10 hover:border-primary/20 transition-all duration-500"
            >
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <QuoteIcon />
              </div>

              <div className="flex gap-1 mb-5">
                {Array.from({ length: item.note }).map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </div>

              <p className="text-gray-light/80 leading-relaxed mb-8 text-sm relative z-10">
                &ldquo;{item.contenu}&rdquo;
              </p>

              <div className="flex items-center gap-4 pt-6 border-t border-secondary/10">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-heading font-bold text-lg">
                  {item.nom.charAt(0)}
                </div>
                <div>
                  <p className="text-secondary font-semibold text-sm">
                    {item.nom}
                  </p>
                  <p className="text-gray-medium text-xs">
                    {item.role}
                    {item.entreprise ? ` — ${item.entreprise}` : ""}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}