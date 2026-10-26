import React, { useState } from 'react';
import { BookOpen, Calculator, FlaskConical, BookmarkCheck, PenTool, ArrowUpRight, X, Sparkles, Check } from 'lucide-react';
import { SubjectItem } from '../types';

export const Learning: React.FC = () => {
  const [selectedSubject, setSelectedSubject] = useState<SubjectItem | null>(null);

  const subjects: SubjectItem[] = [
    {
      id: 'english',
      name: 'English Language',
      tagline: 'Clarity, Voice & Composition',
      description: 'Strengthening vocabulary, grammar, reading comprehension, and articulate oral presentation through engaging discussions and expressive holiday prose.',
      iconName: 'BookOpen',
      festiveHighlight: 'Winter Story circles, festive letter drafting, and vocabulary building through seasonal poetry.',
      keyTopics: [
        'Descriptive and narrative writing mechanics',
        'Grammar, punctuation, and sentence variety',
        'Active listening, debate, and collaborative discourse',
        'Etymology and seasonal figurative language',
      ],
      learningOutcomes: [
        'Express ideas with clarity, grammatical accuracy, and warmth',
        'Analyze characters, themes, and narrative perspective in texts',
        'Deliver confident verbal presentations before class peers',
      ],
    },
    {
      id: 'mathematics',
      name: 'Mathematics',
      tagline: 'Logic, Symmetry & Spatial Wonder',
      description: 'Developing sharp mental arithmetic, geometrical reasoning, pattern discovery, and real-world problem-solving skills with practical seasonal applications.',
      iconName: 'Calculator',
      festiveHighlight: 'Symmetry in snowflake crystals, geometric gift-box tessellations, and holiday recipe scaling ratios.',
      keyTopics: [
        'Number sense, fractions, ratios, and percentages',
        'Two-dimensional and three-dimensional geometry',
        'Data handling, bar graphs, and probability puzzles',
        'Multi-step word problems and mental calculation strategies',
      ],
      learningOutcomes: [
        'Apply mathematical models to practical, real-world questions',
        'Understand geometric symmetry and spatial transformations',
        'Demonstrate logical reasoning when deciphering math puzzles',
      ],
    },
    {
      id: 'science',
      name: 'Science & Discovery',
      tagline: 'Inquiry, Nature & Exploration',
      description: 'Investigating the natural world through hands-on laboratory experiments, winter ecological observations, material states, and renewable energy concepts.',
      iconName: 'FlaskConical',
      festiveHighlight: 'Thermal insulation studies, states of water (ice crystals & snowfall), and evergreen pine biology.',
      keyTopics: [
        'States of matter: condensation, freezing, and sublimation',
        'Winter ecology, animal adaptations, and botanical evergreen structures',
        'Light, reflection, and festive illumination circuits',
        'Scientific method: hypothesis, variables, and fair testing',
      ],
      learningOutcomes: [
        'Formulate testable questions and record observations with precision',
        'Explain thermodynamics and seasonal environmental shifts',
        'Demonstrate respect for the natural environment and local wildlife',
      ],
    },
    {
      id: 'reading',
      name: 'Reading & Literature',
      tagline: 'Wonder, Empathy & Cultural Stories',
      description: 'Cultivating a lifelong passion for reading through rich classic folklore, multicultural holiday tales, poetry, and character-driven chapter books.',
      iconName: 'BookmarkCheck',
      festiveHighlight: 'Winter wonderland reading corners, peer book recommendations, and festive story theater reading aloud.',
      keyTopics: [
        'Comprehension strategies: inferencing, predicting, and summarizing',
        'Diverse cultural holiday traditions and international folk tales',
        'Poetry appreciation, rhythm, and festive meter',
        'Independent reading logs and peer book discussions',
      ],
      learningOutcomes: [
        'Build stamina and fluency in independent reading',
        'Synthesize deeper meaning and moral lessons across different stories',
        'Articulate personal reactions and thoughtful critiques of literature',
      ],
    },
    {
      id: 'creative-writing',
      name: 'Creative Writing',
      tagline: 'Imagination, World-Building & Heart',
      description: 'Encouraging original student voices through whimsical holiday narratives, character development, descriptive scene setting, and poetic verses.',
      iconName: 'PenTool',
      festiveHighlight: 'Authoring an original winter tale with student-illustrated holiday book covers for the school library.',
      keyTopics: [
        'Sensory descriptions: sight, sound, scent of winter wonder',
        'Plot arcs: opening hook, rising dilemma, resolution of joy',
        'Dialogue formatting and distinct character voices',
        'Constructive peer editing and revision workshops',
      ],
      learningOutcomes: [
        'Compose engaging original stories with clear narrative arcs',
        'Utilize sensory imagery to evoke atmosphere and mood',
        'Experience the pride of publishing finished manuscripts for the school community',
      ],
    },
  ];

  const renderIcon = (name: string) => {
    switch (name) {
      case 'BookOpen':
        return <BookOpen className="w-6 h-6 text-amber-300" />;
      case 'Calculator':
        return <Calculator className="w-6 h-6 text-amber-300" />;
      case 'FlaskConical':
        return <FlaskConical className="w-6 h-6 text-amber-300" />;
      case 'BookmarkCheck':
        return <BookmarkCheck className="w-6 h-6 text-amber-300" />;
      case 'PenTool':
        return <PenTool className="w-6 h-6 text-amber-300" />;
      default:
        return <BookOpen className="w-6 h-6 text-amber-300" />;
    }
  };

  return (
    <section id="learning" className="py-16 lg:py-24 bg-[#0c2419] border-t border-emerald-900/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-300 mb-2">
              <span>Curriculum & Growth</span>
              <span aria-hidden="true">·</span>
              <span>Primary Disciplines</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-serif-heading">
              Our Core Learning Programs
            </h2>
            <p className="mt-3 text-emerald-200/90 leading-relaxed text-base">
              A balanced, inquiry-based curriculum designed to nurture curious minds, analytical thinkers, and creative communicators in an encouraging school family.
            </p>
          </div>
          <div className="text-sm text-emerald-300/80 shrink-0">
            Click any subject to view syllabus highlights & seasonal projects
          </div>
        </div>

        {/* 5 Core Subject Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subjects.map((sub, idx) => (
            <div
              key={sub.id}
              className={`p-6 rounded-2xl bg-[#0f2e21] border border-emerald-800/60 hover:border-amber-400/60 transition-all flex flex-col justify-between shadow-md hover:shadow-xl hover:-translate-y-1 ${
                idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-900/90 border border-emerald-700/60 flex items-center justify-center">
                    {renderIcon(sub.iconName)}
                  </div>
                  <span className="text-xs font-semibold text-amber-300/90 tracking-wide uppercase">
                    0{idx + 1}. Discipline
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white font-display">
                  {sub.name}
                </h3>
                <p className="text-xs font-medium text-emerald-300 mt-1 mb-3">
                  {sub.tagline}
                </p>

                <p className="text-sm text-emerald-100/80 leading-relaxed mb-4">
                  {sub.description}
                </p>

                <div className="p-3 rounded-lg bg-emerald-950/60 border border-emerald-800/40 text-xs text-emerald-200/90 mb-6">
                  <span className="font-semibold text-amber-300">Seasonal Highlight: </span>
                  {sub.festiveHighlight}
                </div>
              </div>

              <button
                type="button"
                onClick={() => setSelectedSubject(sub)}
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-emerald-900/70 hover:bg-red-700 text-white font-medium text-xs transition-colors border border-emerald-700/50 hover:border-red-500/50 focus-visible:outline-2 focus-visible:outline-amber-400"
              >
                <span>View Syllabus & Outcomes</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

      </div>

      {/* Subject Detail Modal */}
      {selectedSubject && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm"
          onClick={() => setSelectedSubject(null)}
        >
          <div
            className="w-full max-w-2xl bg-[#091e14] border border-emerald-700/70 rounded-2xl p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto text-slate-100"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedSubject(null)}
              aria-label="Close modal"
              className="absolute top-5 right-5 p-2 text-emerald-300 hover:text-white rounded-lg hover:bg-emerald-900/50 transition-colors focus-visible:outline-2 focus-visible:outline-amber-400"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-emerald-900 border border-emerald-700/60 flex items-center justify-center">
                {renderIcon(selectedSubject.iconName)}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white font-display">
                  {selectedSubject.name}
                </h3>
                <p className="text-xs text-amber-300 font-medium">
                  {selectedSubject.tagline}
                </p>
              </div>
            </div>

            <p className="text-sm text-emerald-200/90 leading-relaxed mt-4 mb-6">
              {selectedSubject.description}
            </p>

            <div className="p-4 rounded-xl bg-emerald-950/70 border border-emerald-800/60 mb-6">
              <p className="text-xs uppercase font-semibold text-amber-400 tracking-wider mb-1 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Holiday Project Integration</span>
              </p>
              <p className="text-sm text-emerald-100">
                {selectedSubject.festiveHighlight}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <h4 className="text-xs uppercase tracking-wider font-semibold text-emerald-300 mb-3">
                  Core Topics Covered
                </h4>
                <ul className="space-y-2">
                  {selectedSubject.keyTopics.map((topic, i) => (
                    <li key={i} className="text-xs text-emerald-100 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0 mt-1.5" />
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs uppercase tracking-wider font-semibold text-emerald-300 mb-3">
                  Student Learning Outcomes
                </h4>
                <ul className="space-y-2">
                  {selectedSubject.learningOutcomes.map((outcome, i) => (
                    <li key={i} className="text-xs text-emerald-100 flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-emerald-900/60 flex items-center justify-between">
              <span className="text-xs text-emerald-400/80">
                Christmas School Curriculum Framework
              </span>
              <button
                type="button"
                onClick={() => setSelectedSubject(null)}
                className="px-4 py-2 bg-red-700 hover:bg-red-600 text-white text-xs font-semibold rounded-lg transition-colors"
              >
                Close Syllabus
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
