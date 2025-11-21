import React from 'react';
import { RoutePath } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  currentRoute: string;
}

const Layout: React.FC<LayoutProps> = ({ children, currentRoute }) => {
  return (
    <div className="min-h-screen flex flex-col relative">
      <div className="ambient-glow" />
      
      {/* Header */}
      <header className="fixed top-0 w-full z-50 transition-all duration-300 bg-lumare-bg/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href={RoutePath.HOME} className="text-2xl font-semibold tracking-tight text-white hover:opacity-80 transition-opacity">
            Lumare
          </a>
          
          <nav className="hidden md:flex items-center gap-8">
            <a 
              href={RoutePath.HOME} 
              className={`text-sm font-medium transition-colors ${currentRoute === RoutePath.HOME ? 'text-white' : 'text-lumare-muted hover:text-white'}`}
            >
              Home
            </a>
            <a 
              href="mailto:support@lumare.app" 
              className="text-sm font-medium text-lumare-muted hover:text-white transition-colors"
            >
              Support
            </a>
            <a 
              href="#" 
              className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm font-medium transition-all border border-white/10 backdrop-blur-sm"
            >
              Get the App
            </a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-lumare-bg/50 backdrop-blur-xl mt-20">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-semibold text-white mb-2">Lumare</h3>
              <p className="text-lumare-muted text-sm">Your personal mood maker.</p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8">
              <a href={RoutePath.TERMS} className="text-sm text-lumare-muted hover:text-white transition-colors">
                Terms of Use
              </a>
              <a href={RoutePath.PRIVACY} className="text-sm text-lumare-muted hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="mailto:support@lumare.app" className="text-sm text-lumare-muted hover:text-white transition-colors">
                Contact Support
              </a>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-white/5 text-center text-xs text-lumare-muted">
            © {new Date().getFullYear()} Lumare. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;