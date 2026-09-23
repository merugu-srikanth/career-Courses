"use client";

import Link from "next/link";
import {
  CheckCircle2,
  Sparkles,
  Monitor,
  BookOpen,
  Clock,
  ShieldCheck,
  ArrowRight,
  Layers,
  Calculator,
  Brain,
  Globe,
  Laptop,
  MessageSquare,
  Award,
  Star,
  Zap,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function PricingPlans() {
  const plans = [
    {
      id: "online",
      name: "Foundation Online",
      tagline: "Live Interactive Classes with Full LMS Backup",
      icon: Monitor,
      badge: "LIVE ONLINE BATCH",
      badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
      hours: "75 Hours Live",
      price: "9,999",
      originalPrice: "14,999",
      discount: "Save 33%",
      popular: false,
      features: [
        "75 Hours Live Interactive Online Classes",
        "Direct Live Doubts Clearing during sessions",
        "Complete coverage of all 5 Core Academic Subjects",
        "Full 6 Months Unlimited LMS Platform Access",
        "Recorded Class Archives so you never miss a lecture",
        "Topic-wise Practice Tests & Digital PDF Study Notes",
        "All-India Mock Test Series with Detailed Analytics",
      ],
      extraFeatures: [],
    },
    {
      id: "offline",
      name: "Foundation Offline",
      tagline: "In-Person Classroom Coaching & Direct Interaction",
      icon: BookOpen,
      badge: "OFFLINE CLASSROOM",
      badgeColor: "bg-orange-50 text-orange-700 border-orange-200",
      hours: "75 Hours In-Person",
      price: "8,999",
      originalPrice: "13,999",
      discount: "Save 36%",
      popular: false,
      features: [
        "75 Hours Physical In-Person Classroom Coaching",
        "Face-to-face doubts resolution with Senior Faculty",
        "Complete coverage of all 5 Core Subjects",
        "6 Months LMS Access (Online backup included)",
        "Printed Worksheets, Notes & Class Test Drills",
        "Peer study environment & live classroom simulations",
        "Dedicated Faculty Mentorship & Strategy Sessions",
      ],
      extraFeatures: [],
    },
    {
      id: "plus-offline",
      name: "Foundation Plus Offline",
      tagline: "Complete Coaching + Soft Skills & GD/PI Mastery",
      icon: Laptop,
      badge: "MOST POPULAR • BEST VALUE",
      badgeColor: "bg-gradient-to-r from-orange-500 to-amber-500 text-white",
      hours: "90 Hours Total (75h + 15h)",
      price: "9,999",
      originalPrice: "16,999",
      discount: "Save 41%",
      popular: true,
      features: [
        "90 Hours Total Intensive Coaching (75h Core + 15h Extra)",
        "Everything included in Foundation Offline",
        "Full 6 Months LMS Access & Practice Modules",
        "All 5 Core Academic Subjects + Printed Worksheets",
        "Faculty Mentorship & Regular Assessment Tracking",
      ],
      extraFeatures: [
        "1-on-1 Mock Interviews & Panel Feedback",
        "Professional Resume Writing & Profile Optimization",
        "Group Discussions (GD) Tactics & Practice",
        "Spoken English, Fluency & Body Language Workshops",
      ],
    },
  ];

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

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <div className="w-full max-w-[90%] mx-auto px-[2%] md:px-0">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-orange-50 border border-orange-200 text-orange-700 text-xs font-bold uppercase tracking-widest rounded-full mb-3 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-orange-500 shrink-0" />
            Flexible Learning Formats
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-4">
            A Clear Foundation. <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-600 to-orange-500">
              A Plan That Fits You.
            </span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Every plan includes comprehensive coverage of all 5 core subjects, 6-month LMS platform access, and structured senior faculty mentoring. Choose the learning mode that matches your goals.
          </p>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-16">
          {plans.map((plan) => {
            const Icon = plan.icon;
            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                  plan.popular
                    ? "bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-white shadow-2xl ring-2 ring-orange-500 scale-[1.02] lg:scale-[1.03]"
                    : "bg-white text-slate-900 border border-slate-200/90 shadow-sm hover:shadow-xl"
                }`}
              >
                {/* Popular Pill */}
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold text-xs uppercase tracking-wider shadow-md flex items-center gap-1.5">
                    <Star className="w-3.5 h-3.5 fill-white text-white" />
                    <span>Recommended Choice</span>
                  </div>
                )}

                <div>
                  {/* Top Badges */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span
                      className={`text-[11px] font-bold px-3 py-1 rounded-full border ${
                        plan.popular
                          ? "bg-orange-500/20 text-orange-300 border-orange-400/30"
                          : plan.badgeColor
                      }`}
                    >
                      {plan.badge}
                    </span>
                    <span
                      className={`text-xs font-bold flex items-center gap-1 ${
                        plan.popular ? "text-slate-300" : "text-slate-500"
                      }`}
                    >
                      <Clock className="w-3.5 h-3.5 text-orange-500" />
                      <span>{plan.hours}</span>
                    </span>
                  </div>

                  {/* Plan Name & Tagline */}
                  <div className="flex items-center gap-3 mb-2">
                    <div
                      className={`w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 ${
                        plan.popular
                          ? "bg-white/10 text-orange-400 border border-white/10"
                          : "bg-orange-50 text-orange-600 border border-orange-200/60"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
                      {plan.name}
                    </h3>
                  </div>

                  <p
                    className={`text-xs font-normal mb-6 leading-relaxed ${
                      plan.popular ? "text-slate-300" : "text-slate-500"
                    }`}
                  >
                    {plan.tagline}
                  </p>

                  {/* Price Box */}
                  <div
                    className={`p-4 rounded-2xl mb-6 ${
                      plan.popular
                        ? "bg-white/5 border border-white/10"
                        : "bg-slate-50 border border-slate-200/80"
                    }`}
                  >
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl sm:text-4xl font-bold">
                        ₹{plan.price}
                      </span>
                      <span
                        className={`line-through text-xs ${
                          plan.popular ? "text-slate-400" : "text-slate-400"
                        }`}
                      >
                        ₹{plan.originalPrice}
                      </span>
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-400/30">
                        {plan.discount}
                      </span>
                    </div>
                    <div
                      className={`text-[11px] mt-1.5 flex items-center gap-1.5 ${
                        plan.popular ? "text-emerald-300" : "text-emerald-700 font-medium"
                      }`}
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                      <span>All-inclusive • 6 Months LMS & Mentorship</span>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-6">
                    <div
                      className={`text-xs font-bold uppercase tracking-wider ${
                        plan.popular ? "text-slate-400" : "text-slate-500"
                      }`}
                    >
                      Included In This Plan:
                    </div>
                    {plan.features.map((feat, fIdx) => (
                      <div
                        key={fIdx}
                        className="flex items-start gap-2.5 text-xs sm:text-[13px] leading-snug"
                      >
                        <CheckCircle2
                          className={`w-4 h-4 shrink-0 mt-0.5 ${
                            plan.popular ? "text-emerald-400" : "text-emerald-600"
                          }`}
                        />
                        <span
                          className={
                            plan.popular ? "text-slate-200" : "text-slate-700"
                          }
                        >
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Extra Features (Only in Plus) */}
                  {plan.extraFeatures.length > 0 && (
                    <div className="p-4 rounded-2xl bg-orange-500/10 border border-orange-400/25 mb-6 space-y-2">
                      <div className="text-xs font-bold text-orange-300 uppercase tracking-wider flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-orange-400" />
                        <span>Exclusive Plus Offline Additions:</span>
                      </div>
                      <div className="space-y-1.5 pt-1">
                        {plan.extraFeatures.map((ex, eIdx) => (
                          <div
                            key={eIdx}
                            className="flex items-start gap-2 text-xs text-orange-100 font-medium leading-tight"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-orange-400 shrink-0 mt-1.5" />
                            <span>{ex}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Card CTA Actions */}
                <div className="pt-4 border-t border-slate-100/20 space-y-2.5">
                  <Link
                    href="/enroll"
                    className={`w-full py-3.5 px-5 rounded-2xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-md ${
                      plan.popular
                        ? "bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-500 hover:to-amber-400 text-white shadow-orange-950/40 hover:scale-[1.02]"
                        : "bg-slate-900 hover:bg-slate-800 text-white hover:scale-[1.02]"
                    }`}
                  >
                    <span>Enroll Now / Book Counseling</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <a
                    href="https://wa.me/917794045533?text=Hello%20CareerMitra%20Team!%20I%20am%20interested%20in%20the%20Foundation%20Coaching%20Course."
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-2.5 px-4 rounded-xl bg-emerald-600/15 hover:bg-emerald-600/25 text-emerald-700 dark:text-emerald-300 font-bold text-xs flex items-center justify-center gap-1.5 transition-all"
                  >
                    <FaWhatsapp className="w-4 h-4 text-emerald-600" />
                    <span>Chat on WhatsApp (+91 77940 45533)</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Reassurance Banner */}
        <div className="p-5 sm:p-6 rounded-3xl bg-emerald-50 border border-emerald-200/90 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4 mb-16">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 shadow-2xs">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-bold text-emerald-950">
                100% Comprehensive Syllabus Coverage Guarantee
              </div>
              <div className="text-xs text-emerald-800 font-normal">
                Every plan covers all 5 core subjects with full 6-month LMS access and direct faculty doubt-clearing.
              </div>
            </div>
          </div>
          <Link
            href="/enroll"
            className="shrink-0 px-5 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs shadow-xs transition-all flex items-center gap-1.5"
          >
            <span>Request Counselor Callback</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Detailed Topic Coverage Breakdown Section */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-orange-600">
              Exhaustive Curriculum Modules
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
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
                      <div
                        className={`w-11 h-11 rounded-2xl ${item.color} flex items-center justify-center border shadow-xs shrink-0`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <h4 className="text-base font-bold text-slate-900 leading-tight">
                        {item.category}
                      </h4>
                    </div>

                    <ul className="space-y-2 mb-4">
                      {item.topics.map((topic, tIdx) => (
                        <li
                          key={tIdx}
                          className="flex items-start gap-2 text-xs text-slate-700"
                        >
                          <CheckCircle2
                            className={`w-3.5 h-3.5 ${item.accent} shrink-0 mt-0.5`}
                          />
                          <span className="leading-snug">{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-medium">
                    <span>Full Theory + Practice Drills</span>
                    <span className="font-bold text-emerald-600">Included</span>
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
