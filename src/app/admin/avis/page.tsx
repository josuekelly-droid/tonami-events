"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface Avis {
  id: number;
  nom: string;
  email: string;
  entreprise: string | null;
  note: number;
  contenu: string;
  statut: "en_attente" | "approuve" | "refuse";
  creeLe: string;
}

export default function AvisAdmin() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [avis, setAvis] = useState<Avis[]>([]);
  const [loading, setLoading] = useState(true);
  const [filtre, setFiltre] = useState<"tous" | "en_attente" | "approuve" | "refuse">("tous");

  useEffect(() => {
    if (status === "unauthenticated") router.push("/admin/login");
  }, [status, router]);

  useEffect(() => {
    if (session) fetchAvis();
  }, [session]);

  const fetchAvis = async () => {
    const res = await fetch("/api/admin/avis");
    const data = await res.json();
    setAvis(data);
    setLoading(false);
  };

  const changeStatut = async (id: number, statut: string) => {
    await fetch(`/api/admin/avis/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ statut }),
    });
    fetchAvis();
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Supprimer cet avis ?")) return;
    await fetch(`/api/admin/avis/${id}`, { method: "DELETE" });
    fetchAvis();
  };

  const convertirEnTemoignage = async (id: number) => {
  if (!confirm("Convertir cet avis en témoignage ?")) return;
  await fetch(`/api/admin/avis/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ convertir: true }),
  });
  fetchAvis();
};

  const avisFiltres = filtre === "tous" ? avis : avis.filter((a) => a.statut === filtre);

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
            <h1 className="font-heading font-bold text-xl text-tertiary">Avis clients</h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        <div className="flex gap-3 mb-8">
          {(["tous", "en_attente", "approuve", "refuse"] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFiltre(f)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                filtre === f ? "bg-primary text-secondary" : "bg-secondary text-tertiary border border-gray-light/30 hover:bg-gray-light/10"
              }`}
            >
              {f === "tous" ? "Tous" : f === "en_attente" ? "En attente" : f === "approuve" ? "Approuvés" : "Refusés"}
              {f !== "tous" && ` (${avis.filter((a) => a.statut === f).length})`}
            </button>
          ))}
        </div>

        {avisFiltres.length === 0 ? (
          <p className="text-gray-medium text-center py-12">Aucun avis.</p>
        ) : (
          <div className="space-y-4">
            {avisFiltres.map((a) => (
              <div key={a.id} className="bg-secondary border border-gray-light/30 rounded-2xl p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="font-semibold text-tertiary">{a.nom}</p>
                    <p className="text-gray-medium text-xs">{a.email}{a.entreprise ? ` — ${a.entreprise}` : ""}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex">{Array.from({ length: a.note }).map((_, i) => (<span key={i}>⭐</span>))}</div>
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                      a.statut === "en_attente" ? "bg-yellow-50 text-yellow-700" : a.statut === "approuve" ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"
                    }`}>
                      {a.statut === "en_attente" ? "En attente" : a.statut === "approuve" ? "Approuvé" : "Refusé"}
                    </span>
                  </div>
                </div>
                <p className="text-gray-medium text-sm leading-relaxed mb-4">{a.contenu}</p>
                <div className="flex gap-2">
                  {a.statut !== "approuve" && (
                    <button onClick={() => changeStatut(a.id, "approuve")} className="bg-green-500 text-white px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-green-600">Approuver</button>
                  )}
                  {a.statut !== "refuse" && (
                    <button onClick={() => changeStatut(a.id, "refuse")} className="bg-yellow-500 text-white px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-yellow-600">Refuser</button>
                  )}
                  {a.statut !== "en_attente" && (
                    <button onClick={() => changeStatut(a.id, "en_attente")} className="bg-gray-500 text-white px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-gray-600">Remettre en attente</button>
                  )}
                  <button onClick={() => handleDelete(a.id)} className="bg-red-500 text-white px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-red-600">Supprimer</button>
                  <button onClick={() => convertirEnTemoignage(a.id)} className="bg-blue-500 text-white px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-blue-600">Convertir</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}