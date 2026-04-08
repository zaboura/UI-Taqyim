import { Screen } from '../App';
import Sidebar from '../components/Sidebar';
import { Search, Moon, Bell, Plus, Building2, GraduationCap, Users, Sparkles, MoreVertical, TrendingUp } from 'lucide-react';

export default function SuperAdminSchools({ onNavigate }: { onNavigate: (screen: Screen) => void }) {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar currentScreen="superadmin-schools" onNavigate={onNavigate} role="superadmin" />
      
      <main className="ml-64 flex-1 flex flex-col relative">
        <header className="sticky top-0 z-40 bg-surface/80 backdrop-blur-md h-16 px-8 flex justify-between items-center border-b border-outline-variant">
          <div className="flex items-center gap-4 flex-1">
            <div className="relative w-full max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant w-4 h-4" />
              <input 
                type="text" 
                placeholder="Rechercher une école ou un enseignant..." 
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
              Générer un Test
            </button>
          </div>
        </header>

        <div className="p-8 max-w-[1600px] mx-auto w-full">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <h2 className="text-3xl font-bold font-headline tracking-tight text-on-surface">Gestion des Établissements</h2>
              <p className="text-on-surface-variant mt-2 text-sm">Supervision globale du réseau Taqyim et contrôle des licences.</p>
            </div>
            <button className="bg-surface border border-outline text-on-surface px-5 py-2.5 rounded-xl font-semibold flex items-center gap-2 hover:bg-surface-container-low transition-all shadow-sm">
              <Building2 className="w-4 h-4" />
              Ajouter une École
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="glass-card p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 bg-secondary/10 rounded-lg text-secondary">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <span className="text-xs text-secondary font-semibold bg-secondary/10 px-2 py-1 rounded-md">+12%</span>
              </div>
              <p className="text-on-surface-variant text-xs font-semibold uppercase tracking-wider">Total Écoles</p>
              <h3 className="text-3xl font-bold mt-1 text-on-surface">142</h3>
            </div>
            
            <div className="glass-card p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 bg-tertiary/10 rounded-lg text-tertiary">
                  <Users className="w-5 h-5" />
                </div>
                <span className="text-xs text-tertiary font-semibold bg-tertiary/10 px-2 py-1 rounded-md">+24%</span>
              </div>
              <p className="text-on-surface-variant text-xs font-semibold uppercase tracking-wider">Total Utilisateurs</p>
              <h3 className="text-3xl font-bold mt-1 text-on-surface">8,432</h3>
            </div>

            <div className="md:col-span-2 glass-card p-6 relative overflow-hidden">
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <p className="text-on-surface-variant text-xs font-semibold uppercase tracking-wider">Utilisation Tokens AI</p>
                  <h3 className="text-3xl font-bold mt-1 text-on-surface">1.2M <span className="text-sm font-medium text-on-surface-variant">/ 2M</span></h3>
                </div>
                <div className="w-full bg-surface-container-high rounded-full h-2 mt-4 overflow-hidden">
                  <div className="bg-secondary h-2 rounded-full w-[60%]"></div>
                </div>
              </div>
              <Sparkles className="absolute -right-4 -bottom-4 w-32 h-32 text-secondary/5 select-none pointer-events-none" />
            </div>
          </div>

          <div className="glass-card overflow-hidden">
            <div className="p-5 flex flex-wrap items-center justify-between gap-4 border-b border-outline-variant">
              <div className="flex items-center gap-3">
                <select className="bg-surface border border-outline rounded-lg px-3 py-2 text-sm text-on-surface focus:ring-2 focus:ring-secondary/20 focus:border-secondary cursor-pointer outline-none shadow-sm">
                  <option>Toutes les villes</option>
                  <option>Casablanca</option>
                  <option>Rabat</option>
                </select>
                <select className="bg-surface border border-outline rounded-lg px-3 py-2 text-sm text-on-surface focus:ring-2 focus:ring-secondary/20 focus:border-secondary cursor-pointer outline-none shadow-sm">
                  <option>Statut: Actif</option>
                  <option>Statut: En attente</option>
                </select>
              </div>
              <div className="text-sm text-on-surface-variant">
                Affichage de <span className="font-medium text-on-surface">1-10</span> sur <span className="font-medium text-on-surface">142</span>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="text-on-surface-variant text-xs font-semibold border-b border-outline-variant bg-surface-container-lowest">
                    <th className="px-6 py-4 font-medium">École</th>
                    <th className="px-6 py-4 font-medium">Slug</th>
                    <th className="px-6 py-4 font-medium">Ville</th>
                    <th className="px-6 py-4 font-medium">Enseignants</th>
                    <th className="px-6 py-4 font-medium">Tests Générés</th>
                    <th className="px-6 py-4 font-medium">Statut</th>
                    <th className="px-6 py-4 font-medium">Créé le</th>
                    <th className="px-6 py-4 text-right font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {[
                    { id: 'GS', name: 'Groupe Scolaire Al-Amal', type: 'Licence Premium', slug: 'al-amal-sc', city: 'Casablanca', teachers: 42, tests: '1,204', status: 'Actif', date: '12 Oct 2023', color: 'bg-secondary/10 text-secondary' },
                    { id: 'LY', name: 'Lycée Descartes', type: 'Licence Institutionnelle', slug: 'descartes-rabat', city: 'Rabat', teachers: 128, tests: '4,590', status: 'Actif', date: '05 Jan 2024', color: 'bg-primary/10 text-primary' },
                    { id: 'EB', name: 'École Benchaachoua', type: "Période d'essai", slug: 'eb-marrakech', city: 'Marrakech', teachers: 12, tests: '86', status: 'En attente', date: '20 Fév 2024', color: 'bg-tertiary/10 text-tertiary' },
                  ].map((school, i) => (
                    <tr key={i} className="group hover:bg-surface-container-low transition-colors border-b border-outline-variant last:border-0">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className={`w-9 h-9 rounded-lg flex items-center justify-center font-bold text-xs ${school.color}`}>{school.id}</div>
                          <div>
                            <p className="font-semibold text-on-surface">{school.name}</p>
                            <p className="text-xs text-on-surface-variant mt-0.5">{school.type}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 font-mono text-xs text-on-surface-variant">{school.slug}</td>
                      <td className="px-6 py-4 text-on-surface">{school.city}</td>
                      <td className="px-6 py-4 font-medium text-on-surface">{school.teachers}</td>
                      <td className="px-6 py-4 font-medium text-on-surface">{school.tests}</td>
                      <td className="px-6 py-4">
                        <span className={`px-2.5 py-1 rounded-md text-[10px] font-semibold uppercase tracking-wider ${school.status === 'Actif' ? 'bg-secondary/10 text-secondary border border-secondary/20' : 'bg-tertiary/10 text-tertiary border border-tertiary/20'}`}>
                          {school.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-on-surface-variant text-xs">{school.date}</td>
                      <td className="px-6 py-4 text-right">
                        <button className="p-1.5 text-on-surface-variant hover:text-on-surface hover:bg-surface-container rounded-md transition-colors">
                          <MoreVertical className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-4 flex items-center justify-between border-t border-outline-variant bg-surface-container-lowest">
              <button className="px-3 py-1.5 text-sm font-medium text-on-surface-variant hover:text-on-surface hover:bg-surface-container rounded-md transition-colors">Précédent</button>
              <div className="flex gap-1">
                <button className="w-8 h-8 rounded-md bg-surface border border-outline text-on-surface text-sm font-medium shadow-sm">1</button>
                <button className="w-8 h-8 rounded-md hover:bg-surface-container text-on-surface-variant text-sm font-medium transition-colors">2</button>
                <button className="w-8 h-8 rounded-md hover:bg-surface-container text-on-surface-variant text-sm font-medium transition-colors">3</button>
                <span className="w-8 h-8 flex items-center justify-center text-on-surface-variant text-sm">...</span>
                <button className="w-8 h-8 rounded-md hover:bg-surface-container text-on-surface-variant text-sm font-medium transition-colors">15</button>
              </div>
              <button className="px-3 py-1.5 text-sm font-medium text-on-surface-variant hover:text-on-surface hover:bg-surface-container rounded-md transition-colors">Suivant</button>
            </div>
          </div>

          <div className="mt-8 flex flex-col lg:flex-row gap-6">
            <div className="flex-1 glass-card p-6 overflow-hidden relative">
              <h4 className="text-base font-semibold mb-6 flex items-center gap-2 text-on-surface">
                <TrendingUp className="text-secondary w-5 h-5" />
                Croissance du Réseau
              </h4>
              <div className="h-48 flex items-end justify-between gap-2 sm:gap-4">
                {[40, 55, 45, 70, 90, 85].map((h, i) => (
                  <div key={i} className="flex-1 bg-secondary/20 rounded-t-md relative group transition-all hover:bg-secondary/40" style={{ height: `${h}%` }}></div>
                ))}
              </div>
              <div className="flex justify-between mt-3 text-[10px] uppercase font-semibold text-on-surface-variant tracking-wider">
                <span>Sept</span><span>Oct</span><span>Nov</span><span>Déc</span><span>Jan</span><span>Fév</span>
              </div>
            </div>
            
            <div className="w-full lg:w-80 space-y-6">
              <div className="bg-secondary/5 border border-secondary/20 rounded-2xl p-5 text-on-surface">
                <h5 className="font-semibold flex items-center gap-2 mb-2 text-sm text-secondary">
                  <Sparkles className="w-4 h-4" />
                  Quick Insight
                </h5>
                <p className="text-sm leading-relaxed text-on-surface-variant">
                  Le Lycée Descartes a généré plus de 450 tests ce mois-ci, soit une augmentation de <span className="font-medium text-on-surface">15%</span> par rapport au mois dernier.
                </p>
                <button className="mt-3 text-xs font-semibold text-secondary hover:text-secondary-container transition-colors">Voir le rapport →</button>
              </div>
              
              <div className="glass-card p-5">
                <h5 className="font-semibold text-sm mb-4 text-on-surface">Derniers Événements</h5>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <div className="w-2 h-2 mt-1.5 rounded-full bg-secondary shrink-0"></div>
                    <div className="text-sm">
                      <p className="font-medium text-on-surface">Nouvelle école inscrite</p>
                      <p className="text-xs text-on-surface-variant mt-0.5">École Atlas à Tanger</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="w-2 h-2 mt-1.5 rounded-full bg-error shrink-0"></div>
                    <div className="text-sm">
                      <p className="font-medium text-on-surface">Alerte Token</p>
                      <p className="text-xs text-on-surface-variant mt-0.5">Seuil de 80% atteint pour GS Al-Amal</p>
                    </div>
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
