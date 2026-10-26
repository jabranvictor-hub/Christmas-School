import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Copy, Check, Info, ShieldCheck } from 'lucide-react';

export const Contact: React.FC = () => {
  const [copiedDraft, setCopiedDraft] = useState(false);
  const [inquiryTopic, setInquiryTopic] = useState('Curriculum & Learning Inquiry');
  const [draftNotes, setDraftNotes] = useState('');

  const handleCopyDraft = () => {
    const draftText = `To: [School Enquiries Email Placeholder]\nSubject: ${inquiryTopic}\n\nDraft Message:\n${draftNotes || '[Insert your message here]'}\n\n(Composed using the Christmas School Inquiry Draft Assistant)`;
    navigator.clipboard.writeText(draftText);
    setCopiedDraft(true);
    setTimeout(() => setCopiedDraft(false), 2500);
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-[#091e14] border-t border-emerald-900/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-300 mb-2">
            <span>School Communication</span>
            <span aria-hidden="true">·</span>
            <span>Administrative Directory</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-serif-heading">
            Contact Christmas School
          </h2>
          <p className="mt-3 text-emerald-200/90 leading-relaxed text-base">
            We welcome conversations with parents, prospective families, and community partners. The directory below contains customizable placeholders for administrative contact details.
          </p>
        </div>

        {/* Directory Placeholders Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          
          {/* Phone */}
          <div className="p-6 rounded-2xl bg-[#0c2419] border border-emerald-800/60 shadow-md flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-900 border border-emerald-700/60 flex items-center justify-center text-amber-300 mb-4">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-white font-display">
                Telephone Directory
              </h3>
              <p className="text-xs text-emerald-400 mt-1 mb-3">
                General Enquiries Line
              </p>
              <div className="p-3 rounded-lg bg-emerald-950/70 border border-emerald-800/40 font-mono text-xs text-amber-300">
                [Telephone Placeholder: (XXX) XXX-XXXX]
              </div>
            </div>
            <p className="text-2xs text-emerald-400/70 mt-4">
              [Placeholder to be updated by School Administration]
            </p>
          </div>

          {/* Email */}
          <div className="p-6 rounded-2xl bg-[#0c2419] border border-emerald-800/60 shadow-md flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-900 border border-emerald-700/60 flex items-center justify-center text-amber-300 mb-4">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-white font-display">
                Electronic Mail
              </h3>
              <p className="text-xs text-emerald-400 mt-1 mb-3">
                Admissions & Office
              </p>
              <div className="p-3 rounded-lg bg-emerald-950/70 border border-emerald-800/40 font-mono text-xs text-amber-300 break-all">
                [Email Placeholder: info@school-domain.example]
              </div>
            </div>
            <p className="text-2xs text-emerald-400/70 mt-4">
              [Placeholder to be updated by School Administration]
            </p>
          </div>

          {/* Campus Address */}
          <div className="p-6 rounded-2xl bg-[#0c2419] border border-emerald-800/60 shadow-md flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-900 border border-emerald-700/60 flex items-center justify-center text-amber-300 mb-4">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-white font-display">
                Campus Location
              </h3>
              <p className="text-xs text-emerald-400 mt-1 mb-3">
                Main Reception & Grounds
              </p>
              <div className="p-3 rounded-lg bg-emerald-950/70 border border-emerald-800/40 font-mono text-xs text-amber-300">
                [Address Placeholder: 100 Evergreen Way, Winterville, State/Province]
              </div>
            </div>
            <p className="text-2xs text-emerald-400/70 mt-4">
              [Placeholder to be updated by School Administration]
            </p>
          </div>

          {/* Visiting Hours */}
          <div className="p-6 rounded-2xl bg-[#0c2419] border border-emerald-800/60 shadow-md flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-900 border border-emerald-700/60 flex items-center justify-center text-amber-300 mb-4">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-white font-display">
                Reception Office Hours
              </h3>
              <p className="text-xs text-emerald-400 mt-1 mb-3">
                Term Time Hours
              </p>
              <div className="p-3 rounded-lg bg-emerald-950/70 border border-emerald-800/40 font-mono text-xs text-amber-300">
                [Office Hours Placeholder: Mon – Fri, 08:30 – 15:30]
              </div>
            </div>
            <p className="text-2xs text-emerald-400/70 mt-4">
              [Closed on statutory holidays & scheduled breaks]
            </p>
          </div>

        </div>

        {/* Client-Side Inquiry Draft Assistant (Zero Personal Data Collection) */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#0c2419] border border-emerald-800/70 shadow-xl">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs uppercase font-semibold text-amber-400 tracking-wider">
                Inquiry Draft Assistant
              </span>
              <span className="text-2xs font-mono px-2 py-0.5 rounded bg-emerald-950 border border-emerald-700/50 text-emerald-300">
                Local Only · No Data Sent
              </span>
            </div>
            <h3 className="text-xl font-bold text-white font-display mb-2">
              Prepare Your Notes Before Calling or Emailing
            </h3>
            <p className="text-xs text-emerald-200/90 leading-relaxed mb-6">
              To respect family privacy, this website does not collect names, personal email addresses, or student records. You can draft your message here, click "Copy Draft", and paste it directly into your own email program.
            </p>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-emerald-300 uppercase tracking-wider mb-2">
                  Topic of Inquiry
                </label>
                <select
                  value={inquiryTopic}
                  onChange={(e) => setInquiryTopic(e.target.value)}
                  className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-emerald-950 border border-emerald-700/60 text-white text-xs sm:text-sm focus:outline-none focus:border-amber-400"
                >
                  <option value="Curriculum & Learning Inquiry">Curriculum & Learning Inquiry</option>
                  <option value="Winter Activities & Games Program">Winter Activities & Games Program</option>
                  <option value="Timetable & Campus Visit Request">Timetable & Campus Visit Request</option>
                  <option value="General School Community Question">General School Community Question</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-emerald-300 uppercase tracking-wider mb-2">
                  Your Draft Questions / Notes
                </label>
                <textarea
                  rows={3}
                  value={draftNotes}
                  onChange={(e) => setDraftNotes(e.target.value)}
                  placeholder="E.g., I would like to learn more about the creative writing workshop and snowflake geometry projects for my child..."
                  className="w-full p-4 rounded-xl bg-emerald-950/70 border border-emerald-700/60 text-white placeholder-emerald-600 focus:outline-none focus:border-amber-400 text-xs sm:text-sm leading-relaxed"
                />
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                <button
                  type="button"
                  onClick={handleCopyDraft}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-red-700 hover:bg-red-600 text-white text-xs font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-amber-400 shadow-sm"
                >
                  {copiedDraft ? <Check className="w-4 h-4 text-emerald-300" /> : <Copy className="w-4 h-4" />}
                  <span>{copiedDraft ? 'Draft Copied to Clipboard!' : 'Copy Draft to Clipboard'}</span>
                </button>

                <div className="flex items-center gap-2 text-2xs text-emerald-300/80">
                  <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Privacy Assured: Form inputs remain solely on your local device.</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
