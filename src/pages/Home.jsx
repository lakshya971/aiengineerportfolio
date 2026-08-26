import React from 'react';
import TerminalHero from '../components/TerminalHero';
import LeetCodeHeatmap from '../components/LeetCodeHeatmap';
import GitHubHeatmap from '../components/GitHubHeatmap';
import { ArrowRight, Download, Layers, Cpu, Play, Bot, BarChart3, Sparkles, Database, Search } from 'lucide-react';

const GithubIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

export default function Home({ setActivePage, setTheme, onOpenResume, onSelectProject }) {
  const featuredProjects = [
    {
      id: 'ai-career-hub',
      title: 'TalentSearch AI: RAG Career Hub',
      status: '[x] Live App',
      tag: '[RAG & FAISS]',
      description: 'A premium RAG career assistant and candidate evaluation dashboard built on LangChain, FAISS vector embeddings, Streamlit, and multi-LLM engines (Gemini, Claude, GPT-4o, Ollama).',
      longDescription: 'Architected TalentSearch AI—an enterprise-grade Retrieval-Augmented Generation (RAG) platform. Uses FAISS vector store indexing and LangChain context retrieval for semantic Q&A, automated ATS score matching, candidate skills extraction, mock interviewing, and structured JSON resume schema export.',
      tags: ['RAG', 'LangChain', 'FAISS', 'LLMs', 'Vector Search', 'Python'],
      githubUrl: 'https://github.com/lakshya971/ai-career-hub',
      liveUrl: 'https://talentsearchai.streamlit.app/',
      features: [
        'Semantic vector search RAG pipeline using LangChain & FAISS local vector store',
        'Multi-LLM provider engine support (Gemini 2.5, Claude 3.5, OpenAI GPT-4o & Ollama)',
        'Candidate ATS score matching, missing keyword gap detection & cover letter generator',
        'Dynamic skill gap roadmap & interactive AI mock interviewer with graded scoring'
      ],
      codeSnippet: `from langchain_community.vectorstores import FAISS
from langchain_google_genai import GoogleGenerativeAIEmbeddings

# Build RAG Vector Index
embeddings = GoogleGenerativeAIEmbeddings(model="models/embedding-001")
vector_store = FAISS.from_documents(documents=chunks, embedding=embeddings)
retriever = vector_store.as_retriever(search_kwargs={"k": 5})
qa_chain = RetrievalQA.from_chain_type(llm=llm, retriever=retriever)`,
      type: 'rag_career'
    },
    {
      id: 'genai-chatbot',
      title: 'Generative AI Chatbot',
      status: '[x] Live App',
      tag: '[GenAI & LLMs]',
      description: 'Interactive Generative AI Chatbot built with Python, LLM APIs & Streamlit, engineered for low-latency multi-turn conversational intelligence and context window memory.',
      longDescription: 'Architected a full-stack Generative AI conversational assistant. Features multi-session message context windowing, streaming token response generation, system prompt tuning, and Streamlit session state management.',
      tags: ['GenAI', 'LLMs', 'Python', 'Streamlit', 'Prompt Engineering'],
      githubUrl: 'https://github.com/lakshya971/genai-chatbot',
      liveUrl: 'https://genaichatgpt.streamlit.app/',
      features: [
        'Multi-turn conversational context windowing & memory',
        'Streaming token response rendering for sub-second UI feedback',
        'Customizable system prompt instructions for domain-specific tasks',
        'Session state persistence and graceful API error fallback'
      ],
      codeSnippet: `import streamlit as st
import google.generativeai as genai

st.title("Generative AI Chatbot")
model = genai.GenerativeModel("gemini-1.5-pro")

if "chat_history" not in st.session_state:
    st.session_state.chat_history = []

for message in st.session_state.chat_history:
    with st.chat_message(message["role"]):
        st.markdown(message["content"])`,
      type: 'genai_chat'
    },
    {
      id: 'business-analyzer',
      title: 'Local Business Review Analyzer',
      status: '[x] Live App',
      tag: '[AI/ML Analytics]',
      description: 'AI/ML Natural Language Processing dashboard analyzing local business review datasets for sentiment distribution, complaint extraction, and business operational insights.',
      longDescription: 'Built an end-to-end NLP analytics platform for local business operational intelligence. Extracts actionable customer sentiment trends, categorizes operational complaints, and generates automated PDF/CSV business health reports.',
      tags: ['AI/ML', 'NLP', 'Sentiment Analysis', 'Python', 'Data Analytics'],
      githubUrl: 'https://github.com/lakshya971/business_analyser',
      liveUrl: 'https://business-analyser-1.onrender.com/',
      features: [
        'Automated sentiment distribution parsing (Positive / Neutral / Negative)',
        'Time-series sentiment trend tracking across review cycles',
        'Operational complaint extraction & ranking for business strategy',
        'Automated PDF executive report export & CSV data ingestion'
      ],
      codeSnippet: `from textblob import TextBlob
import pandas as pd

def analyze_review_sentiment(review_text):
    analysis = TextBlob(review_text)
    polarity = analysis.sentiment.polarity
    if polarity > 0.1: return 'Positive'
    elif polarity < -0.1: return 'Negative'
    return 'Neutral'`,
      type: 'sentiment_dash'
    }
  ];

  return (
    <main className="flex-grow pt-20 pb-16 px-4 md:px-margin-edge max-w-[1280px] w-full mx-auto flex flex-col gap-12 font-mono">
      {/* Hero Terminal Section */}
      <TerminalHero setActivePage={setActivePage} setTheme={setTheme} onOpenResume={onOpenResume} />

      {/* Stats Section */}
      <section className="w-full flex flex-col gap-4 relative">
        <div className="flex items-center gap-4 mb-2">
          <h2 className="font-bold text-xl md:text-2xl text-primary flex items-center gap-2">
            <Cpu className="w-5 h-5 text-emerald-accent" />
            <span>AI Engineer Telemetry</span>
          </h2>
          <div className="h-px bg-on-background flex-grow"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Stat 1 */}
          <div className="border border-on-background p-6 rounded-none relative group hover:bg-surface-container transition-all duration-200 shadow-[4px_4px_0px_0px_var(--color-on-background)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]">
            <div className="absolute top-0 right-0 p-2 text-xs font-mono text-secondary opacity-60">Fig 1.</div>
            <div className="text-4xl font-bold text-primary mb-2">4+</div>
            <div className="text-xs text-secondary uppercase tracking-widest font-bold mb-4">Production AI / ML Apps</div>
            <div className="font-mono text-[10px] text-secondary leading-none whitespace-pre opacity-50 group-hover:opacity-100 transition-opacity">
{`  .       .   
 .|.     .|.  
 | | . . | |  
_| |_|_|_| |_ `}
            </div>
          </div>

          {/* Stat 2 */}
          <div className="border border-on-background p-6 rounded-none relative group hover:bg-surface-container transition-all duration-200 shadow-[4px_4px_0px_0px_var(--color-on-background)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]">
            <div className="absolute top-0 right-0 p-2 text-xs font-mono text-secondary opacity-60">Fig 2.</div>
            <div className="text-4xl font-bold text-primary mb-2">500+</div>
            <div className="text-xs text-secondary uppercase tracking-widest font-bold mb-4">GitHub Year Commits</div>
            <div className="font-mono text-[10px] text-secondary leading-none whitespace-pre opacity-50 group-hover:opacity-100 transition-opacity">
{`    __
 __|  |__
|        |
|________|`}
            </div>
          </div>

          {/* Stat 3 */}
          <div className="border border-on-background p-6 rounded-none relative group hover:bg-surface-container transition-all duration-200 shadow-[4px_4px_0px_0px_var(--color-on-background)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]">
            <div className="absolute top-0 right-0 p-2 text-xs font-mono text-secondary opacity-60">Fig 3.</div>
            <div className="text-4xl font-bold text-primary mb-2">FDE</div>
            <div className="text-xs text-secondary uppercase tracking-widest font-bold mb-4">Forward Deployed AI</div>
            <div className="font-mono text-[10px] text-secondary leading-none whitespace-pre opacity-50 group-hover:opacity-100 transition-opacity">
{` +--+--+--+
 |  |  |  |
 +--+--+--+`}
            </div>
          </div>
        </div>
      </section>

      {/* LeetCode Real-time Telemetry & Heatmap Section */}
      <LeetCodeHeatmap />

      {/* GitHub Real-time Telemetry & Heatmap Section */}
      <GitHubHeatmap />

      {/* Featured Work Section */}
      <section className="w-full flex flex-col gap-4 relative">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-3">
          <div className="flex items-center gap-3 flex-grow min-w-0">
            <h2 className="font-bold text-lg md:text-2xl text-primary flex items-center gap-2 whitespace-nowrap">
              <Layers className="w-5 h-5 text-emerald-accent shrink-0" />
              <span>[+] Featured AI & ML Systems</span>
            </h2>
            <div className="h-px bg-on-background flex-grow hidden sm:block"></div>
          </div>
          <button 
            onClick={() => setActivePage('work')}
            className="text-xs font-bold text-primary hover:underline px-3 py-1 border border-on-background bg-surface hover:bg-primary hover:text-on-primary transition-colors self-start sm:self-auto shrink-0"
          >
            [ View All 4 ] -&gt;
          </button>
        </div>

        <div className="flex flex-col border border-on-background divide-y divide-on-background">
          {featuredProjects.map((project) => (
            <article 
              key={project.id} 
              className="grid grid-cols-1 md:grid-cols-12 gap-0 hover:bg-surface-container transition-colors duration-200 group bg-surface"
            >
              {/* Project Custom UI Preview */}
              <div className="md:col-span-5 border-b md:border-b-0 md:border-r border-on-background p-4 flex flex-col justify-between bg-surface-container-lowest relative overflow-hidden h-52 md:h-auto">
                {project.type === 'rag_career' ? (
                  <div className="w-full h-full bg-[#faf9f5] text-[#141413] border border-on-background p-4 flex flex-col justify-between scanlines text-xs font-serif">
                    <div className="flex items-center justify-between border-b border-[#e5e2d9] pb-2 font-mono">
                      <span className="font-bold text-[#cc785c] flex items-center gap-1.5 text-sm">
                        <Sparkles className="w-4 h-4 text-[#cc785c]" />
                        <span>✦ TalentSearch AI</span>
                      </span>
                      <span className="text-[10px] bg-[#cc785c]/15 text-[#cc785c] border border-[#cc785c]/30 px-2 py-0.5 font-bold">
                        RAG FAISS
                      </span>
                    </div>
                    <div className="my-2 space-y-1.5 font-mono text-[10px] text-[#444340]">
                      <div className="p-2 border border-[#e5e2d9] bg-white rounded-none">
                        <span className="text-[#cc785c] font-bold">&gt; LLM Engine:</span> Gemini 2.5 Flash / Claude 3.5
                      </div>
                      <div className="p-2 border border-[#e5e2d9] bg-white rounded-none">
                        <span className="text-[#cc785c] font-bold">&gt; Vector Store:</span> FAISS Index (k=5 chunks)
                      </div>
                    </div>
                    <div className="bg-[#ede9df] p-1.5 border border-[#d6d0c2] text-[10px] text-[#141413] flex justify-between font-mono">
                      <span>ATS Matcher & Mock Interviewer</span>
                      <span className="font-bold text-[#cc785c]">[RAG ONLINE]</span>
                    </div>
                  </div>
                ) : project.type === 'genai_chat' ? (
                  <div className="w-full h-full bg-[#111625] border border-on-background p-4 flex flex-col justify-between scanlines text-slate-100 text-xs font-mono">
                    <div className="flex items-center justify-between border-b border-slate-700 pb-2">
                      <span className="font-bold text-emerald-400 flex items-center gap-1.5">
                        <Bot className="w-4 h-4 text-emerald-accent" />
                        <span>Generative AI Chatbot</span>
                      </span>
                      <span className="text-[10px] bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 px-2 py-0.5 font-bold">
                        Streamlit
                      </span>
                    </div>
                    <div className="space-y-2 my-2 text-[11px]">
                      <div className="bg-slate-800/80 p-2 border-l-2 border-emerald-400">
                        <span className="text-emerald-300 font-bold">User:</span> Explain Machine Learning concepts?
                      </div>
                      <div className="bg-slate-900/90 p-2 border-l-2 border-sky-400 text-slate-300">
                        <span className="text-sky-300 font-bold">AI:</span> ML is a branch of artificial intelligence focused on building applications that learn from data...
                      </div>
                    </div>
                    <div className="bg-slate-800 p-1.5 border border-slate-700 text-[10px] text-slate-400 flex items-center justify-between">
                      <span>Ask me anything...</span>
                      <span className="text-emerald-400 font-bold">[SEND]</span>
                    </div>
                  </div>
                ) : (
                  <div className="w-full h-full bg-[#0d131f] border border-on-background p-4 flex flex-col justify-between scanlines text-slate-100 text-xs font-mono">
                    <div className="flex items-center justify-between border-b border-slate-700 pb-2">
                      <span className="font-bold text-emerald-400 flex items-center gap-1.5">
                        <BarChart3 className="w-4 h-4 text-emerald-accent" />
                        <span>Local Business Review Analyzer</span>
                      </span>
                      <span className="text-[10px] bg-sky-500/20 text-sky-400 border border-sky-500/40 px-2 py-0.5 font-bold">
                        NLP Engine
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 my-2 text-[10px]">
                      <div className="border border-slate-700 bg-slate-900/90 p-2 text-center">
                        <div className="text-emerald-400 font-bold text-sm">58%</div>
                        <div className="text-slate-400 text-[9px]">Positive Sentiment</div>
                      </div>
                      <div className="border border-slate-700 bg-slate-900/90 p-2 text-center">
                        <div className="text-rose-400 font-bold text-sm">16%</div>
                        <div className="text-slate-400 text-[9px]">Top Complaints</div>
                      </div>
                    </div>
                    <div className="bg-slate-800/80 p-1.5 border border-slate-700 text-[10px] text-emerald-300 flex justify-between">
                      <span>Top Strength: Food Quality</span>
                      <span className="font-bold">[EDA READY]</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Project Details */}
              <div className="md:col-span-7 p-4 md:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-2">
                    <h3 className="text-lg sm:text-xl font-bold text-primary">{project.title}</h3>
                    <span className="font-mono text-xs text-primary bg-secondary-container px-2.5 py-1 rounded-none border border-on-background font-semibold self-start">
                      {project.tag}
                    </span>
                  </div>
                  <p className="text-secondary text-sm mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((t, idx) => (
                      <span key={idx} className="text-xs bg-surface-container-high border border-on-background px-2 py-0.5 text-primary font-bold">
                        [{t}]
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-on-background/20">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-black bg-emerald-accent border border-on-background hover:bg-emerald-400 px-4 py-2 transition-all duration-150 shadow-[2px_2px_0px_0px_var(--color-on-background)] hover:shadow-none"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>[ Launch Live App ]</span>
                  </a>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-primary bg-surface border border-on-background hover:bg-primary hover:text-on-primary px-3.5 py-2 transition-all duration-150"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>[ GitHub Repo ]</span>
                  </a>

                  <button
                    onClick={() => onSelectProject(project)}
                    className="inline-flex items-center gap-1 text-xs font-mono text-secondary hover:text-primary underline ml-auto py-2"
                  >
                    <span>Inspect Specs</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full flex flex-col items-center justify-center py-10 border border-on-background bg-surface-container text-center p-6 shadow-[4px_4px_0px_0px_var(--color-on-background)]">
        <h3 className="text-xl font-bold text-primary mb-2">[ FORWARD DEPLOYED AI ENGINEER ]</h3>
        <p className="text-secondary text-sm max-w-lg mb-6">
          Building LLM applications, RAG search pipelines, sentiment intelligence platforms, and high-performance machine learning deployments.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={onOpenResume}
            className="inline-flex items-center gap-2 text-base font-bold text-primary border-2 border-on-background bg-background px-8 py-3 rounded-none hover:bg-primary hover:text-on-primary transition-all duration-150 shadow-[4px_4px_0px_0px_var(--color-on-background)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
          >
            <Download className="w-5 h-5 text-emerald-accent" />
            <span>[ Download Resume.pdf ]</span>
          </button>
          <button
            onClick={() => setActivePage('contact')}
            className="inline-flex items-center gap-2 text-base font-bold text-on-primary border-2 border-on-background bg-primary px-8 py-3 rounded-none hover:bg-secondary transition-all duration-150 shadow-[4px_4px_0px_0px_var(--color-on-background)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
          >
            <span>[ Launch ./contact.sh ]</span>
          </button>
        </div>
      </section>
    </main>
  );
}
