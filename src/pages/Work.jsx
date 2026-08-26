import React, { useState } from 'react';
import { ArrowRight, Bot, BarChart3, Film, Filter, Play, Sparkles } from 'lucide-react';

const GithubIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

export default function Work({ onSelectProject }) {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      id: 'ai-career-hub',
      title: 'TalentSearch AI: RAG Career Hub',
      category: 'RAG & Vector Search',
      status: '[x] Live App',
      tag: '[RAG & FAISS]',
      description: 'A premium RAG career assistant and candidate evaluation dashboard built on LangChain, FAISS vector store, Streamlit, and multi-LLM engines (Gemini, Claude, GPT-4o, Ollama).',
      longDescription: 'Architected TalentSearch AI—an enterprise-grade Retrieval-Augmented Generation (RAG) platform. Uses FAISS vector store indexing and LangChain context retrieval for semantic Q&A, automated ATS score matching, candidate skills extraction, mock interviewing, and structured JSON resume schema export.',
      tags: ['RAG', 'LangChain', 'FAISS', 'LLMs', 'Vector Search', 'Python'],
      githubUrl: 'https://github.com/lakshya971/ai-career-hub',
      liveUrl: 'https://talentsearchai.streamlit.app/',
      mockupType: 'rag_career',
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
qa_chain = RetrievalQA.from_chain_type(llm=llm, retriever=retriever)`
    },
    {
      id: 'genai-chatbot',
      title: 'Generative AI Chatbot',
      category: 'GenAI & LLMs',
      status: '[x] Live App',
      tag: '[GenAI & LLMs]',
      description: 'Interactive Generative AI Chatbot built with Python, LLM APIs & Streamlit, engineered for low-latency multi-turn conversational intelligence and context window memory.',
      longDescription: 'Architected a full-stack Generative AI conversational assistant. Features multi-session message context windowing, streaming token response generation, system prompt tuning, and Streamlit session state management.',
      tags: ['GenAI', 'LLMs', 'Python', 'Streamlit', 'Prompt Engineering'],
      githubUrl: 'https://github.com/lakshya971/genai-chatbot',
      liveUrl: 'https://genaichatgpt.streamlit.app/',
      mockupType: 'genai_chat',
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
        st.markdown(message["content"])`
    },
    {
      id: 'business-analyzer',
      title: 'Local Business Review Analyzer',
      category: 'AI/ML Analytics',
      status: '[x] Live App',
      tag: '[AI/ML Analytics]',
      description: 'AI/ML Natural Language Processing dashboard analyzing local business review datasets for sentiment distribution, complaint extraction, and business operational insights.',
      longDescription: 'Built an end-to-end NLP analytics platform for local business operational intelligence. Extracts actionable customer sentiment trends, categorizes operational complaints, and generates automated PDF/CSV business health reports.',
      tags: ['AI/ML', 'NLP', 'Sentiment Analysis', 'Python', 'Data Analytics'],
      githubUrl: 'https://github.com/lakshya971/business_analyser',
      liveUrl: 'https://business-analyser-1.onrender.com/',
      mockupType: 'sentiment_dash',
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
    return 'Neutral'`
    },
    {
      id: 'ai-movie-recommendation',
      title: 'VIBEREC - Next-Gen AI Movie Recommender',
      category: 'AI Recommender',
      status: '[x] Live App',
      tag: '[AI Recommender]',
      description: 'Next-Gen AI Recommendation engine utilizing Hybrid Neural Collaborative Filtering (NCF), BERT mood-based search, AI chatbot assistant, and real-time rating telemetry.',
      longDescription: 'Engineered a hybrid recommendation engine combining Neural Collaborative Filtering (NCF) matrix factorization with BERT semantic mood matching. Includes an integrated conversational movie discovery agent and user preference tracking.',
      tags: ['AI/ML', 'Recommender Systems', 'PyTorch', 'BERT', 'Collaborative Filtering'],
      githubUrl: 'https://github.com/lakshya971/AI-movie-recommendation',
      liveUrl: 'https://ai-movie-recommendation-tox9.onrender.com/',
      mockupType: 'viberec_ui',
      features: [
        'Hybrid Neural Collaborative Filtering (NCF) matrix factorization',
        'Natural language mood-based semantic search powered by BERT embeddings',
        'Embedded AI Chatbot assistant for conversational movie discovery',
        'Real-time rating telemetry, watch history, and system evaluation benchmarks'
      ],
      codeSnippet: `import torch
import torch.nn as nn

class NCFRecommender(nn.Module):
    def __init__(self, num_users, num_items, latent_dim=32):
        super().__init__()
        self.user_embed = nn.Embedding(num_users, latent_dim)
        self.item_embed = nn.Embedding(num_items, latent_dim)
        self.fc = nn.Sequential(nn.Linear(latent_dim * 2, 64), nn.ReLU(), nn.Linear(64, 1))`
    },
    {
      id: 'customer-shopping-behavior',
      title: 'Customer Shopping Behavior Analysis',
      category: 'Data Analytics',
      status: '[x] Analysis Complete',
      tag: '[Data Analytics]',
      description: 'Full-stack customer shopping analysis across 3,900 transactions using Python, PostgreSQL, and Power BI to uncover customer, product, and revenue insights.',
      longDescription: 'Analyzed 3,900 transactions and 18 features to understand purchasing patterns, subscription behavior, discount impact, customer segments, and age-group revenue. Cleaned and feature-engineered the dataset in pandas, loaded it into PostgreSQL for business analysis, and presented the results in an interactive Power BI dashboard.',
      tags: ['Python', 'Pandas', 'PostgreSQL', 'Power BI', 'Jupyter', 'EDA'],
      githubUrl: 'https://github.com/lakshya971/customer_behavior_analysis',
      image: '/Screenshot 2026-05-25 122236.png',
      features: [
        'Cleaned missing review ratings with category-level median imputation and standardized columns to snake_case',
        'Answered 10 business questions covering revenue, discounts, shipping, subscriptions, products, and customer segments',
        'Found non-subscribers generated more total revenue while subscription spend remained broadly similar',
        'Recommended subscription perks, loyalty rewards, margin-aware promotions, and targeted marketing by age group'
      ],
      codeSnippet: `SELECT age_group, SUM(purchase_amount) AS total_revenue
FROM customer_shopping_behavior
GROUP BY age_group
ORDER BY total_revenue DESC;`
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter || p.tags.includes(activeFilter));

  return (
    <main className="max-w-[1280px] mx-auto px-4 md:px-margin-edge py-20 font-mono">
      {/* Header */}
      <div className="mb-10">
        <h1 className="font-bold text-3xl md:text-4xl mb-4 text-primary tracking-tight">
          SYSTEMS_ARCHIVE (AI & ML)
        </h1>
        <p className="text-secondary text-sm md:text-base max-w-2xl leading-relaxed border-l-2 border-on-background pl-4">
          A definitive log of production AI Engineering systems, Generative AI applications, RAG vector pipelines, and Machine Learning platforms deployed by Lakshya Asthana (Forward Deployed AI Engineer).
        </p>
      </div>

      {/* Tag Filters */}
      <div className="flex flex-wrap items-center gap-2 mb-8 pb-4 border-b border-on-background">
        <span className="text-xs uppercase font-bold text-primary mr-2 flex items-center gap-1">
          <Filter className="w-3.5 h-3.5" /> Filter Category:
        </span>
        {['All', 'RAG & Vector Search', 'GenAI & LLMs', 'AI/ML Analytics', 'AI Recommender', 'Data Analytics'].map((tag) => {
          const isActive = activeFilter === tag;
          return (
            <button
              key={tag}
              onClick={() => setActiveFilter(tag)}
              className={`px-3 py-1 text-xs transition-colors border ${
                isActive 
                  ? 'border-on-background bg-primary text-on-primary font-bold' 
                  : 'border-on-background/40 text-secondary hover:border-on-background hover:text-primary bg-surface'
              }`}
            >
              [{tag}]
            </button>
          );
        })}
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        {filteredProjects.map((project) => (
          <article 
            key={project.id}
            className={`hairline-all p-6 flex flex-col justify-between group hover:bg-surface-container transition-colors duration-200 bg-surface shadow-[4px_4px_0px_0px_var(--color-on-background)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] ${
              project.id === 'ai-career-hub' ? 'md:col-span-2' : ''
            }`}
          >
            <div>
              {/* Header */}
              <div className="hairline-b pb-3 mb-4 flex justify-between items-start">
                <h2 className="font-bold text-xl text-primary flex items-center gap-2">
                  <span>{project.title}</span>
                </h2>
                <span className="text-xs text-secondary px-2 py-0.5 bg-surface-container-high border border-on-background font-bold">
                  {project.tag}
                </span>
              </div>

              {/* Description */}
              <p className="text-secondary text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Custom High-Fidelity UI Mockup Previews */}
              {project.mockupType === 'rag_career' && (
                <div className="mt-4 bg-[#faf9f5] text-[#141413] border border-on-background p-4 h-48 flex flex-col justify-between scanlines text-xs font-serif">
                  <div className="flex items-center justify-between border-b border-[#e5e2d9] pb-2 font-mono">
                    <span className="font-bold text-[#cc785c] flex items-center gap-1.5 text-sm">
                      <Sparkles className="w-4 h-4 text-[#cc785c]" />
                      <span>✦ TalentSearch AI: RAG Career Hub & Recruiter Dashboard</span>
                    </span>
                    <span className="text-[10px] bg-[#cc785c]/15 text-[#cc785c] border border-[#cc785c]/30 px-2 py-0.5 font-bold">
                      LangChain • FAISS
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 my-2 font-mono text-[10px] text-[#444340]">
                    <div className="p-2 border border-[#e5e2d9] bg-white text-center">
                      <div className="text-[#cc785c] font-bold">Semantic Q&A</div>
                      <div className="text-[9px] text-gray-500">FAISS k=5 chunks</div>
                    </div>
                    <div className="p-2 border border-[#e5e2d9] bg-white text-center">
                      <div className="text-[#cc785c] font-bold">ATS Matcher</div>
                      <div className="text-[9px] text-gray-500">JD Gap & Cover Letter</div>
                    </div>
                    <div className="p-2 border border-[#e5e2d9] bg-white text-center">
                      <div className="text-[#cc785c] font-bold">Mock Interview</div>
                      <div className="text-[9px] text-gray-500">Graded AI Feedback</div>
                    </div>
                  </div>
                  <div className="bg-[#ede9df] p-1.5 border border-[#d6d0c2] text-[10px] text-[#141413] flex justify-between font-mono">
                    <span>LLM Engine: Gemini 2.5 / Claude 3.5 / Ollama</span>
                    <span className="font-bold text-[#cc785c]">[DEPLOYED LIVE]</span>
                  </div>
                </div>
              )}

              {project.mockupType === 'genai_chat' && (
                <div className="mt-4 bg-[#111625] border border-on-background p-4 h-48 flex flex-col justify-between scanlines text-slate-100 text-xs font-mono">
                  <div className="flex items-center justify-between border-b border-slate-700 pb-2">
                    <span className="font-bold text-emerald-400 flex items-center gap-1.5">
                      <Bot className="w-4 h-4 text-emerald-accent" />
                      <span>Generative AI Chatbot Engine</span>
                    </span>
                    <span className="text-[10px] bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 px-2 py-0.5 font-bold">
                      Streamlit • Gemini LLM
                    </span>
                  </div>
                  <div className="space-y-2 my-2 text-[11px]">
                    <div className="bg-slate-800/80 p-2 border-l-2 border-emerald-400">
                      <span className="text-emerald-300 font-bold">User:</span> Explain Machine Learning concepts?
                    </div>
                    <div className="bg-slate-900/90 p-2 border-l-2 border-sky-400 text-slate-300">
                      <span className="text-sky-300 font-bold">AI:</span> Machine Learning (ML) enables computers to learn patterns from data and make decisions without explicit programming...
                    </div>
                  </div>
                  <div className="bg-slate-800 p-1.5 border border-slate-700 text-[10px] text-slate-400 flex items-center justify-between">
                    <span>Ask me anything...</span>
                    <span className="text-emerald-400 font-bold">[ONLINE]</span>
                  </div>
                </div>
              )}

              {project.mockupType === 'sentiment_dash' && (
                <div className="mt-4 bg-[#0d131f] border border-on-background p-4 h-48 flex flex-col justify-between scanlines text-slate-100 text-xs font-mono">
                  <div className="flex items-center justify-between border-b border-slate-700 pb-2">
                    <span className="font-bold text-emerald-400 flex items-center gap-1.5">
                      <BarChart3 className="w-4 h-4 text-emerald-accent" />
                      <span>Local Business Review Analyzer</span>
                    </span>
                    <span className="text-[10px] bg-sky-500/20 text-sky-400 border border-sky-500/40 px-2 py-0.5 font-bold">
                      TextBlob NLP
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 my-2 text-[10px]">
                    <div className="border border-slate-700 bg-slate-900/90 p-2 text-center">
                      <div className="text-emerald-400 font-bold text-base">58% Positive</div>
                      <div className="text-slate-400 text-[9px]">Sentiment Distribution</div>
                    </div>
                    <div className="border border-slate-700 bg-slate-900/90 p-2 text-center">
                      <div className="text-rose-400 font-bold text-base">16% Negative</div>
                      <div className="text-slate-400 text-[9px]">Operational Complaints</div>
                    </div>
                  </div>
                  <div className="bg-slate-800/80 p-1.5 border border-slate-700 text-[10px] text-emerald-300 flex justify-between">
                    <span>Top Strengths: Food Quality & Friendly Staff</span>
                    <span className="font-bold">[REPORT READY]</span>
                  </div>
                </div>
              )}

              {project.mockupType === 'viberec_ui' && (
                <div className="mt-4 bg-[#0d111a] border border-on-background p-4 h-48 flex flex-col justify-between scanlines text-slate-100 text-xs font-mono">
                  <div className="flex items-center justify-between border-b border-slate-700 pb-2">
                    <span className="font-bold text-pink-400 flex items-center gap-1.5">
                      <Film className="w-4 h-4 text-pink-400" />
                      <span>VIBEREC - AI Recommender</span>
                    </span>
                    <span className="text-[10px] bg-pink-500/20 text-pink-300 border border-pink-500/40 px-2 py-0.5 font-bold">
                      PyTorch NCF
                    </span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 my-2 text-[10px]">
                    <div className="border border-slate-700 bg-amber-500/10 p-2 text-center border-l-2 border-amber-400">
                      <div className="font-bold text-amber-300">Motor City</div>
                      <div className="text-[9px] text-slate-400">★ 7.2 | NCF</div>
                    </div>
                    <div className="border border-slate-700 bg-blue-500/10 p-2 text-center border-l-2 border-blue-400">
                      <div className="font-bold text-blue-300">Batman</div>
                      <div className="text-[9px] text-slate-400">★ 8.1 | BERT</div>
                    </div>
                    <div className="border border-slate-700 bg-rose-500/10 p-2 text-center border-l-2 border-rose-400">
                      <div className="font-bold text-rose-300">Spider-Man</div>
                      <div className="text-[9px] text-slate-400">★ 7.9 | Mood</div>
                    </div>
                    <div className="border border-slate-700 bg-emerald-500/10 p-2 text-center border-l-2 border-emerald-400">
                      <div className="font-bold text-emerald-300">The Dog Stars</div>
                      <div className="text-[9px] text-slate-400">★ 6.9 | Hybrid</div>
                    </div>
                  </div>
                  <div className="bg-slate-800/80 p-1.5 border border-slate-700 text-[10px] text-pink-300 flex justify-between">
                    <span>AI Chatbot • Mood Finder • Evaluation</span>
                    <span className="font-bold">[RENDER READY]</span>
                  </div>
                </div>
              )}

              {project.image && (
                <div className="mt-4 bg-surface-container border border-on-background h-48 overflow-hidden">
                  <img src={project.image} alt={`${project.title} dashboard`} className="w-full h-full object-cover object-top" />
                </div>
              )}
            </div>

            {/* Actions */}
            <div className="mt-6 pt-4 hairline-t flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div className="flex flex-wrap gap-1">
                {project.tags.map((t, idx) => (
                  <span key={idx} className="text-[10px] text-secondary font-mono border border-on-background/30 px-1.5 py-0.5">
                    #{t}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-xs font-bold border border-on-background px-3 py-1.5 bg-surface hover:bg-primary hover:text-on-primary transition-colors flex items-center gap-1"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>[ GitHub ]</span>
                </a>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="font-mono text-xs font-bold border border-on-background px-3 py-1.5 bg-emerald-accent text-black hover:bg-emerald-400 transition-colors flex items-center gap-1 shadow-[2px_2px_0px_0px_var(--color-on-background)] hover:shadow-none"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>[ Launch App ]</span>
                  </a>
                )}
                <button 
                  onClick={() => onSelectProject(project)}
                  className="font-mono text-xs font-bold border border-on-background px-3 py-1.5 bg-surface hover:bg-primary hover:text-on-primary transition-colors flex items-center gap-1"
                >
                  <span>[ Inspect ]</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
