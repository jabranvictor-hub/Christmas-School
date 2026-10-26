import React from 'react';
import { ArrowRight, BookOpen, Compass, Heart, Users } from 'lucide-react';

interface HeroProps {
  onExploreLearning: () => void;
  onOpenAiGuide: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreLearning, onOpenAiGuide }) => {
  return (
    <section id="home" className="relative pt-8 pb-16 lg:pt-14 lg:pb-20 overflow-hidden">
      {/* Subtle festive ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-radial from-emerald-600/15 via-emerald-800/5 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          
          {/* Left Column: Welcoming School Message */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Unboxed editorial lead */}
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-300/90 mb-4">
              <span>Nurturing Young Minds</span>
              <span aria-hidden="true">·</span>
              <span>Winter Term</span>
              <span aria-hidden="true">·</span>
              <span>Everyday Wonder</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-white text-balance leading-tight mb-5 font-serif-heading">
              Welcome to Christmas School <span className="inline-block text-amber-400">🎄</span>
            </h1>

            <p className="text-xl sm:text-2xl text-emerald-100 font-medium leading-snug mb-5 font-display text-balance">
              Learning, friendship, creativity, and Christmas joy!
            </p>

            <p className="text-base text-emerald-200/85 leading-relaxed max-w-2xl mb-8">
              Step into a warm and festive school environment where curiosity is celebrated, every student feels valued, and hands-on discovery brings joy into every classroom. Together, our pupils learn with courage, collaborate with kindness, and build memories that last a lifetime.
            </p>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#learning"
                onClick={(e) => {
                  e.preventDefault();
                  onExploreLearning();
                }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-red-700 hover:bg-red-600 active:bg-red-800 text-white font-semibold text-base shadow-md shadow-red-950/40 border border-red-500/30 transition-all hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-amber-400"
              >
                <span>Explore Learning</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={onOpenAiGuide}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-900/80 hover:bg-emerald-800/90 text-emerald-100 font-semibold text-base border border-emerald-600/50 transition-all hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-amber-400 shadow-sm"
              >
                <span>Ask School AI Guide</span>
              </button>
            </div>

            {/* Quick trust metrics / community markers without pill cliches */}
            <div className="mt-10 pt-6 border-t border-emerald-900/60 grid grid-cols-3 gap-4">
              <div>
                <p className="text-2xl font-bold text-amber-300 font-display tabular-nums">5 Core</p>
                <p className="text-xs text-emerald-200/70 mt-0.5">Foundational Subjects</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-amber-300 font-display tabular-nums">100%</p>
                <p className="text-xs text-emerald-200/70 mt-0.5">Interactive Discovery</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-amber-300 font-display tabular-nums">4 Pillars</p>
                <p className="text-xs text-emerald-200/70 mt-0.5">Kindness & Teamwork</p>
              </div>
            </div>

          </div>

          {/* Right Column: High Fidelity School Campus Image */}
          <div className="lg:col-span-5 relative flex flex-col justify-center">
            <div className="relative rounded-2xl overflow-hidden border border-emerald-700/40 bg-emerald-950/60 shadow-2xl group">
              <img
                src="/src/assets/images/hero_christmas_school_1793022458465.jpg"
                alt="Christmas School building illuminated warmly in winter with evergreen wreaths"
                className="w-full h-80 sm:h-96 lg:h-full object-cover transition-transform duration-500 group-hover:scale-102"
                referrerPolicy="no-referrer"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c2419]/90 via-transparent to-black/20 pointer-events-none" />
              
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-black/45 backdrop-blur-md border border-white/10">
                <p className="text-xs text-amber-300 font-medium">Campus Life & Wonder</p>
                <p className="text-sm font-semibold text-white mt-0.5">
                  A place where learning shines as bright as holiday lights.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* 4-Column Core Values Strip */}
        <div className="mt-14 pt-8 border-t border-emerald-900/60 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-5 rounded-xl bg-[#0f2e21]/70 border border-emerald-800/40">
            <div className="w-10 h-10 rounded-lg bg-emerald-900/90 border border-emerald-700/60 flex items-center justify-center text-amber-300 mb-3">
              <BookOpen className="w-5 h-5" />
            </div>
            <h3 className="text-base font-semibold text-white">Inspiring Learning</h3>
            <p className="text-xs text-emerald-200/80 mt-1.5 leading-relaxed">
              Igniting natural curiosity through rich literature, scientific inquiry, and problem solving.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#0f2e21]/70 border border-emerald-800/40">
            <div className="w-10 h-10 rounded-lg bg-emerald-900/90 border border-emerald-700/60 flex items-center justify-center text-amber-300 mb-3">
              <Heart className="w-5 h-5" />
            </div>
            <h3 className="text-base font-semibold text-white">Kindness & Empathy</h3>
            <p className="text-xs text-emerald-200/80 mt-1.5 leading-relaxed">
              Fostering a warm school culture where pupils support, respect, and look out for one another.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#0f2e21]/70 border border-emerald-800/40">
            <div className="w-10 h-10 rounded-lg bg-emerald-900/90 border border-emerald-700/60 flex items-center justify-center text-amber-300 mb-3">
              <Compass className="w-5 h-5" />
            </div>
            <h3 className="text-base font-semibold text-white">Boundless Creativity</h3>
            <p className="text-xs text-emerald-200/80 mt-1.5 leading-relaxed">
              Hands-on art, holiday craft projects, and expressive storytelling that spark imagination.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#0f2e21]/70 border border-emerald-800/40">
            <div className="w-10 h-10 rounded-lg bg-emerald-900/90 border border-emerald-700/60 flex items-center justify-center text-amber-300 mb-3">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="text-base font-semibold text-white">Joyful Teamwork</h3>
            <p className="text-xs text-emerald-200/80 mt-1.5 leading-relaxed">
              Collaborative group projects and school-wide celebrations where everyone contributes.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
