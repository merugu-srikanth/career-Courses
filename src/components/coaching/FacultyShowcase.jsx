"use client";

import Image from "next/image";
import LogoImg from "@/assets/NewLogo.png";
import Score99Logo from "@/assets/score99logo.png";
import { CheckCircle2, GraduationCap, ExternalLink, Sparkles, Award } from "lucide-react";
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
    <section className="py-8 sm:py-12 md:py-20 lg:py-24 bg-white border-t border-slate-200/60">
      <div className="w-full max-w-[90%] mx-auto px-[2%] md:px-0">
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-10 md:mb-14">
          <span className="inline-block px-3 py-1 bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-widest rounded-full mb-3">
            Mentorship That Transforms
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Experience Behind <span className="text-orange-600">Your Preparation</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Learn directly from national academic leaders who have guided thousands of successful selections across UPSC CSAT, SSC, Banking, Railways, and CAT.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {faculties.map((fac, idx) => (
            <div
              key={idx}
              className={`p-7 sm:p-8 rounded-3xl bg-slate-50/70 border ${fac.border} shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 rounded-2xl ${fac.avatarBg} flex items-center justify-center font-bold text-2xl shadow-md shrink-0`}>
                    {fac.initials}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-2xl font-bold text-slate-900">{fac.name}</h3>
                    </div>
                    <div className="text-sm font-bold text-orange-600">
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
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-900 text-white">
                  Live Masterclasses
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Score99Percentile & Career Mitra Association Banner */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-white border border-slate-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-6">
            {/* Co-Branding Partner Logos: Career Mitra (Left) + Score 99 (Right) */}
            <div className="shrink-0 px-3 sm:px-4 py-2 rounded-2xl bg-white shadow-md border border-slate-100 flex items-center gap-2 sm:gap-3">
              {/* Career Mitra Logo (Left) */}
              <div className="relative w-28 sm:w-36 h-9 sm:h-11">
                <Image
                  src={LogoImg}
                  alt="Career Mitra"
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 112px, 144px"
                  priority
                />
              </div>

              {/* Divider / Multiplier */}
              <span className="h-6 sm:h-8 w-px bg-slate-200 shrink-0" />

              {/* Score 99 Logo (Right) */}
              <a
                href="https://score99percentile.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-28 sm:w-36 h-8 sm:h-10 flex items-center hover:opacity-90 transition-opacity"
                title="Visit Score99Percentile Website"
              >
                <Image
                  src={Score99Logo}
                  alt="Score 99 Percentile"
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 112px, 144px"
                  priority
                />
              </a>
            </div>

            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-400/20 text-amber-300 border border-amber-400/30 mb-1">
                <Sparkles className="w-3 h-3 text-amber-400" /> Academic Partnership
              </div>
              <h4 className="text-base sm:text-lg font-bold text-white leading-snug">
                Powered by Score99Percentile&apos;s National Test-Prep Excellence
              </h4>
              <p className="text-xs text-slate-300 max-w-xl mt-0.5 leading-relaxed">
                Backed by 25+ years of pedagogical rigor, adaptive testing frameworks, and proven methodologies trusted by 50,000+ competitive exam aspirants.
              </p>
            </div>
          </div>

          <a
            href="https://score99percentile.com"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-bold text-xs shadow-lg shadow-red-950/50 transition-all hover:scale-[1.03]"
          >
            <span>Visit Score99Percentile</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
