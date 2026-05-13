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

export default function Testimonials() {
  const [temoignages, setTemoignages] = useState<Avis[]>([]);

  useEffect(() => {
    fetch("/api/public/temoignages")
      .then((res) => res.json())
      .then((data) => setTemoignages(data));
  }, []);

  if (temoignages.length === 0) return null;

  return (
    <section className="bg-tertiary py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-semibold text-sm uppercase tracking-wider"
          >
            Témoignages
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-3xl sm:text-4xl font-bold text-secondary mt-3 mb-4"
          >
            Ce que nos clients disent
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {temoignages.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-secondary/5 border border-gray-medium/20 rounded-2xl p-8"
            >
              <div className="flex gap-1 mb-3">
                {Array.from({ length: item.note }).map((_, i) => (
                  <span key={i}>⭐</span>
                ))}
              </div>
              <p className="text-gray-light leading-relaxed mb-6 text-sm">
                &ldquo;{item.contenu}&rdquo;
              </p>
              <div>
                <p className="text-secondary font-semibold text-sm">{item.nom}</p>
                <p className="text-gray-medium text-xs mt-1">
                  {item.role}{item.entreprise ? ` — ${item.entreprise}` : ""}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}