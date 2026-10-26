import React from 'react';
import { Heart, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenAiGuide: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacy, onOpenAiGuide }) => {
  return (
    <footer className="bg-[#071710] border-t border-emerald-950 text-emerald-200/80 py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-12">
          
          {/* Brand & Mission */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-900 border border-emerald-700/60 flex items-center justify-center text-amber-300">
                <svg
                  className="w-4 h-4 text-emerald-300"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2L15 7H13L16 12H13.5L17 17H7L10.5 12H8L11 7H9L12 2Z" />
                  <rect x="11" y="17" width="2" height="4" rx="0.5" fill="#ca8a04" />
                </svg>
              </div>
              <span className="text-xl font-bold tracking-tight text-white font-display">
                Christmas School <span className="text-amber-400">🎄</span>
              </span>
            </div>

            <p className="text-sm text-emerald-100 font-medium mb-3">
              Learning, friendship, creativity, and Christmas joy!
            </p>

            <p className="text-xs text-emerald-300/80 leading-relaxed max-w-sm mb-4">
              A vibrant, supportive school community dedicated to fostering wonder, kind hearts, and collaborative growth across every subject.
            </p>

            <div className="inline-flex items-center gap-2 text-2xs text-emerald-300/80 bg-emerald-950/80 border border-emerald-800/40 px-3 py-1.5 rounded-lg">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>Static Netlify-Ready Build · Zero Personal Tracking</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4 font-display">
              School Sections
            </h4>
            <ul className="space-y-2.5 text-xs text-emerald-300/90">
              <li>
                <a href="#home" className="hover:text-white transition-colors">Home & Welcome</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">About Our Community</a>
              </li>
              <li>
                <a href="#learning" className="hover:text-white transition-colors">Core Learning Curriculum</a>
              </li>
              <li>
                <a href="#activities" className="hover:text-white transition-colors">Activities, Quiz & Puzzles</a>
              </li>
              <li>
                <a href="#timetable-events" className="hover:text-white transition-colors">Timetable & Celebrations</a>
              </li>
              <li>
                <a href="#announcements" className="hover:text-white transition-colors">Demonstration Announcements</a>
              </li>
            </ul>
          </div>

          {/* Community & Information */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4 font-display">
              Visitor Information
            </h4>
            <div className="space-y-3 text-xs text-emerald-300/90">
              <p>
                Have questions about our curriculum or celebrations? Consult our interactive school helper:
              </p>
              <button
                type="button"
                onClick={onOpenAiGuide}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-emerald-900/80 hover:bg-emerald-800 text-white font-medium text-xs border border-emerald-700/60 transition-colors"
              >
                <span>Open Christmas School AI Guide</span>
              </button>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={onOpenPrivacy}
                  className="text-xs text-amber-300 hover:text-amber-200 underline underline-offset-4"
                >
                  View School Privacy Policy
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-emerald-950/80 flex flex-col sm:flex-row items-center justify-between text-2xs text-emerald-400/60 gap-4">
          <p>© {new Date().getFullYear()} Christmas School. All rights reserved. Built with joy for our school community.</p>
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={onOpenPrivacy}
              className="hover:text-emerald-200 transition-colors"
            >
              Privacy Policy
            </button>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1">
              <span>Made with</span>
              <Heart className="w-3 h-3 text-red-500 fill-red-500" />
              <span>for curious minds</span>
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
