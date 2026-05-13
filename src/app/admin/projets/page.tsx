"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState, type FormEvent } from "react";
import { UploadProjetMedias } from "@/components/admin/UploadProjetImage";

interface Projet {
  id: number;
  titre: string;
  description: string;
  categorie: string;
  image: string;
  video: string | null;
  lien: string | null;
  client: string | null;
  dateRealisation: string | null;
  misEnAvant: boolean;
}

const categories = ["Audiovisuel", "Design", "Numérique", "Conseil", "Location"];

export default function ProjetsAdmin() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [projets, setProjets] = useState<Projet[]>([]);
  const [loading, setLoading] = useState(true);
  const [edition, setEdition] = useState<Projet | null>(null);
  const [showForm, setShowForm] = useState(false);

  const [form, setForm] = useState({
    titre: "",
    description: "",
    categorie: "Audiovisuel",
    image: "",
    video: "",
    lien: "",
    client: "",
    dateRealisation: "",
    misEnAvant: false,
  });

  useEffect(() => {
    if (status === "unauthenticated") router.push("/admin/login");
  }, [status, router]);

  useEffect(() => {
    if (session) fetchProjets();
  }, [session]);

  const fetchProjets = async () => {
    const res = await fetch("/api/admin/projets");
    const data = await res.json();
    setProjets(data);
    setLoading(false);
  };

  const resetForm = () => {
    setForm({ titre: "", description: "", categorie: "Audiovisuel", image: "", video: "", lien:"", client: "", dateRealisation: "", misEnAvant: false });
    setEdition(null);
    setShowForm(false);
  };

  const handleEdit = (projet: Projet) => {
    setForm({
      titre: projet.titre,
      description: projet.description,
      categorie: projet.categorie,
      image: projet.image,
      video: projet.video || "",
      lien: projet.lien|| "",
      client: projet.client || "",
      dateRealisation: projet.dateRealisation || "",
      misEnAvant: projet.misEnAvant,
    });
    setEdition(projet);
    setShowForm(true);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const url = edition
      ? `/api/admin/projets/${edition.id}`
      : "/api/admin/projets";
    const method = edition ? "PUT" : "POST";

    await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    resetForm();
    fetchProjets();
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Supprimer ce projet ?")) return;
    await fetch(`/api/admin/projets/${id}`, { method: "DELETE" });
    fetchProjets();
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
            <h1 className="font-heading font-bold text-xl text-tertiary">Projets</h1>
          </div>
          <button
            onClick={() => { resetForm(); setShowForm(!showForm); }}
            className="bg-primary text-secondary px-4 py-2 rounded-lg text-sm font-semibold hover:bg-primary/90"
          >
            {showForm ? "Annuler" : "+ Nouveau projet"}
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {showForm && (
          <form onSubmit={handleSubmit} className="bg-secondary border border-gray-light/30 rounded-2xl p-6 mb-8 space-y-4">
            <h2 className="font-heading font-semibold text-lg text-tertiary mb-4">
              {edition ? "Modifier le projet" : "Nouveau projet"}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input type="text" placeholder="Titre *" required value={form.titre} onChange={(e) => setForm({ ...form, titre: e.target.value })} className="bg-gray-light/10 border border-gray-light/30 rounded-xl px-4 py-2.5 text-tertiary placeholder:text-gray-medium focus:outline-none focus:border-primary" />
              <select value={form.categorie} onChange={(e) => setForm({ ...form, categorie: e.target.value })} className="bg-gray-light/10 border border-gray-light/30 rounded-xl px-4 py-2.5 text-tertiary focus:outline-none focus:border-primary">
                {categories.map((c) => <option key={c} value={c}>{c}</option>)}
              </select>
              <input type="text" placeholder="Client (optionnel)" value={form.client} onChange={(e) => setForm({ ...form, client: e.target.value })} className="bg-gray-light/10 border border-gray-light/30 rounded-xl px-4 py-2.5 text-tertiary placeholder:text-gray-medium focus:outline-none focus:border-primary" />
              <input type="text" placeholder="Date de réalisation (optionnel)" value={form.dateRealisation} onChange={(e) => setForm({ ...form, dateRealisation: e.target.value })} className="bg-gray-light/10 border border-gray-light/30 rounded-xl px-4 py-2.5 text-tertiary placeholder:text-gray-medium focus:outline-none focus:border-primary" />
              <input type="url" placeholder="Lien du projet (optionnel)" value={form.lien} onChange={(e) => setForm({ ...form, lien: e.target.value })} className="bg-gray-light/10 border border-gray-light/30 rounded-xl px-4 py-2.5 text-tertiary placeholder:text-gray-medium focus:outline-none focus:border-primary" />
            </div>

            
            <UploadProjetMedias
              image={form.image}
              video={form.video}
              onImageChange={(url) => setForm({ ...form, image: url })}
              onVideoChange={(url) => setForm({ ...form, video: url })}
            />

            <textarea placeholder="Description *" required value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} rows={3} className="w-full bg-gray-light/10 border border-gray-light/30 rounded-xl px-4 py-2.5 text-tertiary placeholder:text-gray-medium focus:outline-none focus:border-primary resize-none" />
            <label className="flex items-center gap-2 text-sm text-tertiary">
              <input type="checkbox" checked={form.misEnAvant} onChange={(e) => setForm({ ...form, misEnAvant: e.target.checked })} className="rounded" />
              Mettre en avant
            </label>
            <button type="submit" className="bg-primary text-secondary px-6 py-2.5 rounded-lg font-semibold hover:bg-primary/90">
              {edition ? "Modifier" : "Créer"}
            </button>
          </form>
        )}

        
        <div className="bg-secondary border border-gray-light/30 rounded-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-light/10 text-left">
                <tr>
                  <th className="px-6 py-4 font-semibold text-tertiary">Image</th>
                  <th className="px-6 py-4 font-semibold text-tertiary">Titre</th>
                  <th className="px-6 py-4 font-semibold text-tertiary">Catégorie</th>
                  <th className="px-6 py-4 font-semibold text-tertiary">En avant</th>
                  <th className="px-6 py-4 font-semibold text-tertiary">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-light/20">
                {projets.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="px-6 py-12 text-center text-gray-medium">
                      Aucun projet. Créez votre premier projet !
                    </td>
                  </tr>
                ) : (
                  projets.map((p) => (
                    <tr key={p.id} className="hover:bg-gray-light/5">
                      <td className="px-6 py-4">
                        <div className="w-16 h-10 rounded-lg overflow-hidden bg-gray-light/20">
                          <img src={p.image} alt={p.titre} className="w-full h-full object-cover" />
                        </div>
                      </td>
                      <td className="px-6 py-4 font-medium text-tertiary">{p.titre}</td>
                      <td className="px-6 py-4 text-gray-medium">{p.categorie}</td>
                      <td className="px-6 py-4">{p.misEnAvant ? "⭐" : "—"}</td>
                      <td className="px-6 py-4">
                        <div className="flex gap-2">
                          <button onClick={() => handleEdit(p)} className="text-primary hover:underline text-xs">Modifier</button>
                          <button onClick={() => handleDelete(p.id)} className="text-red-500 hover:underline text-xs">Supprimer</button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}