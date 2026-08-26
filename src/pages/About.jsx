import { useState } from 'react';
import { Terminal, GraduationCap, BriefcaseBusiness, Award } from 'lucide-react';

const certifications = [
  { title: 'Introduction to Generative AI', issuer: 'Google Cloud Skills Boost', issued: 'Aug 2026', credential: '26215109', logo: '/google_cloud_skill_badge.jpg' },
  { title: 'The Ultimate Job Ready Data Science Course', issuer: 'CodeWithHarry', issued: 'Oct 2025', credential: 'CWH-THE-ULTIMATE-JOB-READY-DATA-SCIENCE-COURSE-AVS4U4J2', logo: '/codewithharry_certificate.png', link: 'https://drive.google.com/file/d/1Ijn91X2KW3xU13h_5mFpUjBwe7z0gv_r/view?usp=sharing' },
  { title: 'Augment your LLM using RAG', issuer: 'NVIDIA', issued: 'May 2026', logo: '/nvidia_logo.jpg' },
  { title: 'J.P. Morgan - Software Engineering Job Simulation', issuer: 'J.P. Morgan', issued: 'Jul 2025', credential: 'tMPdfk94E4z7zPA5d', logo: '/jpmorgan_logo.jpg', skills: 'Java' },
  { title: 'BCG - GenAI Job Simulation', issuer: 'Boston Consulting Group (BCG)', issued: 'Jun 2025', credential: 'fvMs3sHXhewbvjKP3', logo: '/boston_consulting_group_logo.jpg' },
  { title: 'Deloitte Australia - Data Analytics Job Simulation', issuer: 'Deloitte', issued: 'May 2025', credential: 'Hfuxhod3EWoDqG5dw', logo: '/deloitte_logo.jpg', skills: 'Python · SQL · Pandas · NumPy · EDA · Statistical Analysis · Data Cleaning · ETL' }
];

