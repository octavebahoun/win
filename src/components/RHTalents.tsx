import React, { useState } from "react";
import { Users2, Calendar, FileText, Mail, Plus, X } from "lucide-react";
import { TeamMember } from "../types";

export default function RHTalents() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [notice, setNotice] = useState<string | null>(null);

  const team: TeamMember[] = [
    {
      id: "elara",
      name: "Elara Vance",
      role: "Project Director",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop",
      leaveBalance: 18,
      contractType: "CDI • Temps Plein",
      entryDate: "12 Oct. 2024",
      recentActivity: "A validé le sprint planning de la semaine 2",
      email: "elara.vance@wine-saas.com"
    },
    {
      id: "julian",
      name: "Julian Pierce",
      role: "Tech Lead",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop",
      leaveBalance: 12,
      contractType: "CDI • Temps Plein",
      entryDate: "05 Janv. 2025",
      recentActivity: "A poussé la refonte de la base de données SQL",
      email: "julian.pierce@wine-saas.com"
    },
    {
      id: "maya",
      name: "Maya Lin",
      role: "Talent Manager",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop",
      leaveBalance: 24,
      contractType: "CDI • Temps Plein",
      entryDate: "15 Mai 2025",
      recentActivity: "A finalisé l'onboarding de 2 nouveaux stagiaires",
      email: "maya.lin@wine-saas.com"
    }
  ];

  return (
    <div className="h-full overflow-y-auto p-4 sm:p-6 space-y-6 max-w-7xl mx-auto text-white relative">
      {notice && (
        <div className="p-3 rounded-xl bg-[#00C969]/10 border border-[#00C969]/20 text-[#40e682] text-xs flex items-center justify-between gap-3">
          <span>{notice}</span>
          <button
            type="button"
            onClick={() => setNotice(null)}
            className="p-1 rounded text-emerald-300 hover:text-white"
            aria-label="Masquer le message"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Upper action bar */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-sm text-gray-400">Ressources Humaines / Annuaire</h3>
          <p className="text-lg font-bold text-white font-sans">Gestion des Talents & Collaborateurs</p>
        </div>
        <button
          onClick={() => setNotice("Invitation prête: cette action sera reliée au module administrateur.")}
          className="h-9 px-4 rounded-lg bg-[#00C969]/10 hover:bg-[#00C969]/20 text-[#00C969] font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer border border-[#00C969]/20"
        >
          <Plus className="w-4 h-4" />
          <span>Inviter un collaborateur</span>
        </button>
      </div>

      {/* Grid containing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {team.map((member) => (
          <div
            key={member.id}
            onClick={() => setSelectedMember(member)}
            className="p-5 rounded-2xl bg-[#090f1d] border border-gray-800 hover:border-[#00C969]/40 transition-all duration-300 cursor-pointer group flex flex-col justify-between space-y-4"
          >
            <div className="space-y-4">
              {/* Profile details */}
              <div className="flex items-center gap-4">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-gray-800 group-hover:border-[#00C969]/50 transition-colors"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="text-sm font-bold text-gray-200 group-hover:text-white truncate">{member.name}</h4>
                  <p className="text-xs text-gray-500 font-mono">{member.role}</p>
                </div>
              </div>

              {/* Badges/Leave details */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-gray-950/40 border border-gray-800/60 space-y-1">
                  <span className="text-[9px] text-gray-500 uppercase font-mono block">Solde Congés</span>
                  <span className="text-sm font-black text-white font-mono">{member.leaveBalance} jours</span>
                </div>
                <div className="p-3 rounded-xl bg-gray-950/40 border border-gray-800/60 space-y-1">
                  <span className="text-[9px] text-gray-500 uppercase font-mono block">Type de Contrat</span>
                  <span className="text-xs font-bold text-[#00C969]">{member.contractType.split("•")[0]}</span>
                </div>
              </div>
            </div>

            {/* Footer recent actions */}
            <div className="pt-3 border-t border-gray-800/40 text-[10px] text-gray-500 flex items-center justify-between">
              <span className="truncate max-w-[200px]">Dernière act: {member.recentActivity}</span>
              <span className="text-[#00C969] opacity-0 group-hover:opacity-100 transition-opacity font-bold">Détails ➔</span>
            </div>
          </div>
        ))}
      </div>

      {/* Side Profile Drawer Overlay */}
      {selectedMember && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-xs z-50 flex justify-end">
          <div className="w-full max-w-md bg-[#0b1220] h-full p-6 border-l border-gray-800 flex flex-col justify-between overflow-y-auto shadow-2xl">
            <div className="space-y-6">
              {/* Drawer header */}
              <div className="flex items-center justify-between border-b border-gray-800 pb-4">
                <div className="flex items-center gap-2">
                  <Users2 className="w-5 h-5 text-[#00C969]" />
                  <span className="text-xs uppercase font-mono tracking-wider font-bold text-[#00C969]">Fiche Collaborateur</span>
                </div>
                <button
                  onClick={() => setSelectedMember(null)}
                  className="p-1.5 rounded-lg bg-gray-900 border border-gray-800 text-gray-400 hover:text-white cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Big avatar detail */}
              <div className="text-center space-y-3 py-4">
                <img
                  src={selectedMember.avatar}
                  alt={selectedMember.name}
                  className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-gray-800/80 shadow-lg"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h3 className="text-lg font-bold text-white">{selectedMember.name}</h3>
                  <p className="text-xs text-emerald-400 font-mono">{selectedMember.role}</p>
                </div>
              </div>

              {/* Data specifications list */}
              <div className="space-y-3">
                <div className="p-3.5 rounded-xl bg-gray-950/40 border border-gray-800/60 flex items-center gap-3">
                  <Mail className="w-4 h-4 text-gray-500" />
                  <div className="text-xs">
                    <span className="text-gray-500 block text-[9px] uppercase font-mono">E-mail Professionnel</span>
                    <span className="text-gray-300 font-bold">{selectedMember.email}</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-gray-950/40 border border-gray-800/60 flex items-center gap-3">
                  <Calendar className="w-4 h-4 text-gray-500" />
                  <div className="text-xs">
                    <span className="text-gray-500 block text-[9px] uppercase font-mono">Date d'Entrée</span>
                    <span className="text-gray-300 font-bold">{selectedMember.entryDate}</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-gray-950/40 border border-gray-800/60 flex items-center gap-3">
                  <FileText className="w-4 h-4 text-gray-500" />
                  <div className="text-xs">
                    <span className="text-gray-500 block text-[9px] uppercase font-mono">Régime de contrat</span>
                    <span className="text-gray-300 font-bold">{selectedMember.contractType}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Actions inside drawer */}
            <div className="pt-6 border-t border-gray-800 flex gap-3">
              <button
                onClick={() => setNotice(`Message préparé pour ${selectedMember.name}.`)}
                className="flex-1 h-10 rounded-xl bg-[#00C969] text-[#070b14] font-bold text-xs"
              >
                Envoyer un e-mail
              </button>
              <button
                onClick={() => setNotice("La modification RH sera disponible pour les administrateurs.")}
                className="flex-1 h-10 rounded-xl bg-gray-900 border border-gray-800 text-gray-300 font-bold text-xs"
              >
                Modifier
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
