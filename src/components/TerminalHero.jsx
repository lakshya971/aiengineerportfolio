import React, { useState, useRef, useEffect } from 'react';
import { Play, CornerDownLeft, Sparkles, Terminal as TerminalIcon } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function TerminalHero({ setActivePage, setTheme, onOpenResume }) {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState([
    { type: 'output', content: 'Initializing portfolio_v1.0 sequence...' },
    { type: 'output', content: '> Role Targeted: AI Engineer / Forward Deployed Engineer (FDE)' },
    { type: 'output', content: '> Core Stack: Generative AI, LLMs, NLP Analytics, PyTorch NCF & RAG Pipelines' },
    { type: 'output', content: 'Type "help" or click suggestion pills below to execute commands.' }
  ]);
  const inputRef = useRef(null);
  const terminalEndRef = useRef(null);

  const scrollToBottom = () => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [history]);

  const handleCommandSubmit = (e) => {
    e?.preventDefault();
    const cmd = inputVal.trim();
    if (!cmd) return;

    const newHistory = [...history, { type: 'command', content: cmd }];

    const lower = cmd.toLowerCase();

    if (lower === 'help') {
      newHistory.push({
        type: 'output',
        content: `AVAILABLE COMMANDS:
- help       : List all commands
- projects   : View AI/ML systems (Gen AI Chatbot, Business Analyzer, VIBEREC)
- skills     : Display AI Engineering technical proficiency matrix
- about      : Read developer synopsis & man-page
- contact    : Open contact form & message payload
- resume     : Open / Download technical resume
- theme      : Switch display theme (light|dark|amber|matrix)
- clear      : Clear terminal prompt history
- whoami     : Display guest identity
- date       : Print current system timestamp
- matrix     : Trigger Matrix visual sequence`
      });
    } else if (lower === 'projects' || lower === 'work') {
      newHistory.push({ type: 'output', content: '[+] Navigating to Systems Archive (/work)...' });
      setTimeout(() => setActivePage('work'), 400);
    } else if (lower === 'about') {
      newHistory.push({ type: 'output', content: '[+] Opening ABOUT(1) UNIX Man Page...' });
      setTimeout(() => setActivePage('about'), 400);
    } else if (lower === 'contact') {
      newHistory.push({ type: 'output', content: '[+] Launching ./contact.sh shell protocol...' });
      setTimeout(() => setActivePage('contact'), 400);
    } else if (lower === 'resume' || lower === 'cat resume.txt') {
      newHistory.push({ type: 'output', content: '[+] Opening Technical Resume modal...' });
      onOpenResume();
    } else if (lower === 'skills') {
      newHistory.push({
        type: 'output',
        content: `TECHNICAL SKILLS MATRIX (AI ENGINEER / FDE):
[x] Python & LLM Frameworks  : [████████████████████] 98%
[x] Streamlit & AI Frontends : [████████████████████] 96%
[x] PyTorch & BERT / NCF     : [█████████████████░░░] 92%
[x] Sentiment Analysis / NLP : [█████████████████░░░] 94%
[x] RAG & Vector Embeddings  : [█████████████████░░░] 90%
[x] REST APIs & Deployment   : [████████████████████] 95%`
      });
    } else if (lower.startsWith('theme')) {
      const parts = lower.split(' ');
      if (parts.length > 1 && ['light', 'dark', 'amber', 'matrix'].includes(parts[1])) {
        setTheme(parts[1]);
        newHistory.push({ type: 'output', content: `[x] Display theme updated to: ${parts[1]}` });
      } else {
        newHistory.push({ type: 'output', content: 'Usage: theme [light|dark|amber|matrix]' });
      }
    } else if (lower === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    } else if (lower === 'whoami') {
      newHistory.push({ type: 'output', content: 'lakshya@sys_exec_tty1 - AI Engineer & Forward Deployed Engineer (FDE)' });
    } else if (lower === 'date') {
      newHistory.push({ type: 'output', content: new Date().toString() });
    } else if (lower === 'matrix') {
      setTheme('matrix');
      confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
      newHistory.push({ type: 'output', content: '*** MATRIX PROTOCOL ACTIVATED ***' });
    } else {
      newHistory.push({
        type: 'output',
        content: `Command not recognized: "${cmd}". Type "help" for available commands.`
      });
    }

    setHistory(newHistory);
    setInputVal('');
  };

  const executePill = (cmdText) => {
    setInputVal(cmdText);
    setTimeout(() => {
      inputRef.current?.focus();
    }, 50);
  };

  return (
    <section className="w-full flex flex-col pt-4 md:pt-8">
      <div className="w-full bg-primary-container rounded-none border border-on-background overflow-hidden shadow-[4px_4px_0px_0px_var(--color-on-background)]">
        {/* Terminal Header */}
        <div className="h-9 border-b border-on-background bg-surface-container flex items-center px-4 justify-between select-none">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block border border-on-background"></span>
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block border border-on-background"></span>
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block border border-on-background"></span>
            <span className="text-xs text-on-surface-variant font-mono ml-2 font-bold">(o)(o)(o)</span>
          </div>
          <div className="font-mono text-xs text-on-surface-variant uppercase tracking-wider font-semibold flex items-center gap-1">
            <TerminalIcon className="w-3.5 h-3.5 text-emerald-accent" />
            <span>sys_exec_tty1</span>
          </div>
          <div className="text-[10px] font-mono text-on-surface-variant hidden sm:block">
            UTF-8 | 80x24
          </div>
        </div>

        {/* Terminal Body */}
        <div 
          className="p-3 md:p-8 flex flex-col gap-4 bg-[#090d16] text-slate-100 min-h-[260px] md:min-h-[380px] max-h-[420px] md:max-h-[500px] overflow-y-auto font-mono text-sm scanlines border-b border-on-background"
          onClick={() => inputRef.current?.focus()}
        >
          {/* ASCII Banner */}
          <div className="font-display-ascii text-[7px] xs:text-[9px] sm:text-[11px] md:text-sm text-emerald-400 whitespace-pre overflow-x-auto select-none leading-tight font-bold drop-shadow-[0_0_8px_rgba(52,211,153,0.3)] hidden sm:block">
{`  _____  __  __  ____  ___  __  __  ____  __    ____ 
 (  _  )(  )(  )(  _ \\/ __)(  \\/  )(  _ \\(  )  (  _ \\
  )(_)(  )(__)(  )___/\\__ \\ )    (  )___/ )(__  )___/
 (____/ (______)(__)  (___/(_/\\/\\_)(__)  (____)(__)  `}
          </div>
          <div className="sm:hidden font-display-ascii text-[10px] text-emerald-400 whitespace-pre select-none leading-tight font-bold drop-shadow-[0_0_8px_rgba(52,211,153,0.3)]">
{`AI ENGINEER
FWD DEPLOYED`}
          </div>

          {/* History log */}
          <div className="flex flex-col gap-2.5 mt-2">
            {history.map((item, idx) => (
              <div key={idx} className="leading-relaxed">
                {item.type === 'command' ? (
                  <div className="flex items-center gap-2 text-white font-semibold">
                    <span className="text-emerald-400 font-bold">root@sys:~#</span>
                    <span>{item.content}</span>
                  </div>
                ) : (
                  <pre className="whitespace-pre-wrap font-mono text-emerald-300/90 text-xs md:text-sm pl-3 border-l-2 border-emerald-500/50 leading-relaxed">
                    {item.content}
                  </pre>
                )}
              </div>
            ))}
          </div>

          {/* Prompt line */}
          <form onSubmit={handleCommandSubmit} className="flex items-center gap-2 mt-2 pt-2 border-t border-slate-700/60">
            <span className="text-emerald-400 font-bold text-base whitespace-nowrap">root@sys:~#</span>
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              className="w-full bg-transparent text-white focus:outline-none font-mono text-sm placeholder:text-slate-500"
              placeholder="type command (e.g. 'help', 'projects', 'cat resume.txt')..."
              autoFocus
            />
            <button type="submit" className="text-emerald-400 hover:text-white p-1" title="Execute">
              <CornerDownLeft className="w-4 h-4" />
            </button>
          </form>

          <div ref={terminalEndRef} />
        </div>

        {/* Suggestion Pills Footer */}
        <div className="p-3 bg-surface-container-high border-t border-on-background flex gap-2 text-xs font-mono text-primary items-center overflow-x-auto scrollbar-hide whitespace-nowrap">
          <span className="font-bold text-primary mr-1 text-[11px] uppercase">[Quick Commands]:</span>
          <button 
            onClick={() => executePill('help')}
            className="px-2.5 py-1 border border-on-background bg-surface hover:bg-primary hover:text-on-primary transition-colors text-primary font-bold shadow-[2px_2px_0px_0px_var(--color-on-background)] hover:shadow-none"
          >
            [help]
          </button>
          <button 
            onClick={() => executePill('projects')}
            className="px-2.5 py-1 border border-on-background bg-surface hover:bg-primary hover:text-on-primary transition-colors text-primary font-bold shadow-[2px_2px_0px_0px_var(--color-on-background)] hover:shadow-none"
          >
            [projects]
          </button>
          <button 
            onClick={() => executePill('skills')}
            className="px-2.5 py-1 border border-on-background bg-surface hover:bg-primary hover:text-on-primary transition-colors text-primary font-bold shadow-[2px_2px_0px_0px_var(--color-on-background)] hover:shadow-none"
          >
            [skills]
          </button>
          <button 
            onClick={() => executePill('cat resume.txt')}
            className="px-2.5 py-1 border border-on-background bg-surface hover:bg-primary hover:text-on-primary transition-colors text-primary font-bold shadow-[2px_2px_0px_0px_var(--color-on-background)] hover:shadow-none"
          >
            [cat resume.txt]
          </button>
          <button 
            onClick={() => executePill('matrix')}
            className="px-2.5 py-1 border border-on-background bg-surface hover:bg-primary hover:text-on-primary transition-colors text-emerald-accent font-bold shadow-[2px_2px_0px_0px_var(--color-on-background)] hover:shadow-none"
          >
            [matrix]
          </button>
          <button 
            onClick={() => executePill('clear')}
            className="px-2.5 py-1 border border-on-background bg-surface hover:bg-primary hover:text-on-primary transition-colors text-secondary font-bold ml-auto shadow-[2px_2px_0px_0px_var(--color-on-background)] hover:shadow-none"
          >
            [clear]
          </button>
        </div>

      </div>
    </section>
  );
}
