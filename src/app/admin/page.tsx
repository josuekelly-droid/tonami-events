"use client";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AdminDashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/admin/login");
    }
  }, [status, router]);

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
      </div>
    );
  }

  if (!session) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-light/10">
      
      <header className="bg-secondary border-b border-gray-light/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <h1 className="font-heading font-bold text-xl text-tertiary">
            Dashboard
          </h1>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-medium">
              {session.user?.name}
            </span>
            <button
              onClick={() => signOut({ callbackUrl: "/admin/login" })}
              className="text-sm text-primary hover:underline"
            >
              Déconnexion
            </button>
          </div>
        </div>
      </header>

      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="font-heading text-2xl font-bold text-tertiary mb-8">
          Bienvenue, {session.user?.name}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { titre: "Projets", description: "Gérer le portfolio", lien: "/admin/projets" },
            { titre: "Articles", description: "Gérer le blog", lien: "/admin/articles" },
            { titre: "Témoignages", description: "Gérer les avis clients", lien: "/admin/temoignages" },
            { titre: "Contacts", description: "Messages reçus", lien: "/admin/contacts" },
            { titre: "Newsletter", description: "Abonnés", lien: "/admin/newsletter" },
            { titre: "Avis", description: "Avis clients à modérer", lien: "/admin/avis" },
            { titre: "Paramètres", description: "Compte admin", lien: "/admin/parametres" },
          ].map((item) => (
            <button
              key={item.titre}
              onClick={() => router.push(item.lien)}
              className="bg-secondary border border-gray-light/30 rounded-2xl p-6 text-left hover:shadow-md hover:border-primary/20 transition-all duration-200"
            >
              <h3 className="font-heading font-semibold text-lg text-tertiary mb-1">
                {item.titre}
              </h3>
              <p className="text-gray-medium text-sm">{item.description}</p>
            </button>
          ))}
        </div>
      </main>
    </div>
  );
}