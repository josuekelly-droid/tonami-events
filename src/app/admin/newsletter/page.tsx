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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 gap-4">
          <div className="flex items-center gap-2 sm:gap-4 min-w-0">
            <button onClick={() => router.push("/admin")} className="text-gray-medium hover:text-tertiary flex-shrink-0">←</button>
            <h1 className="font-heading font-bold text-lg sm:text-xl text-tertiary truncate">Newsletter</h1>
            <span className="text-xs sm:text-sm text-gray-medium flex-shrink-0">{abonnes.length} abonné{abonnes.length !== 1 ? "s" : ""}</span>
          </div>
          {abonnes.length > 0 && (
            <button onClick={handleExport} className="bg-tertiary text-secondary px-3 py-2 rounded-lg text-xs sm:text-sm font-semibold hover:bg-tertiary/80 flex-shrink-0">
              📥 CSV
            </button>
          )}
        </div>
      </header>

      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {abonnes.length === 0 ? (
          <div className="bg-secondary border border-gray-light/30 rounded-2xl p-12 text-center">
            <p className="text-gray-medium">Aucun abonné pour le moment.</p>
          </div>
        ) : (
          <>
            
            <div className="sm:hidden space-y-3">
              {abonnes.map((a) => (
                <div key={a.id} className="bg-secondary border border-gray-light/30 rounded-xl p-4 flex items-center justify-between gap-3">
                  <div className="min-w-0 flex-1">
                    <p className="text-tertiary text-sm font-medium truncate">{a.email}</p>
                    <p className="text-gray-medium text-xs mt-0.5">{formatDate(a.inscritLe)}</p>
                  </div>
                  <button onClick={() => handleDelete(a.id)} className="text-red-500 hover:text-red-700 text-xs font-medium flex-shrink-0">Supprimer</button>
                </div>
              ))}
            </div>

            
            <div className="hidden sm:block bg-secondary border border-gray-light/30 rounded-2xl overflow-hidden">
              <div className="overflow-x-auto">
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
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  );
}