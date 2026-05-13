"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function AvisPage() {
  const [form, setForm] = useState({ nom: "", email: "", entreprise: "", note: 5, contenu: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/public/avis", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("success");
        setMessage(data.message);
        setForm({ nom: "", email: "", entreprise: "", note: 5, contenu: "" });
      } else {
        setStatus("error");
        setMessage(data.error || "Erreur.");
      }
    } catch {
      setStatus("error");
      setMessage("Erreur réseau.");
    }
  };

  return (
    <>
      <section className="bg-tertiary text-secondary py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-primary font-semibold text-sm uppercase tracking-wider">
            Votre avis compte
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-heading text-4xl sm:text-5xl font-bold mt-4 mb-6">
            Donnez votre avis
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-gray-light max-w-2xl mx-auto text-lg">
            Partagez votre expérience avec Tonami Events. Votre avis sera examiné avant publication.
          </motion.p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          {status === "success" && (
            <div className="bg-green-50 border border-green-200 text-green-700 rounded-xl p-4 mb-6 text-sm">{message}</div>
          )}
          {status === "error" && (
            <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl p-4 mb-6 text-sm">{message}</div>
          )}

          <form onSubmit={handleSubmit} className="bg-secondary border border-gray-light/30 rounded-2xl p-8 space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-tertiary mb-1.5">Nom *</label>
                <input type="text" required value={form.nom} onChange={(e) => setForm({ ...form, nom: e.target.value })} className="w-full bg-gray-light/10 border border-gray-light/30 rounded-xl px-4 py-2.5 text-tertiary placeholder:text-gray-medium focus:outline-none focus:border-primary" placeholder="Votre nom" />
              </div>
              <div>
                <label className="block text-sm font-medium text-tertiary mb-1.5">Email *</label>
                <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full bg-gray-light/10 border border-gray-light/30 rounded-xl px-4 py-2.5 text-tertiary placeholder:text-gray-medium focus:outline-none focus:border-primary" placeholder="vous@email.com" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-tertiary mb-1.5">Entreprise</label>
              <input type="text" value={form.entreprise} onChange={(e) => setForm({ ...form, entreprise: e.target.value })} className="w-full bg-gray-light/10 border border-gray-light/30 rounded-xl px-4 py-2.5 text-tertiary placeholder:text-gray-medium focus:outline-none focus:border-primary" placeholder="Votre entreprise (optionnel)" />
            </div>
            <div>
              <label className="block text-sm font-medium text-tertiary mb-1.5">Note *</label>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((n) => (
                  <button type="button" key={n} onClick={() => setForm({ ...form, note: n })} className={`text-2xl ${n <= form.note ? "text-yellow-400" : "text-gray-light"}`}>★</button>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-tertiary mb-1.5">Votre avis *</label>
              <textarea required value={form.contenu} onChange={(e) => setForm({ ...form, contenu: e.target.value })} rows={5} className="w-full bg-gray-light/10 border border-gray-light/30 rounded-xl px-4 py-2.5 text-tertiary placeholder:text-gray-medium focus:outline-none focus:border-primary resize-none" placeholder="Partagez votre expérience..." />
            </div>
            <button type="submit" disabled={status === "loading"} className="w-full bg-primary text-secondary px-8 py-3.5 rounded-xl font-semibold hover:bg-primary/90 disabled:opacity-50">
              {status === "loading" ? "Envoi..." : "Soumettre mon avis"}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}