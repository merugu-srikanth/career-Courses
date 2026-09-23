"use client";

import { Calculator, MessageSquare, BookOpen, Brain, Monitor, Globe, Check } from "lucide-react";

export default function CoreSkillsGrid() {
  const skills = [
    {
      icon: Calculator,
      number: "01",
      title: "Quantitative Ability",
      description: "Build rapid calculation speed, shortcut techniques, and accuracy across arithmetic, algebra, geometry, and number systems.",
      color: "from-blue-500/10 to-indigo-500/5",
      border: "border-blue-200/80 hover:border-blue-400",
      accentBg: "bg-blue-50 text-blue-600",
      tag: "Math & Numbers",
    },
    {
      icon: MessageSquare,
      number: "02",
      title: "Verbal Ability",
      description: "Strengthen core grammar rules, root-word vocabulary, error spotting, sentence correction, and verbal reasoning fluency.",
      color: "from-purple-500/10 to-pink-500/5",
      border: "border-purple-200/80 hover:border-purple-400",
      accentBg: "bg-purple-50 text-purple-600",
      tag: "Grammar & Vocab",
    },
    {
      icon: BookOpen,
      number: "03",
      title: "Reading Comprehension",
      description: "Learn speed-reading methods, critical passage analysis, tone detection, and precise inference extraction under timed pressure.",
      color: "from-emerald-500/10 to-teal-500/5",
      border: "border-emerald-200/80 hover:border-emerald-400",
      accentBg: "bg-emerald-50 text-emerald-600",
      tag: "Passage Analysis",
    },
    {
      icon: Brain,
      number: "04",
      title: "Logical Reasoning & DI",
      description: "Think critically through puzzles, seating arrangements, syllogisms, and extract insights from tables, pie charts, and bar graphs.",
      color: "from-amber-500/10 to-orange-500/5",
      border: "border-amber-200/80 hover:border-amber-400",
      accentBg: "bg-amber-50 text-amber-600",
      tag: "Logic & Analytics",
    },
    {
      icon: Monitor,
      number: "05",
      title: "Computer Awareness",
      description: "Master essential computer fundamentals, hardware, operating systems, MS Office shortcuts, networking, and digital literacy.",
      color: "from-cyan-500/10 to-sky-500/5",
      border: "border-cyan-200/80 hover:border-cyan-400",
      accentBg: "bg-cyan-50 text-cyan-600",
      tag: "Digital Tools",
    },
    {
      icon: Globe,
      number: "06",
      title: "General Awareness (GK & CA)",
      description: "Comprehensive coverage of Indian Polity, Economy, History, Geography, and daily curated national & international current affairs.",
      color: "from-rose-500/10 to-red-500/5",
      border: "border-rose-200/80 hover:border-rose-400",
      accentBg: "bg-rose-50 text-rose-600",
      tag: "Current Affairs",
    },
  ];

  return (
    <section className="py-16 bg-slate-50 border-y border-slate-200/60">
      <div className="w-full max-w-[90%] mx-auto px-[2%] md:px-0">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-3 py-1 bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold uppercase tracking-widest rounded-full mb-3">
            The Foundation: 6 Core Skill Areas
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight mb-4">
            Five Subjects. <span className="text-emerald-600">One Strong Foundation.</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Every competitive examination evaluates a candidate across these identical cognitive pillars. We train you from the absolute basics to mastery level.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, idx) => {
            const Icon = skill.icon;
            return (
              <div
                key={idx}
                className={`p-6 rounded-3xl bg-white border ${skill.border} shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-2xl ${skill.accentBg} flex items-center justify-center font-bold shadow-xs group-hover:scale-105 transition-transform`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-black px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                      Module {skill.number}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-lg font-extrabold text-slate-900">
                      {skill.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {skill.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    Included in All Plans
                  </span>
                  <span className="text-xs font-bold px-2 py-0.5 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200">
                    ✓ Full Coverage
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
