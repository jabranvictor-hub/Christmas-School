import React, { useState } from 'react';
import { Trophy, HelpCircle, Puzzle, Wand2, RefreshCw, CheckCircle, AlertCircle, ArrowRight, Lightbulb } from 'lucide-react';
import { QuizQuestion } from '../types';

export const Activities: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'quiz' | 'puzzles' | 'creative'>('quiz');

  // QUIZ STATE
  const quizQuestions: QuizQuestion[] = [
    {
      id: 1,
      question: 'Why do evergreen pine and spruce trees stay green throughout the winter?',
      options: [
        'They produce their own internal heat from roots',
        'Their needle-like leaves have a thick waxy coating that prevents moisture loss',
        'They absorb green reflections from falling snowflakes',
        'They do not perform photosynthesis at all during any season',
      ],
      correctIndex: 1,
      explanation: 'Pine needles have a tough outer cuticle wax and tightly packed stomata, reducing evaporation in cold and freezing weather.',
    },
    {
      id: 2,
      question: 'What geometric symmetry do all natural water snowflakes possess?',
      options: [
        'Four-fold square symmetry',
        'Six-fold hexagonal symmetry',
        'Five-fold pentagonal symmetry',
        'Eight-fold octagonal symmetry',
      ],
      correctIndex: 1,
      explanation: 'Because water molecules bond into a hexagonal crystal lattice as they freeze, genuine snowflakes naturally exhibit six-fold radial symmetry.',
    },
    {
      id: 3,
      question: 'Which literary device is used in the phrase: "The cheerful winter wind whispered through the pines"?',
      options: [
        'Personification',
        'Hyperbole',
        'Onomatopoeia',
        'Alliteration only',
      ],
      correctIndex: 0,
      explanation: 'Giving human characteristics (whispering) to non-human elements (the wind) is called personification.',
    },
    {
      id: 4,
      question: 'If a school holiday recipe for 4 pupils calls for 2 cups of warm cocoa, how many cups are needed for 12 pupils?',
      options: [
        '4 cups',
        '5 cups',
        '6 cups',
        '8 cups',
      ],
      correctIndex: 2,
      explanation: '12 pupils is 3 times 4 pupils (12 / 4 = 3). Multiplying 2 cups by 3 gives 6 cups.',
    },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [quizScore, setQuizScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const handleSelectOption = (idx: number) => {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(idx);
    setShowExplanation(true);
    if (idx === quizQuestions[currentQuestionIndex].correctIndex) {
      setQuizScore((prev) => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setQuizFinished(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setQuizScore(0);
    setQuizFinished(false);
  };

  // WORD SCRAMBLE STATE
  const scrambles = [
    { scrambled: 'G R E E N E V E R', word: 'EVERGREEN', hint: 'A tree that retains foliage throughout the year' },
    { scrambled: 'T R Y S Y M M E', word: 'SYMMETRY', hint: 'Balanced proportions found in snowflakes and geometry' },
    { scrambled: 'S I T Y C U R I O', word: 'CURIOSITY', hint: 'The desire to learn or know about everything' },
    { scrambled: 'D N E S S K I N', word: 'KINDNESS', hint: 'The quality of being friendly, generous, and considerate' },
  ];
  const [scrambleIndex, setScrambleIndex] = useState(0);
  const [scrambleInput, setScrambleInput] = useState('');
  const [scrambleFeedback, setScrambleFeedback] = useState<'idle' | 'correct' | 'wrong'>('idle');

  const handleCheckScramble = (e: React.FormEvent) => {
    e.preventDefault();
    if (scrambleInput.trim().toUpperCase() === scrambles[scrambleIndex].word) {
      setScrambleFeedback('correct');
    } else {
      setScrambleFeedback('wrong');
    }
  };

  const handleNextScramble = () => {
    setScrambleIndex((prev) => (prev + 1) % scrambles.length);
    setScrambleInput('');
    setScrambleFeedback('idle');
  };

  // STORY STARTER GENERATOR STATE
  const characters = [
    'An inventive fifth-grader who builds clockwork reindeer',
    'A curious young astronomer with a vintage brass telescope',
    'A quiet library apprentice who discovers a singing book of carols',
    'Two best friends constructing an origami winter observatory',
  ];
  const settings = [
    'the snow-covered school bell tower on the solstice evening',
    'a hidden greenhouse filled with frost-resistant winter blooms',
    'a quiet classroom lit by warm fairy lights after snowfall',
    'the school science laboratory during a surprise indoor frost experiment',
  ];
  const twists = [
    'they uncover a handwritten kindness challenge from years ago.',
    'an unexpected puzzle unlocks a secret room full of art supplies.',
    'their science barometer predicts the biggest holiday snowfall of the decade.',
    'they must work together with other classes before the final school bell rings.',
  ];

  const [storyPrompt, setStoryPrompt] = useState({
    character: characters[0],
    setting: settings[0],
    twist: twists[0],
  });

  const generateNewStory = () => {
    const c = characters[Math.floor(Math.random() * characters.length)];
    const s = settings[Math.floor(Math.random() * settings.length)];
    const t = twists[Math.floor(Math.random() * twists.length)];
    setStoryPrompt({ character: c, setting: s, twist: t });
  };

  return (
    <section id="activities" className="py-16 lg:py-24 bg-[#091e14] border-t border-emerald-900/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-300 mb-2">
            <span>Hands-On Discovery</span>
            <span aria-hidden="true">·</span>
            <span>Interactive Classroom</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-serif-heading">
            Activities, Puzzles & Projects
          </h2>
          <p className="mt-3 text-emerald-200/90 leading-relaxed text-base">
            Learning thrives through engagement. Test your wits with our winter quiz, solve educational vocabulary and math puzzles, or spark a new creative writing tale.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap gap-2 p-1.5 bg-emerald-950/80 rounded-xl border border-emerald-800/60 w-fit mb-8">
          <button
            type="button"
            onClick={() => setActiveTab('quiz')}
            className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all flex items-center gap-2 focus-visible:outline-2 focus-visible:outline-amber-400 ${
              activeTab === 'quiz'
                ? 'bg-red-700 text-white shadow-sm border border-red-500/40'
                : 'text-emerald-200 hover:text-white hover:bg-emerald-900/40'
            }`}
          >
            <HelpCircle className="w-4 h-4" />
            <span>Winter Knowledge Quiz</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('puzzles')}
            className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all flex items-center gap-2 focus-visible:outline-2 focus-visible:outline-amber-400 ${
              activeTab === 'puzzles'
                ? 'bg-red-700 text-white shadow-sm border border-red-500/40'
                : 'text-emerald-200 hover:text-white hover:bg-emerald-900/40'
            }`}
          >
            <Puzzle className="w-4 h-4" />
            <span>Word & Math Puzzles</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('creative')}
            className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all flex items-center gap-2 focus-visible:outline-2 focus-visible:outline-amber-400 ${
              activeTab === 'creative'
                ? 'bg-red-700 text-white shadow-sm border border-red-500/40'
                : 'text-emerald-200 hover:text-white hover:bg-emerald-900/40'
            }`}
          >
            <Wand2 className="w-4 h-4" />
            <span>Creative Projects & Story Sparks</span>
          </button>
        </div>

        {/* TAB 1: QUIZ */}
        {activeTab === 'quiz' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 p-6 sm:p-8 rounded-2xl bg-[#0c2419] border border-emerald-800/60 shadow-lg">
              {!quizFinished ? (
                <div>
                  <div className="flex items-center justify-between text-xs text-emerald-300 font-semibold mb-4">
                    <span>Question {currentQuestionIndex + 1} of {quizQuestions.length}</span>
                    <span className="text-amber-300 tabular-nums">Score: {quizScore}</span>
                  </div>

                  {/* Progress bar */}
                  <div className="w-full h-1.5 bg-emerald-950 rounded-full mb-6 overflow-hidden">
                    <div
                      className="h-full bg-amber-400 transition-all duration-300"
                      style={{ width: `${((currentQuestionIndex + 1) / quizQuestions.length) * 100}%` }}
                    />
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white mb-6 font-display">
                    {quizQuestions[currentQuestionIndex].question}
                  </h3>

                  <div className="space-y-3 mb-6">
                    {quizQuestions[currentQuestionIndex].options.map((opt, idx) => {
                      const isSelected = selectedAnswer === idx;
                      const isCorrect = idx === quizQuestions[currentQuestionIndex].correctIndex;
                      let btnStyle = 'border-emerald-800/60 bg-emerald-950/60 hover:bg-emerald-900/50 text-emerald-100';

                      if (selectedAnswer !== null) {
                        if (isCorrect) {
                          btnStyle = 'border-emerald-500 bg-emerald-900/80 text-white font-medium';
                        } else if (isSelected) {
                          btnStyle = 'border-red-600 bg-red-950/80 text-red-100';
                        } else {
                          btnStyle = 'border-emerald-950 bg-emerald-950/30 text-emerald-400/60 opacity-60';
                        }
                      }

                      return (
                        <button
                          key={idx}
                          type="button"
                          disabled={selectedAnswer !== null}
                          onClick={() => handleSelectOption(idx)}
                          className={`w-full p-4 rounded-xl border text-left text-sm transition-all flex items-center justify-between gap-3 focus-visible:outline-2 focus-visible:outline-amber-400 ${btnStyle}`}
                        >
                          <span className="flex items-center gap-3">
                            <span className="w-6 h-6 rounded-full bg-emerald-900 border border-emerald-700/60 flex items-center justify-center text-xs font-bold text-amber-300 shrink-0">
                              {String.fromCharCode(65 + idx)}
                            </span>
                            <span>{opt}</span>
                          </span>
                          {selectedAnswer !== null && isCorrect && (
                            <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                          )}
                          {selectedAnswer !== null && isSelected && !isCorrect && (
                            <AlertCircle className="w-5 h-5 text-red-400 shrink-0" />
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {showExplanation && (
                    <div className="p-4 rounded-xl bg-emerald-950/80 border border-emerald-700/60 mb-6 text-xs text-emerald-200">
                      <p className="font-semibold text-amber-300 mb-1 flex items-center gap-1.5">
                        <Lightbulb className="w-3.5 h-3.5" />
                        <span>Explanation</span>
                      </p>
                      <p>{quizQuestions[currentQuestionIndex].explanation}</p>
                    </div>
                  )}

                  {selectedAnswer !== null && (
                    <div className="flex justify-end">
                      <button
                        type="button"
                        onClick={handleNextQuestion}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-red-700 hover:bg-red-600 text-white text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-amber-400 shadow-sm"
                      >
                        <span>{currentQuestionIndex === quizQuestions.length - 1 ? 'Finish Quiz' : 'Next Question'}</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <div className="text-center py-6">
                  <div className="w-16 h-16 rounded-2xl bg-amber-400/20 border border-amber-400/40 text-amber-300 flex items-center justify-center mx-auto mb-4">
                    <Trophy className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white font-display">
                    Well Done!
                  </h3>
                  <p className="text-sm text-emerald-200 mt-2 mb-4">
                    You scored <span className="font-bold text-amber-300 text-lg tabular-nums">{quizScore}</span> out of <span className="font-bold text-white">{quizQuestions.length}</span>!
                  </p>
                  <p className="text-xs text-emerald-300/80 max-w-md mx-auto mb-6">
                    {quizScore === quizQuestions.length
                      ? 'Incredible mastery! You know your winter science and vocabulary like a true scholar.'
                      : 'Great effort! Exploration and curiosity are what make learning at Christmas School so wonderful.'}
                  </p>
                  <button
                    type="button"
                    onClick={handleRestartQuiz}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-800 hover:bg-emerald-700 text-white text-sm font-semibold transition-colors"
                  >
                    <RefreshCw className="w-4 h-4" />
                    <span>Try Quiz Again</span>
                  </button>
                </div>
              )}
            </div>

            {/* Right Card: Fun Facts / Learning Note */}
            <div className="lg:col-span-4 p-6 rounded-2xl bg-[#0c2419] border border-emerald-800/60">
              <h4 className="text-base font-bold text-white font-display mb-3 flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-amber-300" />
                <span>Classroom Quiz Tip</span>
              </h4>
              <p className="text-xs text-emerald-200/90 leading-relaxed mb-4">
                At Christmas School, quizzes are designed as cheerful checkpoints for discovery, not high-stakes pressure. Students review questions in collaborative pairs to discuss reasoning.
              </p>
              <div className="p-3.5 rounded-xl bg-emerald-950/60 border border-emerald-800/40 text-xs text-emerald-300">
                <span className="font-semibold text-amber-300 block mb-1">Winter Factoid:</span>
                The largest documented snowflake cluster measured nearly 38 cm across, recorded during a winter snowfall in 1887.
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: PUZZLES */}
        {activeTab === 'puzzles' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Word Scramble Puzzle */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0c2419] border border-emerald-800/60 shadow-lg flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs text-emerald-300 font-semibold mb-3">
                  <span>Vocabulary Word Scramble</span>
                  <span className="text-amber-300 tabular-nums">Word {scrambleIndex + 1} of {scrambles.length}</span>
                </div>

                <div className="p-6 rounded-xl bg-emerald-950/80 border border-emerald-800/60 text-center mb-6">
                  <span className="text-xs text-emerald-400 uppercase tracking-widest block mb-2">Unscramble the letters:</span>
                  <div className="text-2xl sm:text-3xl font-extrabold tracking-widest text-amber-300 font-mono">
                    {scrambles[scrambleIndex].scrambled}
                  </div>
                </div>

                <p className="text-xs text-emerald-200 mb-4">
                  <span className="font-semibold text-amber-300">Clue: </span>
                  {scrambles[scrambleIndex].hint}
                </p>

                <form onSubmit={handleCheckScramble} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      value={scrambleInput}
                      onChange={(e) => {
                        setScrambleInput(e.target.value);
                        setScrambleFeedback('idle');
                      }}
                      placeholder="Type your answer here..."
                      className="w-full px-4 py-3 rounded-xl bg-[#081a11] border border-emerald-700/60 text-white placeholder-emerald-600 focus:outline-none focus:border-amber-400 text-sm font-semibold tracking-wider uppercase"
                    />
                  </div>

                  {scrambleFeedback === 'correct' && (
                    <div className="p-3 rounded-lg bg-emerald-900/60 border border-emerald-500 text-emerald-200 text-xs flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Brilliant! That is correct!</span>
                    </div>
                  )}

                  {scrambleFeedback === 'wrong' && (
                    <div className="p-3 rounded-lg bg-red-950/60 border border-red-600 text-red-200 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                      <span>Not quite yet. Check the hint or rearrange the letters!</span>
                    </div>
                  )}

                  <div className="flex items-center gap-3">
                    <button
                      type="submit"
                      className="px-5 py-2.5 bg-red-700 hover:bg-red-600 text-white text-xs font-semibold rounded-xl transition-colors focus-visible:outline-2 focus-visible:outline-amber-400"
                    >
                      Check Answer
                    </button>
                    <button
                      type="button"
                      onClick={handleNextScramble}
                      className="px-4 py-2.5 bg-emerald-900/70 hover:bg-emerald-800 text-emerald-200 text-xs font-semibold rounded-xl transition-colors border border-emerald-700/50"
                    >
                      Next Scramble
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Holiday Math Riddle */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0c2419] border border-emerald-800/60 shadow-lg flex flex-col justify-between">
              <div>
                <div className="text-xs text-amber-300 font-semibold uppercase tracking-wider mb-2">
                  Logic & Geometry Riddle
                </div>
                <h3 className="text-xl font-bold text-white font-display mb-3">
                  The Snowflake Geometry Riddle
                </h3>
                <p className="text-xs text-emerald-200/90 leading-relaxed mb-4">
                  "Each branch of a six-pointed holiday snowflake star has 3 sub-crystals. Each sub-crystal reflects 2 golden rays of morning light. How many golden rays are reflected across all 6 main branches?"
                </p>

                <div className="p-4 rounded-xl bg-emerald-950/60 border border-emerald-800/50 space-y-2 mb-6 text-xs text-emerald-200">
                  <div className="flex items-center justify-between">
                    <span>Main Branches:</span>
                    <span className="font-mono text-amber-300 font-bold">6</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Sub-crystals per branch:</span>
                    <span className="font-mono text-amber-300 font-bold">3</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Rays per sub-crystal:</span>
                    <span className="font-mono text-amber-300 font-bold">2</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-emerald-900/40 border border-emerald-700/40 text-xs text-emerald-100 mb-6">
                  <span className="font-semibold text-amber-300 block mb-1">Mathematical Solution:</span>
                  Calculate: 6 branches × 3 sub-crystals = 18 sub-crystals. 18 × 2 rays = <span className="font-bold text-amber-300">36 golden rays</span> total!
                </div>
              </div>

              <div className="pt-4 border-t border-emerald-900/60 text-xs text-emerald-400">
                Mathematics at Christmas School encourages visualizing geometric equations through tangible nature patterns.
              </div>
            </div>

          </div>
        )}

        {/* TAB 3: CREATIVE PROJECTS */}
        {activeTab === 'creative' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Story Generator Card */}
            <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-[#0c2419] border border-emerald-800/60 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Wand2 className="w-5 h-5 text-amber-300" />
                  <h3 className="text-xl font-bold text-white font-display">
                    Holiday Story Sparks Machine
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={generateNewStory}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-700/80 hover:bg-red-600 text-white text-xs font-semibold transition-colors"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Generate New Idea</span>
                </button>
              </div>

              <p className="text-xs text-emerald-200/90 mb-6">
                Need an imaginative spark for creative writing? Use our prompt randomizer to kickstart your holiday story:
              </p>

              <div className="space-y-4 mb-6">
                <div className="p-4 rounded-xl bg-emerald-950/70 border border-emerald-800/60">
                  <span className="text-xs uppercase font-semibold text-amber-400 block mb-1">Character</span>
                  <p className="text-sm font-medium text-white">{storyPrompt.character}</p>
                </div>

                <div className="p-4 rounded-xl bg-emerald-950/70 border border-emerald-800/60">
                  <span className="text-xs uppercase font-semibold text-amber-400 block mb-1">Winter Setting</span>
                  <p className="text-sm font-medium text-white">{storyPrompt.setting}</p>
                </div>

                <div className="p-4 rounded-xl bg-emerald-950/70 border border-emerald-800/60">
                  <span className="text-xs uppercase font-semibold text-amber-400 block mb-1">The Holiday Twist</span>
                  <p className="text-sm font-medium text-white">{storyPrompt.twist}</p>
                </div>
              </div>

              <div className="p-3.5 rounded-lg bg-emerald-900/30 border border-emerald-700/40 text-xs text-emerald-200/80">
                Pupils write their drafts using sensory vocabulary (crisp evergreen scent, warm cider, crunching fresh snow) before sharing with classmates!
              </div>
            </div>

            {/* Creative Crafts Image & Guide */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div className="rounded-2xl overflow-hidden border border-emerald-700/50 bg-emerald-950/70 shadow-lg">
                <img
                  src="/src/assets/images/activities_creative_crafts_1793022460590.jpg"
                  alt="Educational winter crafts, snowflake geometry puzzles and nature books"
                  className="w-full h-56 object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="p-5">
                  <h4 className="text-base font-bold text-white font-display mb-1">
                    Hands-On Winter Workshop Projects
                  </h4>
                  <p className="text-xs text-emerald-200/80 leading-relaxed mb-3">
                    Every week during the winter term, pupils take part in cross-disciplinary projects bridging art and science:
                  </p>
                  <ul className="space-y-1.5 text-xs text-emerald-100">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                      <span>3D Geometric Paper Snowflake Mobiles</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                      <span>Bird Feeder Pinecones & Winter Wildlife Trackers</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                      <span>Salt-Crystal Ice Garden Chemistry Lab</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};
