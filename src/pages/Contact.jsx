import React, { useState } from 'react';
import { Send, CheckCircle2, AlertTriangle, Terminal, Mail } from 'lucide-react';
import confetti from 'canvas-confetti';

const GithubIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedinIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
  </svg>
);

const TwitterIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);


export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Project Inquiry',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [progress, setProgress] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errorMsg) setErrorMsg('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      setErrorMsg('ERR_NAME_REQUIRED: Please enter your name string.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMsg('ERR_INVALID_EMAIL: Please enter a valid email address.');
      return;
    }
    if (!formData.message.trim()) {
      setErrorMsg('ERR_EMPTY_PAYLOAD: Message body cannot be empty.');
      return;
    }

    setIsSubmitting(true);
    setProgress(10);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsSubmitting(false);
          setSubmitted(true);
          confetti({ particleCount: 70, spread: 60, origin: { y: 0.6 } });
          return 100;
        }
        return prev + 25;
      });
    }, 200);
  };

  const resetForm = () => {
    setSubmitted(false);
    setProgress(0);
    setFormData({ name: '', email: '', subject: 'Project Inquiry', message: '' });
  };

  return (
    <main className="flex-grow pt-24 pb-20 px-4 md:px-margin-edge max-w-[1280px] mx-auto w-full font-mono">
      {/* Page Title */}
      <div className="mb-10">
        <h1 className="font-bold text-2xl md:text-3xl text-primary border-b border-on-background pb-3 mb-2 inline-block">
          &gt; ./contact.sh
        </h1>
        <p className="text-secondary text-sm">Initiating communication protocol...</p>
      </div>

      {/* Split Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-on-background bg-surface shadow-[6px_6px_0px_0px_var(--color-on-background)]">
        {/* Left Column: Info */}
        <div className="p-6 md:p-8 border-b md:border-b-0 md:border-r border-on-background">
          <h2 className="font-bold text-xl text-primary mb-4 flex items-center gap-2">
            <Terminal className="w-5 h-5 text-emerald-accent" />
            <span>OPEN_COMMUNICATION</span>
          </h2>

          <div className="space-y-4 text-sm text-secondary leading-relaxed">
            <div className="p-3 border border-on-background bg-surface-container text-xs">
              <span className="font-bold text-emerald-accent block mb-1">[ STATUS: ONLINE ]</span>
              Ready to receive input. For general inquiries, project proposals, or technical discussions, please use the provided interface.
            </div>

            <div className="pt-2">
              <span className="block text-primary font-bold mb-1">Direct protocol:</span>
              <a 
                href="mailto:hello@design_os.com" 
                className="text-primary font-bold border-b border-primary hover:bg-primary hover:text-on-primary transition-colors text-sm"
              >
                hello@design_os.com
              </a>
            </div>

            <div className="mt-8 pt-6 border-t border-on-background">
              <p className="font-bold text-primary mb-3 uppercase tracking-wider text-xs">Supported Channels:</p>
              <ul className="space-y-2 text-xs">
                <li>
                  <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-primary hover:underline flex items-center gap-2">
                    <GithubIcon className="w-4 h-4 text-emerald-accent" />
                    <span>[+] GitHub_Repo</span>
                  </a>
                </li>
                <li>
                  <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-primary hover:underline flex items-center gap-2">
                    <LinkedinIcon className="w-4 h-4 text-emerald-accent" />
                    <span>[+] LinkedIn_Network</span>
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-primary hover:underline flex items-center gap-2">
                    <TwitterIcon className="w-4 h-4 text-emerald-accent" />
                    <span>[+] Twitter_Feed</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Column: Terminal Form */}
        <div className="p-6 md:p-8 bg-surface-container-lowest relative">
          {/* Terminal Header */}
          <div className="h-7 bg-primary-container text-surface border-b border-on-background flex items-center justify-between px-3 text-xs mb-6 scanlines">
            <span className="text-emerald-accent font-bold">(o)(o)(o)</span>
            <span className="font-mono text-[11px] text-surface-variant">/bin/bash - message_relay.sh</span>
          </div>

          {submitted ? (
            <div className="p-6 border border-on-background bg-primary text-on-primary text-center space-y-4 scanlines">
              <CheckCircle2 className="w-12 h-12 text-emerald-accent mx-auto animate-bounce" />
              <h3 className="font-bold text-lg">[ PAYLOAD DISPATCHED SUCCESSFULLY ]</h3>
              <p className="text-xs text-on-primary-container leading-relaxed">
                Your message packet has been transmitted to hello@design_os.com. Response latency is typically under 24 hours.
              </p>
              <button
                onClick={resetForm}
                className="mt-4 px-4 py-2 border border-on-primary bg-surface text-primary font-bold text-xs hover:bg-emerald-accent hover:text-black transition-colors"
              >
                [ Send Another Message ]
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {errorMsg && (
                <div className="p-3 border border-red-500 bg-red-500/10 text-red-600 text-xs font-bold flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <div className="flex flex-col">
                <label htmlFor="name" className="text-xs font-bold text-primary mb-1">Name_</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter string..."
                  className="w-full bg-[#f8f7f7] border border-on-background rounded-none p-2.5 text-sm text-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="email" className="text-xs font-bold text-primary mb-1">Email_</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="user@domain.com"
                  className="w-full bg-[#f8f7f7] border border-on-background rounded-none p-2.5 text-sm text-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="subject" className="text-xs font-bold text-primary mb-1">Subject_</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-[#f8f7f7] border border-on-background rounded-none p-2.5 text-sm text-primary focus:outline-none"
                >
                  <option>Project Inquiry</option>
                  <option>Architecture Consultation</option>
                  <option>Job Opportunity</option>
                  <option>General Question</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label htmlFor="message" className="text-xs font-bold text-primary mb-1">Message_Body</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Type message here..."
                  className="w-full bg-[#f8f7f7] border border-on-background rounded-none p-2.5 text-sm text-primary focus:outline-none resize-y"
                />
              </div>

              {isSubmitting ? (
                <div className="p-3 border border-on-background bg-primary text-on-primary font-mono text-xs space-y-2">
                  <div className="flex justify-between font-bold text-emerald-accent">
                    <span>TRANSMITTING PAYLOAD...</span>
                    <span>{progress}%</span>
                  </div>
                  <div className="w-full bg-primary-container h-3 border border-on-background">
                    <div className="bg-emerald-accent h-full transition-all duration-200" style={{ width: `${progress}%` }}></div>
                  </div>
                </div>
              ) : (
                <div className="pt-2 flex justify-end">
                  <button
                    type="submit"
                    className="border border-on-background px-6 py-2.5 text-sm font-bold text-primary bg-surface hover:bg-primary hover:text-on-primary transition-all shadow-[2px_2px_0px_0px_var(--color-on-background)] hover:shadow-none hover:translate-x-[1px] hover:translate-y-[1px] flex items-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>[ Send Message ] -&gt;</span>
                  </button>
                </div>
              )}
            </form>
          )}
        </div>
      </div>
    </main>
  );
}
