import { LayoutDashboard, GraduationCap, Users, Library, BarChart3, Settings, BookOpen } from 'lucide-react';
import { Screen } from '../App';

interface SidebarProps {
  currentScreen: Screen;
  onNavigate: (screen: Screen) => void;
  role: 'superadmin' | 'admin';
}

export default function Sidebar({ currentScreen, onNavigate, role }: SidebarProps) {
  return (
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
            {role === 'superadmin' ? 'AI Exam Engine' : 'Admin'}
          </p>
        </div>
      </div>

      <nav className="flex-1 space-y-1.5">
        <button className="w-full flex items-center gap-3 text-on-surface-variant py-2.5 px-3 rounded-lg hover:bg-surface-container hover:text-on-surface transition-all">
          <LayoutDashboard className="w-4 h-4" />
          <span className="text-sm font-medium">Tableau de bord</span>
        </button>
        
        <button 
          onClick={() => onNavigate('superadmin-schools')}
          className={`w-full flex items-center gap-3 py-2.5 px-3 rounded-lg transition-all ${currentScreen === 'superadmin-schools' ? 'bg-surface-container text-primary font-semibold' : 'text-on-surface-variant hover:bg-surface-container hover:text-on-surface font-medium'}`}
        >
          <GraduationCap className="w-4 h-4" />
          <span className="text-sm">Écoles</span>
        </button>

        <button 
          onClick={() => onNavigate('admin-teachers')}
          className={`w-full flex items-center gap-3 py-2.5 px-3 rounded-lg transition-all ${currentScreen === 'admin-teachers' ? 'bg-surface-container text-primary font-semibold' : 'text-on-surface-variant hover:bg-surface-container hover:text-on-surface font-medium'}`}
        >
          <Users className="w-4 h-4" />
          <span className="text-sm">Enseignants</span>
        </button>

        <button className="w-full flex items-center gap-3 text-on-surface-variant py-2.5 px-3 rounded-lg hover:bg-surface-container hover:text-on-surface transition-all">
          <Library className="w-4 h-4" />
          <span className="text-sm font-medium">Bibliothèque</span>
        </button>

        <button className="w-full flex items-center gap-3 text-on-surface-variant py-2.5 px-3 rounded-lg hover:bg-surface-container hover:text-on-surface transition-all">
          <BarChart3 className="w-4 h-4" />
          <span className="text-sm font-medium">Statistiques</span>
        </button>
      </nav>

      <div className="mt-auto pt-6 border-t border-outline-variant">
        <button className="w-full flex items-center gap-3 text-on-surface-variant py-2.5 px-3 rounded-lg hover:bg-surface-container hover:text-on-surface transition-all">
          <Settings className="w-4 h-4" />
          <span className="text-sm font-medium">Paramètres</span>
        </button>
        
        <div className="mt-4 px-3 py-3 rounded-xl hover:bg-surface-container cursor-pointer transition-colors flex items-center gap-3">
          <img 
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
            alt="Admin" 
            className="w-9 h-9 rounded-full border border-outline-variant object-cover"
          />
          <div className="overflow-hidden text-left flex-1">
            <p className="text-sm font-semibold truncate text-on-surface">
              {role === 'superadmin' ? 'Super Admin' : 'Admin Avatar'}
            </p>
            <p className="text-xs text-on-surface-variant truncate">
              {role === 'superadmin' ? 'admin@taqyim.ma' : 'System Oversight'}
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}
