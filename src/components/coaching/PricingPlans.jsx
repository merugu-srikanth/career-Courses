"use client";

import Link from "next/link";
import { CheckCircle2, Sparkles, Monitor, BookOpen, Clock, ShieldCheck, ArrowRight, Layers, Calculator, Brain, Globe, Laptop, MessageSquare } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function PricingPlans() {
  const coveredTopics = [
    {
      category: "Quantitative Aptitude & Speed Math",
      icon: Calculator,
      color: "bg-blue-50 text-blue-700 border-blue-200",
      accent: "text-blue-600",
      topics: [
        "Vedic & Speed Math Shortcuts",
        "Number Systems, HCF & LCM",
        "Percentages, Profit & Loss, Discount",
        "Simple & Compound Interest",
        "Ratio, Proportion & Partnerships",
        "Time & Work, Pipes & Cisterns",
        "Time, Speed, Distance & Trains",
        "Averages, Mixtures & Allegations",
        "Algebra, Geometry & Mensuration 2D/3D",
      ],
    },
    {
      category: "Logical Reasoning & Data Interpretation",
      icon: Brain,
      color: "bg-amber-50 text-amber-700 border-amber-200",
      accent: "text-amber-600",
      topics: [
        "Seating Arrangements (Linear & Circular)",
        "Complex Puzzles & Floor Arrangements",
        "Syllogisms & Logical Deductions",
        "Blood Relations & Direction Sense",
        "Coding-Decoding & Series Completion",
        "Statement-Assumption & Critical Logic",
        "Data Interpretation: Tables & Bar Graphs",
        "Pie Charts, Line Graphs & Caselets",
      ],
    },
    {
      category: "Verbal English & Reading Comprehension",
      icon: MessageSquare,
      color: "bg-purple-50 text-purple-700 border-purple-200",
      accent: "text-purple-600",
      topics: [
        "Core English Grammar Rules & Syntax",
        "Error Spotting & Sentence Correction",
        "Root Word Vocabulary & Phrasal Verbs",
        "Idioms, Synonyms & Antonyms",
        "Reading Comprehension (Speed & Tone)",
        "Para Jumbles & Sentence Rearrangement",
        "Cloze Tests & Fill in the Blanks",
        "Formal Letter & Descriptive Writing Basics",
      ],
    },
    {
      category: "General Knowledge & Current Affairs",
      icon: Globe,
      color: "bg-emerald-50 text-emerald-700 border-emerald-200",
      accent: "text-emerald-600",
      topics: [
        "Indian Constitution & Polity Basics",
        "Indian Economy, Budget & Banking Awareness",
        "Indian History, Geography & Culture",
        "General Science (Physics, Chem, Bio)",
        "National & International Current Affairs",
        "Government Schemes & Important Days",
        "Awards, Sports & Environmental Science",
      ],
    },
    {
      category: "Computer Awareness & Digital Skills",
      icon: Laptop,
      color: "bg-cyan-50 text-cyan-700 border-cyan-200",
      accent: "text-cyan-600",
      topics: [
        "Computer Hardware & Operating Systems",
        "MS Office Suite (Word, Excel, PowerPoint)",
        "Networking Concepts & Internet Protocols",
        "Cybersecurity Fundamentals & Viruses",
        "Database Basics (DBMS) & Memory Units",
        "Common Tech Acronyms & Short-Keys",
      ],
    },
    {
      category: "Soft Skills, Resume & Interview Mastery",
      icon: Layers,
      color: "bg-rose-50 text-rose-700 border-rose-200",
      accent: "text-rose-600",
      topics: [
        "1-on-1 Mock Interviews with Panel Feedback",
        "Group Discussion (GD) Tactics & Practice",
        "Professional Resume Building & Review",
        "Spoken English & Communication Fluency",
        "Body Language & Personality Development",
        "State PSC & Bank Interview Orientation",
      ],
    },
  ];

  const courseInclusions = [
    "75–90 Hours Intensive Instructor-Led Training (Live Online or Offline Classroom)",
    "Full 6 Months Unlimited LMS Platform Access with Recorded Lectures",
    "Comprehensive Coverage of All 6 Core Subject Areas & Modules",
    "Chapter-wise Digital PDF Notes, Formula Sheets & Practice Question Sets",
    "100+ Topic Tests & Full-Length All-India Mock Test Series",
    "Weekly Live Doubt Clearing & Direct Mentorship with Senior Faculty",
    "Free Resume & Interview Readiness Guidance",
    "Recognized Certificate of Foundation Program Completion",
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-orange-50 border border-orange-200 text-orange-700 text-xs font-extrabold uppercase tracking-widest rounded-full mb-3 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5" /> All-in-One Comprehensive Program
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-4">
            One Program. One Pricing. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-600 to-orange-500">
              Complete Syllabus & Topic Coverage.
            </span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Get 100% comprehensive coaching for all government, banking, state PSC, and corporate recruitment exams in a single affordable package. Zero hidden fees.
          </p>
        </div>

        {/* Main Single Pricing & Enrollment Card */}
        <div className="rounded-3xl bg-white border border-slate-200 shadow-xl overflow-hidden mb-16">
          {/* Card Top Accent Bar */}
          <div className="h-2 w-full bg-gradient-to-r from-orange-500 via-amber-500 to-emerald-500" />

          <div className="p-6 sm:p-8 lg:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              {/* Left Side: Program Overview & Inclusions */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-extrabold uppercase tracking-wider">
                    ⭐ All-Inclusive Foundation Package
                  </span>
                  <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold">
                    Flexible Online & Offline Batches
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
                    Government Job Foundation Complete Program
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base mt-2 leading-relaxed">
                    Designed by seasoned competitive educators (Raghavender J & Gautam Murthy), this curriculum builds deep conceptual fundamentals across every subject tested in SSC, Banking, Railways, State PSCs, and Campus Placements.
                  </p>
                </div>

                {/* Key Inclusions List */}
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
                  <div className="text-xs font-extrabold uppercase tracking-wider text-slate-900 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Everything Included in This Program:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                    {courseInclusions.map((inc, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                        <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-[10px] font-black shrink-0 mt-0.5">
                          ✓
                        </span>
                        <span>{inc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Side: Pricing Box & CTAs */}
              <div className="lg:col-span-5 p-6 sm:p-7 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 text-white shadow-2xl relative overflow-hidden flex flex-col justify-between">
                <div className="absolute top-0 right-0 w-40 h-40 bg-orange-500/10 rounded-bl-full pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-orange-400 uppercase tracking-widest">
                      Special Launch Pricing
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-[11px] font-extrabold">
                      Admissions Open 2026-27
                    </span>
                  </div>

                  <div className="mb-5">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl sm:text-5xl font-black text-white">₹9,999</span>
                      <span className="text-slate-400 text-sm font-normal">all-inclusive</span>
                    </div>
                    <div className="flex items-center gap-2 mt-2 text-xs text-slate-300">
                      <span className="line-through text-slate-500">₹14,999</span>
                      <span className="text-emerald-400 font-bold">Save 47% Today</span>
                      <span>• One-time payment</span>
                    </div>
                  </div>

                  <div className="space-y-2.5 p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700/80 text-xs mb-6">
                    <div className="flex items-center justify-between text-slate-200">
                      <span className="flex items-center gap-1.5 font-medium"><Monitor className="w-3.5 h-3.5 text-orange-400" /> Live Online Batch:</span>
                      <span className="font-bold text-white">₹9,999 (75h)</span>
                    </div>
                    <div className="flex items-center justify-between text-slate-200 pt-1 border-t border-slate-700/60">
                      <span className="flex items-center gap-1.5 font-medium"><BookOpen className="w-3.5 h-3.5 text-emerald-400" /> Offline Classroom:</span>
                      <span className="font-bold text-white">₹8,999 (75h)</span>
                    </div>
                    <div className="flex items-center justify-between text-slate-200 pt-1 border-t border-slate-700/60">
                      <span className="flex items-center gap-1.5 font-medium"><Sparkles className="w-3.5 h-3.5 text-amber-400" /> Plus (with Soft Skills):</span>
                      <span className="font-bold text-white">₹9,999 (90h)</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <Link
                    href="/enroll"
                    className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 hover:from-orange-500 hover:to-amber-400 text-white font-black text-sm shadow-lg shadow-orange-600/30 hover:shadow-xl transition-all flex items-center justify-center gap-2"
                  >
                    <span>Enroll Now / Book Free Counseling</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <a
                    href="https://wa.me/919999999999?text=Hello%20CareerMitra%20Team!%20I%20want%20to%20enroll%20in%20the%20Foundation%20Coaching%20Course."
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-3 px-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all"
                  >
                    <FaWhatsapp className="w-4 h-4" /> Chat on WhatsApp with Counselor
                  </a>

                  <div className="flex items-center justify-center gap-4 text-[11px] text-slate-400 pt-1">
                    <span className="flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> 100% Secure</span>
                    <span>•</span>
                    <span>Free Demo Call Available</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed User Topic Coverage Breakdown Section */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-extrabold uppercase tracking-widest text-orange-600">
              Exhaustive Curriculum Modules
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
              Complete List of Topics Covered in This Course
            </h3>
            <p className="text-slate-500 text-xs sm:text-sm mt-1">
              Every topic is taught from ground-level basics to advanced problem-solving speed techniques.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coveredTopics.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-11 h-11 rounded-2xl ${item.color} flex items-center justify-center border shadow-xs shrink-0`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <h4 className="text-base font-extrabold text-slate-900 leading-tight">
                        {item.category}
                      </h4>
                    </div>

                    <ul className="space-y-2 mb-4">
                      {item.topics.map((topic, tIdx) => (
                        <li key={tIdx} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className={`w-3.5 h-3.5 ${item.accent} shrink-0 mt-0.5`} />
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-slate-500">
                    <span>Module #{idx + 1}</span>
                    <span className="text-emerald-600">✓ 100% Comprehensive</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

