import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Sparkles, AlertCircle, Info } from 'lucide-react';
import { TimetableSlot, SchoolEvent } from '../types';

export const TimetableEvents: React.FC = () => {
  const [viewMode, setViewMode] = useState<'events' | 'timetable'>('events');
  const [selectedDay, setSelectedDay] = useState<'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday'>('Monday');

  // Sample schedule structure with clear placeholders
  const scheduleByDay: Record<string, TimetableSlot[]> = {
    Monday: [
      { time: '08:45 – 09:00', subject: 'Morning Gathering & Festive Welcome', room: '[Room TBD: Main Hall]', notes: 'Community opening & seasonal thought' },
      { time: '09:00 – 10:00', subject: 'English Language & Reading Comprehension', room: '[Room TBD: Studio A]', notes: 'Winter story structures & grammar review' },
      { time: '10:00 – 10:20', subject: 'Morning Recess & Warm Herbal Tea Break', room: '[Play Courtyard / Atrium]', notes: 'Outdoor fresh air & peer play' },
      { time: '10:20 – 11:20', subject: 'Mathematics & Geometric Reasoning', room: '[Room TBD: Studio B]', notes: 'Snowflake hexagonal symmetry & ratio calculations' },
      { time: '11:20 – 12:20', subject: 'Science & Nature Discovery', room: '[Room TBD: Science Lab]', notes: 'Freezing points & evergreen adaptations' },
      { time: '12:20 – 13:15', subject: 'Lunch & Supervised Collaborative Activities', room: '[Dining Hall / Pavilion]', notes: 'Team building and quiet reading corner' },
      { time: '13:15 – 14:15', subject: 'Creative Writing & Seasonal Arts', room: '[Room TBD: Art Studio]', notes: 'Holiday narrative drafting & illustration' },
      { time: '14:15 – 15:15', subject: 'Music, Physical Education & Ensemble', room: '[Gymnasium / Music Room]', notes: 'Holiday carol singing & team sports' },
    ],
    Tuesday: [
      { time: '08:45 – 09:00', subject: 'Morning Gathering & Classroom Circle', room: '[Room TBD: Main Hall]', notes: 'Kindness goals for the day' },
      { time: '09:00 – 10:00', subject: 'Mathematics & Number Investigation', room: '[Room TBD: Studio B]', notes: 'Word problem analysis & mental arithmetic' },
      { time: '10:00 – 10:20', subject: 'Morning Recess & Outdoor Play', room: '[Play Courtyard]', notes: 'Supervised winter activity' },
      { time: '10:20 – 11:20', subject: 'Reading Circles & Literature Appreciation', room: '[Library / Reading Lounge]', notes: 'Folklore from around the globe' },
      { time: '11:20 – 12:20', subject: 'Science Experiment Workshop', room: '[Science Lab]', notes: 'Thermal insulation of materials' },
      { time: '12:20 – 13:15', subject: 'Lunch Break & Recreation', room: '[Dining Hall]', notes: 'Social conversation & friendship tables' },
      { time: '13:15 – 14:15', subject: 'Social Studies & World Cultures', room: '[Studio A]', notes: 'International winter traditions' },
      { time: '14:15 – 15:15', subject: 'Collaborative Problem-Solving Lab', room: '[Makerspace TBD]', notes: 'Team puzzle challenges' },
    ],
    Wednesday: [
      { time: '08:45 – 09:00', subject: 'Mid-week Assembly & Student Sharing', room: '[Assembly Hall TBD]', notes: 'Creative project spotlights' },
      { time: '09:00 – 10:00', subject: 'Science & Laboratory Inquiry', room: '[Science Lab]', notes: 'Crystal growth & microscopic snowflake patterns' },
      { time: '10:00 – 10:20', subject: 'Recess', room: '[Play Courtyard]', notes: 'Movement and hydration' },
      { time: '10:20 – 11:20', subject: 'English Composition & Vocabulary', room: '[Studio A]', notes: 'Descriptive sensory language workshop' },
      { time: '11:20 – 12:20', subject: 'Applied Mathematics & Measurement', room: '[Studio B]', notes: 'Baking ratios & perimeter calculations' },
      { time: '12:20 – 13:15', subject: 'Lunch & Free Recreation', room: '[Dining Hall]', notes: 'Board games & book club' },
      { time: '13:15 – 14:15', subject: 'Drama, Performance & Public Speaking', room: '[Auditorium TBD]', notes: 'Holiday scene rehearsals & poetry reciting' },
      { time: '14:15 – 15:15', subject: 'Eco-Gardening & Winter Flora Care', room: '[Campus Greenhouse TBD]', notes: 'Evergreen botanical observation' },
    ],
    Thursday: [
      { time: '08:45 – 09:00', subject: 'Morning Reflection & Daily Roadmap', room: '[Main Hall TBD]', notes: 'Classroom goals' },
      { time: '09:00 – 10:00', subject: 'Reading Comprehension & Character Studies', room: '[Library]', notes: 'Classic literature and ethical themes' },
      { time: '10:00 – 10:20', subject: 'Morning Recess', room: '[Play Courtyard]', notes: 'Winter outdoor games' },
      { time: '10:20 – 11:20', subject: 'Mathematics Logic & Puzzles', room: '[Studio B]', notes: 'Spatial math and riddle solving' },
      { time: '11:20 – 12:20', subject: 'Physical Movement & Winter Athletics', room: '[Gymnasium TBD]', notes: 'Agility, balance & teamwork games' },
      { time: '12:20 – 13:15', subject: 'Lunch & Relaxation', room: '[Dining Hall]', notes: 'Holiday choir listening' },
      { time: '13:15 – 14:15', subject: 'Art, Calligraphy & Card Making', room: '[Art Studio]', notes: 'Handcrafted seasonal gratitude letters' },
      { time: '14:15 – 15:15', subject: 'Creative Writing Workshop', room: '[Studio A]', notes: 'First draft editing with peer feedback' },
    ],
    Friday: [
      { time: '08:45 – 09:00', subject: 'Friday Joy Assembly & Star Awards', room: '[Assembly Hall TBD]', notes: 'Celebrating kindness and teamwork' },
      { time: '09:00 – 10:00', subject: 'Integrated STEAM Challenge', room: '[Makerspace TBD]', notes: 'Building miniature wooden holiday structures' },
      { time: '10:00 – 10:20', subject: 'Morning Recess', room: '[Play Courtyard]', notes: 'Fresh air break' },
      { time: '10:20 – 11:20', subject: 'Language Arts: Festive Storytelling', room: '[Library]', notes: 'Oral narrative circle and dramatic reading' },
      { time: '11:20 – 12:20', subject: 'Classroom Science Showcase', room: '[Science Lab]', notes: 'Demonstrations and student findings' },
      { time: '12:20 – 13:15', subject: 'Celebratory Community Lunch', room: '[Dining Hall]', notes: 'Festive student musical performance' },
      { time: '13:15 – 14:30', subject: 'Holiday Craft Fair Prep & Club Time', room: '[Various Rooms TBD]', notes: 'Student-led interest clubs' },
      { time: '14:30 – 15:00', subject: 'Weekly Reflection & Clean Classroom Wrap', room: '[Classrooms]', notes: 'Tidying together and weekend send-off' },
    ],
  };

  const events: SchoolEvent[] = [
    {
      id: 'event-1',
      title: 'Annual Winter Concert & Carol Pageant',
      dateLabel: '[Date Placeholder: Friday, December 18, 202X]',
      timeLabel: '[Time Placeholder: 18:00 – 19:30]',
      locationLabel: '[Location Placeholder: Main Auditorium / Assembly Hall]',
      description: 'A cheerful celebration showcasing student choir ensembles, instrumental performances, and festive poetry readings for our school community.',
      category: 'celebration',
      isPlaceholder: true,
    },
    {
      id: 'event-2',
      title: 'Winter Science & Snowflake Symmetry Exhibition',
      dateLabel: '[Date Placeholder: Tuesday, December 15, 202X]',
      timeLabel: '[Time Placeholder: 13:30 – 15:30]',
      locationLabel: '[Location Placeholder: Science Wing & Atrium]',
      description: 'Pupils present their hands-on experiments on crystallization, thermal insulation, and evergreen flora alongside geometric origami models.',
      category: 'academic',
      isPlaceholder: true,
    },
    {
      id: 'event-3',
      title: 'School-Wide Kindness Day & Secret Book Swap',
      dateLabel: '[Date Placeholder: Wednesday, December 9, 202X]',
      timeLabel: '[Time Placeholder: All School Day]',
      locationLabel: '[Location Placeholder: School Library & Classrooms]',
      description: 'Students exchange gently read books with thoughtful handwritten bookmarks and participate in community gratitude initiatives.',
      category: 'community',
      isPlaceholder: true,
    },
    {
      id: 'event-4',
      title: 'Young Authors Winter Story Showcase',
      dateLabel: '[Date Placeholder: Thursday, December 10, 202X]',
      timeLabel: '[Time Placeholder: 14:00 – 15:30]',
      locationLabel: '[Location Placeholder: Creative Writing Studio]',
      description: 'Pupils read their illustrated winter tales to parents and peers, celebrating imagination, descriptive language, and storytelling confidence.',
      category: 'creative',
      isPlaceholder: true,
    },
  ];

  return (
    <section id="timetable-events" className="py-16 lg:py-24 bg-[#0c2419] border-t border-emerald-900/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-300 mb-2">
              <span>Calendar & Daily Rhythm</span>
              <span aria-hidden="true">·</span>
              <span>School Timetable</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-serif-heading">
              Timetable & Celebrations
            </h2>
            <p className="mt-3 text-emerald-200/90 leading-relaxed text-base">
              A balanced daily routine paired with memorable school traditions. Below is our weekly schedule model and upcoming community gatherings.
            </p>
          </div>

          {/* Toggle between Events & Timetable */}
          <div className="flex p-1 bg-emerald-950/80 rounded-xl border border-emerald-800/60 shrink-0">
            <button
              type="button"
              onClick={() => setViewMode('events')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all flex items-center gap-2 ${
                viewMode === 'events'
                  ? 'bg-red-700 text-white shadow-sm'
                  : 'text-emerald-300 hover:text-white'
              }`}
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Upcoming Celebrations</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode('timetable')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all flex items-center gap-2 ${
                viewMode === 'timetable'
                  ? 'bg-red-700 text-white shadow-sm'
                  : 'text-emerald-300 hover:text-white'
              }`}
            >
              <Clock className="w-3.5 h-3.5" />
              <span>Weekly Timetable</span>
            </button>
          </div>
        </div>

        {/* Clear Notice Banner for Placeholders */}
        <div className="mb-8 p-4 rounded-xl bg-amber-950/40 border border-amber-600/40 flex items-start gap-3 text-xs text-amber-200/90">
          <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <span>
            <strong className="text-amber-300 font-semibold">Information Notice: </strong>
            Dates, room designations, and timetable slots below contain clearly labeled placeholders (e.g. <span className="font-mono text-amber-300">[Date Placeholder]</span>, <span className="font-mono text-amber-300">[Room TBD]</span>) awaiting final administrative calendar release.
          </span>
        </div>

        {/* VIEW 1: UPCOMING EVENTS & CELEBRATIONS */}
        {viewMode === 'events' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {events.map((ev) => (
              <div
                key={ev.id}
                className="p-6 rounded-2xl bg-[#0f2e21] border border-emerald-800/60 shadow-md hover:border-amber-400/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <span className="text-xs uppercase font-semibold text-amber-300 tracking-wider">
                      {ev.category}
                    </span>
                    <span className="text-2xs font-mono px-2 py-0.5 rounded bg-emerald-950/80 border border-emerald-700/60 text-emerald-300">
                      [Placeholder Notice]
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white font-display mb-3">
                    {ev.title}
                  </h3>

                  <p className="text-sm text-emerald-100/85 leading-relaxed mb-6">
                    {ev.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-emerald-800/60 space-y-2 text-xs text-emerald-200/90">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-amber-400 shrink-0" />
                    <span className="font-mono">{ev.dateLabel}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                    <span className="font-mono">{ev.timeLabel}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                    <span className="font-mono">{ev.locationLabel}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* VIEW 2: WEEKLY TIMETABLE TEMPLATE */}
        {viewMode === 'timetable' && (
          <div className="p-6 sm:p-8 rounded-2xl bg-[#0f2e21] border border-emerald-800/60 shadow-lg">
            
            {/* Day Selector */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-6 border-b border-emerald-800/60">
              <div className="flex flex-wrap gap-2">
                {(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'] as const).map((day) => (
                  <button
                    key={day}
                    type="button"
                    onClick={() => setSelectedDay(day)}
                    className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all focus-visible:outline-2 focus-visible:outline-amber-400 ${
                      selectedDay === day
                        ? 'bg-red-700 text-white shadow-sm'
                        : 'bg-emerald-950/60 text-emerald-200 hover:bg-emerald-900/50'
                    }`}
                  >
                    {day}
                  </button>
                ))}
              </div>

              <div className="text-xs text-emerald-300 font-mono">
                [Term Schedule Placeholder · Model Timetable]
              </div>
            </div>

            {/* Table of periods */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-emerald-800/80 text-xs font-semibold text-emerald-300 uppercase tracking-wider">
                    <th className="py-3 px-4">Time Interval</th>
                    <th className="py-3 px-4">Subject / Learning Session</th>
                    <th className="py-3 px-4">Location</th>
                    <th className="py-3 px-4">Classroom Focus</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-emerald-800/40">
                  {scheduleByDay[selectedDay].map((slot, i) => (
                    <tr key={i} className="hover:bg-emerald-900/20 transition-colors">
                      <td className="py-3.5 px-4 font-mono text-xs font-semibold text-amber-300 whitespace-nowrap">
                        {slot.time}
                      </td>
                      <td className="py-3.5 px-4 font-medium text-white">
                        {slot.subject}
                      </td>
                      <td className="py-3.5 px-4 text-xs font-mono text-emerald-300 whitespace-nowrap">
                        {slot.room}
                      </td>
                      <td className="py-3.5 px-4 text-xs text-emerald-200/80">
                        {slot.notes}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 pt-4 border-t border-emerald-800/60 flex flex-col sm:flex-row items-center justify-between text-xs text-emerald-300/80 gap-3">
              <span className="flex items-center gap-1.5">
                <Info className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Pupils receive personalized timetable cards at the start of each school term.</span>
              </span>
              <span className="font-mono text-amber-400">
                [Placeholder: Final times to be confirmed upon enrollment]
              </span>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};