export default function About({ onOpenResume }) {
  const [selectedQuarter, setSelectedQuarter] = useState('NOW');

  const quarterStats = {
    Q1: { score: '85%', ref: 'Built NLP Sentiment Pipeline', diff: '+12%', coverage: '90%' },
    Q2: { score: '91%', ref: 'Engineered PyTorch NCF Movie Recommender', diff: '+6%', coverage: '93%' },
    Q3: { score: '96%', ref: 'Deployed Streamlit GenAI Chatbot with Gemini LLMs', diff: '+5%', coverage: '96%' },
    Q4: { score: '98%', ref: 'RAG Pipeline & Context Windowing Optimization', diff: '+2%', coverage: '98%' },
    NOW: { score: '99.9%', ref: 'Forward Deployed AI Engineering Readiness Achieved', diff: 'MAX', coverage: '100%' }
  };

  return (
    <main className="flex-grow max-w-[800px] mx-auto w-full px-4 md:px-margin-edge py-20 font-mono text-sm leading-relaxed">
      {/* UNIX Header */}
      <div className="mb-10 flex justify-between items-center border-b border-on-background pb-4">
        <h1 className="font-bold text-2xl md:text-3xl text-primary flex items-center gap-2">
          <Terminal className="w-6 h-6 text-emerald-accent" />
          <span>ABOUT(1)</span>
        </h1>
        <span className="text-secondary text-xs uppercase font-bold tracking-widest">[ AI Engineer Manual ]</span>
      </div>

      {/* NAME */}
      <div className="mb-8">
        <h2 className="font-bold uppercase text-primary mb-2 text-sm tracking-wider flex items-center gap-2">
          <span>1. NAME</span>
        </h2>
        <div className="pl-6 border-l-2 border-on-background text-secondary">
          <strong>LAKSHYA_ASTHANA</strong> - Forward Deployed AI Engineer, LLM Specialist & Full-Stack Machine Learning Developer.
        </div>
      </div>

      {/* SYNOPSIS */}
      <div className="mb-8">
        <h2 className="font-bold uppercase text-primary mb-2 text-sm tracking-wider">
          2. SYNOPSIS
        </h2>
        <div className="pl-6 border-l-2 border-on-background text-secondary font-mono">
          <strong>LAKSHYA_ASTHANA</strong> [<em>--role=Forward-Deployed-AI-Engineer</em>] [<em>--stack=python-pytorch-llm-streamlit</em>] [<em>AI_SYSTEM</em>]...
        </div>
      </div>

      {/* DESCRIPTION */}
      <div className="mb-8">
        <h2 className="font-bold uppercase text-primary mb-2 text-sm tracking-wider">
          3. DESCRIPTION & ENGINEERING FOCUS
        </h2>
        <div className="pl-6 border-l-2 border-on-background text-secondary space-y-4">
          <p>
            Specializing in Forward Deployed AI Engineering—bridging the gap between cutting-edge Machine Learning models and production client integration.
          </p>
          <p>
            Proven track record of designing and deploying full-stack Generative AI applications, hybrid recommender engines (NCF + BERT), NLP sentiment analytics platforms, and context-aware RAG pipelines.
          </p>
        </div>
      </div>

      <div className="mb-10 grid gap-8 md:grid-cols-2">
        <section>
          <h2 className="font-bold uppercase text-primary mb-2 text-sm tracking-wider flex items-center gap-2"><GraduationCap className="w-4 h-4 text-emerald-accent" /> 4. EDUCATION</h2>
          <div className="pl-6 border-l-2 border-on-background text-secondary space-y-4">
            <p><strong className="text-primary">Lucknow Public School, Lucknow</strong><br />Class 10th, 2020 · Class 12th, 2022</p>
            <p><strong className="text-primary">SRMCEM</strong><br />Shri Ramswaroop Memorial College of Engineering and Management, affiliated to Dr. APJ Abdul Kalam Technical University, Lucknow.</p>
          </div>
        </section>
        <section>
          <h2 className="font-bold uppercase text-primary mb-2 text-sm tracking-wider flex items-center gap-2"><BriefcaseBusiness className="w-4 h-4 text-emerald-accent" /> 5. FREELANCE WORK</h2>
          <div className="pl-6 border-l-2 border-on-background text-secondary">
            During college, I worked as a freelance website and software developer, building practical digital products and helping clients turn ideas into reliable web experiences.
          </div>
        </section>
      </div>

      <section className="mb-10">
        <h2 className="font-bold uppercase text-primary mb-4 text-sm tracking-wider flex items-center gap-2"><Award className="w-4 h-4 text-emerald-accent" /> 6. CERTIFICATIONS</h2>
        <div className="pl-6 border-l-2 border-on-background grid gap-3">
          {certifications.map((certification) => (
            <article
              key={certification.title}
              role={certification.link ? 'link' : undefined}
              tabIndex={certification.link ? 0 : undefined}
              onClick={() => certification.link && window.open(certification.link, '_blank', 'noopener,noreferrer')}
              onKeyDown={(event) => {
                if (certification.link && (event.key === 'Enter' || event.key === ' ')) {
                  event.preventDefault();
                  window.open(certification.link, '_blank', 'noopener,noreferrer');
                }
              }}
              className={`border border-on-background bg-surface p-3 flex gap-3 items-start ${certification.link ? 'cursor-pointer hover:bg-surface-container focus:outline-2 focus:outline-emerald-accent' : ''}`}
            >
              <img src={certification.logo} alt={`${certification.issuer} logo`} className="w-10 h-10 object-contain border border-on-background bg-white p-1 shrink-0" />
              <div className="min-w-0 grow">
                <h3 className="font-bold text-primary">{certification.title}</h3>
                <p className="text-secondary text-xs mt-1">{certification.issuer} · Issued {certification.issued}</p>
                {certification.credential && <p className="text-secondary text-xs mt-1">Credential ID: {certification.credential}</p>}
                {certification.skills && <p className="text-secondary text-xs mt-1">Skills: {certification.skills}</p>}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <div className="mb-10">
        <h2 className="font-bold uppercase text-primary mb-2 text-sm tracking-wider">
          7. AI & ML TECHNICAL PROFICIENCY
        </h2>
        <div className="pl-6 border-l-2 border-on-background space-y-3 text-secondary">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-on-background/20 pb-2 gap-1">
            <span className="text-primary font-bold">[x] Generative AI & LLMs</span>
            <span className="text-xs bg-surface-container px-2 py-0.5 border border-on-background self-start sm:self-auto">Prompt Tuning & Context Windowing</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-on-background/20 pb-2 gap-1">
            <span className="text-primary font-bold">[x] PyTorch & Recommender Systems</span>
            <span className="text-xs bg-surface-container px-2 py-0.5 border border-on-background self-start sm:self-auto">NCF & BERT Matrix Factorization</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-on-background/20 pb-2 gap-1">
            <span className="text-primary font-bold">[x] NLP & Sentiment Analytics</span>
            <span className="text-xs bg-surface-container px-2 py-0.5 border border-on-background self-start sm:self-auto">TextBlob & Review Scraping</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-on-background/20 pb-2 gap-1">
            <span className="text-primary font-bold">[x] Streamlit & Web App Deployment</span>
            <span className="text-xs bg-surface-container px-2 py-0.5 border border-on-background self-start sm:self-auto">Python Microservices</span>
          </div>
        </div>
      </div>

      {/* METRICS ANALYSIS */}
      <div className="mt-12 border border-on-background p-6 relative bg-surface shadow-[6px_6px_0px_0px_var(--color-on-background)]">
        <div className="absolute -top-3 left-4 bg-background px-2 font-bold text-xs uppercase text-primary border border-on-background">
          Metrics_Analysis // AI Model Velocity Over Time
        </div>

        <div className="flex justify-between items-center mb-4 mt-2 flex-wrap gap-2">
          <span className="text-xs text-secondary font-bold">CLICK QUARTER TO INSPECT MILESTONES:</span>
          <span className="text-xs text-emerald-accent font-bold font-mono">SELECTED: [{selectedQuarter}]</span>
        </div>

        {/* Bar chart */}
        <div className="h-40 w-full flex items-end justify-between border-b border-l border-on-background pt-6 pl-4 pb-1 pr-4 relative bg-surface-container-high/40">
          {[
            { q: 'Q1', h: 'h-1/4', val: '85%' },
            { q: 'Q2', h: 'h-2/4', val: '91%' },
            { q: 'Q3', h: 'h-3/4', val: '96%' },
            { q: 'Q4', h: 'h-4/5', val: '98%' },
            { q: 'NOW', h: 'h-full', val: 'MAX' }
          ].map((bar) => {
            const isSelected = selectedQuarter === bar.q;
            return (
              <button
                key={bar.q}
                onClick={() => setSelectedQuarter(bar.q)}
                className={`w-12 transition-all duration-200 border border-on-background flex items-center justify-center text-xs font-bold ${bar.h} ${
                  isSelected 
                    ? 'bg-primary text-on-primary shadow-[2px_2px_0px_0px_var(--color-on-background)] -translate-y-1' 
                    : 'bg-surface-variant hover:bg-primary/20 text-primary'
                }`}
              >
                {bar.val}
              </button>
            );
          })}
        </div>

        {/* Labels */}
        <div className="flex justify-between w-full mt-3 text-xs text-secondary pl-4 pr-4 font-bold">
          <span>Q1</span>
          <span>Q2</span>
          <span>Q3</span>
          <span>Q4</span>
          <span className="text-emerald-accent">NOW</span>
        </div>

        {/* Selected detail panel */}
        <div className="mt-6 p-4 border border-on-background bg-primary-container text-surface text-xs font-mono scanlines">
          <div className="flex justify-between items-center mb-2 font-bold">
            <span className="text-emerald-accent">[+] QUARTER METRIC DETAILS: {selectedQuarter}</span>
            <span>SCORE: {quarterStats[selectedQuarter].score}</span>
          </div>
          <div className="space-y-1 text-surface-variant">
            <div>&gt; Benchmark: {quarterStats[selectedQuarter].ref}</div>
            <div>&gt; Quality Velocity: {quarterStats[selectedQuarter].diff}</div>
            <div>&gt; Automated Model Coverage: {quarterStats[selectedQuarter].coverage}</div>
          </div>
        </div>
      </div>

      {/* Download action */}
      <div className="mt-10 flex justify-center">
        <button
          onClick={onOpenResume}
          className="px-6 py-3 border-2 border-on-background bg-primary text-on-primary hover:bg-secondary font-bold text-sm shadow-[4px_4px_0px_0px_var(--color-on-background)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
        >
          [ Read Full AI Engineer Resume ]
        </button>
      </div>
    </main>
  );
}
