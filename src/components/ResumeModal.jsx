import { X, Download, Printer } from 'lucide-react';
import confetti from 'canvas-confetti';
import resumePdf from '../assets/Lakshya_Asthana_resume.pdf';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumePdf;
    link.download = 'Lakshya_Asthana_resume.pdf';
    link.click();
    confetti({ particleCount: 80, spread: 60, origin: { y: 0.7 } });
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-150">
      <div className="w-full max-w-3xl bg-background border-2 border-on-background shadow-[10px_10px_0px_0px_var(--color-on-background)] font-mono my-8 overflow-hidden">
        {/* Header */}
        <div className="p-4 border-b border-on-background bg-primary text-on-primary flex items-center justify-between">
          <div className="font-bold text-sm md:text-base flex items-center gap-2">
            <span>[view Lakshya_Asthana_resume.pdf]</span>
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

        {/* Resume PDF preview */}
        <div className="p-3 md:p-5 bg-primary-container scanlines">
          <iframe
            src={`${resumePdf}#toolbar=0`}
            title="Lakshya Asthana resume preview"
            className="w-full h-[68vh] min-h-[480px] bg-white"
          />
        </div>

        {/* Action Controls */}
        <div className="p-4 border-t border-on-background bg-surface-container flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => window.print()}
              className="px-3 py-1.5 border border-on-background bg-surface hover:bg-primary hover:text-on-primary transition-colors text-xs font-bold items-center gap-1.5 hidden sm:flex"
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
              <span>[ Download Resume.pdf ]</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
