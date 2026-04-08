import { Screen } from '../App';
import Sidebar from '../components/Sidebar';
import { Search, Moon, Bell, Plus, Users, GraduationCap, FileText, MoreVertical, CheckCircle2, XCircle, TrendingUp } from 'lucide-react';

export default function AdminTeachers({ onNavigate }: { onNavigate: (screen: Screen) => void }) {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar currentScreen="admin-teachers" onNavigate={onNavigate} role="admin" />
      
      <main className="ml-64 flex-1 flex flex-col relative">
        <header className="sticky top-0 z-40 bg-surface/80 backdrop-blur-md h-16 px-8 flex justify-between items-center border-b border-outline-variant">
          <div className="flex items-center gap-4 flex-1">
            <div className="relative w-full max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant w-4 h-4" />
              <input 
                type="text" 
                placeholder="Rechercher un enseignant..." 
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
              <h2 className="text-3xl font-bold font-headline tracking-tight text-on-surface">Gestion des Enseignants</h2>
              <p className="text-on-surface-variant mt-2 text-sm">Gérez les accès et suivez l'activité de vos professeurs.</p>
            </div>
            <button className="bg-surface border border-outline text-on-surface px-5 py-2.5 rounded-xl font-semibold flex items-center gap-2 hover:bg-surface-container-low transition-all shadow-sm">
              <Users className="w-4 h-4" />
              Inviter un Enseignant
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="glass-card p-6 border-l-4 border-l-secondary">
              <div className="flex items-center justify-between mb-2">
                <p className="text-on-surface-variant text-xs font-semibold uppercase tracking-wider">Enseignants Actifs</p>
                <div className="p-1.5 bg-secondary/10 rounded-md text-secondary">
                  <Users className="w-4 h-4" />
                </div>
              </div>
              <h3 className="text-3xl font-bold text-on-surface mt-2">42</h3>
              <p className="text-xs text-secondary font-medium mt-2 flex items-center gap-1">
                <TrendingUp className="w-3 h-3" /> +3 ce mois-ci
              </p>
            </div>
            
            <div className="glass-card p-6 border-l-4 border-l-primary">
              <div className="flex items-center justify-between mb-2">
                <p className="text-on-surface-variant text-xs font-semibold uppercase tracking-wider">Tests Générés</p>
                <div className="p-1.5 bg-primary/10 rounded-md text-primary">
                  <FileText className="w-4 h-4" />
                </div>
              </div>
              <h3 className="text-3xl font-bold text-on-surface mt-2">1,204</h3>
              <p className="text-xs text-primary font-medium mt-2 flex items-center gap-1">
                <TrendingUp className="w-3 h-3" /> +15% vs mois dernier
              </p>
            </div>

            <div className="glass-card p-6 border-l-4 border-l-tertiary">
              <div className="flex items-center justify-between mb-2">
                <p className="text-on-surface-variant text-xs font-semibold uppercase tracking-wider">Matières Couvertes</p>
                <div className="p-1.5 bg-tertiary/10 rounded-md text-tertiary">
                  <GraduationCap className="w-4 h-4" />
                </div>
              </div>
              <h3 className="text-3xl font-bold text-on-surface mt-2">12</h3>
              <p className="text-xs text-on-surface-variant mt-2 font-medium">Maths, Physique, SVT...</p>
            </div>
          </div>

          <div className="glass-card overflow-hidden">
            <div className="p-5 flex flex-wrap items-center justify-between gap-4 border-b border-outline-variant">
              <div className="flex items-center gap-3">
                <select className="bg-surface border border-outline rounded-lg px-3 py-2 text-sm text-on-surface focus:ring-2 focus:ring-secondary/20 focus:border-secondary cursor-pointer outline-none shadow-sm">
                  <option>Toutes les matières</option>
                  <option>Mathématiques</option>
                  <option>Physique-Chimie</option>
                  <option>SVT</option>
                </select>
                <select className="bg-surface border border-outline rounded-lg px-3 py-2 text-sm text-on-surface focus:ring-2 focus:ring-secondary/20 focus:border-secondary cursor-pointer outline-none shadow-sm">
                  <option>Statut: Tous</option>
                  <option>Actif</option>
                  <option>Inactif</option>
                </select>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="text-on-surface-variant text-xs font-semibold border-b border-outline-variant bg-surface-container-lowest">
                    <th className="px-6 py-4 font-medium">Enseignant</th>
                    <th className="px-6 py-4 font-medium">Matière</th>
                    <th className="px-6 py-4 font-medium">Classes</th>
                    <th className="px-6 py-4 font-medium">Tests Générés</th>
                    <th className="px-6 py-4 font-medium">Dernière Connexion</th>
                    <th className="px-6 py-4 font-medium">Statut</th>
                    <th className="px-6 py-4 text-right font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {[
                    { name: 'Dr. Youssef Alaoui', email: 'y.alaoui@ecole.ma', subject: 'Mathématiques', classes: 'Terminale, 1ère', tests: 145, lastLogin: 'Aujourd\'hui, 08:30', status: 'Actif', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' },
                    { name: 'Mme. Fatima Zahra', email: 'f.zahra@ecole.ma', subject: 'Physique-Chimie', classes: 'Terminale', tests: 89, lastLogin: 'Hier, 14:15', status: 'Actif', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' },
                    { name: 'M. Karim Benali', email: 'k.benali@ecole.ma', subject: 'SVT', classes: 'Tronc Commun', tests: 34, lastLogin: 'Il y a 3 jours', status: 'Inactif', avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' },
                    { name: 'Mme. Salma Idrissi', email: 's.idrissi@ecole.ma', subject: 'Français', classes: '1ère, 2ème', tests: 210, lastLogin: 'Aujourd\'hui, 10:05', status: 'Actif', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' },
                  ].map((teacher, i) => (
                    <tr key={i} className="group hover:bg-surface-container-low transition-colors border-b border-outline-variant last:border-0">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <img src={teacher.avatar} alt={teacher.name} className="w-9 h-9 rounded-full border border-outline-variant object-cover" />
                          <div>
                            <p className="font-semibold text-on-surface">{teacher.name}</p>
                            <p className="text-xs text-on-surface-variant mt-0.5">{teacher.email}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="px-2.5 py-1 rounded-md text-xs font-medium bg-surface-container border border-outline-variant text-on-surface">
                          {teacher.subject}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-on-surface-variant text-sm">{teacher.classes}</td>
                      <td className="px-6 py-4 font-medium text-on-surface">{teacher.tests}</td>
                      <td className="px-6 py-4 text-on-surface-variant text-xs">{teacher.lastLogin}</td>
                      <td className="px-6 py-4">
                        {teacher.status === 'Actif' ? (
                          <div className="flex items-center gap-1.5 text-secondary">
                            <CheckCircle2 className="w-4 h-4" />
                            <span className="text-xs font-semibold uppercase tracking-wider">Actif</span>
                          </div>
                        ) : (
                          <div className="flex items-center gap-1.5 text-error">
                            <XCircle className="w-4 h-4" />
                            <span className="text-xs font-semibold uppercase tracking-wider">Inactif</span>
                          </div>
                        )}
                      </td>
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
            <div className="p-4 border-t border-outline-variant bg-surface-container-lowest text-center">
              <button className="text-sm font-semibold text-secondary hover:text-secondary-container transition-colors">Voir tous les enseignants →</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
