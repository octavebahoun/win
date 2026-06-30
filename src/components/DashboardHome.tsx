import React from "react";
import { 
  CheckCircle2, 
  Clock, 
  Flame, 
  ArrowRight, 
  Calendar, 
  ChevronRight, 
  Trello, 
  MessageSquare, 
  Users2,
  TrendingUp
} from "lucide-react";
import { Task } from "../types";

interface DashboardHomeProps {
  tasks: Task[];
  onToggleTaskStatus: (id: string) => void;
  setActiveTab: (tab: string) => void;
}

export default function DashboardHome({ tasks, onToggleTaskStatus, setActiveTab }: DashboardHomeProps) {
  // Compute some quick live analytics
  const todoTasks = tasks.filter(t => t.status === 'todo');
  const inProgressTasks = tasks.filter(t => t.status === 'inprogress');
  const doneTasks = tasks.filter(t => t.status === 'done');
  
  const completionRate = tasks.length > 0 ? Math.round((doneTasks.length / tasks.length) * 100) : 0;
  
  // Pending high priority tasks for the user
  const urgentTasks = tasks.filter(t => t.status !== 'done').slice(0, 3);

  // Current Date display
  const today = new Date().toLocaleDateString('fr-FR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="p-6 space-y-6 max-w-7xl mx-auto overflow-y-auto max-h-[calc(100vh-4rem)]">
      {/* Top Banner Greeting */}
      <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-r from-[#0d1527] via-[#090f1d] to-[#070a13] border border-gray-800/80 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#00C969]/5 rounded-full blur-[90px] pointer-events-none" />
        
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-2">
            <span className="text-xs text-[#00C969] font-mono font-bold uppercase tracking-wider">WORKSPACE ACTIF • SPRINT ALPHA</span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-sans">
              Bonjour, Elara Vance ! 👋
            </h1>
            <p className="text-sm text-gray-400 max-w-2xl">
              Votre tableau de bord WINE est configuré et prêt. Votre équipe de développement à Abidjan vient de pousser la branche d'intégration API.
            </p>
          </div>
          <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gray-900/80 border border-gray-800 text-xs font-mono text-gray-300">
            <Calendar className="w-4 h-4 text-[#00C969]" />
            <span>{today}</span>
          </div>
        </div>
      </div>

      {/* Core KPI Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* KPI 1 */}
        <div className="p-5 rounded-2xl bg-[#090f1d] border border-gray-800/80 flex items-center justify-between group hover:border-gray-700/80 transition-all duration-200">
          <div className="space-y-1">
            <span className="text-[11px] font-medium text-gray-400 block uppercase font-mono">Vélocité Sprint</span>
            <p className="text-2xl font-black text-white font-mono">84 pts</p>
            <span className="text-[10px] text-emerald-400 flex items-center gap-0.5">
              <TrendingUp className="w-3 h-3" />
              +12% vs sprint précédent
            </span>
          </div>
          <div className="w-10 h-10 rounded-xl bg-[#00C969]/10 border border-[#00C969]/20 flex items-center justify-center text-[#00C969]">
            <Flame className="w-5 h-5 fill-[#00C969]" />
          </div>
        </div>

        {/* KPI 2 */}
        <div className="p-5 rounded-2xl bg-[#090f1d] border border-gray-800/80 flex items-center justify-between group hover:border-gray-700/80 transition-all duration-200">
          <div className="space-y-1">
            <span className="text-[11px] font-medium text-gray-400 block uppercase font-mono">Tâches Complétées</span>
            <p className="text-2xl font-black text-white font-mono">
              {doneTasks.length} / {tasks.length}
            </p>
            <div className="w-24 h-1.5 bg-gray-800 rounded-full overflow-hidden mt-2">
              <div 
                className="h-full bg-gradient-to-r from-[#00C969] to-[#40e682] transition-all duration-500" 
                style={{ width: `${completionRate}%` }}
              />
            </div>
          </div>
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-[#00C969]">
            <CheckCircle2 className="w-5 h-5 text-[#00C969]" />
          </div>
        </div>

        {/* KPI 3 */}
        <div className="p-5 rounded-2xl bg-[#090f1d] border border-gray-800/80 flex items-center justify-between group hover:border-gray-700/80 transition-all duration-200">
          <div className="space-y-1">
            <span className="text-[11px] font-medium text-gray-400 block uppercase font-mono">En cours / À faire</span>
            <p className="text-2xl font-black text-white font-mono">
              {inProgressTasks.length} <span className="text-gray-500 text-sm">/ {todoTasks.length}</span>
            </p>
            <span className="text-[10px] text-gray-400">Répartition active du backlog</span>
          </div>
          <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
            <Trello className="w-5 h-5" />
          </div>
        </div>

        {/* KPI 4 */}
        <div className="p-5 rounded-2xl bg-[#090f1d] border border-gray-800/80 flex items-center justify-between group hover:border-gray-700/80 transition-all duration-200">
          <div className="space-y-1">
            <span className="text-[11px] font-medium text-gray-400 block uppercase font-mono">Échéance Sprint</span>
            <p className="text-2xl font-black text-white font-mono">5 jours</p>
            <span className="text-[10px] text-red-400 font-semibold uppercase">Sprint finit le 5 Juil.</span>
          </div>
          <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400">
            <Clock className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Main Grid: Urgent Tasks checklist & Shortcuts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left column: Urgent checklist */}
        <div className="lg:col-span-2 p-5 rounded-2xl bg-[#090f1d] border border-gray-800/80 space-y-4">
          <div className="flex items-center justify-between border-b border-gray-800/60 pb-3">
            <div className="space-y-0.5">
              <h3 className="text-sm font-bold text-white">Tâches Urgentes Assignées</h3>
              <p className="text-xs text-gray-500">Agissez rapidement sur vos priorités actuelles</p>
            </div>
            <button 
              onClick={() => setActiveTab("tasks")}
              className="text-xs text-[#00C969] hover:underline font-semibold flex items-center gap-0.5 cursor-pointer"
            >
              Voir tout
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="space-y-3">
            {urgentTasks.length === 0 ? (
              <p className="text-xs text-gray-500 text-center py-6">Aucune tâche urgente en attente. Bon travail !</p>
            ) : (
              urgentTasks.map((task) => (
                <div 
                  key={task.id}
                  className="p-4 rounded-xl bg-gray-900/40 border border-gray-800/60 hover:bg-gray-900/80 transition-colors flex items-center justify-between gap-4 group"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <button 
                      onClick={() => onToggleTaskStatus(task.id)}
                      className="w-5 h-5 rounded border border-gray-700 flex items-center justify-center text-transparent hover:border-[#00C969] hover:text-[#00C969] transition-all cursor-pointer"
                    >
                      <CheckCircle2 className="w-4 h-4" />
                    </button>
                    <div className="min-w-0 space-y-1">
                      <span className="text-xs font-bold text-gray-200 group-hover:text-white truncate block">{task.title}</span>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className={`text-[9px] px-1.5 py-0.5 rounded-md font-mono uppercase ${
                          task.priority === 'high' ? 'bg-red-500/10 text-red-400' : 'bg-yellow-500/10 text-yellow-400'
                        }`}>
                          {task.priority === 'high' ? 'Prioritaire' : 'Moyen'}
                        </span>
                        <span className="text-[10px] text-gray-500 font-mono">Échéance: {task.dueDate}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <img 
                      src={task.assignee.avatar} 
                      alt={task.assignee.name}
                      title={task.assignee.name}
                      className="w-6 h-6 rounded-full object-cover border border-gray-800"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Right column: Shortcuts & Modules overview */}
        <div className="p-5 rounded-2xl bg-[#090f1d] border border-gray-800/80 space-y-4 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="border-b border-gray-800/60 pb-3">
              <h3 className="text-sm font-bold text-white">Raccourcis du Workspace</h3>
              <p className="text-xs text-gray-500">Basculez rapidement vers vos outils favoris</p>
            </div>

            {/* Grid shortcut items */}
            <div className="grid grid-cols-2 gap-3">
              <button 
                onClick={() => setActiveTab("kanban")}
                className="p-3 rounded-xl bg-[#0b1222] border border-gray-800/80 hover:border-[#00C969]/40 text-left space-y-2 group transition-all duration-200 cursor-pointer"
              >
                <Trello className="w-5 h-5 text-[#00C969] group-hover:scale-110 transition-transform" />
                <span className="text-xs font-bold text-gray-200 block">Sprint Agile</span>
              </button>
              
              <button 
                onClick={() => setActiveTab("chat")}
                className="p-3 rounded-xl bg-[#0b1222] border border-gray-800/80 hover:border-[#00C969]/40 text-left space-y-2 group transition-all duration-200 cursor-pointer"
              >
                <MessageSquare className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-bold text-gray-200 block">WINE AI Chat</span>
              </button>

              <button 
                onClick={() => setActiveTab("timeline")}
                className="p-3 rounded-xl bg-[#0b1222] border border-gray-800/80 hover:border-[#00C969]/40 text-left space-y-2 group transition-all duration-200 cursor-pointer"
              >
                <Calendar className="w-5 h-5 text-[#00C969] group-hover:scale-110 transition-transform" />
                <span className="text-xs font-bold text-gray-200 block">Planification</span>
              </button>

              <button 
                onClick={() => setActiveTab("rh")}
                className="p-3 rounded-xl bg-[#0b1222] border border-gray-800/80 hover:border-[#00C969]/40 text-left space-y-2 group transition-all duration-200 cursor-pointer"
              >
                <Users2 className="w-5 h-5 text-[#40e682] group-hover:scale-110 transition-transform" />
                <span className="text-xs font-bold text-gray-200 block">Talents / RH</span>
              </button>
            </div>
          </div>

          <div className="pt-4 border-t border-gray-800/60 flex items-center justify-between text-xs font-medium text-gray-400">
            <span>Collaborateurs Actifs</span>
            <div className="flex -space-x-1">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00C969] border border-slate-900 ring-2 ring-emerald-500/20" title="En ligne" />
              <span className="text-[10px] text-gray-400 font-mono ml-2">5 en ligne</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
