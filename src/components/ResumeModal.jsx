import React, { useState } from 'react';
import { X, Download, Printer, Check, Copy } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ResumeModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const resumeText = `====================================================================
SYSTEM_EXECUTABLE // SENIOR FULL-STACK SYSTEMS & UI ENGINEER
Contact: hello@design_os.com | GitHub: github.com/sys-exec | Web: design-os.com
====================================================================

[ SUMMARY ]
Full-Stack Engineer with 5+ years of experience architecting high-performance web applications, brutalist developer tools, and terminal-inspired design systems. Specializing in React, Tailwind CSS, TypeScript, WASM, and low-latency UI components.

[ CORE COMPETENCIES ]
• Frontend: React 19, Next.js, Vite, Tailwind CSS v4, TypeScript, State Management
• Systems & Backend: Node.js, WebAssembly (WASM), REST/GraphQL APIs, Express
• Architecture: Terminal UIs (TUI), Design Systems, Performance Optimization, Monospaced Systems
• DevOps & Tooling: Docker, Git, CI/CD Pipelines, Vite Plugins, Webpack, Testing (Vitest/Jest)

[ PROFESSIONAL EXPERIENCE ]

SENIOR FRONTEND ARCHITECT // NEXUS DATA LABS
Jan 2023 - Present
• Designed and developed Nexus.Core Framework, reducing enterprise dashboard load times by 42%.
• Built custom monospaced component library serving 50+ internal engineering teams.
• Implemented client-side WebAssembly audio and graphics processing pipelines.

SYSTEMS ENGINEER // TERMINAL GRAPHICS CO.
Mar 2021 - Dec 2022
• Engineered high-frequency web CLI emulator processing 1,000+ input streams per second with sub-ms latency.
• Created automated CI/CD layout visualizer reducing release regression bugs by 60%.
• Mentored 8 junior developers in brutalist UI principles and performance budgeting.

[ FEATURED PROJECTS ]
1. Nexus.Core Framework - Brutalist enterprise data management design system (React/Tailwind).
2. Project ALPHA - High-performance WebGL & WASM terminal simulator.
3. Project BETA - Distributed database shard visualization & node topology interactive graph.

[ EDUCATION & CERTIFICATIONS ]
• B.S. in Computer Science & Systems Engineering
• Certified WebAssembly Application Developer
• Advanced React & Design Systems Architecture

====================================================================
END OF FILE // RESUME_V2026.1.TXT
====================================================================`;

  const handleDownload = () => {
    const blob = new Blob([resumeText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'SYSTEM_EXECUTABLE_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    confetti({ particleCount: 80, spread: 60, origin: { y: 0.7 } });
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(resumeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-150">
      <div className="w-full max-w-3xl bg-background border-2 border-on-background shadow-[10px_10px_0px_0px_var(--color-on-background)] font-mono my-8 overflow-hidden">
        {/* Header */}
        <div className="p-4 border-b border-on-background bg-primary text-on-primary flex items-center justify-between">
          <div className="font-bold text-sm md:text-base flex items-center gap-2">
            <span>[cat resume.txt]</span>
            <span className="bg-emerald-accent/20 text-emerald-accent px-2 py-0.5 text-xs font-mono border border-emerald-accent">
              VERIFIED
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 border border-on-primary hover:bg-on-primary hover:text-primary transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Resume Content View */}
        <div className="p-6 max-h-[70vh] overflow-y-auto bg-primary-container text-surface scanlines font-mono text-xs md:text-sm leading-relaxed">
          <pre className="whitespace-pre-wrap select-all font-mono">
            {resumeText}
          </pre>
        </div>

        {/* Action Controls */}
        <div className="p-4 border-t border-on-background bg-surface-container flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="px-3 py-1.5 border border-on-background bg-surface hover:bg-primary hover:text-on-primary transition-colors text-xs font-bold flex items-center gap-1.5"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-accent" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied to Clipboard!' : '[ Copy Text ]'}</span>
            </button>
            <button
              onClick={() => window.print()}
              className="px-3 py-1.5 border border-on-background bg-surface hover:bg-primary hover:text-on-primary transition-colors text-xs font-bold flex items-center gap-1.5 hidden sm:flex"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>[ Print ]</span>
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-3 py-1.5 border border-on-background bg-surface hover:bg-surface-variant text-primary text-xs font-bold"
            >
              [ Close ]
            </button>
            <button
              onClick={handleDownload}
              className="px-4 py-2 border border-on-background bg-primary text-on-primary hover:bg-emerald-accent hover:text-black transition-all text-xs font-bold flex items-center gap-1.5 shadow-[2px_2px_0px_0px_var(--color-on-background)] hover:shadow-none hover:translate-x-[1px] hover:translate-y-[1px]"
            >
              <Download className="w-3.5 h-3.5" />
              <span>[ Download Resume.pdf / .txt ]</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
