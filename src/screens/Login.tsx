import { Screen } from '../App';
import { BookOpen, Globe, ChevronDown, Mail, Lock, Eye, ArrowRight } from 'lucide-react';

export default function Login({ onNavigate }: { onNavigate: (screen: Screen) => void }) {
  return (
    <div className="aurora-bg min-h-screen flex flex-col items-center justify-center p-6 relative overflow-hidden">
      <nav className="fixed top-8 right-8 z-50">
        <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-outline-variant text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-all shadow-sm">
          <Globe className="w-4 h-4" />
          <span className="text-xs font-semibold tracking-wide">Français</span>
          <ChevronDown className="w-4 h-4" />
        </button>
      </nav>

      <main className="relative z-10 w-full max-w-md">
        <div className="flex flex-col items-center mb-10">
          <div className="relative mb-6">
            <div className="relative flex items-center justify-center w-16 h-16 bg-primary rounded-2xl shadow-md">
              <BookOpen className="text-on-primary w-8 h-8" />
            </div>
          </div>
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-headline font-bold tracking-tight flex items-baseline justify-center gap-2">
              <span className="text-on-surface">Taqyim</span>
              <span className="text-secondary font-arabic font-black leading-none">تقييم</span>
            </h1>
            <p className="text-on-surface-variant text-sm font-medium">The Digital Atheneum</p>
          </div>
        </div>

        <div className="glass-card p-8 sm:p-10 premium-shadow">
          <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); onNavigate('superadmin-schools'); }}>
            <div className="space-y-1.5">
              <label className="block text-sm font-medium text-on-surface">Adresse e-mail</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                  <Mail className="text-outline w-5 h-5 group-focus-within:text-secondary transition-colors" />
                </div>
                <input 
                  type="email" 
                  className="block w-full pl-11 pr-4 py-3 bg-surface border border-outline rounded-xl text-on-surface focus:ring-2 focus:ring-secondary/20 focus:border-secondary outline-none transition-all placeholder:text-on-surface-variant/50 shadow-sm" 
                  placeholder="nom@ecole.ma" 
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <div className="flex justify-between items-center">
                <label className="block text-sm font-medium text-on-surface">Mot de passe</label>
                <a href="#" className="text-xs font-semibold text-secondary hover:text-secondary-container transition-colors">Mot de passe oublié?</a>
              </div>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                  <Lock className="text-outline w-5 h-5 group-focus-within:text-secondary transition-colors" />
                </div>
                <input 
                  type="password" 
                  className="block w-full pl-11 pr-4 py-3 bg-surface border border-outline rounded-xl text-on-surface focus:ring-2 focus:ring-secondary/20 focus:border-secondary outline-none transition-all placeholder:text-on-surface-variant/50 shadow-sm" 
                  placeholder="••••••••" 
                />
                <button type="button" className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-outline hover:text-on-surface-variant transition-colors">
                  <Eye className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="flex items-center gap-3 py-1">
              <input type="checkbox" id="remember" className="w-4 h-4 rounded border-outline text-secondary focus:ring-secondary/20 cursor-pointer" />
              <label htmlFor="remember" className="text-sm text-on-surface-variant cursor-pointer select-none font-medium">Se souvenir de moi</label>
            </div>

            <button type="submit" className="w-full py-3 mt-2 bg-primary text-on-primary font-semibold rounded-xl shadow-sm hover:bg-primary/90 active:scale-[0.98] transition-all flex items-center justify-center gap-2">
              <span>Se connecter</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            
            <div className="flex justify-center gap-4 pt-6 border-t border-outline-variant mt-6">
               <button type="button" onClick={() => onNavigate('admin-teachers')} className="text-xs font-medium text-on-surface-variant hover:text-secondary transition-colors">Go to Admin</button>
               <button type="button" onClick={() => onNavigate('teacher-test')} className="text-xs font-medium text-on-surface-variant hover:text-secondary transition-colors">Go to Teacher</button>
            </div>
          </form>
        </div>

        <footer className="mt-10 text-center">
          <p className="text-on-surface-variant text-sm max-w-sm mx-auto leading-relaxed">
            Plateforme de génération d’évaluations par IA.
          </p>
        </footer>
      </main>
    </div>
  );
}
