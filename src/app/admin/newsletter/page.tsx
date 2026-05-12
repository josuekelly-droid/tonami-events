"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface Abonne {
  id: number;
  email: string;
  inscritLe: string;
}

export default function NewsletterAdmin() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [abonnes, setAbonnes] = useState<Abonne[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (status === "unauthenticated") router.push("/admin/login");
  }, [status, router]);

  useEffect(() => {
    if (session) fetchAbonnes();
  }, [session]);

  const fetchAbonnes = async () => {
    const res = await fetch("/api/admin/newsletter");
    const data = await res.json();
    setAbonnes(data);
    setLoading(false);
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Supprimer cet abonné ?")) return;
    await fetch("/api/admin/newsletter", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    fetchAbonnes();
  };

  const handleExport = () => {
    const csv = abonnes.map((a) => a.email).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "newsletter-tonami.csv";
    link.click();
    URL.revokeObjectURL(url);
  };

  const formatDate = (d: string) => new Date(d).toLocaleDateString("fr-FR", {
    day: "numeric", month: "long", year: "numeric",
  });

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
            <h1 className="font-heading font-bold text-xl text-tertiary">Newsletter</h1>
            <span className="text-sm text-gray-medium">{abonnes.length} abonnés</span>
          </div>
          {abonnes.length > 0 && (
            <button onClick={handleExport} className="bg-tertiary text-secondary px-4 py-2 rounded-lg text-sm font-semibold hover:bg-tertiary/80">
              📥 Exporter CSV
            </button>
          )}
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-secondary border border-gray-light/30 rounded-2xl overflow-hidden">
          {abonnes.length === 0 ? (
            <p className="text-gray-medium text-center py-12">Aucun abonné pour le moment.</p>
          ) : (
            <table className="w-full text-sm">
              <thead className="bg-gray-light/10 text-left">
                <tr>
                  <th className="px-6 py-4 font-semibold text-tertiary">Email</th>
                  <th className="px-6 py-4 font-semibold text-tertiary">Inscription</th>
                  <th className="px-6 py-4 font-semibold text-tertiary w-24">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-light/20">
                {abonnes.map((a) => (
                  <tr key={a.id} className="hover:bg-gray-light/5">
                    <td className="px-6 py-4 text-tertiary">{a.email}</td>
                    <td className="px-6 py-4 text-gray-medium">{formatDate(a.inscritLe)}</td>
                    <td className="px-6 py-4">
                      <button onClick={() => handleDelete(a.id)} className="text-red-500 hover:underline text-xs">Supprimer</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </main>
    </div>
  );
}