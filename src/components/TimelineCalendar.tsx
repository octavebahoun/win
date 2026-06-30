import React, { useState } from "react";
import { Plus, Calendar, Clock, Share2, Sparkles, MessageSquare, ExternalLink, Image as ImageIcon } from "lucide-react";
import { CalendarEvent } from "../types";

interface TimelineCalendarProps {
  events: CalendarEvent[];
  onAddEvent: (event: Omit<CalendarEvent, 'id'>) => void;
}

export default function TimelineCalendar({ events, onAddEvent }: TimelineCalendarProps) {
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState("");
  const [platform, setPlatform] = useState<CalendarEvent['platform']>("linkedin");
  const [scheduledTime, setScheduledTime] = useState("11:00");
  const [selectedDay, setSelectedDay] = useState(13);

  // Focus schedule days as shown in mockups
  const days = [
    { day: 12, name: "LUN", date: "12 Juin" },
    { day: 13, name: "MAR", date: "13 Juin" },
    { day: 14, name: "MER", date: "14 Juin" },
    { day: 15, name: "JEU", date: "15 Juin" },
    { day: 16, name: "VEN", date: "16 Juin" },
    { day: 17, name: "SAM", date: "17 Juin" }
  ];

  const platforms = [
    { id: "whatsapp", label: "WhatsApp Business", color: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" },
    { id: "linkedin", label: "LinkedIn Company", color: "bg-blue-500/10 text-blue-400 border-blue-500/20" },
    { id: "instagram", label: "Instagram Grid", color: "bg-pink-500/10 text-pink-400 border-pink-500/20" },
    { id: "facebook", label: "Facebook Page", color: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20" }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    const dayName = days.find(d => d.day === selectedDay)?.name || "LUN";

    onAddEvent({
      title,
      platform,
      scheduledTime,
      day: selectedDay,
      dayName,
      status: 'scheduled'
    });

    setTitle("");
    setShowForm(false);
  };

  return (
    <div className="p-6 space-y-6 max-w-7xl mx-auto overflow-y-auto max-h-[calc(100vh-4rem)]">
      {/* Header bar */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-sm text-gray-400">Marketing & Diffusion / Calendrier Editorial</h3>
          <p className="text-lg font-bold text-white font-sans">Planification Réseaux Sociaux</p>
        </div>
        <button
          onClick={() => setShowForm(!showForm)}
          className="h-9 px-4 rounded-lg bg-[#00C969]/10 hover:bg-[#00C969]/20 text-[#00C969] font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer border border-[#00C969]/20"
        >
          <Plus className="w-4 h-4" />
          <span>Planifier un post</span>
        </button>
      </div>

      {/* Creation form */}
      {showForm && (
        <form onSubmit={handleSubmit} className="p-5 rounded-2xl bg-[#0b1220] border border-gray-800 space-y-4 max-w-xl">
          <h4 className="text-sm font-bold text-white">Planifier un nouveau post</h4>
          <div className="space-y-3">
            <div>
              <label className="text-[10px] uppercase font-mono text-gray-500">Contenu du post</label>
              <textarea
                required
                placeholder="Rédigez le texte du post..."
                value={title}
                onChange={e => setTitle(e.target.value)}
                className="w-full p-3 bg-gray-950 border border-gray-800 rounded-lg text-xs text-white h-24 focus:outline-none focus:border-[#00C969]/50"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="text-[10px] uppercase font-mono text-gray-500 block mb-1">Réseau Social</label>
                <select
                  value={platform}
                  onChange={e => setPlatform(e.target.value as CalendarEvent['platform'])}
                  className="w-full h-9 bg-gray-950 border border-gray-800 rounded-lg px-2 text-xs text-white"
                >
                  <option value="whatsapp">WhatsApp Business</option>
                  <option value="linkedin">LinkedIn</option>
                  <option value="instagram">Instagram</option>
                  <option value="facebook">Facebook</option>
                </select>
              </div>
              <div>
                <label className="text-[10px] uppercase font-mono text-gray-500 block mb-1">Heure de publication</label>
                <input
                  type="text"
                  placeholder="ex: 11:00"
                  value={scheduledTime}
                  onChange={e => setScheduledTime(e.target.value)}
                  className="w-full h-9 bg-gray-950 border border-gray-800 rounded-lg px-3 text-xs text-white"
                />
              </div>
              <div>
                <label className="text-[10px] uppercase font-mono text-gray-500 block mb-1">Jour du mois</label>
                <select
                  value={selectedDay}
                  onChange={e => setSelectedDay(parseInt(e.target.value))}
                  className="w-full h-9 bg-gray-950 border border-gray-800 rounded-lg px-2 text-xs text-white"
                >
                  {days.map(d => (
                    <option key={d.day} value={d.day}>{d.date}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="flex justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="px-3.5 h-8 rounded-lg bg-gray-900 border border-gray-800 text-xs text-gray-400 hover:text-white"
            >
              Annuler
            </button>
            <button
              type="submit"
              className="px-4 h-8 rounded-lg bg-[#00C969] text-[#070b14] font-bold text-xs"
            >
              Planifier
            </button>
          </div>
        </form>
      )}

      {/* Main Grid: Days Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 items-start">
        {days.map((d) => {
          const dayEvents = events.filter(e => e.day === d.day);
          return (
            <div key={d.day} className="rounded-xl border border-gray-800 bg-[#090f1d] p-3 flex flex-col gap-3 min-h-[350px]">
              {/* Day Header */}
              <div className="flex items-center justify-between border-b border-gray-800/60 pb-2">
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-gray-500 font-mono">{d.name}</span>
                  <span className="text-sm font-bold text-white">{d.day} Juin</span>
                </div>
                <span className="text-[9px] font-mono bg-gray-950 border border-gray-800/80 px-1.5 py-0.5 rounded text-[#00C969] font-bold">
                  {dayEvents.length}
                </span>
              </div>

              {/* Day Scheduled Posts */}
              <div className="space-y-3 flex-1">
                {dayEvents.length === 0 ? (
                  <div className="h-24 rounded-lg border border-dashed border-gray-800/40 flex items-center justify-center text-center text-[10px] text-gray-600">
                    Pas d'événement
                  </div>
                ) : (
                  dayEvents.map((evt) => {
                    const platConfig = platforms.find(p => p.id === evt.platform) || platforms[0];
                    return (
                      <div
                        key={evt.id}
                        className="p-3 rounded-lg bg-gray-900/60 border border-gray-800 hover:border-gray-700/60 transition-all flex flex-col gap-2 relative group"
                      >
                        {/* Title details / Time */}
                        <div className="flex items-center justify-between text-[10px]">
                          <span className={`px-1.5 py-0.5 rounded border font-mono font-bold text-[8px] uppercase ${platConfig.color}`}>
                            {evt.platform === 'whatsapp' ? 'WA' : evt.platform === 'linkedin' ? 'LI' : evt.platform === 'instagram' ? 'IG' : 'FB'}
                          </span>
                          <div className="flex items-center gap-1 text-gray-500 font-mono">
                            <Clock className="w-3 h-3" />
                            <span>{evt.scheduledTime}</span>
                          </div>
                        </div>

                        {/* Content text */}
                        <p className="text-[11px] text-gray-300 line-clamp-3 leading-relaxed">
                          {evt.title}
                        </p>

                        {/* Attachments preview if available */}
                        {evt.attachments && evt.attachments.length > 0 && (
                          <div className="rounded overflow-hidden border border-gray-800 bg-gray-950 aspect-[16/10] mt-1 relative">
                            <img 
                              src={evt.attachments[0]} 
                              alt="Attachment preview" 
                              className="w-full h-full object-cover opacity-80"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-1.5">
                              <span className="text-[8px] text-gray-300 flex items-center gap-1 font-mono">
                                <ImageIcon className="w-2.5 h-2.5" />
                                1 Image
                              </span>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
