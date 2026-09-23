"use client";

import Link from "next/link";
import { FileCheck, BookOpen, AlertCircle, ArrowLeft, CheckCircle2 } from "lucide-react";

export default function TermsConditionsPage() {
  return (
    <div className="min-h-screen bg-slate-50 pt-24 sm:pt-28 pb-20">
      {/* Header */}
      <div className="bg-slate-900 text-white py-12 md:py-16 border-b border-slate-800">
        <div className="w-full max-w-[90%] lg:max-w-4xl mx-auto px-[2%] md:px-0">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-400 hover:text-orange-300 transition-colors mb-4"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
          </Link>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-orange-400 mb-2">
            <FileCheck className="w-4 h-4" /> Student Terms & Guidelines
          </div>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight mb-2">
            Terms & Conditions
          </h1>
          <p className="text-slate-400 text-xs sm:text-sm">
            Last Updated: September 2026 • CareerMitra Foundation Coaching Program
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="w-full max-w-[90%] lg:max-w-4xl mx-auto px-[2%] md:px-0 mt-10">
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-8 text-slate-700 text-sm sm:text-base leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-black text-slate-900 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-orange-500" /> 1. Course Enrollment & Batch Allocation
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Admission into the Government Job Foundation Coaching Program (Live Online or Offline Classroom) is confirmed upon successful registration. Batch timings (Morning, Evening, or Weekend) are allotted based on preference and seat availability.
            </p>
          </section>

          <section className="space-y-3 pt-6 border-t border-slate-100">
            <h2 className="text-xl font-black text-slate-900 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" /> 2. LMS Access & Study Materials
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Students receive 6 Months unlimited access to the LMS portal containing lecture archives, practice quiz sets, and PDF formula notes. LMS access credentials are non-transferable and meant solely for individual student learning.
            </p>
          </section>

          <section className="space-y-3 pt-6 border-t border-slate-100">
            <h2 className="text-xl font-black text-slate-900 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-blue-600" /> 3. Code of Conduct & Intellectual Property
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              All class recordings, proprietary test papers, and study material designed by faculty members Gautam Murthy, Raghavender J, and the CareerMitra team are protected copyright assets. Unauthorized redistribution or commercial duplication is strictly prohibited.
            </p>
          </section>

          <section className="space-y-3 pt-6 border-t border-slate-100">
            <h2 className="text-xl font-black text-slate-900">
              4. Support & Academic Inquiries
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              For any schedule changes, technical assistance, or admission queries, reach out to our team at <strong className="text-slate-900">support@careermitra.in</strong> or through our official WhatsApp admissions line.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
