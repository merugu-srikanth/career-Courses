"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Landmark,
  Factory,
  Building2,
  GraduationCap,
  Target,
  CheckCircle2,
  ArrowRight,
  BookOpen,
  Sparkles,
  Layers,
  Award,
  Flame,
  TrendingUp,
  Briefcase,
  Compass,
  Star,
} from "lucide-react";

import GovtImg from "@/assets/domains/govt_illustration.png";
import PsuImg from "@/assets/domains/psu_illustration.png";
import CorporateImg from "@/assets/domains/corporate_illustration.png";
import EducationImg from "@/assets/domains/education_illustration.png";
import SoftskillsImg from "@/assets/domains/softskills_illustration.png";
import CoursesHeroImg from "@/assets/courses1.png";

export default function CareerPathwaysGrid() {
  const allPathways = [
    {
      id: "govt-jobs",
      domainNum: "DOMAIN #1",
      tagText: "Most Popular",
      tagIcon: Flame,
      tagIconColor: "text-amber-600",
      tagStyle: "bg-amber-50 text-amber-900 border-amber-200/80",
      icon: Landmark,
      iconColor: "text-emerald-600",
      title: "Government Jobs",
      subtitle: "CSAT basics & stable public sector recruitment",
      cardBorder: "border-emerald-200/90 hover:border-emerald-400 bg-white",
      cardBgGlow: "from-emerald-500/5 via-transparent to-transparent",
      badgePillBg: "bg-emerald-50/80 text-emerald-800 border-emerald-200/60",
      checkIconColor: "text-emerald-600",
      subCoverage: "CSAT Aptitude + General Awareness + Reasoning",
      btnStyle: "bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-700/20",
      tagline: "Serve the Nation",
      taglineColor: "text-emerald-800",
      image: GovtImg,
      items: [
        "UPSC CSAT (Civil Services Aptitude)",
        "SSC (CGL, CHSL, MTS, CPO)",
        "State PSCs (CSAT & Aptitude Papers)",
        "Railways (RRB NTPC, Group D)",
        "Defence Services (CDS, AFCAT)",
        "Central & State Selection Commissions",
      ],
    },
    {
      id: "psu-sector",
      domainNum: "DOMAIN #2",
      tagText: "High Demand",
      tagIcon: TrendingUp,
      tagIconColor: "text-blue-600",
      tagStyle: "bg-blue-50 text-blue-900 border-blue-200/80",
      icon: Factory,
      iconColor: "text-blue-600",
      title: "Public Sector Companies (PSUs)",
      subtitle: "Banking & lucrative executive PSU roles",
      cardBorder: "border-blue-200/90 hover:border-blue-400 bg-white",
      cardBgGlow: "from-blue-500/5 via-transparent to-transparent",
      badgePillBg: "bg-blue-50/80 text-blue-800 border-blue-200/60",
      checkIconColor: "text-blue-600",
      subCoverage: "Banking Aptitude + PSU Non-Tech & Reasoning",
      btnStyle: "bg-blue-600 hover:bg-blue-500 text-white shadow-blue-700/20",
      tagline: "Build a Secure Career",
      taglineColor: "text-blue-800",
      image: PsuImg,
      items: [
        "Banking (IBPS PO/Clerk, SBI, RBI)",
        "ONGC (Oil & Natural Gas Corp)",
        "IOCL, BHEL, NTPC, SAIL",
        "State & Central PSU Recruitment Tests",
        "Insurance PSUs (LIC, NIACL, GIC)",
        "Regional Rural Banks & Apex Bodies",
      ],
    },
    {
      id: "corporate-sector",
      domainNum: "DOMAIN #3",
      tagText: "Growing Opportunities",
      tagIcon: Briefcase,
      tagIconColor: "text-purple-600",
      tagStyle: "bg-purple-50 text-purple-900 border-purple-200/80",
      icon: Building2,
      iconColor: "text-purple-600",
      title: "Corporate Sector",
      subtitle: "Top-tier MNC & Tech placement readiness",
      cardBorder: "border-purple-200/90 hover:border-purple-400 bg-white",
      cardBgGlow: "from-purple-500/5 via-transparent to-transparent",
      badgePillBg: "bg-purple-50/80 text-purple-800 border-purple-200/60",
      checkIconColor: "text-purple-600",
      subCoverage: "Aptitude + Technical + Soft Skills",
      btnStyle: "bg-purple-600 hover:bg-purple-500 text-white shadow-purple-700/20",
      tagline: "Get Industry Ready",
      taglineColor: "text-purple-800",
      image: CorporateImg,
      items: [
        "Campus Placement Drives",
        "Off-Campus Aptitude Tests",
        "TCS NQT, Infosys, Wipro, Cognizant",
        "Deloitte, PwC, Accenture Assessments",
        "Banking & Financial Services (BFSI)",
        "Core Analytical Problem Solving",
      ],
    },
    {
      id: "higher-education",
      domainNum: "DOMAIN #4",
      tagText: "Future Focused",
      tagIcon: Compass,
      tagIconColor: "text-orange-600",
      tagStyle: "bg-orange-50 text-orange-900 border-orange-200/80",
      icon: GraduationCap,
      iconColor: "text-orange-600",
      title: "Higher Education Exams",
      subtitle: "Admissions to premier management institutions",
      cardBorder: "border-orange-200/90 hover:border-orange-400 bg-white",
      cardBgGlow: "from-orange-500/5 via-transparent to-transparent",
      badgePillBg: "bg-orange-50/80 text-orange-800 border-orange-200/60",
      checkIconColor: "text-orange-600",
      subCoverage: "Quant + Reasoning + Verbal + Domain",
      btnStyle: "bg-orange-600 hover:bg-orange-500 text-white shadow-orange-700/20",
      tagline: "Higher Goals • Brighter Future",
      taglineColor: "text-orange-800",
      image: EducationImg,
      items: [
        "CAT (IIMs & Top Business Schools)",
        "XAT (XLRI & Associate Institutes)",
        "SNAP, NMAT, MAT (Top B-Schools)",
        "CMAT (AICTE Approved Colleges)",
        "GRE & GMAT (International Studies)",
        "Central Universities Entrance (CUET-PG)",
      ],
    },
    {
      id: "and-many-more",
      domainNum: "DOMAIN #5",
      tagText: "Career Advantage",
      tagIcon: Star,
      tagIconColor: "text-teal-600 fill-teal-500",
      tagStyle: "bg-teal-50 text-teal-900 border-teal-200/80",
      icon: Target,
      iconColor: "text-teal-600",
      title: "And many more",
      subtitle: "Versatile foundational skills for diverse career opportunities",
      cardBorder: "border-teal-200/90 hover:border-teal-400 bg-white",
      cardBgGlow: "from-teal-500/5 via-transparent to-transparent",
      badgePillBg: "bg-teal-50/80 text-teal-800 border-teal-200/60",
      checkIconColor: "text-teal-600",
      subCoverage: "Aptitude + Logic + Communication + Many More",
      btnStyle: "bg-teal-600 hover:bg-teal-500 text-white shadow-teal-700/20",
      tagline: "Skills for Endless Opportunities",
      taglineColor: "text-teal-800",
      image: SoftskillsImg,
      items: [
        "Job Interview Mastery & Mock Interviews",
        "Group Discussion (GD) Simulations",
        "Professional Resume Writing & Review",
        "Communication & Spoken English Fluency",
        "State & Autonomous Body Aptitude Tests",
        "And many more topics as per syllabus",
      ],
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50/50 border-b border-slate-200/60">
      <div className="w-full max-w-[90%] mx-auto px-[2%] md:px-0">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-orange-50 border border-orange-200/80 text-orange-700 text-xs font-bold uppercase tracking-widest rounded-full mb-3 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-orange-500 shrink-0" />
            1 Single Foundation Course • Covers All 5 Career Domains
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            This Single Foundation Program Covers All{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-600 to-orange-500">
              5 High-Demand Pathways
            </span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Why spend time and money joining multiple coaching institutes? Our unified, expert-designed curriculum builds the core aptitude, reasoning, English, and analytical foundation that directly prepares you for <strong>all 5 major sectors below simultaneously</strong>.
          </p>
        </div>

        {/* 2-Columns Grid for All 5 Cards + 6th Unified Overview Card */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {allPathways.map((pathway) => {
            const Icon = pathway.icon;
            const TagIcon = pathway.tagIcon;
            return (
              <div
                key={pathway.id}
                className={`p-6 sm:p-7 rounded-3xl border ${pathway.cardBorder} shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden bg-gradient-to-br ${pathway.cardBgGlow}`}
              >
                <div>
                  {/* Card Top Badges */}
                  <div className="flex items-center justify-between gap-2 mb-5">
                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-[11px] font-bold uppercase tracking-wider ${pathway.badgePillBg}`}>
                      <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center shadow-2xs">
                        <Icon className={`w-3 h-3 ${pathway.iconColor}`} />
                      </div>
                      <span>{pathway.domainNum}</span>
                    </div>

                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${pathway.tagStyle}`}>
                      <TagIcon className={`w-3.5 h-3.5 ${pathway.tagIconColor}`} />
                      <span>{pathway.tagText}</span>
                    </span>
                  </div>

                  {/* Card Body: Title + Checklist (Left) & 3D Artwork (Right) */}
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center mb-6">
                    <div className="sm:col-span-7">
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-0.5 tracking-tight">
                        {pathway.title}
                      </h3>
                      <p className="text-[12px] text-slate-500 font-normal mb-3.5 leading-snug">
                        {pathway.subtitle}
                      </p>

                      <ul className="space-y-1.5 text-xs text-slate-700 font-medium">
                        {pathway.items.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-1.5">
                            <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${pathway.checkIconColor}`} />
                            <span className="leading-snug text-[11.5px] sm:text-xs text-slate-700">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="sm:col-span-5 flex flex-col items-center justify-center py-2 sm:py-0">
                      <div className="relative w-full max-w-[150px] sm:max-w-[175px] aspect-square flex items-center justify-center">
                        <Image
                          src={pathway.image}
                          alt={pathway.title}
                          fill
                          className="object-contain drop-shadow-md transition-transform duration-300 group-hover:scale-105"
                          sizes="(max-width: 768px) 150px, 175px"
                          priority
                        />
                      </div>
                      {pathway.tagline && (
                        <span className={`inline-flex items-center gap-1 text-[11px] font-bold tracking-tight italic mt-1 text-center ${pathway.taglineColor}`}>
                          <Sparkles className="w-2.5 h-2.5 text-amber-500 shrink-0" />
                          <span>{pathway.tagline}</span>
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Card Bottom Bar */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2 min-w-0">
                    <div className="w-8 h-8 rounded-xl bg-slate-100/80 flex items-center justify-center shrink-0">
                      <BookOpen className="w-4 h-4 text-slate-600" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-bold text-slate-900 leading-tight">
                        85–100% Syllabus Covered
                      </div>
                      <div className="text-[10px] text-slate-500 truncate leading-tight">
                        {pathway.subCoverage}
                      </div>
                    </div>
                  </div>

                  <Link
                    href="/curriculum"
                    className={`shrink-0 inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold shadow-sm transition-all hover:scale-[1.03] ${pathway.btnStyle}`}
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}

          {/* 6th Card: One Unified Foundation • Maximum Career Opportunities */}
          <div className="p-6 sm:p-7 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-white border border-slate-800 shadow-xl flex flex-col justify-between group relative overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl pointer-events-none -z-0" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -z-0" />

            <div className="relative z-10">
              {/* Top Badges */}
              <div className="flex items-center justify-between gap-2 mb-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/40 bg-orange-500/15 text-orange-300 text-[11px] font-bold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5 text-orange-400" />
                  <span>ALL-IN-ONE GATEWAY</span>
                </div>

                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border border-emerald-400/30 bg-emerald-500/15 text-emerald-300">
                  <Award className="w-3.5 h-3.5" /> 100% Unified
                </span>
              </div>

              {/* Body: Left Info + Right Artwork */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center mb-6">
                <div className="sm:col-span-7">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-1 tracking-tight leading-snug">
                    One Unified Foundation • Maximum Career Opportunities
                  </h3>
                  <p className="text-[12px] text-orange-400 font-semibold mb-3.5 leading-tight">
                    Single Preparation • Multiple Selections
                  </p>

                  <p className="text-xs text-slate-300 leading-relaxed font-normal mb-3">
                    Build your aptitude, logic &amp; communication once — and qualify for central, state, banking, tech &amp; PSU exams!
                  </p>

                  <ul className="space-y-1.5 text-xs text-slate-300 font-medium">
                    <li className="flex items-center gap-1.5">
                      <span className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-[10px] font-bold">✓</span>
                      <span>Comprehensive Aptitude &amp; Reasoning</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-[10px] font-bold">✓</span>
                      <span>75–90 Hours Live &amp; Offline Coaching</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-[10px] font-bold">✓</span>
                      <span>6 Months Unlimited LMS Access</span>
                    </li>
                  </ul>
                </div>

                <div className="sm:col-span-5 flex items-center justify-center py-2 sm:py-0">
                  <div className="relative w-full max-w-[150px] sm:max-w-[175px] aspect-square flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 p-2 shadow-inner group-hover:scale-105 transition-transform duration-300">
                    <Image
                      src={CoursesHeroImg}
                      alt="One Unified Foundation"
                      fill
                      className="object-contain drop-shadow-md"
                      sizes="(max-width: 768px) 150px, 175px"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="relative z-10 pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-2 min-w-0">
                <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                  <Layers className="w-4 h-4 text-orange-400" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-bold text-white leading-tight">
                    Complete Exam Matrix
                  </div>
                  <div className="text-[10px] text-slate-400 truncate leading-tight">
                    All 5 Career Domains in 1 Course
                  </div>
                </div>
              </div>

              <Link
                href="/curriculum"
                className="w-full sm:w-auto shrink-0 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-500 hover:to-amber-400 text-white font-bold text-xs shadow-md shadow-orange-950/50 transition-all hover:scale-[1.03]"
              >
                <span>Explore Detailed Syllabus &amp; Exam Matrix</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
