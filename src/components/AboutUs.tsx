import React, { useState } from 'react';
import { Sparkles, CheckCircle2, ShieldCheck } from 'lucide-react';

export const AboutUs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'learning' | 'creativity' | 'kindness' | 'teamwork'>('learning');

  const principles = {
    learning: {
      title: 'Passionate Learning',
      description: 'At Christmas School, every lesson begins with an open question. We believe children thrive when given the room to question how things work, experiment without fear of error, and uncover the joy of problem-solving together.',
      points: [
        'Engaging curriculum blending fundamental literacy, numeracy, and scientific inquiry',
        'Small group collaboration where every student participates and shares their ideas',
        'Seasonal workshops that connect abstract classroom concepts with the physical world',
      ],
    },
    creativity: {
      title: 'Boundless Creativity',
      description: 'Creativity is woven through every discipline—from mathematical geometric patterns to festive writing and visual arts. We celebrate the unique perspectives, voices, and artistic expressions each child brings to our school community.',
      points: [
        'Integrated seasonal crafts, holiday storytelling, and festive winter arts',
        'Encouragement of diverse problem-solving strategies and creative project design',
        'Celebration of student imagination through school-wide exhibitions and sharing',
      ],
    },
    kindness: {
      title: 'Unconditional Kindness',
      description: 'The spirit of Christmas is rooted in genuine warmth, generosity, and respect. In our corridors and classrooms, kindness is not an extra subject—it is the foundation of how our community treats one another every single day.',
      points: [
        'Empathy-first conflict resolution and peer mentorship circles',
        'Encouraging caring gestures, gratitude notes, and quiet acts of assistance',
        'An inclusive environment where every pupil feels secure, heard, and welcomed',
      ],
    },
    teamwork: {
      title: 'Collaborative Teamwork',
      description: 'Great discoveries and holiday celebrations are built together. Our students learn to listen thoughtfully, value different talents, share responsibilities, and experience the pride of achieving goals as a cohesive team.',
      points: [
        'Cross-subject group challenges, winter science labs, and community pageants',
        'Peer pairing where older learners guide and support younger schoolmates',
        'Team sports, festive musical ensembles, and cooperative classroom quests',
      ],
    },
  };

  return (
    <section id="about" className="py-16 lg:py-24 bg-[#091e14] border-t border-emerald-900/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 lg:mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-300 mb-2">
            <span>Our Ethos</span>
            <span aria-hidden="true">·</span>
            <span>A Dedicated Community</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-serif-heading">
            About Christmas School
          </h2>
          <p className="mt-4 text-lg text-emerald-200/90 leading-relaxed">
            Christmas School is a dedicated school community focused entirely on learning, creativity, kindness, and teamwork. We foster an uplifting, encouraging atmosphere where young learners develop the confidence and character to thrive.
          </p>
        </div>

        {/* 2-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Interactive Principles */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              {/* Segmented Principle Switcher */}
              <div className="flex flex-wrap gap-2 p-1.5 bg-emerald-950/80 rounded-xl border border-emerald-800/60 mb-6">
                {(['learning', 'creativity', 'kindness', 'teamwork'] as const).map((key) => {
                  const isActive = activeTab === key;
                  const labelMap = {
                    learning: 'Learning',
                    creativity: 'Creativity',
                    kindness: 'Kindness',
                    teamwork: 'Teamwork',
                  };
                  return (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setActiveTab(key)}
                      className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all whitespace-nowrap focus-visible:outline-2 focus-visible:outline-amber-400 ${
                        isActive
                          ? 'bg-red-700 text-white shadow-sm border border-red-500/40'
                          : 'text-emerald-200 hover:text-white hover:bg-emerald-900/40'
                      }`}
                    >
                      {labelMap[key]}
                    </button>
                  );
                })}
              </div>

              {/* Principle Card */}
              <div className="p-6 sm:p-8 rounded-2xl bg-[#0d2a1d] border border-emerald-700/50 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-amber-400/20 border border-amber-400/40 flex items-center justify-center text-amber-300">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                    {principles[activeTab].title}
                  </h3>
                </div>

                <p className="text-emerald-100/90 leading-relaxed mb-6">
                  {principles[activeTab].description}
                </p>

                <div className="space-y-3 pt-4 border-t border-emerald-800/60">
                  {principles[activeTab].points.map((pt, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                      <span className="text-sm text-emerald-100">{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Respectful community declaration without fabricated history/accreditation */}
            <div className="mt-6 p-4 rounded-xl bg-emerald-950/60 border border-emerald-800/40 flex items-start gap-3 text-xs text-emerald-300/80">
              <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <span>
                Community Commitment: Christmas School values transparent, accurate information for our families. All curriculum information, schedules, and guidance are provided directly by our school educators.
              </span>
            </div>
          </div>

          {/* Right Column: Classroom Image & Quote */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="relative rounded-2xl overflow-hidden border border-emerald-700/50 bg-emerald-950/70 shadow-xl flex-1 flex flex-col justify-end">
              <img
                src="/src/assets/images/learning_classroom_workshop_1793022460814.jpg"
                alt="Pupils working together in a bright, festive school classroom"
                className="w-full h-80 sm:h-96 lg:h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#091e14] via-[#091e14]/40 to-transparent pointer-events-none" />
              
              <div className="relative p-6 bg-[#091e14]/85 backdrop-blur-sm border-t border-emerald-800/50">
                <blockquote className="text-sm italic text-emerald-100 leading-relaxed font-serif">
                  "When children feel safe, encouraged, and filled with holiday wonder, their desire to learn and support each other becomes boundless."
                </blockquote>
                <div className="mt-3 text-xs text-amber-300 font-medium">
                  The Christmas School Educator Council
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
