"use client";

import Link from "next/link";
import { ShieldCheck, Lock, FileText, UserCheck, CheckCircle2, ArrowLeft } from "lucide-react";

export default function PrivacyPolicyPage() {
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
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-400 mb-2">
            <ShieldCheck className="w-4 h-4" /> Transparency & Trust
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-2">
            Privacy Policy
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
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Lock className="w-5 h-5 text-orange-500" /> 1. Information We Collect
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              When you submit an admission inquiry, counseling request, or enroll in the Career Foundation Programme 26-27, we collect personal information including your full name, email address, phone/WhatsApp number, highest qualification, current year of study, target exams, and selected course preferences.
            </p>
          </section>

          <section className="space-y-3 pt-6 border-t border-slate-100">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <UserCheck className="w-5 h-5 text-emerald-600" /> 2. How We Use Your Information
            </h2>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>To contact you for academic counseling, personalized study roadmaps, and batch coordination.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>To grant and manage your 6 Months LMS platform access, lecture archives, and mock test scores.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>To send important class schedules, webinar invitations, syllabus updates, and exam alert notifications.</span>
              </li>
            </ul>
          </section>

          <section className="space-y-3 pt-6 border-t border-slate-100">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <FileText className="w-5 h-5 text-blue-600" /> 3. Data Protection & Security
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              We strictly do NOT sell, rent, or trade student personal information to third-party telemarketers or advertisers. All submitted data is encrypted and securely stored to maintain your absolute academic privacy.
            </p>
          </section>

          <section className="space-y-3 pt-6 border-t border-slate-100">
            <h2 className="text-xl font-bold text-slate-900">
              4. Contact Our Privacy Officer
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              If you have any questions regarding your inquiry data or wish to update your registered contact details, please write to our academic helpdesk at <a href="mailto:info@careermitra.in" className="text-orange-600 font-bold hover:underline">info@careermitra.in</a> or call / WhatsApp us at <a href="https://wa.me/917794045533" target="_blank" rel="noreferrer" className="text-emerald-600 font-bold hover:underline">+91 77940 45533</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
