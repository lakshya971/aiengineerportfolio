import React, { useState, useEffect } from 'react';
import { Search, X, Terminal, FolderGit2, User, Mail, FileText, Monitor, Sun, Moon } from 'lucide-react';

export default function CommandPalette({ isOpen, onClose, setActivePage, setTheme, onOpenResume }) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        isOpen ? onClose() : null;
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const actions = [
    { id: 'home', label: 'Go to Home', desc: 'Main landing page & TUI Terminal', icon: Terminal, action: () => { setActivePage('home'); onClose(); } },
    { id: 'work', label: 'Go to Work / Systems Archive', desc: 'Browse projects, WASM audio, DB viz', icon: FolderGit2, action: () => { setActivePage('work'); onClose(); } },
    { id: 'about', label: 'Go to About (UNIX Man Page)', desc: 'Developer bio, philosophy & skills', icon: User, action: () => { setActivePage('about'); onClose(); } },
    { id: 'contact', label: 'Go to Contact (./contact.sh)', desc: 'Dispatch message payload', icon: Mail, action: () => { setActivePage('contact'); onClose(); } },
    { id: 'resume', label: 'View / Download Resume', desc: 'Open interactive resume modal', icon: FileText, action: () => { onOpenResume(); onClose(); } },
    { id: 'theme-light', label: 'Set Theme: Light Monospaced', desc: 'Cream & stark black classic UI', icon: Sun, action: () => { setTheme('light'); onClose(); } },
    { id: 'theme-dark', label: 'Set Theme: Dark Mode', desc: 'High-contrast dark terminal theme', icon: Moon, action: () => { setTheme('dark'); onClose(); } },
    { id: 'theme-amber', label: 'Set Theme: Amber CRT', desc: 'Retro amber monochrome terminal', icon: Monitor, action: () => { setTheme('amber'); onClose(); } },
    { id: 'theme-matrix', label: 'Set Theme: Matrix Green', desc: 'Cyberpunk green terminal scanlines', icon: Terminal, action: () => { setTheme('matrix'); onClose(); } },
  ];

  const filteredActions = actions.filter(a => 
    a.label.toLowerCase().includes(query.toLowerCase()) || 
    a.desc.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-start justify-center pt-20 px-4 animate-in fade-in duration-150">
      <div className="w-full max-w-xl bg-background border-2 border-on-background shadow-[8px_8px_0px_0px_var(--color-on-background)] font-mono overflow-hidden">
        {/* Header */}
        <div className="p-3 border-b border-on-background bg-surface-container flex items-center gap-3">
          <Search className="w-5 h-5 text-secondary" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command or search destination..."
            className="w-full bg-transparent text-primary focus:outline-none text-sm placeholder:text-secondary"
            autoFocus
          />
          <button 
            onClick={onClose}
            className="p-1 border border-on-background hover:bg-primary hover:text-on-primary text-secondary"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Action List */}
        <div className="max-h-[340px] overflow-y-auto p-2 divide-y divide-on-background/20">
          {filteredActions.length === 0 ? (
            <div className="p-6 text-center text-secondary text-sm">
              No matching commands found for "{query}"
            </div>
          ) : (
            filteredActions.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={item.action}
                  className="w-full p-3 text-left hover:bg-primary hover:text-on-primary transition-colors flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <Icon className="w-4 h-4 text-emerald-accent group-hover:text-on-primary" />
                    <div>
                      <div className="font-bold text-sm">{item.label}</div>
                      <div className="text-xs text-secondary group-hover:text-on-primary/80">{item.desc}</div>
                    </div>
                  </div>
                  <span className="text-[10px] uppercase border border-on-background px-2 py-0.5 group-hover:border-on-primary">
                    Select
                  </span>
                </button>
              );
            })
          )}
        </div>

        {/* Footer info */}
        <div className="p-2.5 border-t border-on-background bg-surface-container-high text-[11px] text-secondary flex justify-between items-center">
          <span>Use <strong>ESC</strong> to exit command palette</span>
          <span><strong>Ctrl+K</strong> to toggle anytime</span>
        </div>
      </div>
    </div>
  );
}
