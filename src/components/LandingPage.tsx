import React from "react";
import {
  ArrowRight,
  BarChart3,
  Calendar,
  CheckCircle2,
  ChevronRight,
  Clock,
  Layers,
  MessageSquare,
  Play,
  ShieldCheck,
  Sparkles,
  Trello,
  Users2,
  Zap
} from "lucide-react";

interface LandingPageProps {
  onEnterApp: () => void;
}

const toolLogos = ["Notion", "GitHub", "WhatsApp", "Figma", "Slack", "Drive", "LinkedIn", "Meta"];

const storyFormats = [
  {
    icon: Trello,
    title: "Sprint en direct",
    label: "Projet",
    text: "Suivez les priorités, responsables et statuts sans perdre le fil de l'exécution."
  },
  {
    icon: Calendar,
    title: "Campagnes planifiées",
    label: "Marketing",
    text: "Organisez les posts WhatsApp, LinkedIn et Instagram dans un calendrier clair."
  },
  {
    icon: MessageSquare,
    title: "WINE AI",
    label: "Assistant",
    text: "Transformez les échanges en résumés, décisions et prochaines actions exploitables."
  },
  {
    icon: BarChart3,
    title: "Rapports lisibles",
    label: "Analytics",
    text: "Montrez la progression, la vélocité et les résultats avec des visuels prêts à partager."
  }
];

const steps = [
  ["01", "Centralisez", "Rassemblez projets, contenus, équipe et indicateurs dans un seul espace."],
  ["02", "Pilotez", "Avancez avec des vues claires: kanban, liste, calendrier, chat et rapports."],
  ["03", "Partagez", "Présentez l'état réel du travail avec des cartes lisibles et des exports propres."]
];

