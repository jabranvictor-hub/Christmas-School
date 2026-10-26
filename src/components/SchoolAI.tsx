import React, { useState } from 'react';
import { Sparkles, Send, ShieldAlert, BookOpen, Clock, HelpCircle, CheckCircle2 } from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'ai' | 'user';
  text: string;
  timestamp: string;
}

export const SchoolAI: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      sender: 'ai',
      text: 'Warm holiday greetings! I am the Christmas School AI Assistant. I am designed as an on-site information guide to help you explore our learning programs, school ethos, daily schedules, and creative activities. How can I assist you today?',
      timestamp: 'Just now',
    },
  ]);
  const [inputValue, setInputValue] = useState('');

  const quickQuestions = [
    'What subjects are taught at Christmas School?',
    'What are the school’s core values?',
    'Where can I find the timetable and events?',
    'How does Christmas School encourage creativity?',
    'How can I get in touch with the school?',
  ];

  const handleAsk = (queryText: string) => {
    if (!queryText.trim()) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: queryText.trim(),
      timestamp: 'Just now',
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');

    // Generate accurate, helpful educational response based on school information
    setTimeout(() => {
      const q = queryText.toLowerCase();
      let reply = '';

      if (q.includes('subject') || q.includes('curriculum') || q.includes('learn') || q.includes('class')) {
        reply = 'Christmas School teaches five foundational disciplines: English Language, Mathematics, Science & Discovery, Reading & Literature, and Creative Writing. Each discipline integrates seasonal inquiry projects such as snowflake hexagonal symmetry and festive storytelling!';
      } else if (q.includes('value') || q.includes('ethos') || q.includes('about') || q.includes('kindness')) {
        reply = 'Christmas School is a school community focused on learning, creativity, kindness, and teamwork. We place empathy and mutual respect at the center of classroom life, encouraging every pupil to contribute their unique voice.';
      } else if (q.includes('timetable') || q.includes('schedule') || q.includes('event') || q.includes('celebrat')) {
        reply = 'You can review our weekly schedule framework and upcoming celebrations in the "Timetable & Events" section above! Please note that official event dates and room allocations are marked with clear placeholders awaiting final administrative term release.';
      } else if (q.includes('creative') || q.includes('art') || q.includes('craft') || q.includes('puzzle')) {
        reply = 'Creativity is fostered through our Young Authors winter writing workshops, 3D geometric paper crafting, holiday choir ensembles, and interactive puzzles. You can try our Story Spark generator and Winter Quiz in the Activities section!';
      } else if (q.includes('contact') || q.includes('email') || q.includes('phone') || q.includes('address') || q.includes('reach')) {
        reply = 'Please check the Contact section below. We provide clearly marked editable placeholders (such as phone and email placeholders) and an Inquiry Draft Builder so you can prepare your notes without transmitting any personal data online.';
      } else if (q.includes('privacy') || q.includes('data') || q.includes('personal')) {
        reply = 'Christmas School takes privacy seriously. This site does not collect personal data from visitors, nor does it store tracking cookies or student records. You can review our full Privacy Policy in the footer or modal.';
      } else {
        reply = `Thank you for your question about "${queryText}". Christmas School is committed to learning, creativity, kindness, and teamwork. For specific administrative inquiries, please refer to our Contact placeholders or explore our Learning and Activities sections!`;
      }

      const aiMsg: ChatMessage = {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        text: reply,
        timestamp: 'Just now',
      };
      setMessages((prev) => [...prev, aiMsg]);
    }, 300);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleAsk(inputValue);
  };

  return (
    <section id="ai-assistant" className="py-16 lg:py-24 bg-[#0c2419] border-t border-emerald-900/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-300 mb-2">
            <span>Visitor Assistance</span>
            <span aria-hidden="true">·</span>
            <span>School Guide</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-serif-heading">
            Christmas School AI
          </h2>
          <p className="mt-3 text-emerald-200/90 leading-relaxed text-base">
            An on-site informational helper designed to assist families, pupils, and visitors with instant answers about our educational programs, community ethos, and school timetable.
          </p>
        </div>

        {/* Essential Compliance Disclaimer (Prompt Requirement) */}
        <div className="mb-8 p-4 rounded-xl bg-emerald-950/90 border border-emerald-700/60 flex items-start gap-3 text-xs text-emerald-200">
          <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <div>
            <strong className="text-white font-semibold">Important Service Notice: </strong>
            Christmas School AI is a dedicated school information reference tool built directly into this website. It is not connected to WhatsApp, social messaging platforms, or external live customer support systems. No personal data or chat transcripts are stored.
          </div>
        </div>

        {/* 2-Column AI Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Chat Window */}
          <div className="lg:col-span-8 p-6 sm:p-8 rounded-2xl bg-[#081a11] border border-emerald-800/80 shadow-2xl flex flex-col h-[520px]">
            
            {/* Chat header */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-emerald-900/60">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-emerald-900 border border-emerald-700/60 flex items-center justify-center text-amber-300">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white font-display">
                    Christmas School Information Guide
                  </h3>
                  <p className="text-2xs text-emerald-300/80">
                    Interactive School Directory Assistant
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setMessages([messages[0]])}
                className="text-xs text-emerald-300/70 hover:text-emerald-100 transition-colors underline underline-offset-2"
              >
                Reset Chat
              </button>
            </div>

            {/* Messages Scroll Area */}
            <div className="flex-1 overflow-y-auto space-y-4 pr-1 mb-4">
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] sm:max-w-[75%] rounded-2xl p-4 text-xs sm:text-sm leading-relaxed ${
                      m.sender === 'user'
                        ? 'bg-red-700 text-white rounded-br-none shadow-sm'
                        : 'bg-[#0f2e21] border border-emerald-800/60 text-emerald-100 rounded-bl-none shadow-sm'
                    }`}
                  >
                    <p>{m.text}</p>
                    <span className={`block text-3xs mt-1.5 opacity-60 ${m.sender === 'user' ? 'text-right' : 'text-left'}`}>
                      {m.timestamp}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Input Form */}
            <form onSubmit={handleFormSubmit} className="pt-3 border-t border-emerald-900/60 flex items-center gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask about subjects, timetable, school values..."
                className="flex-1 px-4 py-2.5 rounded-xl bg-emerald-950/70 border border-emerald-700/60 text-white text-xs sm:text-sm placeholder-emerald-600 focus:outline-none focus:border-amber-400"
              />
              <button
                type="submit"
                disabled={!inputValue.trim()}
                aria-label="Send question"
                className="p-2.5 rounded-xl bg-red-700 hover:bg-red-600 disabled:opacity-40 disabled:hover:bg-red-700 text-white transition-colors focus-visible:outline-2 focus-visible:outline-amber-400"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>

          </div>

          {/* Right Column: Quick Guidance & Suggested Prompts */}
          <div className="lg:col-span-4 space-y-6">
            
            <div className="p-6 rounded-2xl bg-[#0f2e21] border border-emerald-800/60 shadow-lg">
              <h4 className="text-sm font-bold text-white font-display mb-3 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-amber-300" />
                <span>Frequently Asked Questions</span>
              </h4>
              <p className="text-xs text-emerald-200/80 mb-4">
                Click any prompt to instantly query the Christmas School information database:
              </p>
              
              <div className="space-y-2">
                {quickQuestions.map((q, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => handleAsk(q)}
                    className="w-full text-left p-2.5 rounded-xl bg-emerald-950/60 border border-emerald-800/50 hover:border-amber-400/50 hover:bg-emerald-900/40 text-xs text-emerald-100 transition-all focus-visible:outline-2 focus-visible:outline-amber-400"
                  >
                    "{q}"
                  </button>
                ))}
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#0f2e21] border border-emerald-800/60 text-xs text-emerald-200/80 space-y-3">
              <h5 className="font-semibold text-white flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-amber-300" />
                <span>Information Scope</span>
              </h5>
              <div className="space-y-1.5">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                  <span>Curriculum goals for English, Math, Science & Writing</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                  <span>Overview of school calendar, assemblies & celebrations</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                  <span>School community kindness and collaboration guidelines</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
