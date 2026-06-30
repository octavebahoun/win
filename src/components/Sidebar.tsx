import React from "react";
import { 
  Home, 
  Trello, 
  CheckSquare, 
  MessageSquare, 
  Calendar, 
  BarChart3, 
  Users2, 
  LogOut, 
  ChevronLeft, 
  ChevronRight,
  Globe,
  Settings
} from "lucide-react";

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onExitApp: () => void;
  isCollapsed: boolean;
  setIsCollapsed: (collapsed: boolean) => void;
}

export default function Sidebar({ 
  activeTab, 
  setActiveTab, 
  onExitApp, 
  isCollapsed, 
  setIsCollapsed 
}: SidebarProps) {
  const menuItems = [
    { id: "dashboard", label: "Tableau de bord", icon: Home },
    { id: "kanban", label: "Tableau Kanban", icon: Trello },
    { id: "tasks", label: "Liste des tâches", icon: CheckSquare },
    { id: "chat", label: "Chat Collaboratif", icon: MessageSquare, badge: "Gemini" },
    { id: "timeline", label: "Planification", icon: Calendar },
    { id: "reports", label: "Rapports & Stats", icon: BarChart3 },
    { id: "rh", label: "RH & Talents", icon: Users2 },
  ];

  return (
    <aside 
      className={`relative z-40 h-screen bg-[#070b14] border-r border-gray-800/80 flex flex-col justify-between transition-all duration-300 ${
        isCollapsed ? "w-20" : "w-64"
      }`}
    >
      {/* Top Brand Logo */}
      <div>
        <div className="h-16 px-4 flex items-center justify-between border-b border-gray-800/60">
          <div className="flex items-center gap-3 overflow-hidden">
            <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-gradient-to-tr from-[#00C969] to-[#40e682] flex items-center justify-center shadow-[0_0_15px_rgba(0,201,105,0.2)]">
              <span className="font-mono font-black text-[#070b14] text-base tracking-tighter">W</span>
            </div>
            {!isCollapsed && (
              <div className="flex flex-col">
                <span className="font-bold text-sm tracking-widest text-white uppercase">WINE</span>
                <span className="text-[8px] font-mono text-[#00C969] tracking-widest font-semibold uppercase">WORKSPACE</span>
              </div>
            )}
          </div>
          
          <button 
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="hidden md:flex p-1.5 rounded-lg hover:bg-gray-800 text-gray-500 hover:text-white transition-colors cursor-pointer"
          >
            {isCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
          </button>
        </div>

        {/* Workspace Quick-selector */}
        {!isCollapsed ? (
          <div className="m-3 p-3 rounded-xl bg-gray-900/60 border border-gray-800/80">
            <div className="flex items-center gap-2 text-xs font-semibold text-gray-400 mb-1">
              <Globe className="w-3.5 h-3.5 text-[#00C969]" />
              <span>Workspace Actif</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-white truncate">Congo Tech Lab 🇨🇬</span>
              <span className="text-[9px] bg-emerald-500/10 text-emerald-400 px-1.5 py-0.5 rounded font-mono font-medium">Sprints</span>
            </div>
          </div>
        ) : (
          <div className="my-3 flex justify-center">
            <div className="w-8 h-8 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center text-[#00C969] text-xs font-bold">
              🇨🇬
            </div>
          </div>
        )}

        {/* Navigation Items */}
        <nav className="px-3 py-4 space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-[#00C969]/10 text-[#40e682] border-l-2 border-[#00C969] shadow-[inset_4px_0_12px_rgba(0,201,105,0.05)]"
                    : "text-gray-400 hover:text-white hover:bg-gray-900/40"
                }`}
              >
                <Icon className={`w-5 h-5 flex-shrink-0 ${isActive ? "text-[#00C969]" : "text-gray-400 group-hover:text-white"}`} />
                {!isCollapsed && (
                  <div className="flex-1 flex items-center justify-between">
                    <span className="truncate">{item.label}</span>
                    {item.badge && (
                      <span className="text-[9px] bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-900 font-bold px-1.5 py-0.5 rounded-md font-mono">
                        {item.badge}
                      </span>
                    )}
                  </div>
                )}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Footer controls */}
      <div className="p-3 border-t border-gray-800/60">
        {!isCollapsed && (
          <div className="mb-3 px-3 py-2 rounded-xl bg-gray-900/20 border border-gray-800/40 flex items-center gap-3">
            <img 
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop" 
              alt="User profile" 
              className="w-8 h-8 rounded-full border border-[#00C969]/40 object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="flex-1 min-w-0">
              <p className="text-xs font-bold text-white truncate">Elara Vance</p>
              <p className="text-[10px] text-gray-500 truncate font-mono">Project Director</p>
            </div>
          </div>
        )}

        <button
          onClick={onExitApp}
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-gray-400 hover:text-red-400 hover:bg-red-500/10 transition-all duration-200 cursor-pointer"
        >
          <LogOut className="w-5 h-5 text-gray-500 flex-shrink-0 group-hover:text-red-400" />
          {!isCollapsed && <span className="truncate">Quitter la démo</span>}
        </button>
      </div>
    </aside>
  );
}
