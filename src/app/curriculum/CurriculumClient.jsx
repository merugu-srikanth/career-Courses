"use client";

import CoreSkillsGrid from "@/components/coaching/CoreSkillsGrid";
import ExamSkillCoverageTable from "@/components/coaching/ExamSkillCoverageTable";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CurriculumClient() {
  return (
    <div className="min-h-screen bg-white pt-24 sm:pt-28">

      {/* Header */}
      <div className="bg-slate-900 text-white py-12 md:py-16 border-b border-slate-800">
        <div className="w-full max-w-[90%] mx-auto px-[2%] md:px-0 text-center">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-blue-500/20 text-blue-300 border border-blue-400/30 mb-4">
            <Sparkles className="w-3.5 h-3.5" /> Structured Syllabus & Coverage
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Foundation Curriculum & <span className="text-orange-400">Exam Coverage Matrix</span>
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
            Gain complete clarity on the 6 Core Skill Areas and see how thoroughly each individual subject maps into the question patterns of top central, state, and corporate recruitment exams.
          </p>
        </div>
      </div>

      <CoreSkillsGrid />
      <ExamSkillCoverageTable />

      <section className="py-12 bg-emerald-50 border-t border-emerald-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
            Ready to Start Your Targeted Preparation?
          </h3>
          <p className="text-slate-600 text-xs sm:text-sm mb-6">
            Compare our Online, Offline, and Plus packages to choose your batch.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/plans-pricing"
              className="px-6 py-3 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow-md transition-all flex items-center gap-2"
            >
              View Plans & Pricing <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/enroll"
              className="px-6 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md transition-all"
            >
              Enroll Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
