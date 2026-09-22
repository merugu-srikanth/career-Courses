"use client";

import { Landmark, Factory, Building2, GraduationCap, Target, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CareerPathwaysGrid() {
  const pathways = [
    {
      icon: Landmark,
      title: "Government Jobs",
      subtitle: "Prestigious and stable public sector careers",
      color: "from-emerald-500/10 to-teal-500/5",
      border: "border-emerald-200 hover:border-emerald-400",
      badgeBg: "bg-emerald-100 text-emerald-800",
      accent: "text-emerald-600",
      items: [
        "UPSC (Civil Services CSAT)",
        "SSC (CGL, CHSL, MTS, CPO)",
        "State PSCs (TGPSC, APPSC, etc.)",
        "Railways (RRB NTPC, Group D)",
        "Banking (IBPS PO/Clerk, SBI)",
        "Defence Services (CDS, AFCAT)",
      ],
    },
    {
      icon: Factory,
      title: "Public Sector (PSUs)",
      subtitle: "Lucrative technical and executive roles",
      color: "from-blue-500/10 to-indigo-500/5",
      border: "border-blue-200 hover:border-blue-400",
      badgeBg: "bg-blue-100 text-blue-800",
      accent: "text-blue-600",
      items: [
        "ONGC (Oil & Natural Gas Corp)",
        "IOCL (Indian Oil)",
        "BHEL (Bharat Heavy Electricals)",
        "NTPC (Power Generation)",
        "SAIL (Steel Authority of India)",
        "State & Central PSU Recruitment Tests",
      ],
    },
    {
      icon: Building2,
      title: "Corporate Sector",
      subtitle: "Top-tier MNC & Tech placement readiness",
      color: "from-purple-500/10 to-pink-500/5",
      border: "border-purple-200 hover:border-purple-400",
      badgeBg: "bg-purple-100 text-purple-800",
      accent: "text-purple-600",
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
      icon: GraduationCap,
      title: "Higher Education Exams",
      subtitle: "Admissions to premier management institutions",
      color: "from-orange-500/10 to-amber-500/5",
      border: "border-orange-200 hover:border-orange-400",
      badgeBg: "bg-orange-100 text-orange-800",
      accent: "text-orange-600",
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
      icon: Target,
      title: "Professional & Soft Skills",
      subtitle: "End-to-end interview & personality coaching",
      color: "from-cyan-500/10 to-sky-500/5",
      border: "border-cyan-200 hover:border-cyan-400",
      badgeBg: "bg-cyan-100 text-cyan-800",
      accent: "text-cyan-600",
      items: [
        "Job Interview Mastery & Mock Interviews",
        "Group Discussion (GD) Simulations",
        "Professional Resume Writing & Review",
        "Communication & Spoken English Fluency",
        "Skill-Based Aptitude Assessments",
        "Personal Development & Mentorship",
      ],
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block px-3 py-1 bg-orange-50 border border-orange-200 text-orange-700 text-xs font-bold uppercase tracking-widest rounded-full mb-3">
            One Coaching Program. A World of Opportunities.
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight mb-4">
            Well Prepared for a Wide Range of <span className="text-orange-600">Exams & Career Paths</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Why prepare separately for every single exam? Our unified curriculum builds foundational aptitude, English, data interpretation, and GK that powers your success across all these sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pathways.map((pathway, idx) => {
            const Icon = pathway.icon;
            return (
              <div
                key={idx}
                className={`p-7 rounded-3xl bg-gradient-to-br ${pathway.color} bg-white border ${pathway.border} shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform">
                      <Icon className={`w-6 h-6 ${pathway.accent}`} />
                    </div>
                    <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider ${pathway.badgeBg}`}>
                      Pathway #{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-black text-slate-900 mb-1">
                    {pathway.title}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium mb-5">
                    {pathway.subtitle}
                  </p>

                  <ul className="space-y-2.5 mb-6">
                    {pathway.items.map((item, iIdx) => (
                      <li key={iIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-500">80–90% Skill Alignment</span>
                  <Link
                    href="/curriculum"
                    className="inline-flex items-center gap-1 text-xs font-bold text-orange-600 group-hover:translate-x-1 transition-transform"
                  >
                    View Coverage <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
