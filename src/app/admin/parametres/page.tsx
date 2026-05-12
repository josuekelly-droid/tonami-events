"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState, type FormEvent } from "react";

export default function ParametresAdmin() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);
  const [maintenance, setMaintenance] = useState(false);

  const [form, setForm] = useState({
    nom: "",
    email: "",
    motDePasseActuel: "",
    nouveauMotDePasse: "",
    confirmerMotDePasse: "",
  });

  useEffect(() => {
    if (status === "unauthenticated") router.push("/admin/login");
  }, [status, router]);

  useEffect(() => {
    if (session) {
      fetchProfil();
      fetchMaintenanceStatus();
    }
  }, [session]);

  const fetchProfil = async () => {
    const res = await fetch("/api/admin/profil");
    const data = await res.json();
    setForm((prev) => ({ ...prev, nom: data.nom, email: data.email }));
    setLoading(false);
  };

  const fetchMaintenanceStatus = async () => {
    const res = await fetch("/api/admin/maintenance");
    const data = await res.json();
    setMaintenance(data.maintenance);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setMessage(null);

    if (form.nouveauMotDePasse && form.nouveauMotDePasse !== form.confirmerMotDePasse) {
      setMessage({ type: "error", text: "Les mots de passe ne correspondent pas." });
      return;
    }

    if (form.nouveauMotDePasse && form.nouveauMotDePasse.length < 6) {
      setMessage({ type: "error", text: "Le mot de passe doit contenir au moins 6 caractères." });
      return;
    }

    const res = await fetch("/api/admin/profil", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nom: form.nom,
        email: form.email,
        motDePasseActuel: form.motDePasseActuel || undefined,
        nouveauMotDePasse: form.nouveauMotDePasse || undefined,
      }),
    });

    const data = await res.json();

    if (res.ok) {
      setMessage({ type: "success", text: data.message });
      setForm((prev) => ({ ...prev, motDePasseActuel: "", nouveauMotDePasse: "", confirmerMotDePasse: "" }));
    } else {
      setMessage({ type: "error", text: data.error });
    }
  };

  const toggleMaintenance = async () => {
    const res = await fetch("/api/admin/maintenance", { method: "POST" });
    const data = await res.json();
    setMaintenance(data.maintenance);
    setMessage({
      type: "success",
      text: data.maintenance
        ? "Mode maintenance activé. Le site public affiche une page de maintenance."
        : "Mode maintenance désactivé. Le site est à nouveau accessible.",
    });
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center h-16">
          <div className="flex items-center gap-4">
            <button onClick={() => router.push("/admin")} className="text-gray-medium hover:text-tertiary">← Retour</button>
            <h1 className="font-heading font-bold text-xl text-tertiary">Paramètres</h1>
          </div>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        
        {message && (
          <div className={`rounded-xl p-4 text-sm ${
            message.type === "success" ? "bg-green-50 border border-green-200 text-green-700" : "bg-red-50 border border-red-200 text-red-700"
          }`}>
            {message.text}
          </div>
        )}

        
        <div className="bg-secondary border border-gray-light/30 rounded-2xl p-6 sm:p-8">
          <h2 className="font-heading text-lg font-semibold text-tertiary mb-6">Profil administrateur</h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-tertiary mb-1.5">Nom</label>
              <input
                type="text"
                required
                value={form.nom}
                onChange={(e) => setForm({ ...form, nom: e.target.value })}
                className="w-full bg-gray-light/10 border border-gray-light/30 rounded-xl px-4 py-2.5 text-tertiary focus:outline-none focus:border-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-tertiary mb-1.5">Email</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-gray-light/10 border border-gray-light/30 rounded-xl px-4 py-2.5 text-tertiary focus:outline-none focus:border-primary"
              />
            </div>

            <hr className="border-gray-light/20" />
            <p className="text-sm text-gray-medium">Laissez vides pour ne pas changer le mot de passe.</p>

            <div>
              <label className="block text-sm font-medium text-tertiary mb-1.5">Mot de passe actuel</label>
              <input
                type="password"
                value={form.motDePasseActuel}
                onChange={(e) => setForm({ ...form, motDePasseActuel: e.target.value })}
                className="w-full bg-gray-light/10 border border-gray-light/30 rounded-xl px-4 py-2.5 text-tertiary focus:outline-none focus:border-primary"
                placeholder="••••••••"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-tertiary mb-1.5">Nouveau mot de passe</label>
              <input
                type="password"
                value={form.nouveauMotDePasse}
                onChange={(e) => setForm({ ...form, nouveauMotDePasse: e.target.value })}
                className="w-full bg-gray-light/10 border border-gray-light/30 rounded-xl px-4 py-2.5 text-tertiary focus:outline-none focus:border-primary"
                placeholder="••••••••"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-tertiary mb-1.5">Confirmer le nouveau mot de passe</label>
              <input
                type="password"
                value={form.confirmerMotDePasse}
                onChange={(e) => setForm({ ...form, confirmerMotDePasse: e.target.value })}
                className="w-full bg-gray-light/10 border border-gray-light/30 rounded-xl px-4 py-2.5 text-tertiary focus:outline-none focus:border-primary"
                placeholder="••••••••"
              />
            </div>

            <button type="submit" className="bg-primary text-secondary px-6 py-2.5 rounded-lg font-semibold hover:bg-primary/90">
              Enregistrer les modifications
            </button>
          </form>
        </div>

        
        <div className="bg-secondary border border-gray-light/30 rounded-2xl p-6 sm:p-8">
          <h2 className="font-heading text-lg font-semibold text-tertiary mb-2">Mode maintenance</h2>
          <p className="text-gray-medium text-sm mb-6">
            Activez le mode maintenance pour afficher une page d&apos;attente aux visiteurs pendant vos modifications.
          </p>
          <div className="flex items-center justify-between bg-gray-light/10 rounded-xl p-5">
            <div>
              <p className="font-medium text-tertiary text-sm">
                {maintenance ? "🔴 Maintenance activé" : "🟢 Site en ligne"}
              </p>
              <p className="text-gray-medium text-xs mt-1">
                {maintenance ? "Les visiteurs voient une page de maintenance." : "Le site est accessible normalement."}
              </p>
            </div>
            <button
              onClick={toggleMaintenance}
              className={`relative w-12 h-6 rounded-full transition-colors ${
                maintenance ? "bg-primary" : "bg-gray-light"
              }`}
            >
              <span
                className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${
                  maintenance ? "translate-x-6" : "translate-x-0.5"
                }`}
              />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}