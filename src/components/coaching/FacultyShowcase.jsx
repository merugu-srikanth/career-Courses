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

        {/* Co-Branded Content Cards: Left (Career Mitra) & Right (Score 99) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8 sm:mt-10">
          {/* Left Card: Career Mitra Programme Partner */}
          <div className="p-6 sm:p-7 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-white border border-slate-800 shadow-xl flex flex-col justify-between group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              {/* Card Top Badges & Logo */}
              <div className="flex items-center justify-between gap-3 mb-4">
                <a
                  href="https://www.careermitra.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 rounded-2xl bg-white shadow-md border border-slate-100 flex items-center shrink-0 hover:opacity-90 transition-opacity"
                  title="Visit Career Mitra"
                >
                  <div className="relative w-28 sm:w-32 h-7 sm:h-8">
                    <Image
                      src={LogoImg}
                      alt="Career Mitra"
                      fill
                      className="object-contain"
                      sizes="128px"
                      priority
                    />
                  </div>
                </a>

                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border border-orange-400/30 bg-orange-500/15 text-orange-300">
                  <Sparkles className="w-3.5 h-3.5 text-orange-400" /> Programme Partner
                </span>
              </div>

              {/* Motto / Slogan */}
              <p className="text-xs font-semibold text-orange-400 italic mb-2 tracking-tight">
                &ldquo;Let your career be, an informed choice… not a forced decision&rdquo;
              </p>

              {/* Content */}
              <h4 className="text-lg sm:text-xl font-bold text-white mb-2 leading-snug tracking-tight">
                Welcome to Careermitra • Student Dashboard
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal mb-4">
                Register and stay updated with profile-based job alerts on email and your dashboard.
              </p>

              <div className="space-y-2.5 mb-6 text-xs text-slate-300">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white font-semibold">Free Registration:</strong> Profile-based job alerts on email &amp; dashboard
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white font-semibold">Latest Govt Jobs:</strong> Explore the latest jobs &amp; apply instantly
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white font-semibold">Internships:</strong> Explore internships to accelerate your career
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800/80 relative z-10 flex items-center justify-between">
              <a
                href="https://www.careermitra.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-medium text-slate-400 hover:text-orange-400 transition-colors"
              >
                careermitra.in
              </a>
              <a
                href="https://www.careermitra.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold text-xs shadow-md transition-all hover:scale-[1.02]"
              >
                <span>Free Registration</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Card: Score 99 Academic Partner */}
          <div className="p-6 sm:p-7 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-white border border-slate-800 shadow-xl flex flex-col justify-between group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              {/* Card Top Badges & Logo */}
              <div className="flex items-center justify-between gap-3 mb-5">
                <a
                  href="https://score99percentile.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 rounded-2xl bg-white shadow-md border border-slate-100 flex items-center shrink-0 hover:opacity-90 transition-opacity"
                  title="Visit Score99Percentile"
                >
                  <div className="relative w-28 sm:w-32 h-7 sm:h-8">
                    <Image
                      src={Score99Logo}
                      alt="Score 99 Percentile"
                      fill
                      className="object-contain"
                      sizes="128px"
                      priority
                    />
                  </div>
                </a>

                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border border-red-400/30 bg-red-500/15 text-red-300">
                  <Award className="w-3.5 h-3.5 text-red-400" /> Academic Partner
                </span>
              </div>

              {/* Content */}
              <h4 className="text-lg sm:text-xl font-bold text-white mb-2 leading-snug tracking-tight">
                Powered by Score99Percentile&apos;s Test-Prep Pedagogy
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal mb-4">
                Backed by 25+ years of pedagogical rigor, speed math shortcuts, adaptive testing frameworks, and proven methodologies trusted by 50,000+ competitive exam aspirants.
              </p>

              <div className="space-y-2 mb-6 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-rose-400 shrink-0" />
                  <span>25+ Years of National Test-Prep Excellence</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-rose-400 shrink-0" />
                  <span>Senior Faculty &amp; Speed Math Trick Pioneers</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-rose-400 shrink-0" />
                  <span>Proven Track Record in CAT, SSC, Banking &amp; CSAT</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800/80 relative z-10 flex items-center justify-between">
              <span className="text-xs font-medium text-slate-400">score99percentile.com</span>
              <a
                href="https://score99percentile.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-bold text-xs shadow-md transition-all hover:scale-[1.02]"
              >
                <span>Visit Score99Percentile</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
