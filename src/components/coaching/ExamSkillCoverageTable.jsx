"use client";

import { useState } from "react";
import { Search, CheckCircle, Sparkles, ArrowRight, Landmark, Building2, Train, Factory, Briefcase, GraduationCap } from "lucide-react";
import Link from "next/link";

export default function ExamSkillCoverageTable() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");

  const matrixData = [
    {
      id: "govt-jobs",
      category: "govt",
      icon: Landmark,
      iconColor: "text-emerald-600 bg-emerald-50 border-emerald-200",
      name: "Government Jobs",
      subtext: "SSC CGL, CHSL, MTS, CPO",
      quant: 90,
      verbal: 85,
      rc: 80,
      lrDi: 85,
      computer: 70,
      ga: 55,
      overall: "80–85%",
    },
    {
      id: "state-psc",
      category: "govt",
      icon: Landmark,
      iconColor: "text-emerald-600 bg-emerald-50 border-emerald-200",
      name: "State PSC Exams",
      subtext: "TGPSC, APPSC, State Recruitment",
      quant: 85,
      verbal: 75,
      rc: 75,
      lrDi: 80,
      computer: 60,
      ga: 50,
      overall: "75–85%",
    },
    {
      id: "banking",
      category: "banking",
      icon: Building2,
      iconColor: "text-blue-600 bg-blue-50 border-blue-200",
      name: "Banking Sector",
      subtext: "IBPS PO/Clerk, SBI PO/Clerk, RBI",
      quant: 90,
      verbal: 85,
      rc: 80,
      lrDi: 85,
      computer: 70,
      ga: 50,
      overall: "80–85%",
    },
    {
      id: "railways",
      category: "govt",
      icon: Train,
      iconColor: "text-orange-600 bg-orange-50 border-orange-200",
      name: "Railways (RRB)",
      subtext: "RRB NTPC, Group D, ALP & Tech",
      quant: 90,
      verbal: 75,
      rc: 65,
      lrDi: 75,
      computer: 60,
      ga: 50,
      overall: "75–80%",
    },
    {
      id: "psu-tech",
      category: "psu",
      icon: Factory,
      iconColor: "text-indigo-600 bg-indigo-50 border-indigo-200",
      name: "PSU & Technical Recruitment",
      subtext: "ONGC, IOCL, BHEL, NTPC, SAIL",
      quant: 90,
      verbal: 80,
      rc: 75,
      lrDi: 75,
      computer: 60,
      ga: 45,
      overall: "75–85%",
    },
    {
      id: "corporate",
      category: "corporate",
      icon: Briefcase,
      iconColor: "text-purple-600 bg-purple-50 border-purple-200",
      name: "Corporate & Campus Placements",
      subtext: "TCS, Infosys, Wipro, Deloitte, BFSI",
      quant: 95,
      verbal: 90,
      rc: 85,
      lrDi: 90,
      computer: 10,
      ga: 30,
      overall: "85–90%",
    },
    {
      id: "mba-cat",
      category: "mba",
      icon: GraduationCap,
      iconColor: "text-amber-600 bg-amber-50 border-amber-200",
      name: "MBA Entrance – CAT & XAT",
      subtext: "IIMs & Premier B-Schools",
      quant: 60,
      verbal: 60,
      rc: 60,
      lrDi: 60,
      computer: 0,
      ga: 20,
      overall: "60%",
    },
    {
      id: "mba-other",
      category: "mba",
      icon: GraduationCap,
      iconColor: "text-amber-600 bg-amber-50 border-amber-200",
      name: "MBA – SNAP / NMAT / CMAT / MAT",
      subtext: "Top National Management Institutes",
      quant: 70,
      verbal: 70,
      rc: 70,
      lrDi: 70,
      computer: 15,
      ga: 35,
      overall: "70–75%",
    },
  ];

  const filtered = matrixData.filter((row) => {
    const matchesCategory =
      activeFilter === "all" || row.category === activeFilter;
    const matchesSearch =
      row.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.subtext.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getPillColor = (val) => {
    if (val >= 85) return "bg-emerald-50 text-emerald-700 border-emerald-200";
    if (val >= 70) return "bg-blue-50 text-blue-700 border-blue-200";
    if (val >= 50) return "bg-amber-50 text-amber-700 border-amber-200";
    if (val > 0) return "bg-slate-100 text-slate-700 border-slate-200";
    return "bg-slate-50 text-slate-400 border-slate-100";
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="w-full max-w-[90%] mx-auto px-[2%] md:px-0">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-block px-3 py-1 bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-widest rounded-full mb-3">
            Indicative Exam-Skill Coverage Matrix
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Percentage Coverage of <span className="text-blue-600">Key Skill Areas</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            See exactly how much each exam syllabus is covered directly by our Foundation Coaching Program.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200 mb-8">
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: "all", label: "All Pathways" },
              { id: "govt", label: "Govt & PSC" },
              { id: "banking", label: "Banking" },
              { id: "psu", label: "PSUs" },
              { id: "corporate", label: "Placements" },
              { id: "mba", label: "MBA Exams" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeFilter === tab.id
                    ? "bg-slate-900 text-white shadow-xs"
                    : "bg-white text-slate-600 hover:bg-slate-200/70 border border-slate-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search exam (e.g. SSC, SBI, CAT)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl text-xs sm:text-sm bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
            />
          </div>
        </div>

        {/* Table Container */}
        <div className="overflow-x-auto rounded-3xl border border-slate-200 bg-white shadow-xs mb-10">
          <table className="w-full text-left border-collapse min-w-[850px]">
            <thead>
              <tr className="bg-slate-900 text-white text-xs uppercase tracking-wider font-bold">
                <th className="py-4 px-5 rounded-tl-3xl">Exam / Career Pathway</th>
                <th className="py-4 px-3 text-center">Quant Ability</th>
                <th className="py-4 px-3 text-center">Verbal Ability</th>
                <th className="py-4 px-3 text-center">Reading Comp.</th>
                <th className="py-4 px-3 text-center">Logic & DI</th>
                <th className="py-4 px-3 text-center">Computer</th>
                <th className="py-4 px-3 text-center">General Awareness</th>
                <th className="py-4 px-5 text-center rounded-tr-3xl bg-orange-600 text-white font-bold">
                  Overall Coverage
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
              {filtered.map((row) => (
                <tr key={row.id} className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-4 px-5">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-xl flex items-center justify-center border shrink-0 ${row.iconColor}`}>
                        <row.icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-bold text-slate-900">{row.name}</div>
                        <div className="text-[11px] text-slate-500 font-medium">{row.subtext}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-3 text-center">
                    <span className={`inline-block px-2.5 py-1 rounded-lg font-bold border text-xs ${getPillColor(row.quant)}`}>
                      {row.quant}%
                    </span>
                  </td>
                  <td className="py-4 px-3 text-center">
                    <span className={`inline-block px-2.5 py-1 rounded-lg font-bold border text-xs ${getPillColor(row.verbal)}`}>
                      {row.verbal}%
                    </span>
                  </td>
                  <td className="py-4 px-3 text-center">
                    <span className={`inline-block px-2.5 py-1 rounded-lg font-bold border text-xs ${getPillColor(row.rc)}`}>
                      {row.rc}%
                    </span>
                  </td>
                  <td className="py-4 px-3 text-center">
                    <span className={`inline-block px-2.5 py-1 rounded-lg font-bold border text-xs ${getPillColor(row.lrDi)}`}>
                      {row.lrDi}%
                    </span>
                  </td>
                  <td className="py-4 px-3 text-center">
                    <span className={`inline-block px-2.5 py-1 rounded-lg font-bold border text-xs ${getPillColor(row.computer)}`}>
                      {row.computer}%
                    </span>
                  </td>
                  <td className="py-4 px-3 text-center">
                    <span className={`inline-block px-2.5 py-1 rounded-lg font-bold border text-xs ${getPillColor(row.ga)}`}>
                      {row.ga}%
                    </span>
                  </td>
                  <td className="py-4 px-5 text-center bg-orange-50/50">
                    <span className="inline-block px-3 py-1 rounded-xl bg-emerald-600 text-white font-bold text-xs shadow-xs">
                      {row.overall}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Key Takeaways Box */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 text-white shadow-xl">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-orange-400" />
            <h3 className="text-lg font-bold text-white">
              Key Strategic Takeaways:
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="p-4 rounded-2xl bg-white/10 border border-white/10">
              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-slate-200">
                  <strong className="text-white">Aptitude & Reasoning:</strong> Exceptional 85–95% coverage across all major Central, State, and Banking exams.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white/10 border border-white/10">
              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-slate-200">
                  <strong className="text-white">Computer Awareness:</strong> Solid 60–70% foundation with practical drills for Tier-2 / Mains stages.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white/10 border border-white/10">
              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-slate-200">
                  <strong className="text-white">Daily GK & Current Affairs:</strong> Continuous updates through LMS and monthly compilations for exam readiness.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10 text-xs text-slate-400">
            <span>* Percentages indicate skill coverage extent through our foundation program.</span>
            <Link
              href="/plans-pricing"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-400 hover:text-orange-300"
            >
              Check Pricing & Batches <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
