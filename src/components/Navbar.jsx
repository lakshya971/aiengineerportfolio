import React, { useState } from 'react';
import { Terminal, Sun, Moon, Monitor, Volume2, VolumeX, Menu, X, Command, FileText } from 'lucide-react';

export default function Navbar({ activePage, setActivePage, theme, setTheme, soundEnabled, setSoundEnabled, onOpenResume, onOpenPalette }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', code: '~' },
    { id: 'work', label: 'Work', code: 'work' },
    { id: 'about', label: 'About', code: 'about' },
    { id: 'contact', label: 'Contact', code: 'contact' },
  ];

  const cycleTheme = () => {
    const themes = ['light', 'dark', 'amber', 'matrix'];
    const currentIndex = themes.indexOf(theme);
    const nextTheme = themes[(currentIndex + 1) % themes.length];
    setTheme(nextTheme);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-on-background transition-colors duration-200">
      <div className="max-w-[1280px] mx-auto px-4 md:px- margin-edge h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <button 
          onClick={() => setActivePage('home')}
          className="font-headline-md text-lg md:text-2xl font-bold tracking-tight text-primary hover:text-secondary transition-colors duration-150 flex items-center gap-2"
        >
          <Terminal className="w-5 h-5 text-emerald-accent animate-pulse shrink-0" />
          <span className="hidden sm:inline">LAKSHYA ASTHANA</span>
          <span className="sm:hidden">SYS_EXEC</span>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex gap-4 items-center font-mono text-sm">
          {navItems.map((item) => {
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActivePage(item.id)}
                className={`px-3 py-1.5 transition-all duration-150 border ${
                  isActive 
                    ? 'border-on-background bg-primary text-on-primary font-semibold shadow-[2px_2px_0px_0px_var(--color-on-background)]' 
                    : 'border-transparent text-secondary hover:text-primary hover:border-on-background hover:bg-surface-container'
                }`}
              >
                [{isActive ? 'x' : ' '}] {item.label}
              </button>
            );
          })}
        </nav>

        {/* Action Controls & Utilities */}
        <div className="hidden md:flex items-center gap-3 font-mono text-xs">
          {/* Quick Command Palette Button */}
          <button
            onClick={onOpenPalette}
            className="flex items-center gap-1.5 px-2.5 py-1.5 border border-on-background bg-surface-container hover:bg-primary hover:text-on-primary transition-colors text-secondary hover:text-on-primary"
            title="Open Command Palette (Ctrl+K)"
          >
            <Command className="w-3.5 h-3.5" />
            <span>Ctrl+K</span>
          </button>

          {/* Theme Switcher Button */}
          <button
            onClick={cycleTheme}
            className="px-2.5 py-1.5 border border-on-background bg-surface-container hover:bg-primary hover:text-on-primary transition-colors uppercase font-bold text-primary hover:text-on-primary flex items-center gap-1"
            title="Cycle Display Theme"
          >
            {theme === 'light' && <Sun className="w-3.5 h-3.5 text-amber-500" />}
            {theme === 'dark' && <Moon className="w-3.5 h-3.5 text-indigo-400" />}
            {(theme === 'amber' || theme === 'matrix') && <Monitor className="w-3.5 h-3.5 text-emerald-accent" />}
            <span>[{theme}]</span>
          </button>

          {/* Sound Toggle Button */}
          <button
            onClick={() => setSoundEnabled(!soundEnabled)}
            className="p-1.5 border border-on-background bg-surface-container hover:bg-primary hover:text-on-primary transition-colors text-primary"
            title={soundEnabled ? 'Mute Audio' : 'Enable Mechanical Audio'}
          >
            {soundEnabled ? <Volume2 className="w-3.5 h-3.5 text-emerald-accent" /> : <VolumeX className="w-3.5 h-3.5 text-outline" />}
          </button>

          {/* Download Resume Button */}
          <button
            onClick={onOpenResume}
            className="px-3 py-1.5 border border-on-background bg-surface hover:bg-primary hover:text-on-primary transition-all duration-150 font-medium text-primary shadow-[2px_2px_0px_0px_var(--color-on-background)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] flex items-center gap-1.5"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>[ Download Resume ]</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={cycleTheme}
            className="p-2 border border-on-background rounded-none text-primary"
          >
            {theme === 'light' && <Sun className="w-4 h-4 text-amber-500" />}
            {theme === 'dark' && <Moon className="w-4 h-4 text-indigo-400" />}
            {(theme === 'amber' || theme === 'matrix') && <Monitor className="w-4 h-4 text-emerald-accent" />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 border border-on-background rounded-none text-primary hover:bg-primary hover:text-on-primary transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-on-background bg-background p-4 flex flex-col gap-3 font-mono text-sm">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActivePage(item.id);
                setMobileMenuOpen(false);
              }}
              className={`text-left px-3 py-2 border ${
                activePage === item.id
                  ? 'border-on-background bg-primary text-on-primary'
                  : 'border-on-background/30 text-secondary'
              }`}
            >
              [{activePage === item.id ? 'x' : ' '}] ./page_{item.id}
            </button>
          ))}
          <div className="pt-2 border-t border-on-background/30 flex flex-col gap-2">
            <button
              onClick={() => {
                onOpenPalette();
                setMobileMenuOpen(false);
              }}
              className="w-full text-left px-3 py-2 border border-on-background bg-surface-container flex items-center justify-between text-secondary"
            >
              <span>Quick Command Search</span>
              <Command className="w-4 h-4" />
            </button>
            <button
              onClick={() => {
                onOpenResume();
                setMobileMenuOpen(false);
              }}
              className="w-full text-center px-3 py-2 border border-on-background bg-primary text-on-primary font-bold"
            >
              [ Download Resume ]
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
