"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface Contact {
  id: number;
  nom: string;
  email: string;
  telephone: string | null;
  service: string;
  message: string;
  traite: boolean;
  creeLe: string;
}

export default function ContactsAdmin() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<Contact | null>(null);

  useEffect(() => {
    if (status === "unauthenticated") router.push("/admin/login");
  }, [status, router]);

  useEffect(() => {
    if (session) fetchContacts();
  }, [session]);

  const fetchContacts = async () => {
    const res = await fetch("/api/admin/contacts");
    const data = await res.json();
    setContacts(data);
    setLoading(false);
  };

  const toggleTraite = async (id: number) => {
    await fetch(`/api/admin/contacts/${id}`, { method: "PATCH" });
    fetchContacts();
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Supprimer ce message ?")) return;
    await fetch(`/api/admin/contacts/${id}`, { method: "DELETE" });
    setSelected(null);
    fetchContacts();
  };

  const formatDate = (d: string) => new Date(d).toLocaleDateString("fr-FR", {
    day: "numeric", month: "long", year: "numeric", hour: "2-digit", minute: "2-digit",
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center h-16">
          <div className="flex items-center gap-4">
            <button onClick={() => router.push("/admin")} className="text-gray-medium hover:text-tertiary">← Retour</button>
            <h1 className="font-heading font-bold text-xl text-tertiary">Contacts</h1>
            <span className="text-sm text-gray-medium">{contacts.filter(c => !c.traite).length} non traités</span>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="lg:col-span-1 bg-secondary border border-gray-light/30 rounded-2xl overflow-hidden max-h-[70vh] overflow-y-auto">
            {contacts.length === 0 ? (
              <p className="text-gray-medium text-center py-12 text-sm">Aucun message.</p>
            ) : (
              contacts.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setSelected(c)}
                  className={`w-full text-left px-5 py-4 border-b border-gray-light/20 hover:bg-gray-light/5 transition-colors ${
                    selected?.id === c.id ? "bg-gray-light/10 border-l-2 border-l-primary" : ""
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-tertiary text-sm truncate">{c.nom}</span>
                    {!c.traite && <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />}
                  </div>
                  <p className="text-gray-medium text-xs mt-1 truncate">{c.service}</p>
                  <p className="text-gray-medium text-xs">{formatDate(c.creeLe)}</p>
                </button>
              ))
            )}
          </div>

          
          <div className="lg:col-span-2">
            {selected ? (
              <div className="bg-secondary border border-gray-light/30 rounded-2xl p-6 sm:p-8 overflow-hidden">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-6">
                  <div className="min-w-0 flex-1">
                    <h2 className="font-heading text-xl font-bold text-tertiary truncate">{selected.nom}</h2>
                    <p className="text-gray-medium text-sm truncate">{selected.service}</p>
                  </div>
                  <span className={`text-xs font-medium px-3 py-1 rounded-full w-fit flex-shrink-0 ${
                    selected.traite ? "bg-green-50 text-green-700" : "bg-yellow-50 text-yellow-700"
                  }`}>
                    {selected.traite ? "Traité" : "Non traité"}
                  </span>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm min-w-0">
                    <span className="text-gray-medium flex-shrink-0">📧</span>
                    <a href={`mailto:${selected.email}`} className="text-primary hover:underline truncate">{selected.email}</a>
                  </div>
                  {selected.telephone && (
                    <div className="flex items-center gap-2 text-sm min-w-0">
                      <span className="text-gray-medium flex-shrink-0">📞</span>
                      <a href={`tel:${selected.telephone}`} className="text-primary hover:underline truncate">{selected.telephone}</a>
                    </div>
                  )}
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-gray-medium flex-shrink-0">🕐</span>
                    <span className="text-gray-medium">{formatDate(selected.creeLe)}</span>
                  </div>
                </div>

                <div className="bg-gray-light/10 rounded-xl p-5 mb-8 overflow-hidden">
                  <p className="text-tertiary text-sm leading-relaxed whitespace-pre-wrap break-words overflow-hidden">
                    {selected.message}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => toggleTraite(selected.id)}
                    className="bg-primary text-secondary px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-primary/90 text-center"
                  >
                    {selected.traite ? "Marquer non traité" : "Marquer traité"}
                  </button>
                  <button
                    onClick={() => handleDelete(selected.id)}
                    className="border border-red-300 text-red-600 px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-red-50 text-center"
                  >
                    Supprimer
                  </button>
                </div>
              </div>
            ) : (
              <div className="bg-secondary border border-gray-light/30 rounded-2xl p-12 text-center">
                <span className="text-5xl mb-4 block">📬</span>
                <p className="text-gray-medium">Sélectionnez un message dans la liste.</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}