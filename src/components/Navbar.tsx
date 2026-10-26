import React, { useState } from 'react';
import { Menu, X, Sparkles, Snowflake } from 'lucide-react';

interface NavbarProps {
  snowEnabled: boolean;
  onToggleSnow: () => void;
  onOpenPrivacy: () => void;
  onOpenAiGuide: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  snowEnabled,
  onToggleSnow,
  onOpenPrivacy,
  onOpenAiGuide,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Learning', href: '#learning' },
    { label: 'Activities', href: '#activities' },
    { label: 'Timetable & Events', href: '#timetable-events' },
    { label: 'Announcements', href: '#announcements' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-emerald-950/60 bg-[#0c2419]/95 backdrop-blur-md transition-colors shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
        
        {/* Zone 1: Brand Wordmark */}
        <a
          href="#home"
          className="group flex items-center gap-2.5 text-slate-100 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-amber-400 rounded-sm"
        >
          <div className="w-9 h-9 rounded-lg bg-emerald-900 border border-emerald-700/60 flex items-center justify-center text-emerald-300 shadow-inner group-hover:border-amber-400/80 transition-colors">
            <svg
              className="w-5 h-5 text-emerald-300 group-hover:text-amber-300 transition-colors"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2L15 7H13L16 12H13.5L17 17H7L10.5 12H8L11 7H9L12 2Z" />
              <rect x="11" y="17" width="2" height="4" rx="0.5" fill="#ca8a04" />
            </svg>
          </div>
          <span className="text-xl font-bold tracking-tight text-white font-display">
            Christmas School <span className="text-amber-400 font-serif">🎄</span>
          </span>
        </a>

        {/* Zone 2: 4-5 Concise Single-line Nav Links */}
        <nav
          aria-label="Main Navigation"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-emerald-100/80"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="whitespace-nowrap shrink-0 hover:text-white transition-colors py-1 focus-visible:outline-2 focus-visible:outline-amber-400 rounded-sm"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="whitespace-nowrap shrink-0 hover:text-white transition-colors py-1 focus-visible:outline-2 focus-visible:outline-amber-400 rounded-sm"
          >
            Contact
          </a>
        </nav>

        {/* Zone 3: 1 Primary Action + Snow Toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onToggleSnow}
            title={snowEnabled ? 'Pause falling snow' : 'Enable falling snow'}
            aria-label={snowEnabled ? 'Pause falling snow' : 'Enable falling snow'}
            className={`p-2 rounded-lg border text-xs flex items-center gap-1.5 transition-all focus-visible:outline-2 focus-visible:outline-amber-400 ${
              snowEnabled
                ? 'border-emerald-600/70 bg-emerald-900/60 text-emerald-200 hover:bg-emerald-800/80'
                : 'border-emerald-900/50 bg-emerald-950/40 text-emerald-400/60 hover:text-emerald-200'
            }`}
          >
            <Snowflake className={`w-4 h-4 ${snowEnabled ? 'text-amber-300' : 'text-slate-400'}`} />
            <span className="hidden lg:inline text-xs font-medium">
              {snowEnabled ? 'Snow On' : 'Snow Off'}
            </span>
          </button>

          <button
            type="button"
            onClick={onOpenAiGuide}
            className="whitespace-nowrap shrink-0 inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-red-700 hover:bg-red-600 active:bg-red-800 rounded-lg shadow-sm border border-red-500/40 transition-colors focus-visible:outline-2 focus-visible:outline-amber-400"
          >
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>School AI Guide</span>
          </button>

          {/* Mobile menu trigger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            className="md:hidden p-2 text-emerald-200 hover:text-white focus-visible:outline-2 focus-visible:outline-amber-400 rounded-lg"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-emerald-900/60 bg-[#091b12] px-4 pt-3 pb-5 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-emerald-100 hover:bg-emerald-900/50 rounded-md transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-emerald-100 hover:bg-emerald-900/50 rounded-md transition-colors"
          >
            Contact
          </a>
          <div className="pt-2 border-t border-emerald-900/40 flex items-center justify-between">
            <button
              type="button"
              onClick={() => {
                onOpenPrivacy();
                setMobileMenuOpen(false);
              }}
              className="text-xs text-emerald-300/80 hover:text-emerald-100 underline underline-offset-2"
            >
              Privacy Policy
            </button>
            <span className="text-xs text-emerald-400/60">Evergreen Community</span>
          </div>
        </div>
      )}
    </header>
  );
};
