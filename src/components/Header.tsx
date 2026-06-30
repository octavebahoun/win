import React, { useState } from "react";
import { Search, Bell, Plus } from "lucide-react";

interface HeaderProps {
  title: string;
  onAddTaskClick?: () => void;
  notificationsCount?: number;
}

export default function Header({ title, onAddTaskClick, notificationsCount = 2 }: HeaderProps) {
  const [showNotifications, setShowNotifications] = useState(false);
  
  const notifications = [
    { id: 1, text: "Julian Pierce a déplacé 'API d'intégration' vers En cours", time: "Il y a 5 min" },
    { id: 2, text: "Elara Vance vous a assigné 'Refonte Dashboard'", time: "Il y a 1 h" },
    { id: 3, text: "Nouveau post planifié avec succès pour LinkedIn", time: "Il y a 2 h" },
  ];

  return (
    <header className="h-16 border-b border-gray-800/60 bg-[#080d19]/80 backdrop-blur-md px-4 sm:px-6 flex items-center justify-between relative z-30">
      {/* Title / Tab Name */}
      <div className="flex items-center gap-3">
        <h2 className="text-sm sm:text-lg font-bold text-white tracking-tight font-sans truncate max-w-[58vw] md:max-w-none">{title}</h2>
        <div className="hidden sm:flex items-center h-5 px-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] text-emerald-400 font-semibold uppercase tracking-wider">
          Sprint Actuel
        </div>
      </div>

      {/* Right Side Actions */}
      <div className="flex items-center gap-2 sm:gap-4">
        {/* Search */}
        <div className="relative hidden md:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
          <input 
            type="text" 
            placeholder="Rechercher une tâche, un projet..." 
            className="w-64 h-9 bg-gray-900 border border-gray-800 rounded-lg pl-9 pr-4 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#00C969]/50 transition-all duration-200"
          />
        </div>

        {/* Quick Task Add Button */}
        {onAddTaskClick && (
          <button 
            onClick={onAddTaskClick}
            className="h-9 px-3.5 rounded-lg bg-gradient-to-r from-[#00C969] to-[#40e682] text-slate-900 font-bold text-xs flex items-center gap-1.5 hover:shadow-[0_0_15px_rgba(0,201,105,0.25)] hover:scale-[1.01] active:scale-95 transition-all cursor-pointer"
          >
            <Plus className="w-3.5 h-3.5 stroke-[3px]" />
            <span className="hidden sm:inline">Nouvelle Tâche</span>
          </button>
        )}

        {/* Notification Bell */}
        <div className="relative">
          <button 
            onClick={() => setShowNotifications(!showNotifications)}
            className="p-2 rounded-lg bg-gray-900 border border-gray-800 text-gray-400 hover:text-white hover:bg-gray-800/80 transition-all relative cursor-pointer"
          >
            <Bell className="w-4 h-4" />
            {notificationsCount > 0 && (
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-[#080d19]" />
            )}
          </button>

          {/* Notifications Dropdown */}
          {showNotifications && (
            <div className="absolute right-0 mt-2 w-[calc(100vw-2rem)] max-w-80 rounded-xl bg-[#0b1220] border border-gray-800 p-4 shadow-[0_10px_30px_rgba(0,0,0,0.5)] z-50">
              <div className="flex items-center justify-between mb-3 pb-2 border-b border-gray-800/60">
                <span className="text-xs font-bold text-white">Notifications</span>
                <span className="text-[10px] text-[#00C969] font-semibold cursor-pointer hover:underline">Marquer comme lu</span>
              </div>
              <div className="space-y-3">
                {notifications.map((notif) => (
                  <div key={notif.id} className="text-xs space-y-1 hover:bg-gray-900/40 p-1.5 rounded-lg transition-colors">
                    <p className="text-gray-300 leading-normal">{notif.text}</p>
                    <span className="text-[10px] text-gray-500 font-mono block">{notif.time}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Team Avatars Group */}
        <div className="hidden lg:flex items-center -space-x-2">
          <img 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop" 
            alt="Julian" 
            title="Julian Pierce (Tech Lead)"
            className="w-7 h-7 rounded-full border border-gray-800 object-cover"
            referrerPolicy="no-referrer"
          />
          <img 
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop" 
            alt="Maya" 
            title="Maya Lin (Talent Manager)"
            className="w-7 h-7 rounded-full border border-gray-800 object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="w-7 h-7 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center text-[10px] text-gray-400 font-bold">
            +3
          </div>
        </div>
      </div>
    </header>
  );
}
