import React from 'react';
import { X, ExternalLink, CheckCircle2, Cpu, Layers, Terminal, Play } from 'lucide-react';

const GithubIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-150 font-mono">
      <div className="w-full max-w-3xl bg-background border-2 border-on-background shadow-[10px_10px_0px_0px_var(--color-on-background)] my-8 overflow-hidden">
        {/* Header Bar */}
        <div className="p-4 border-b border-on-background bg-primary text-on-primary flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-base">
            <Terminal className="w-5 h-5 text-emerald-accent" />
            <span>[SYS_INSPECT]: {project.title}</span>
          </div>
          <button
            onClick={onClose}
            className="p-1 border border-on-primary hover:bg-on-primary hover:text-primary transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-4 md:p-6 max-h-[70vh] md:max-h-[75vh] overflow-y-auto space-y-6">
          {/* Main banner/image */}
          <div className="border border-on-background relative h-56 bg-surface overflow-hidden group">
            {project.image ? (
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300" 
              />
            ) : (
              <div className="w-full h-full bg-primary-container text-surface p-6 flex flex-col justify-center items-center scanlines">
                <Cpu className="w-12 h-12 text-emerald-accent mb-2" />
                <span className="text-sm font-bold">{project.title} DEMO</span>
                <span className="text-xs text-on-primary-container mt-1">STATUS: OPERATIONAL | ARCHITECTURE: AI SYSTEM</span>
              </div>
            )}
            <div className="absolute top-2 right-2 bg-primary text-on-primary text-[10px] uppercase font-bold px-2 py-1 border border-on-background">
              {project.status || 'LIVE'}
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="font-bold text-lg text-primary mb-2 flex items-center gap-2">
              <Layers className="w-4 h-4 text-emerald-accent" />
              <span>System Specification</span>
            </h3>
            <p className="text-secondary text-sm leading-relaxed border-l-2 border-on-background pl-3 py-1">
              {project.longDescription || project.description}
            </p>
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="font-bold text-sm text-primary mb-2 uppercase tracking-wider">Tech Specifications</h3>
            <div className="flex flex-wrap gap-2">
              {project.tags?.map((tag, idx) => (
                <span key={idx} className="bg-surface-container-high border border-on-background px-2.5 py-1 text-xs text-primary font-bold">
                  [{tag}]
                </span>
              ))}
            </div>
          </div>

          {/* Key Features */}
          {project.features && (
            <div>
              <h3 className="font-bold text-sm text-primary mb-2 uppercase tracking-wider">Key Engineering Highlights</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {project.features.map((feat, idx) => (
                  <div key={idx} className="border border-on-background p-2.5 bg-surface-container text-xs flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-accent shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Code Snippet / Terminal log */}
          {project.codeSnippet && (
            <div>
              <h3 className="font-bold text-sm text-primary mb-2 uppercase tracking-wider">Core Logic Snippet</h3>
              <div className="bg-primary-container text-surface p-4 border border-on-background text-xs font-mono overflow-x-auto scanlines">
                <pre>{project.codeSnippet}</pre>
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="p-4 border-t border-on-background bg-surface-container flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="text-xs text-secondary font-bold">
            ID: {project.id}
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={onClose}
              className="px-3 py-2 border border-on-background bg-surface hover:bg-surface-variant text-primary text-xs font-bold"
            >
              [ Close ]
            </button>
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="px-3 py-2 border border-on-background bg-surface hover:bg-primary hover:text-on-primary text-primary transition-colors text-xs font-bold flex items-center gap-1.5"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>[ GitHub Repo ]</span>
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="px-3.5 py-2 border border-on-background bg-emerald-accent text-black hover:bg-emerald-400 font-bold transition-colors text-xs flex items-center gap-1.5 shadow-[2px_2px_0px_0px_var(--color-on-background)] hover:shadow-none"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>[ Launch Live App ]</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
