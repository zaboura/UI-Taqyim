import { Screen } from '../App';
import { Search, Moon, Bell, Plus, FileText, Settings, LayoutDashboard, Library, BrainCircuit, ChevronRight, Clock, Users, ArrowRight, BookOpen, Sparkles } from 'lucide-react';

export default function TeacherTest({ onNavigate }: { onNavigate: (screen: Screen) => void }) {
  return (
    <div className="flex min-h-screen bg-background">
      {/* Teacher Sidebar */}
      <aside className="h-screen w-64 fixed left-0 top-0 bg-surface border-r border-outline-variant z-50 flex flex-col py-6 px-4">
        <div className="flex items-center gap-3 px-2 mb-10 cursor-pointer" onClick={() => onNavigate('login')}>
          <div className="relative">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-on-primary shadow-sm overflow-hidden">
              <BookOpen className="w-5 h-5" />
            </div>
          </div>
          <div>
            <h1 className="text-xl font-extrabold text-primary flex items-baseline gap-1 font-headline tracking-tight">
              Taqyim
            </h1>
            <p className="text-[10px] uppercase tracking-widest text-on-surface-variant font-semibold">
              Espace Enseignant
            </p>
          </div>
        </div>

        <nav className="flex-1 space-y-1.5">
          <button className="w-full flex items-center gap-3 text-on-surface-variant py-2.5 px-3 rounded-lg hover:bg-surface-container hover:text-on-surface transition-all">
            <LayoutDashboard className="w-4 h-4" />
            <span className="text-sm font-medium">Tableau de bord</span>
          </button>
          
          <button className="w-full flex items-center gap-3 py-2.5 px-3 rounded-lg bg-surface-container text-primary font-semibold transition-all">
            <FileText className="w-4 h-4" />
            <span className="text-sm">Mes Évaluations</span>
          </button>

          <button className="w-full flex items-center gap-3 text-on-surface-variant py-2.5 px-3 rounded-lg hover:bg-surface-container hover:text-on-surface transition-all">
            <Library className="w-4 h-4" />
            <span className="text-sm font-medium">Banque de QCM</span>
          </button>

          <button className="w-full flex items-center gap-3 text-on-surface-variant py-2.5 px-3 rounded-lg hover:bg-surface-container hover:text-on-surface transition-all">
            <Users className="w-4 h-4" />
            <span className="text-sm font-medium">Mes Classes</span>
          </button>
        </nav>

        <div className="mt-auto pt-6 border-t border-outline-variant">
          <button className="w-full flex items-center gap-3 text-on-surface-variant py-2.5 px-3 rounded-lg hover:bg-surface-container hover:text-on-surface transition-all">
            <Settings className="w-4 h-4" />
            <span className="text-sm font-medium">Paramètres</span>
          </button>
          
          <div className="mt-4 px-3 py-3 rounded-xl hover:bg-surface-container cursor-pointer transition-colors flex items-center gap-3">
            <img 
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
              alt="Teacher" 
              className="w-9 h-9 rounded-full border border-outline-variant object-cover"
            />
            <div className="overflow-hidden text-left flex-1">
              <p className="text-sm font-semibold truncate text-on-surface">
                Dr. Youssef Alaoui
              </p>
              <p className="text-xs text-on-surface-variant truncate">
                Mathématiques
              </p>
            </div>
          </div>
        </div>
      </aside>

      <main className="ml-64 flex-1 flex flex-col relative">
        <header className="sticky top-0 z-40 bg-surface/80 backdrop-blur-md h-16 px-8 flex justify-between items-center border-b border-outline-variant">
          <div className="flex items-center gap-4 flex-1">
            <div className="relative w-full max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant w-4 h-4" />
              <input 
                type="text" 
                placeholder="Rechercher..." 
                className="w-full bg-surface-container-low border border-outline-variant rounded-lg pl-9 pr-4 py-2 text-sm focus:ring-2 focus:ring-secondary/20 focus:border-secondary placeholder:text-on-surface-variant/70 text-on-surface outline-none transition-all"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <button className="p-2 text-on-surface-variant hover:bg-surface-container rounded-lg transition-colors">
                <Moon className="w-4 h-4" />
              </button>
              <button className="p-2 text-on-surface-variant hover:bg-surface-container rounded-lg transition-colors relative">
                <Bell className="w-4 h-4" />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-error rounded-full border-2 border-surface"></span>
              </button>
            </div>
            <div className="h-6 w-[1px] bg-outline-variant"></div>
            <button className="bg-primary text-on-primary px-4 py-2 rounded-lg text-sm font-semibold flex items-center gap-2 hover:bg-primary/90 transition-all active:scale-95 shadow-sm">
              <Plus className="w-4 h-4" />
              Nouveau Test
            </button>
          </div>
        </header>

        <div className="p-8 max-w-[1200px] mx-auto w-full">
          <div className="mb-8">
            <div className="flex items-center gap-2 text-sm text-on-surface-variant mb-3">
              <span className="hover:text-primary cursor-pointer transition-colors">Mes Évaluations</span>
              <ChevronRight className="w-4 h-4" />
              <span className="text-on-surface font-medium">Générateur IA</span>
            </div>
            <h2 className="text-3xl font-bold font-headline tracking-tight text-on-surface flex items-center gap-3">
              <div className="p-2 bg-secondary/10 rounded-xl">
                <BrainCircuit className="w-6 h-6 text-secondary" />
              </div>
              Générateur d'Évaluation
            </h2>
            <p className="text-on-surface-variant mt-3 max-w-2xl text-sm leading-relaxed">
              Configurez les paramètres ci-dessous pour générer une évaluation sur mesure adaptée au niveau de vos élèves. L'IA se chargera de créer le contenu.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div className="glass-card p-6 space-y-6">
                <h3 className="text-base font-semibold text-on-surface border-b border-outline-variant pb-4">Paramètres du Test</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-xs font-semibold text-on-surface-variant">Niveau Scolaire</label>
                    <select className="w-full bg-surface border border-outline rounded-xl px-4 py-2.5 text-sm text-on-surface focus:ring-2 focus:ring-secondary/20 focus:border-secondary outline-none transition-all shadow-sm">
                      <option>2ème Baccalauréat</option>
                      <option>1ère Baccalauréat</option>
                      <option>Tronc Commun</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="block text-xs font-semibold text-on-surface-variant">Filière</label>
                    <select className="w-full bg-surface border border-outline rounded-xl px-4 py-2.5 text-sm text-on-surface focus:ring-2 focus:ring-secondary/20 focus:border-secondary outline-none transition-all shadow-sm">
                      <option>Sciences Mathématiques A</option>
                      <option>Sciences Mathématiques B</option>
                      <option>Sciences Physiques</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-semibold text-on-surface-variant">Chapitres / Thèmes</label>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-3 py-1.5 bg-secondary-container text-on-secondary-container rounded-lg text-xs font-medium flex items-center gap-1.5 border border-secondary/10">
                      Nombres Complexes <button className="hover:text-secondary opacity-70 hover:opacity-100"><Plus className="w-3 h-3 rotate-45" /></button>
                    </span>
                    <span className="px-3 py-1.5 bg-secondary-container text-on-secondary-container rounded-lg text-xs font-medium flex items-center gap-1.5 border border-secondary/10">
                      Calcul Intégral <button className="hover:text-secondary opacity-70 hover:opacity-100"><Plus className="w-3 h-3 rotate-45" /></button>
                    </span>
                  </div>
                  <input 
                    type="text" 
                    placeholder="Rechercher ou ajouter un chapitre..." 
                    className="w-full bg-surface border border-outline rounded-xl px-4 py-2.5 text-sm text-on-surface focus:ring-2 focus:ring-secondary/20 focus:border-secondary outline-none transition-all shadow-sm placeholder:text-on-surface-variant/50"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-xs font-semibold text-on-surface-variant">Difficulté</label>
                    <div className="flex gap-2 p-1 bg-surface-container-low border border-outline-variant rounded-xl">
                      {['Facile', 'Moyen', 'Difficile'].map((level) => (
                        <button 
                          key={level}
                          className={`flex-1 py-1.5 rounded-lg text-sm font-medium transition-all ${level === 'Moyen' ? 'bg-surface shadow-sm text-on-surface border border-outline/50' : 'text-on-surface-variant hover:text-on-surface'}`}
                        >
                          {level}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="block text-xs font-semibold text-on-surface-variant">Durée estimée (minutes)</label>
                    <div className="relative">
                      <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-on-surface-variant" />
                      <input 
                        type="number" 
                        defaultValue={120}
                        className="w-full bg-surface border border-outline rounded-xl pl-9 pr-4 py-2.5 text-sm text-on-surface focus:ring-2 focus:ring-secondary/20 focus:border-secondary outline-none transition-all shadow-sm"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6 space-y-6">
                <h3 className="text-base font-semibold text-on-surface border-b border-outline-variant pb-4">Structure de l'Évaluation</h3>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-4 bg-surface border border-outline-variant rounded-xl hover:border-outline transition-colors group">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-surface-container-high text-on-surface-variant flex items-center justify-center font-bold text-xs">QCM</div>
                      <div>
                        <p className="font-semibold text-sm text-on-surface">Questions à Choix Multiples</p>
                        <p className="text-xs text-on-surface-variant mt-0.5">Questions rapides de cours</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <input type="number" defaultValue={5} className="w-16 bg-surface border border-outline rounded-lg px-2 py-1.5 text-center text-sm text-on-surface outline-none focus:border-secondary focus:ring-1 focus:ring-secondary" />
                      <span className="text-xs font-medium text-on-surface-variant">pts</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-surface border border-outline-variant rounded-xl hover:border-outline transition-colors group">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-surface-container-high text-on-surface-variant flex items-center justify-center font-bold text-xs">EX</div>
                      <div>
                        <p className="font-semibold text-sm text-on-surface">Exercices d'Application</p>
                        <p className="text-xs text-on-surface-variant mt-0.5">Problèmes structurés</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <input type="number" defaultValue={2} className="w-16 bg-surface border border-outline rounded-lg px-2 py-1.5 text-center text-sm text-on-surface outline-none focus:border-secondary focus:ring-1 focus:ring-secondary" />
                      <span className="text-xs font-medium text-on-surface-variant">exos</span>
                    </div>
                  </div>
                  
                  <button className="w-full py-3 mt-2 border border-dashed border-outline rounded-xl text-on-surface-variant font-medium text-sm hover:bg-surface-container-low hover:text-on-surface transition-all flex items-center justify-center gap-2">
                    <Plus className="w-4 h-4" /> Ajouter une section
                  </button>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="glass-card p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none"></div>
                
                <h3 className="text-base font-semibold text-on-surface mb-5 relative z-10">Résumé de la génération</h3>
                
                <div className="space-y-3 relative z-10">
                  <div className="flex justify-between items-center pb-3 border-b border-outline-variant">
                    <span className="text-sm text-on-surface-variant">Matière</span>
                    <span className="text-sm font-medium text-on-surface">Mathématiques</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-outline-variant">
                    <span className="text-sm text-on-surface-variant">Niveau</span>
                    <span className="text-sm font-medium text-on-surface">2ème Bac SM</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-outline-variant">
                    <span className="text-sm text-on-surface-variant">Total Points</span>
                    <span className="text-sm font-semibold text-on-surface">20 pts</span>
                  </div>
                  <div className="flex justify-between items-center pt-1">
                    <span className="text-sm text-on-surface-variant">Coût estimé</span>
                    <span className="text-sm font-semibold text-secondary flex items-center gap-1.5 bg-secondary/10 px-2 py-1 rounded-md">
                      <BrainCircuit className="w-3.5 h-3.5" /> ~150 tokens
                    </span>
                  </div>
                </div>

                <button className="w-full mt-6 py-3 bg-primary text-on-primary font-semibold rounded-xl premium-shadow hover:bg-primary/90 active:scale-[0.98] transition-all flex items-center justify-center gap-2 relative z-10">
                  <Sparkles className="w-4 h-4 text-secondary" />
                  Générer l'Évaluation
                </button>
              </div>

              <div className="glass-card p-6">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-on-surface-variant mb-4">Modèles Récents</h4>
                <ul className="space-y-2">
                  <li className="flex items-center justify-between p-2.5 -mx-2.5 hover:bg-surface-container-low rounded-lg cursor-pointer transition-colors group">
                    <div className="flex items-center gap-3">
                      <div className="p-1.5 bg-surface-container rounded-md text-on-surface-variant group-hover:text-secondary transition-colors">
                        <FileText className="w-4 h-4" />
                      </div>
                      <span className="text-sm font-medium text-on-surface">Contrôle N°1 - S1</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-outline-variant opacity-0 group-hover:opacity-100 transition-all" />
                  </li>
                  <li className="flex items-center justify-between p-2.5 -mx-2.5 hover:bg-surface-container-low rounded-lg cursor-pointer transition-colors group">
                    <div className="flex items-center gap-3">
                      <div className="p-1.5 bg-surface-container rounded-md text-on-surface-variant group-hover:text-secondary transition-colors">
                        <FileText className="w-4 h-4" />
                      </div>
                      <span className="text-sm font-medium text-on-surface">Examen Blanc 2023</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-outline-variant opacity-0 group-hover:opacity-100 transition-all" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
