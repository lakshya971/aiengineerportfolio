import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CommandPalette from './components/CommandPalette';
import ProjectModal from './components/ProjectModal';
import ResumeModal from './components/ResumeModal';
import Home from './pages/Home';
import Work from './pages/Work';
import About from './pages/About';
import Contact from './pages/Contact';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [theme, setTheme] = useState('light');
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  // Play subtle mechanical key click on interactions if soundEnabled is true
  const playClickSound = () => {
    if (!soundEnabled) return;
    try {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(600, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(120, audioCtx.currentTime + 0.03);
      gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.03);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.03);
    } catch (e) {
      // Audio context fallback
    }
  };

  // Sync theme class on document body
  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('theme-light', 'theme-dark', 'theme-amber', 'theme-matrix');
    if (theme !== 'light') {
      root.classList.add(`theme-${theme}`);
    }
  }, [theme]);

  // Global click listener for mechanical feedback
  useEffect(() => {
    const handleClick = (e) => {
      if (e.target.closest('button') || e.target.closest('a') || e.target.closest('input')) {
        playClickSound();
      }
    };
    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, [soundEnabled]);

  return (
    <div className={`min-h-screen flex flex-col bg-background text-on-background selection:bg-primary selection:text-on-primary font-mono theme-${theme}`}>
      {/* Navigation Bar */}
      <Navbar
        activePage={activePage}
        setActivePage={setActivePage}
        theme={theme}
        setTheme={setTheme}
        soundEnabled={soundEnabled}
        setSoundEnabled={setSoundEnabled}
        onOpenResume={() => setResumeOpen(true)}
        onOpenPalette={() => setPaletteOpen(true)}
      />

      {/* Main Page Canvas */}
      {activePage === 'home' && (
        <Home
          setActivePage={setActivePage}
          setTheme={setTheme}
          onOpenResume={() => setResumeOpen(true)}
          onSelectProject={(proj) => setSelectedProject(proj)}
        />
      )}
      {activePage === 'work' && (
        <Work
          onSelectProject={(proj) => setSelectedProject(proj)}
        />
      )}
      {activePage === 'about' && (
        <About
          onOpenResume={() => setResumeOpen(true)}
        />
      )}
      {activePage === 'contact' && (
        <Contact />
      )}

      {/* Footer */}
      <Footer
        setActivePage={setActivePage}
        onOpenPalette={() => setPaletteOpen(true)}
      />

      {/* Command Palette Modal (Ctrl+K) */}
      <CommandPalette
        isOpen={paletteOpen}
        onClose={() => setPaletteOpen(false)}
        setActivePage={setActivePage}
        setTheme={setTheme}
        onOpenResume={() => setResumeOpen(true)}
      />

      {/* Resume Viewer & Download Modal */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />

      {/* Detailed Project Inspection Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}

