"use client";

import { CheckCircle2, GraduationCap, Quote } from "lucide-react";
import Link from "next/link";

export default function FacultyShowcase() {
  const faculties = [
    {
      initials: "GM",
      name: "Gautam Murthy",
      experience: "28+ YEARS",
      subtitle: "Teaching • Mentoring • Technology",
      avatarBg: "bg-emerald-600 text-white",
      border: "border-emerald-200 hover:border-emerald-400",
      points: [
        "Computer Science & Mathematics Specialist",
        "Master's degrees in Computer Science and Mathematics",
        "M.Phil. in Mathematics with deep research background",
        "Extensive NCLB programme educational experience",
        "Trained over 50,000+ competitive aspirants in speed math & logic",
      ],
    },
    {
      initials: "RJ",
      name: "Raghavender J",
      experience: "20+ YEARS",
      subtitle: "Education • Strategy • Academic Delivery",
      avatarBg: "bg-blue-600 text-white",
      border: "border-blue-200 hover:border-blue-400",
      points: [
        "Master's degree in Finance (United States)",
        "Master's degree in Applied Mathematics",
        "Former Academics Head at T.I.M.E.",
        "Former National Head at FIITJEE",
        "Architect of multiple All-India Top 100 rank strategies",
      ],
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white border-t border-slate-200/60">
      <div className="w-full max-w-[90%] mx-auto px-[2%] md:px-0">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block px-3 py-1 bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-widest rounded-full mb-3">
            Mentorship That Transforms
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">
            Experience Behind <span className="text-orange-600">Your Preparation</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Learn directly from national academic leaders who have guided thousands of successful selections across UPSC, SSC, Banking, Railways, and CAT.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {faculties.map((fac, idx) => (
            <div
              key={idx}
              className={`p-7 sm:p-8 rounded-3xl bg-slate-50/70 border ${fac.border} shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 rounded-2xl ${fac.avatarBg} flex items-center justify-center font-black text-2xl shadow-md shrink-0`}>
                    {fac.initials}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-2xl font-black text-slate-900">{fac.name}</h3>
                    </div>
                    <div className="text-sm font-black text-orange-600">
                      {fac.experience} EXPERIENCE
                    </div>
                    <div className="text-xs font-semibold text-slate-500">
                      {fac.subtitle}
                    </div>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  {fac.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="font-medium">{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                <span className="text-xs font-bold text-slate-500 flex items-center gap-1">
                  <GraduationCap className="w-4 h-4 text-slate-400" /> Senior Faculty & Mentor
                </span>
                <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-slate-900 text-white">
                  Live Masterclasses
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-orange-600 via-amber-600 to-orange-500 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center shrink-0">
              <Quote className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-lg sm:text-xl font-black leading-snug">
                &ldquo;Prepare with purpose. Approach opportunity with confidence.&rdquo;
              </div>
              <div className="text-xs sm:text-sm text-orange-100 font-medium">
                Same Preparation. A Brighter Tomorrow.
              </div>
            </div>
          </div>

          <Link
            href="/enroll"
            className="px-6 py-3 rounded-2xl bg-white hover:bg-slate-100 text-slate-900 font-black text-sm whitespace-nowrap shadow-md transition-all hover:scale-105 shrink-0"
          >
            Start Building Your Foundation →
          </Link>
        </div>
      </div>
    </section>
  );
}
