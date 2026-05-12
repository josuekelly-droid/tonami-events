"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState, type FormEvent } from "react";

interface Temoignage {
  id: number;
  nom: string;
  role: string;
  entreprise: string | null;
  contenu: string;
  note: number;
  publie: boolean;
}

export default function TemoignagesAdmin() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [temoignages, setTemoignages] = useState<Temoignage[]>([]);
  const [loading, setLoading] = useState(true);
  const [edition, setEdition] = useState<Temoignage | null>(null);
  const [showForm, setShowForm] = useState(false);

  const [form, setForm] = useState({
    nom: "",
    role: "",
    entreprise: "",
    contenu: "",
    note: 5,
    publie: true,
  });

  useEffect(() => {
    if (status === "unauthenticated") router.push("/admin/login");
  }, [status, router]);

  useEffect(() => {
    if (session) fetchTemoignages();
  }, [session]);

  const fetchTemoignages = async () => {
    const res = await fetch("/api/admin/temoignages");
    const data = await res.json();
    setTemoignages(data);
    setLoading(false);
  };

  const resetForm = () => {
    setForm({ nom: "", role: "", entreprise: "", contenu: "", note: 5, publie: true });
    setEdition(null);
    setShowForm(false);
  };

  const handleEdit = (t: Temoignage) => {
    setForm({
      nom: t.nom,
      role: t.role,
      entreprise: t.entreprise || "",
      contenu: t.contenu,
      note: t.note,
      publie: t.publie,
    });
    setEdition(t);
    setShowForm(true);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const url = edition
      ? `/api/admin/temoignages/${edition.id}`
      : "/api/admin/temoignages";
    const method = edition ? "PUT" : "POST";

    await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    resetForm();
    fetchTemoignages();
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Supprimer ce témoignage ?")) return;
    await fetch(`/api/admin/temoignages/${id}`, { method: "DELETE" });
    fetchTemoignages();
  };

  if (status === "loading" || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-light/10">
      <header className="bg-secondary border-b border-gray-light/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <button onClick={() => router.push("/admin")} className="text-gray-medium hover:text-tertiary">← Retour</button>
            <h1 className="font-heading font-bold text-xl text-tertiary">Témoignages</h1>
          </div>
          <button
            onClick={() => { resetForm(); setShowForm(!showForm); }}
            className="bg-primary text-secondary px-4 py-2 rounded-lg text-sm font-semibold hover:bg-primary/90"
          >
            {showForm ? "Annuler" : "+ Nouveau"}
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {showForm && (
          <form onSubmit={handleSubmit} className="bg-secondary border border-gray-light/30 rounded-2xl p-6 mb-8 space-y-4">
            <h2 className="font-heading font-semibold text-lg text-tertiary mb-4">
              {edition ? "Modifier" : "Nouveau témoignage"}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input type="text" placeholder="Nom *" required value={form.nom} onChange={(e) => setForm({ ...form, nom: e.target.value })} className="bg-gray-light/10 border border-gray-light/30 rounded-xl px-4 py-2.5 text-tertiary placeholder:text-gray-medium focus:outline-none focus:border-primary" />
              <input type="text" placeholder="Rôle / Poste *" required value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })} className="bg-gray-light/10 border border-gray-light/30 rounded-xl px-4 py-2.5 text-tertiary placeholder:text-gray-medium focus:outline-none focus:border-primary" />
              <input type="text" placeholder="Entreprise" value={form.entreprise} onChange={(e) => setForm({ ...form, entreprise: e.target.value })} className="bg-gray-light/10 border border-gray-light/30 rounded-xl px-4 py-2.5 text-tertiary placeholder:text-gray-medium focus:outline-none focus:border-primary" />
              <select value={form.note} onChange={(e) => setForm({ ...form, note: parseInt(e.target.value) })} className="bg-gray-light/10 border border-gray-light/30 rounded-xl px-4 py-2.5 text-tertiary focus:outline-none focus:border-primary">
                {[5, 4, 3, 2, 1].map((n) => <option key={n} value={n}>{n} ⭐</option>)}
              </select>
            </div>
            <textarea placeholder="Témoignage *" required value={form.contenu} onChange={(e) => setForm({ ...form, contenu: e.target.value })} rows={4} className="w-full bg-gray-light/10 border border-gray-light/30 rounded-xl px-4 py-2.5 text-tertiary placeholder:text-gray-medium focus:outline-none focus:border-primary resize-none" />
            <div className="flex items-center gap-8">
              <label className="flex items-center gap-2 text-sm text-tertiary">
                <input type="checkbox" checked={form.publie} onChange={(e) => setForm({ ...form, publie: e.target.checked })} className="rounded" />
                Publier
              </label>
              <button type="submit" className="bg-primary text-secondary px-6 py-2.5 rounded-lg font-semibold hover:bg-primary/90">
                {edition ? "Modifier" : "Créer"}
              </button>
            </div>
          </form>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {temoignages.length === 0 ? (
            <p className="text-gray-medium col-span-full text-center py-12">Aucun témoignage.</p>
          ) : (
            temoignages.map((t) => (
              <div key={t.id} className="bg-secondary border border-gray-light/30 rounded-2xl p-6 relative">
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: t.note }).map((_, i) => (
                    <span key={i}>⭐</span>
                  ))}
                </div>
                <p className="text-gray-medium text-sm leading-relaxed mb-4">
                  &ldquo;{t.contenu}&rdquo;
                </p>
                <p className="text-tertiary font-semibold text-sm">{t.nom}</p>
                <p className="text-gray-medium text-xs">{t.role}{t.entreprise ? ` — ${t.entreprise}` : ""}</p>
                <div className="flex gap-3 mt-4">
                  <button onClick={() => handleEdit(t)} className="text-primary hover:underline text-xs">Modifier</button>
                  <button onClick={() => handleDelete(t.id)} className="text-red-500 hover:underline text-xs">Supprimer</button>
                </div>
                {!t.publie && <span className="absolute top-3 right-3 bg-yellow-100 text-yellow-700 text-xs px-2 py-0.5 rounded-full">Brouillon</span>}
              </div>
            ))
          )}
        </div>
      </main>
    </div>
  );
}