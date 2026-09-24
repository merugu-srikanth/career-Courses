"use client";

import Link from "next/link";
import Image from "next/image";
import { Sparkles, ArrowRight, Monitor, BookOpen, Calendar, CheckCircle2, UserCheck } from "lucide-react";
import LogoImg from "@/assets/NewLogo.png";
import CoursesHeroImg from "@/assets/courses1.png";

export default function CoachingHero() {
  const targetExams = [
    "SSC (CGL, CHSL, MTS)",
    "Railways (RRB)",
    "Banking (IBPS, SBI)",
    // "UPSC & State PSC CSAT",
    // "PSUs & Placements",
    "And many more.."
  ];

  const highlights = [
    {
      icon: Monitor,
      title: "75 Hours",
      subtitle: "Live Online Training",
      bg: "bg-emerald-50/70 text-emerald-800 border-emerald-200/80",
      accent: "text-emerald-600",
    },
    {
      icon: BookOpen,
      title: "75–90 Hours",
      subtitle: "Intensive Offline Batches",
      bg: "bg-orange-50/70 text-orange-800 border-orange-200/80",
      accent: "text-orange-600",
    },
    {
      icon: Calendar,
      title: "6 Months",
      subtitle: "Full LMS Access & Mentoring",
      bg: "bg-blue-50/70 text-blue-800 border-blue-200/80",
      accent: "text-blue-600",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50/60 pt-6 pb-14 md:pt-10 md:pb-8 border-b border-slate-200/60">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="w-full max-w-[90%] mx-auto px-[2%] md:px-0">
        {/* Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center mb-10 md:mb-14">
          {/* Left Content */}
          <div className="lg:col-span-7 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-emerald-100/70 text-emerald-800 border border-emerald-300/60 mb-5">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              GOVERNMENT JOB FOUNDATION PROGRAMME
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-[1.15] mb-4">
              DON&apos;T WAIT FOR THE NOTIFICATION.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-600 to-orange-500">
                START PREPARING.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6 font-normal">
              One unified foundation to put dozens of prestigious central & state recruitment exams within your reach. Build unshakable aptitude, English, logic, and awareness before the official countdown begins.
            </p>

            {/* Target Exam Chips */}
            <div className="mb-8">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">
                Key Exam Pathways Supported:
              </div>
              <div className="flex flex-wrap gap-2">
                {targetExams.map((exam, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-900 text-white shadow-xs"
                  >
                    • {exam}
                  </span>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <Link
                href="/plans-pricing"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all"
              >
                View Plans &amp; Enquiry <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/curriculum"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-white hover:bg-slate-100 text-slate-800 font-bold text-sm border border-slate-300 shadow-xs transition-all"
              >
                View Exam Coverage Matrix
              </Link>
            </div>
          </div>

          {/* Right Hero Image (courses1.png) + Consultation Card right at the bottom of the image */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center gap-4">
            <div className="relative w-full max-w-md lg:max-w-lg">
              {/* Soft backdrop glow */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-orange-300/20 via-amber-200/20 to-emerald-300/20 rounded-3xl blur-2xl -z-10" />

              <Image
                src={CoursesHeroImg}
                alt="Government Job Foundation Coaching Program"
                priority
                className="w-full h-auto object-contain drop-shadow-xl transition-all duration-300 hover:scale-[1.01]"
              />
            </div>

            {/* Free Consultation Card directly under image (hidden on small/stacked screens) */}
            <div className="hidden lg:block w-full p-4 sm:p-5 rounded-3xl bg-gradient-to-br from-amber-50/70 via-white to-orange-50/50 border border-amber-200/80 shadow-lg relative overflow-hidden backdrop-blur-md">
              {/* Top: Avatar + Title & Description */}
              <div className="flex items-center gap-3.5 mb-3.5 text-left">
                {/* Counselor Avatar */}
                <div className="relative shrink-0">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-amber-100/90 border border-amber-300/80 flex items-center justify-center shadow-inner relative overflow-hidden">
                    <svg className="w-10 h-10 text-slate-800" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="32" cy="24" r="12" fill="#FCD34D"/>
                      <path d="M20 23C20 16.3726 25.3726 11 32 11C38.6274 11 44 16.3726 44 23V27C44 27 41 24 32 24C23 24 20 27 20 27V23Z" fill="#1E293B"/>
                      <path d="M16 54C16 44.0589 23.1634 36 32 36C40.8366 36 48 44.0589 48 54V56H16V54Z" fill="#1E293B"/>
                      <path d="M26 36L32 44L38 36H26Z" fill="#FCD34D"/>
                      <path d="M18 24C18 16.268 24.268 10 32 10C39.732 10 46 16.268 46 24V28" stroke="#EA580C" strokeWidth="2.5" strokeLinecap="round"/>
                      <rect x="16" y="22" width="4" height="8" rx="2" fill="#EA580C"/>
                      <rect x="44" y="22" width="4" height="8" rx="2" fill="#EA580C"/>
                      <path d="M46 28V32C46 33.1046 45.1046 34 44 34H38" stroke="#EA580C" strokeWidth="2" strokeLinecap="round"/>
                      <circle cx="37" cy="34" r="2" fill="#EA580C"/>
                    </svg>
                  </div>
                  {/* Chat dots */}
                  <div className="absolute -top-1 -right-1 px-1.5 py-0.5 rounded-full bg-white border border-slate-200 shadow-xs flex items-center gap-0.5">
                    <span className="w-1 h-1 rounded-full bg-orange-500"></span>
                    <span className="w-1 h-1 rounded-full bg-orange-500"></span>
                    <span className="w-1 h-1 rounded-full bg-orange-500"></span>
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-base sm:text-lg font-semibold text-slate-800 tracking-tight leading-snug">
                    Not sure which program is right for you?
                  </h3>
                  <p className="text-slate-500 text-xs sm:text-sm mt-0.5 font-normal leading-normal">
                    Talk to our counsellor for free and get personalized guidance.
                  </p>
                </div>
              </div>

              {/* Bottom: Action Button & Badges */}
              <div className="space-y-2.5 pt-1">
                <Link
                  href="/enroll"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 hover:from-orange-500 hover:to-amber-400 text-white font-bold text-sm sm:text-base shadow-md shadow-orange-600/25 hover:shadow-lg transition-all"
                >
                  <span>Enquire Now / Free Guidance</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5 text-xs font-semibold text-slate-600 pt-0.5">
                  <span className="inline-flex items-center gap-1.5 text-emerald-700">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </span>
                    100% Free
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-orange-700">
                    <span className="w-5 h-5 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center">
                      <UserCheck className="w-3.5 h-3.5" />
                    </span>
                    Expert Guidance
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-blue-700">
                    <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                      <Calendar className="w-3.5 h-3.5" />
                    </span>
                    Flexible Time
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Highlight Cards Row */}
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-slate-200/70">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`flex items-center gap-4 p-4 sm:p-5 rounded-2xl border ${item.bg} bg-white shadow-xs transition-all hover:shadow-md hover:scale-[1.01]`}
              >
                <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200/60 flex items-center justify-center shadow-xs shrink-0">
                  <Icon className={`w-6 h-6 ${item.accent}`} />
                </div>
                <div>
                  <div className="text-base sm:text-lg font-extrabold text-slate-900 leading-tight">
                    {item.title}
                  </div>
                  <div className="text-xs font-medium text-slate-600">
                    {item.subtitle}
                  </div>
                </div>
              </div>
            );
          })}
        </div> */}
      </div>
    </section>
  );
}
