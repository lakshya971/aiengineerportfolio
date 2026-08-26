import React from 'react';
import { Terminal, Shield, FileCode2, Activity, GitBranch } from 'lucide-react';

export default function Footer({ setActivePage, onOpenPalette }) {
  return (
    <footer className="w-full py-12 px-4 md:px-margin-edge max-w-[1280px] mx-auto border-t border-on-background bg-background font-mono text-xs mt-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 mb-8">
        <div className="md:col-span-5 pb-4 border-b border-on-background flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex items-center gap-2 font-bold text-primary text-sm">
            <Terminal className="w-4 h-4 text-emerald-accent" />
            <span>LAKSHYA ASTHANA</span>
            <span className="bg-primary-container text-on-primary-container px-2 py-0.5 text-[10px] uppercase border border-on-background">
              Build #2026.08.26
            </span>
          </div>

          <div className="flex items-center gap-4 text-secondary">
            <span className="flex items-center gap-1 text-emerald-accent">
              <span className="w-2 h-2 rounded-full bg-emerald-accent animate-ping inline-block"></span>
              [ STATUS: OPERATIONAL ]
            </span>
            <button 
              onClick={onOpenPalette}
              className="hover:text-primary underline flex items-center gap-1"
            >
              <GitBranch className="w-3.5 h-3.5" />
              <span>[Ctrl+K Search]</span>
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <span className="font-bold text-primary uppercase tracking-widest text-[10px]">Nav_Nodes</span>
          <button onClick={() => setActivePage('home')} className="text-left text-secondary hover:text-primary hover:underline">/home</button>
          <button onClick={() => setActivePage('work')} className="text-left text-secondary hover:text-primary hover:underline">/work (systems_archive)</button>
          <button onClick={() => setActivePage('about')} className="text-left text-secondary hover:text-primary hover:underline">/about (man_page)</button>
          <button onClick={() => setActivePage('contact')} className="text-left text-secondary hover:text-primary hover:underline">/contact (contact.sh)</button>
        </div>

        <div className="flex flex-col gap-2">
          <span className="font-bold text-primary uppercase tracking-widest text-[10px]">Specifications</span>
          <a href="https://github.com/lakshya971" target="_blank" rel="noreferrer" className="text-secondary hover:text-primary hover:underline flex items-center gap-1">
            <FileCode2 className="w-3 h-3" /> GitHub
          </a>
          <a href="#" onClick={(e) => { e.preventDefault(); setActivePage('about'); }} className="text-secondary hover:text-primary hover:underline flex items-center gap-1">
            <Shield className="w-3 h-3" /> Architecture Docs
          </a>
          <a href="#" onClick={(e) => { e.preventDefault(); setActivePage('work'); }} className="text-secondary hover:text-primary hover:underline flex items-center gap-1">
            <Activity className="w-3 h-3" /> System Metrics
          </a>
        </div>

        <div className="flex flex-col gap-2">
          <span className="font-bold text-primary uppercase tracking-widest text-[10px]">Legal & License</span>
          <span className="text-secondary">MIT Open License</span>
          <span className="text-secondary">Zero Telemetry</span>
          <span className="text-secondary">Strict Brutalism Protocol</span>
        </div>

        <div className="sm:col-span-2 md:col-span-2 flex flex-col justify-between">
          <div className="border border-on-background p-3 bg-surface-container">
            <span className="text-primary font-bold block mb-1">Terminal Quote</span>
            <p className="text-secondary italic text-[11px]">
              "Simplicity is prerequisite for reliability. Decoration is visual technical debt."
            </p>
          </div>
        </div>
      </div>

      <div className="pt-4 border-t border-on-background/40 flex flex-col sm:flex-row justify-between text-secondary text-[11px] gap-2">
        <span>© 2026 SYSTEM_EXECUTABLE. ALL RIGHTS RESERVED.</span>
        <span>DESIGNED WITH VITE + REACT + TAILWIND CSS</span>
      </div>
    </footer>
  );
}