export default function LandingPage({ onEnterApp }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-[#080C14] text-[#EAF2EE] overflow-x-hidden font-sans selection:bg-[#00C969]/25">
      {/* ambient glow */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-[#00C969]/[0.08] blur-[140px]" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-[#00C969]/[0.05] blur-[120px]" />
      </div>

      <nav className="sticky top-0 z-50 bg-[#080C14]/85 backdrop-blur-xl border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-18 sm:h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#0D121F] border border-white/10 flex items-center justify-center shadow-sm">
              <span className="font-mono font-extrabold text-[#00C969] text-xl tracking-tighter">W</span>
            </div>
            <div className="leading-none">
              <span className="font-black text-lg tracking-wider uppercase text-white">WINE</span>
              <span className="text-[9px] font-mono block text-[#00C969] tracking-widest font-semibold mt-1">WORKSPACE</span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm text-white/55 font-medium">
            <a href="#product" className="hover:text-white transition-colors">Produit</a>
            <a href="#formats" className="hover:text-white transition-colors">Modules</a>
            <a href="#workflow" className="hover:text-white transition-colors">Méthode</a>
            <span className="text-white/35">Lokossa • Cotonou • Bénin</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onEnterApp}
              className="hidden sm:inline-flex h-10 px-4 rounded-lg border border-white/10 bg-white/[0.03] text-white font-bold text-sm hover:bg-white/[0.07] transition-colors"
            >
              Ouvrir la démo
            </button>
            <button
              onClick={onEnterApp}
              className="group h-10 px-4 sm:px-5 rounded-lg bg-[#00C969] text-[#080C14] font-bold text-sm transition-all hover:bg-[#3fe08f] flex items-center gap-2 cursor-pointer"
            >
              Lancer
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </nav>

      <main>
        <section className="relative px-4 sm:px-6 pt-16 sm:pt-24 pb-12 text-center">
          <div className="arcade-fade-up inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-semibold text-white/65 shadow-sm mb-7">
            <Sparkles className="w-3.5 h-3.5 text-[#00C969]" />
            Le workspace qui rend votre travail présentable en quelques minutes
          </div>

          <h1 className="arcade-fade-up arcade-delay-1 max-w-6xl mx-auto text-[3.2rem] sm:text-7xl lg:text-[5.8rem] leading-[0.95] tracking-[-0.04em] font-black text-white">
            Votre équipe avance.
            <span className="block text-[#00C969]">WINE raconte le progrès.</span>
          </h1>

          <p className="arcade-fade-up arcade-delay-2 max-w-3xl mx-auto mt-7 text-lg sm:text-xl leading-relaxed text-white/55">
            Créez un espace clair pour piloter projets, contenus, talents et rapports. Une interface premium, lisible et adaptée aux équipes qui exécutent depuis Lokossa, Cotonou et partout au Bénin.
          </p>

          <div className="arcade-fade-up arcade-delay-3 mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={onEnterApp}
              className="group w-full sm:w-auto h-13 px-7 rounded-lg bg-[#00C969] text-[#080C14] font-black text-base hover:bg-[#3fe08f] transition-all flex items-center justify-center gap-3 shadow-[0_16px_38px_rgba(0,201,105,0.25)]"
            >
              Explorer le workspace
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => document.getElementById("product")?.scrollIntoView({ behavior: "smooth" })}
              className="w-full sm:w-auto h-13 px-7 rounded-lg bg-white/[0.03] border border-white/10 text-white font-black text-base hover:bg-white/[0.07] transition-colors flex items-center justify-center gap-2"
            >
              <Play className="w-4 h-4 fill-white" />
              Voir l'illustration
            </button>
          </div>

          <div className="arcade-fade-up arcade-delay-4 mt-14 max-w-6xl mx-auto">
            <div className="rounded-[28px] border border-white/[0.08] bg-[#0D121F] p-3 shadow-[0_30px_90px_rgba(0,0,0,0.5)]">
              <div id="product" className="rounded-[20px] overflow-hidden border border-white/[0.08] bg-[#0A0E18] text-white">
                <div className="h-14 px-5 border-b border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#ff6b6b]" />
                    <span className="w-3 h-3 rounded-full bg-[#ffd166]" />
                    <span className="w-3 h-3 rounded-full bg-[#00C969]" />
                    <span className="hidden sm:inline text-xs text-white/40 font-mono ml-4">wine.bj/workspace</span>
                  </div>
                  <div className="hidden sm:flex items-center gap-2 rounded-full bg-white/8 px-3 py-1.5 text-xs text-white/70">
                    <Zap className="w-3.5 h-3.5 text-[#00C969]" />
                    Sprint actif
                  </div>
                </div>

                <div className="grid lg:grid-cols-[240px_1fr] min-h-[520px] text-left">
                  <aside className="hidden lg:flex flex-col gap-2 border-r border-white/10 bg-[#070A11] p-4">
                    {[
                      ["Tableau de bord", Layers],
                      ["Kanban", Trello],
                      ["Planification", Calendar],
                      ["WINE AI", MessageSquare],
                      ["Rapports", BarChart3]
                    ].map(([label, Icon], index) => {
                      const LucideIcon = Icon as typeof Layers;
                      return (
                        <div
                          key={label as string}
                          className={`rounded-lg px-3 py-3 flex items-center gap-3 text-sm font-bold ${index === 2 ? "bg-[#00C969] text-[#080C14]" : "text-white/50 bg-white/[0.03]"}`}
                        >
                          <LucideIcon className="w-4 h-4" />
                          {label as string}
                        </div>
                      );
                    })}
                  </aside>

                  <div className="bg-[#0D121F] text-white p-4 sm:p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-5">
                      <div>
                        <p className="text-xs text-[#00C969] font-mono uppercase tracking-widest font-black">Marketing & Diffusion</p>
                        <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white">Planification réseaux sociaux</h2>
                      </div>
                      <button className="h-10 px-4 rounded-lg bg-[#00C969] text-[#080C14] text-sm font-black flex items-center gap-2 w-max">
                        <Calendar className="w-4 h-4" />
                        Planifier un post
                      </button>
                    </div>

                    <div className="grid lg:grid-cols-12 gap-4 mb-4">
                      <div className="lg:col-span-6 rounded-2xl bg-[#0A0E18] border border-white/[0.08] p-5 shadow-sm">
                        <div className="flex items-start justify-between">
                          <div>
                            <p className="text-[10px] font-mono uppercase tracking-widest text-[#00C969] font-black">Campagne active</p>
                            <h3 className="mt-2 text-2xl font-black tracking-tight text-white">Présence digitale WINE</h3>
                            <p className="mt-2 text-sm text-white/50 leading-relaxed">Prochaine diffusion à 11:00 pour LinkedIn et WhatsApp Business.</p>
                          </div>
                          <Sparkles className="w-6 h-6 text-[#00C969]" />
                        </div>
                        <div className="grid grid-cols-3 gap-2 mt-5">
                          {[
                            ["3", "Planifiés"],
                            ["2", "Canaux"],
                            ["84", "Score"]
                          ].map(([value, label]) => (
                            <div key={label} className="rounded-xl bg-[#0D121F] border border-white/[0.06] p-3">
                              <p className="font-mono text-2xl font-black text-white">{value}</p>
                              <p className="text-[10px] text-white/40 uppercase font-mono">{label}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="lg:col-span-6 grid sm:grid-cols-2 gap-4">
                        <div className="rounded-2xl bg-[#00C969]/[0.10] border border-[#00C969]/20 p-5">
                          <Clock className="w-5 h-5 text-[#00C969] mb-5" />
                          <p className="text-3xl font-black font-mono text-white">11:00</p>
                          <p className="text-sm text-[#7be8af] mt-2">Créneau recommandé par WINE AI.</p>
                        </div>
                        <div className="rounded-2xl bg-[#0A0E18] border border-white/[0.08] p-5">
                          <Users2 className="w-5 h-5 text-white mb-5" />
                          <p className="text-3xl font-black font-mono text-white">5</p>
                          <p className="text-sm text-white/50 mt-2">collaborateurs actifs sur la campagne.</p>
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4">
                      {["12 Juin", "13 Juin", "14 Juin"].map((day, index) => (
                        <div key={day} className="rounded-2xl bg-[#0A0E18] border border-white/[0.08] p-4 min-h-40">
                          <div className="flex items-center justify-between mb-4">
                            <span className="font-black text-sm text-white">{day}</span>
                            <span className="rounded-full bg-[#0D121F] px-2 py-1 text-[10px] font-mono text-white/40">0{index + 1}</span>
                          </div>
                          <div className="rounded-xl border border-white/[0.06] bg-[#080C14] p-3">
                            <span className="inline-flex rounded-md bg-[#00C969] text-[#080C14] px-2 py-1 text-[9px] font-mono mb-3 font-bold">
                              {index === 0 ? "WA" : index === 1 ? "LI" : "IG"}
                            </span>
                            <p className="text-xs leading-relaxed text-white/45">
                              {index === 0 ? "Tutoriel d'intégration pour l'équipe produit." : index === 1 ? "Point vélocité et avancement Sprint Alpha." : "Coulisses WINE entre Lokossa et Cotonou."}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="mt-10 text-sm text-white/40 font-semibold">Conçu pour les équipes qui veulent montrer le vrai état du travail, simplement.</p>
          <div className="mt-5 overflow-hidden">
            <div className="arcade-marquee flex w-max items-center gap-3">
              {[...toolLogos, ...toolLogos].map((logo, index) => (
                <span key={`${logo}-${index}`} className="rounded-lg border border-white/[0.08] bg-white/[0.03] px-5 py-2.5 text-sm font-black text-white/45 shadow-sm">
                  {logo}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section id="formats" className="px-4 sm:px-6 py-20 sm:py-28">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl mb-12">
              <p className="text-sm font-black text-[#00C969] mb-3">Chaque module devient lisible.</p>
              <h2 className="text-4xl sm:text-6xl leading-none tracking-[-0.04em] font-black text-white">
                Vous pilotez. WINE transforme l'exécution en histoire claire.
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {storyFormats.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="rounded-[22px] bg-[#0D121F] border border-white/[0.08] p-6 min-h-72 shadow-sm hover:-translate-y-1 hover:border-[#00C969]/30 transition-all">
                    <div className="w-12 h-12 rounded-xl bg-white/[0.04] flex items-center justify-center mb-8">
                      <Icon className="w-6 h-6 text-[#00C969]" />
                    </div>
                    <span className="text-xs font-mono uppercase text-[#00C969] font-black">{item.label}</span>
                    <h3 className="text-2xl font-black mt-2 mb-3 tracking-tight text-white">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-white/50">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="workflow" className="px-4 sm:px-6 py-20 bg-[#0A0E18] border-y border-white/[0.06]">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-[0.8fr_1.2fr] gap-12 items-center">
            <div>
              <p className="text-sm font-black text-[#00C969] mb-3">Méthode simple</p>
              <h2 className="text-4xl sm:text-6xl leading-none tracking-[-0.04em] font-black text-white">
                Une page claire vaut mieux que dix outils ouverts.
              </h2>
              <p className="mt-6 text-white/50 text-lg leading-relaxed">
                WINE garde les données opérationnelles au même endroit et les présente dans des formats faciles à lire, partager et décider.
              </p>
              <button
                onClick={onEnterApp}
                className="mt-8 h-12 px-6 rounded-lg bg-[#00C969] text-[#080C14] font-black hover:bg-[#3fe08f] transition-colors inline-flex items-center gap-2"
              >
                Entrer dans WINE
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <div className="grid gap-4">
              {steps.map(([num, title, text]) => (
                <div key={num} className="rounded-[22px] bg-white/[0.03] border border-white/[0.08] p-5 flex gap-5">
                  <div className="w-12 h-12 rounded-xl bg-[#00C969] text-[#080C14] flex items-center justify-center font-mono font-black flex-shrink-0">
                    {num}
                  </div>
                  <div>
                    <h3 className="text-xl font-black mb-2 text-white">{title}</h3>
                    <p className="text-white/50 leading-relaxed">{text}</p>
                  </div>
                  <CheckCircle2 className="w-5 h-5 text-[#00C969] ml-auto flex-shrink-0" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 sm:px-6 py-20 sm:py-28 text-center">
          <div className="max-w-4xl mx-auto rounded-[28px] bg-[#0D121F] border border-white/[0.08] px-6 py-12 sm:p-14 shadow-[0_24px_80px_rgba(0,0,0,0.4)]">
            <ShieldCheck className="w-10 h-10 mx-auto text-[#00C969] mb-6" />
            <h2 className="text-4xl sm:text-6xl leading-none tracking-[-0.04em] font-black text-white">
              Lancez un workspace que votre équipe comprend au premier regard.
            </h2>
            <p className="mt-6 text-lg text-white/50 max-w-2xl mx-auto">
              Des projets, des posts, des talents et des rapports alignés dans une expérience lisible, rapide et premium.
            </p>
            <button
              onClick={onEnterApp}
              className="mt-8 h-13 px-8 rounded-lg bg-[#00C969] text-[#080C14] font-black hover:bg-[#3fe08f] transition-colors inline-flex items-center gap-3"
            >
              Lancer la démo WINE
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/[0.06] py-10 text-sm text-white/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="font-black text-white">WINE Workspace</div>
          <div className="flex items-center gap-5 flex-wrap justify-center">
            <span>Lokossa</span>
            <span>Cotonou</span>
            <span>Bénin</span>
          </div>
          <span>© 2026 WINE. Tous droits réservés.</span>
        </div>
      </footer>
    </div>
  );
}