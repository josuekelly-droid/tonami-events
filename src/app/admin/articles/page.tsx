"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState, type FormEvent } from "react";
import { UploadProjetMedias } from "@/components/admin/UploadProjetImage";

interface Article {
  id: number;
  titre: string;
  resume: string;
  contenu: string;
  categorie: string;
  auteur: string;
  image: string;
  tempsLecture: string;
  publie: boolean;
}

const categories = ["Audiovisuel", "Design", "Numérique", "Conseil", "Location"];

export default function ArticlesAdmin() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [edition, setEdition] = useState<Article | null>(null);
  const [showForm, setShowForm] = useState(false);

  const [form, setForm] = useState({
    titre: "",
    resume: "",
    contenu: "",
    categorie: "Conseil",
    auteur: "",
    image: "",
    tempsLecture: "5 min",
    publie: false,
  });

  useEffect(() => {
    if (status === "unauthenticated") router.push("/admin/login");
  }, [status, router]);

  useEffect(() => {
    if (session) fetchArticles();
  }, [session]);

  const fetchArticles = async () => {
    const res = await fetch("/api/admin/articles");
    const data = await res.json();
    setArticles(data);
    setLoading(false);
  };

  const resetForm = () => {
    setForm({ titre: "", resume: "", contenu: "", categorie: "Conseil", auteur: "", image: "", tempsLecture: "5 min", publie: false });
    setEdition(null);
    setShowForm(false);
  };

  const handleEdit = (article: Article) => {
    setForm({
      titre: article.titre,
      resume: article.resume,
      contenu: article.contenu,
      categorie: article.categorie,
      auteur: article.auteur,
      image: article.image,
      tempsLecture: article.tempsLecture,
      publie: article.publie,
    });
    setEdition(article);
    setShowForm(true);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const url = edition ? `/api/admin/articles/${edition.id}` : "/api/admin/articles";
    const method = edition ? "PUT" : "POST";

    await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    resetForm();
    fetchArticles();
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Supprimer cet article ?")) return;
    await fetch(`/api/admin/articles/${id}`, { method: "DELETE" });
    fetchArticles();
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
            <h1 className="font-heading font-bold text-xl text-tertiary">Articles</h1>
          </div>
          <button
            onClick={() => { resetForm(); setShowForm(!showForm); }}
            className="bg-primary text-secondary px-4 py-2 rounded-lg text-sm font-semibold hover:bg-primary/90"
          >
            {showForm ? "Annuler" : "+ Nouvel article"}
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {showForm && (
          <form onSubmit={handleSubmit} className="bg-secondary border border-gray-light/30 rounded-2xl p-6 mb-8 space-y-4">
            <h2 className="font-heading font-semibold text-lg text-tertiary mb-4">
              {edition ? "Modifier l'article" : "Nouvel article"}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input type="text" placeholder="Titre *" required value={form.titre} onChange={(e) => setForm({ ...form, titre: e.target.value })} className="bg-gray-light/10 border border-gray-light/30 rounded-xl px-4 py-2.5 text-tertiary placeholder:text-gray-medium focus:outline-none focus:border-primary" />
              <select value={form.categorie} onChange={(e) => setForm({ ...form, categorie: e.target.value })} className="bg-gray-light/10 border border-gray-light/30 rounded-xl px-4 py-2.5 text-tertiary focus:outline-none focus:border-primary">
                {categories.map((c) => <option key={c} value={c}>{c}</option>)}
              </select>
              <input type="text" placeholder="Auteur *" required value={form.auteur} onChange={(e) => setForm({ ...form, auteur: e.target.value })} className="bg-gray-light/10 border border-gray-light/30 rounded-xl px-4 py-2.5 text-tertiary placeholder:text-gray-medium focus:outline-none focus:border-primary" />
              <input type="text" placeholder="Temps de lecture (ex: 5 min)" value={form.tempsLecture} onChange={(e) => setForm({ ...form, tempsLecture: e.target.value })} className="bg-gray-light/10 border border-gray-light/30 rounded-xl px-4 py-2.5 text-tertiary placeholder:text-gray-medium focus:outline-none focus:border-primary" />
            </div>
            <input type="text" placeholder="Résumé *" required value={form.resume} onChange={(e) => setForm({ ...form, resume: e.target.value })} className="w-full bg-gray-light/10 border border-gray-light/30 rounded-xl px-4 py-2.5 text-tertiary placeholder:text-gray-medium focus:outline-none focus:border-primary" />
            <textarea placeholder="Contenu *" required value={form.contenu} onChange={(e) => setForm({ ...form, contenu: e.target.value })} rows={8} className="w-full bg-gray-light/10 border border-gray-light/30 rounded-xl px-4 py-2.5 text-tertiary placeholder:text-gray-medium focus:outline-none focus:border-primary resize-none" />

            <UploadProjetMedias
              image={form.image}
              video=""
              onImageChange={(url) => setForm({ ...form, image: url })}
              onVideoChange={() => {}}
            />

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

        <div className="bg-secondary border border-gray-light/30 rounded-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-light/10 text-left">
                <tr>
                  <th className="px-6 py-4 font-semibold text-tertiary">Image</th>
                  <th className="px-6 py-4 font-semibold text-tertiary">Titre</th>
                  <th className="px-6 py-4 font-semibold text-tertiary">Auteur</th>
                  <th className="px-6 py-4 font-semibold text-tertiary">Publié</th>
                  <th className="px-6 py-4 font-semibold text-tertiary">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-light/20">
                {articles.length === 0 ? (
                  <tr><td colSpan={5} className="px-6 py-12 text-center text-gray-medium">Aucun article.</td></tr>
                ) : (
                  articles.map((a) => (
                    <tr key={a.id} className="hover:bg-gray-light/5">
                      <td className="px-6 py-4">
                        <div className="w-16 h-10 rounded-lg overflow-hidden bg-gray-light/20">
                          <img src={a.image} alt={a.titre} className="w-full h-full object-cover" />
                        </div>
                      </td>
                      <td className="px-6 py-4 font-medium text-tertiary max-w-xs truncate">{a.titre}</td>
                      <td className="px-6 py-4 text-gray-medium">{a.auteur}</td>
                      <td className="px-6 py-4">{a.publie ? "✅" : "📝"}</td>
                      <td className="px-6 py-4">
                        <div className="flex gap-2">
                          <button onClick={() => handleEdit(a)} className="text-primary hover:underline text-xs">Modifier</button>
                          <button onClick={() => handleDelete(a.id)} className="text-red-500 hover:underline text-xs">Supprimer</button>
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