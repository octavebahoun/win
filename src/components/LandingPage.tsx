import React from "react";
import { 
  Rocket, 
  Layers, 
  MessageSquare, 
  Calendar, 
  BarChart3, 
  Users2, 
  ArrowRight, 
  CheckCircle,
  Network,
  Zap,
  Globe2,
  Lock
} from "lucide-react";

interface LandingPageProps {
  onEnterApp: () => void;
}

export default function LandingPage({ onEnterApp }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-[#060913] text-white overflow-x-hidden font-sans selection:bg-[#00C969]/30 selection:text-[#40e682]">
      {/* Background radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1400px] h-[600px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#00C969]/15 via-transparent to-transparent pointer-events-none" />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f29370b_1px,transparent_1px),linear-gradient(to_bottom,#1f29370b_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      {/* Header / Nav */}
      <nav className="relative z-50 border-b border-gray-800/60 bg-[#060913]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#00C969] to-[#40e682] flex items-center justify-center shadow-[0_0_20px_rgba(0,201,105,0.3)]">
              <span className="font-mono font-extrabold text-[#060913] text-xl tracking-tighter">W</span>
            </div>
            <div>
              <span className="font-bold text-xl tracking-wider uppercase bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">WINE</span>
              <span className="text-[9px] font-mono block text-[#00C969] tracking-widest font-semibold">WORKSPACE</span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm text-gray-400 font-medium">
            <a href="#features" className="hover:text-white transition-colors duration-200">Fonctionnalités</a>
            <a href="#integrations" className="hover:text-white transition-colors duration-200">Intégrations</a>
            <a href="#about" className="hover:text-white transition-colors duration-200">À propos</a>
            <div className="w-1.5 h-1.5 rounded-full bg-[#00C969]" />
            <span className="text-gray-300">Dakar • Abidjan • Douala</span>
          </div>

          <button 
            onClick={onEnterApp}
            className="group relative px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#00C969] to-[#40e682] text-[#060913] font-bold text-sm overflow-hidden transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,201,105,0.4)] hover:scale-[1.02] flex items-center gap-2 cursor-pointer"
          >
            Lancer la démo
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pt-16 pb-24 text-center md:pt-28 md:pb-36">
        {/* Africa Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-900/80 border border-gray-800 text-xs text-gray-300 mb-8 animate-fade-in">
          <Globe2 className="w-3.5 h-3.5 text-[#00C969]" />
          <span>La plateforme n°1 des startups en Afrique Francophone</span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-sans font-extrabold tracking-tight leading-tight max-w-5xl mx-auto mb-8 bg-gradient-to-b from-white via-gray-100 to-gray-400 bg-clip-text text-transparent">
          Votre équipe. Un seul espace. <br className="hidden md:block" />
          <span className="bg-gradient-to-r from-[#00C969] to-[#40e682] bg-clip-text text-transparent">Zéro friction.</span>
        </h1>

        {/* Subtitle */}
        <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed">
          Propulsez vos projets, planifiez vos réseaux sociaux et gérez vos talents locaux. Conçu spécifiquement pour l'agilité des startups africaines en pleine croissance.
        </p>

        {/* CTA Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button 
            onClick={onEnterApp}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#00C969] to-[#40e682] text-[#060913] font-bold text-lg hover:shadow-[0_0_30px_rgba(0,201,105,0.5)] transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer"
          >
            Accéder à l'espace démo
            <Zap className="w-5 h-5 fill-[#060913]" />
          </button>
          
          <button 
            onClick={() => {
              const el = document.getElementById("features");
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gray-900/60 hover:bg-gray-900 border border-gray-800 text-gray-300 font-semibold hover:text-white transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
          >
            Découvrir l'univers WINE
          </button>
        </div>

        {/* Mock Screen Preview Container */}
        <div className="relative max-w-5xl mx-auto rounded-2xl border border-gray-800 bg-gradient-to-b from-[#0e1424] to-[#070a13] p-2 shadow-[0_30px_100px_rgba(0,0,0,0.8)]">
          <div className="absolute -top-12 left-1/4 w-96 h-96 bg-[#00C969]/10 rounded-full blur-[100px] pointer-events-none" />
          
          {/* Mock Dashboard Topbar */}
          <div className="rounded-xl overflow-hidden border border-gray-800 bg-[#080d19] aspect-[16/9] flex flex-col">
            {/* Header Mock */}
            <div className="h-12 bg-[#060a12] border-b border-gray-800/60 px-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="text-xs text-gray-500 ml-4 font-mono">https://wine-saas.africa/workspace</span>
              </div>
              <div className="w-32 h-5 bg-gray-900 rounded-md border border-gray-800/80" />
            </div>

            {/* Dashboard Contents Mock */}
            <div className="flex-1 grid grid-cols-5 text-left text-xs text-gray-400">
              {/* Sidebar Mock */}
              <div className="col-span-1 border-r border-gray-800/60 bg-[#070b14] p-3 flex flex-col gap-2">
                <div className="h-6 w-full bg-[#00C969]/10 rounded border border-[#00C969]/20 mb-2" />
                <div className="h-4 w-3/4 bg-gray-900 rounded" />
                <div className="h-4 w-5/6 bg-gray-900 rounded" />
                <div className="h-4 w-2/3 bg-gray-900 rounded" />
                <div className="h-4 w-4/5 bg-gray-900 rounded" />
              </div>

              {/* Grid content mock */}
              <div className="col-span-4 bg-[#080d19] p-4 flex flex-col gap-4 overflow-hidden">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="h-4 w-36 bg-gray-800 rounded-md" />
                    <div className="h-3 w-48 bg-gray-900 rounded-md" />
                  </div>
                  <div className="h-7 w-24 bg-[#00C969] rounded-md" />
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div className="p-3 bg-[#0a1020] border border-gray-800 rounded-lg space-y-2">
                    <div className="h-3 w-16 bg-gray-800 rounded" />
                    <div className="h-6 w-10 bg-white rounded" />
                  </div>
                  <div className="p-3 bg-[#0a1020] border border-gray-800 rounded-lg space-y-2">
                    <div className="h-3 w-16 bg-gray-800 rounded" />
                    <div className="h-6 w-10 bg-[#00C969] rounded" />
                  </div>
                  <div className="p-3 bg-[#0a1020] border border-gray-800 rounded-lg space-y-2">
                    <div className="h-3 w-16 bg-gray-800 rounded" />
                    <div className="h-6 w-10 bg-gray-800 rounded" />
                  </div>
                </div>

                <div className="flex-1 border border-gray-800 bg-[#060a12] rounded-lg p-3 space-y-3">
                  <div className="h-3 w-1/4 bg-gray-800 rounded" />
                  <div className="space-y-2">
                    <div className="h-6 w-full bg-[#090f1e] rounded border border-gray-800/80" />
                    <div className="h-6 w-full bg-[#090f1e] rounded border border-gray-800/80" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integrated Tools List */}
      <section id="integrations" className="py-12 bg-gray-950/40 border-y border-gray-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-xs uppercase font-mono tracking-widest text-[#00C969] font-semibold mb-6">
            Intégrations Natives pour vos opérations quotidiennes
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-70">
            <span className="font-sans font-bold text-lg text-gray-400">Notion</span>
            <span className="font-sans font-bold text-lg text-[#40e682] bg-gray-900 px-3 py-1 rounded border border-gray-800">WhatsApp Business</span>
            <span className="font-sans font-bold text-lg text-gray-400">Slack</span>
            <span className="font-sans font-bold text-lg text-gray-400">Figma</span>
            <span className="font-sans font-bold text-lg text-gray-400">GitHub</span>
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section id="features" className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-sans text-white">
            Tout ce dont votre startup a besoin pour décoller
          </h2>
          <p className="text-gray-400">
            Fini la dispersion dans 10 outils différents. WINE unifie vos workflows critiques dans un tableau de bord à la fluidité absolue.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="p-8 rounded-2xl bg-gradient-to-b from-[#0b101d] to-[#070a13] border border-gray-800/80 hover:border-[#00C969]/50 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-xl bg-[#00C969]/10 border border-[#00C969]/20 flex items-center justify-center text-[#00C969] mb-6 group-hover:bg-[#00C969] group-hover:text-[#060913] transition-colors duration-300">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">Kanban Agile & Sprints</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Pilotez vos développements de produits de manière visuelle. Assignez des tâches, configurez la priorité et validez vos sprints d'un geste.
            </p>
            <div className="text-xs text-[#00C969] font-mono font-semibold flex items-center gap-1">
              <span>Voir le module Kanban</span>
              <ArrowRight className="w-3 h-3" />
            </div>
          </div>

          {/* Feature 2 */}
          <div className="p-8 rounded-2xl bg-gradient-to-b from-[#0b101d] to-[#070a13] border border-gray-800/80 hover:border-[#00C969]/50 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-xl bg-[#00C969]/10 border border-[#00C969]/20 flex items-center justify-center text-[#00C969] mb-6 group-hover:bg-[#00C969] group-hover:text-[#060913] transition-colors duration-300">
              <MessageSquare className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">Chat Collaboratif & IA</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Discutez avec vos collaborateurs et tirez parti de l'assistant WINE AI propulsé par Gemini pour synthétiser vos sprints ou rédiger du code.
            </p>
            <div className="text-xs text-[#00C969] font-mono font-semibold flex items-center gap-1">
              <span>Intégration Gemini 3.5</span>
              <ArrowRight className="w-3 h-3" />
            </div>
          </div>

          {/* Feature 3 */}
          <div className="p-8 rounded-2xl bg-gradient-to-b from-[#0b101d] to-[#070a13] border border-gray-800/80 hover:border-[#00C969]/50 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-xl bg-[#00C969]/10 border border-[#00C969]/20 flex items-center justify-center text-[#00C969] mb-6 group-hover:bg-[#00C969] group-hover:text-[#060913] transition-colors duration-300">
              <Calendar className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">Planification Réseaux</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Un calendrier éditorial puissant pour planifier vos campagnes de communication sur WhatsApp, LinkedIn, Instagram et Facebook.
            </p>
            <div className="text-xs text-[#00C969] font-mono font-semibold flex items-center gap-1">
              <span>Optimisé pour l'Afrique</span>
              <ArrowRight className="w-3 h-3" />
            </div>
          </div>

          {/* Feature 4 */}
          <div className="p-8 rounded-2xl bg-gradient-to-b from-[#0b101d] to-[#070a13] border border-gray-800/80 hover:border-[#00C969]/50 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-xl bg-[#00C969]/10 border border-[#00C969]/20 flex items-center justify-center text-[#00C969] mb-6 group-hover:bg-[#00C969] group-hover:text-[#060913] transition-colors duration-300">
              <BarChart3 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">Rapports & Analytics</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Suivez la vélocité moyenne de vos sprints de développement. Visualisez la répartition des tâches, l'efficacité des membres et exportez les rapports.
            </p>
            <div className="text-xs text-[#00C969] font-mono font-semibold flex items-center gap-1">
              <span>Visualisation Recharts</span>
              <ArrowRight className="w-3 h-3" />
            </div>
          </div>

          {/* Feature 5 */}
          <div className="p-8 rounded-2xl bg-gradient-to-b from-[#0b101d] to-[#070a13] border border-gray-800/80 hover:border-[#00C969]/50 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-xl bg-[#00C969]/10 border border-[#00C969]/20 flex items-center justify-center text-[#00C969] mb-6 group-hover:bg-[#00C969] group-hover:text-[#060913] transition-colors duration-300">
              <Users2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">RH & Gestion des Talents</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Gérez vos équipes en télétravail ou en présentiel. Suivez les soldes de congés, types de contrat et dates d'entrée des collaborateurs.
            </p>
            <div className="text-xs text-[#00C969] font-mono font-semibold flex items-center gap-1">
              <span>Workspace RH centralisé</span>
              <ArrowRight className="w-3 h-3" />
            </div>
          </div>

          {/* Feature 6 */}
          <div className="p-8 rounded-2xl bg-gradient-to-b from-[#0b101d] to-[#070a13] border border-gray-800/80 hover:border-[#00C969]/50 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-xl bg-[#00C969]/10 border border-[#00C969]/20 flex items-center justify-center text-[#00C969] mb-6 group-hover:bg-[#00C969] group-hover:text-[#060913] transition-colors duration-300">
              <Lock className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">Sécurisé & Hors-ligne</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Une infrastructure ultra-légère conçue pour consommer un minimum de bande passante, avec sauvegarde locale persistante automatique.
            </p>
            <div className="text-xs text-[#00C969] font-mono font-semibold flex items-center gap-1">
              <span>Sécurisé de bout en bout</span>
              <ArrowRight className="w-3 h-3" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 relative bg-gradient-to-t from-gray-950 to-transparent">
        <div className="max-w-4xl mx-auto px-6 text-center border border-gray-800/80 bg-[#070b14]/50 rounded-3xl py-12 backdrop-blur-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#00C969]/5 rounded-full blur-[80px]" />
          
          <h3 className="text-3xl font-bold mb-4">Prêt à accélérer la croissance de votre startup ?</h3>
          <p className="text-gray-400 max-w-xl mx-auto mb-8">
            Rejoignez des centaines de créateurs, développeurs et marketeurs africains sur le workspace le plus fluide du continent.
          </p>
          <button 
            onClick={onEnterApp}
            className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#00C969] to-[#40e682] text-[#060913] font-bold text-base hover:shadow-[0_0_25px_rgba(0,201,105,0.4)] transition-all duration-300 flex items-center gap-2 mx-auto cursor-pointer"
          >
            Lancer l'espace démo
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-900 bg-gray-950 py-12 text-sm text-gray-500">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="font-bold text-gray-300">WINE SaaS</span>
            <span>• Le workspace souverain pour l'Afrique</span>
          </div>
          <div className="flex items-center gap-6">
            <span>Dakar</span>
            <span>Abidjan</span>
            <span>Douala</span>
            <span>Kigali</span>
          </div>
          <div>
            <span>© 2026 WINE. Tous droits réservés.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
