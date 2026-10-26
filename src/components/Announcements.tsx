import React, { useState } from 'react';
import { Bell, AlertCircle, Calendar, ArrowRight, X } from 'lucide-react';
import { AnnouncementItem } from '../types';

export const Announcements: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  const [selectedAnnouncement, setSelectedAnnouncement] = useState<AnnouncementItem | null>(null);

  const announcements: AnnouncementItem[] = [
    {
      id: 'ann-1',
      title: 'Winter Reading Challenge & Library Book Fair (Demonstration Sample)',
      date: 'Sample Notice Date: December 1, 202X',
      summary: 'Pupils are encouraged to read 5 festive or scientific books during the winter term to earn a handcrafted evergreen bookmark.',
      details: 'This demonstration sample highlights how school reading challenges are run at Christmas School. Pupils select books from our library catalog or bring favorite stories from home. Progress is recorded in a student reading passport with peer book reflections and creative character drawings.',
      category: 'Curriculum',
    },
    {
      id: 'ann-2',
      title: 'Classroom Winter Science Exhibition Preparation (Demonstration Sample)',
      date: 'Sample Notice Date: December 4, 202X',
      summary: 'Information regarding student safety goggles, eco-friendly ice experiments, and presentation poster guidelines.',
      details: 'This sample notice demonstrates guidance provided to parents and learners preparing for laboratory inquiry presentations. All experimental supplies are non-toxic, eco-friendly, and supervised by science instructors.',
      category: 'Curriculum',
    },
    {
      id: 'ann-3',
      title: 'Annual Holiday Choir Rehearsal Schedule (Demonstration Sample)',
      date: 'Sample Notice Date: December 6, 202X',
      summary: 'Rehearsal times for the winter ensemble and details on student instrument care during colder weather.',
      details: 'Demonstration text: The student choir and percussion ensemble will practice weekly in the school auditorium. Pupils are reminded to keep wooden instruments properly cased to maintain pitch and resonance during winter humidity drops.',
      category: 'Festive Event',
    },
    {
      id: 'ann-4',
      title: 'Community Warmth & Giving Drive (Demonstration Sample)',
      date: 'Sample Notice Date: December 8, 202X',
      summary: 'A community kindness project collecting warm woolen mittens, winter scarves, and non-perishable holiday pantry goods.',
      details: 'Demonstration text: Christmas School students participate in voluntary community kindness drives to support local shelters and community pantries. Collection bins are placed in the reception atrium throughout the holiday season.',
      category: 'Community',
    },
  ];

  const filtered = filter === 'All'
    ? announcements
    : announcements.filter((a) => a.category === filter);

  return (
    <section id="announcements" className="py-16 lg:py-24 bg-[#091e14] border-t border-emerald-900/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-8">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-300 mb-2">
            <span>School News & Updates</span>
            <span aria-hidden="true">·</span>
            <span>Bulletin Board</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-serif-heading">
            School Announcements
          </h2>
          <p className="mt-3 text-emerald-200/90 leading-relaxed text-base">
            Stay informed on school initiatives, term updates, and seasonal gatherings. All items below are sample notices provided for demonstration purposes.
          </p>
        </div>

        {/* Clear Demonstration Warning Label */}
        <div className="mb-8 p-4 rounded-xl bg-emerald-950/90 border border-emerald-700/60 flex items-start gap-3 text-xs text-emerald-200">
          <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <span>
            <strong className="text-white font-semibold">Demonstration Notice: </strong>
            The announcements displayed in this section are sample demonstration contents designed to show the school website layout and notice structure. They are not real administrative notices.
          </span>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 p-1 bg-emerald-950/80 rounded-xl border border-emerald-800/60 w-fit mb-8">
          {['All', 'Curriculum', 'Festive Event', 'Community'].map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setFilter(cat)}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all focus-visible:outline-2 focus-visible:outline-amber-400 ${
                filter === cat
                  ? 'bg-red-700 text-white shadow-sm'
                  : 'text-emerald-300 hover:text-white hover:bg-emerald-900/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Announcements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-2xl bg-[#0c2419] border border-emerald-800/60 hover:border-amber-400/50 shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-3">
                  <span className="text-xs font-semibold text-amber-300 uppercase tracking-wider">
                    {item.category}
                  </span>
                  <span className="text-2xs font-mono uppercase px-2 py-0.5 rounded bg-amber-400/10 border border-amber-400/30 text-amber-300">
                    Demonstration Sample
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white font-display mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-emerald-100/80 leading-relaxed mb-4">
                  {item.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-emerald-800/60 flex items-center justify-between text-xs">
                <span className="text-emerald-300/80 font-mono flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-amber-400" />
                  <span>{item.date}</span>
                </span>

                <button
                  type="button"
                  onClick={() => setSelectedAnnouncement(item)}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-amber-300 hover:text-amber-200 transition-colors"
                >
                  <span>Read Notice</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Announcement Modal */}
      {selectedAnnouncement && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm"
          onClick={() => setSelectedAnnouncement(null)}
        >
          <div
            className="w-full max-w-lg bg-[#091e14] border border-emerald-700/70 rounded-2xl p-6 sm:p-8 shadow-2xl relative text-slate-100"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedAnnouncement(null)}
              aria-label="Close announcement"
              className="absolute top-5 right-5 p-2 text-emerald-300 hover:text-white rounded-lg hover:bg-emerald-900/50 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="inline-block text-2xs font-mono uppercase px-2.5 py-1 rounded bg-amber-400/15 border border-amber-400/40 text-amber-300 mb-3">
              Demonstration Notice · Sample Only
            </div>

            <h3 className="text-xl font-bold text-white font-display mb-2">
              {selectedAnnouncement.title}
            </h3>

            <p className="text-xs text-emerald-300 font-mono mb-4 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-amber-400" />
              <span>{selectedAnnouncement.date}</span>
            </p>

            <div className="p-4 rounded-xl bg-emerald-950/70 border border-emerald-800/60 text-sm text-emerald-100 leading-relaxed mb-6">
              {selectedAnnouncement.details}
            </div>

            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => setSelectedAnnouncement(null)}
                className="px-4 py-2 bg-red-700 hover:bg-red-600 text-white text-xs font-semibold rounded-lg transition-colors"
              >
                Close Notice
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
