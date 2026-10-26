import React from 'react';
import { ShieldCheck, X, Lock, CheckCircle2, AlertCircle } from 'lucide-react';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl bg-[#091e14] border border-emerald-700/80 rounded-2xl p-6 sm:p-8 shadow-2xl relative max-h-[88vh] overflow-y-auto text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close privacy policy"
          className="absolute top-5 right-5 p-2 text-emerald-300 hover:text-white rounded-lg hover:bg-emerald-900/50 transition-colors focus-visible:outline-2 focus-visible:outline-amber-400"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-emerald-900 border border-emerald-700/60 flex items-center justify-center text-amber-300">
            <Lock className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white font-display">
              Christmas School Privacy Policy
            </h2>
            <p className="text-xs text-amber-300 font-medium">
              Information Transparency & Child Privacy Standards
            </p>
          </div>
        </div>

        {/* Essential Statement as required by prompt */}
        <div className="p-4 rounded-xl bg-emerald-950/90 border border-emerald-700/60 mb-6 text-xs text-emerald-100 leading-relaxed">
          <div className="flex items-center gap-2 text-amber-300 font-bold mb-1">
            <ShieldCheck className="w-4 h-4" />
            <span>Core Privacy Commitment</span>
          </div>
          This website is designed as an informational and educational showcase for the Christmas School community. This site does not collect, record, track, or sell visitors' personal information unless an explicitly configured, officially reviewed, and consented feature is introduced by school administration.
        </div>

        <div className="space-y-6 text-xs sm:text-sm text-emerald-200/90 leading-relaxed">
          
          <div>
            <h3 className="font-bold text-white text-base font-display mb-2">
              1. Non-Collection of Personal Data
            </h3>
            <p className="mb-2">
              We uphold strict student and visitor privacy:
            </p>
            <ul className="space-y-1.5 pl-1">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>We do not harvest names, email addresses, phone numbers, or residential addresses.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>We do not store passwords, session credentials, or financial payment details.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Our Contact section utilizes local, client-side draft preparation only—zero form submissions are routed to any external servers.</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white text-base font-display mb-2">
              2. Student Safety & Records Protection
            </h3>
            <p>
              Under no circumstances does this website publish private student records, individual grades, children's real names, personal contact information, or sensitive educational assessments. All classroom examples and timetable materials are illustrative frameworks.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-white text-base font-display mb-2">
              3. Interactive Tools & School AI Guide
            </h3>
            <p>
              Interactive elements such as the Winter Knowledge Quiz, word scrambles, and the Christmas School AI assistant run locally inside your browser session. Questions entered into the School AI Guide remain client-side and are not transmitted to third-party advertising networks or social messaging platforms.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-white text-base font-display mb-2">
              4. Cookies and Web Analytics
            </h3>
            <p>
              This website does not deploy third-party advertising cookies, cross-site trackers, or commercial profiling cookies. Any local preferences (such as the toggle for the falling snow animation) are kept strictly on your local browser.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-white text-base font-display mb-2">
              5. Official Enquiries
            </h3>
            <p>
              For formal school communications, official enrollment documentation, or administrative requests, please consult the administrative contact placeholders provided in our contact section.
            </p>
          </div>

        </div>

        {/* Footer actions */}
        <div className="mt-8 pt-5 border-t border-emerald-900/60 flex items-center justify-between">
          <span className="text-2xs text-emerald-400/80">
            Last Reviewed for the Winter Term
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 bg-red-700 hover:bg-red-600 text-white text-xs font-semibold rounded-xl transition-colors focus-visible:outline-2 focus-visible:outline-amber-400"
          >
            Understood & Close
          </button>
        </div>

      </div>
    </div>
  );
};
