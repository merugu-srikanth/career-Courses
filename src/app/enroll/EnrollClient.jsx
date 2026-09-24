"use client";

import EnrollmentForm from "@/components/coaching/EnrollmentForm";
import { Sparkles, Award, CheckCircle } from "lucide-react";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function EnrollClient() {
  return (
    <div className="min-h-screen bg-slate-50/50 pt-24 sm:pt-28 pb-20">

      {/* Hero Header */}
      <div className="text-slate-900  py-10 md:py-14 border-b border-slate-800 mb-10">
        <div className="w-full max-w-[90%] mx-auto px-[2%] md:px-0 text-center">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-orange-500/20 text-orange-500 border border-orange-400/30 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-orange-500" /> Direct Admission & Counseling
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
            Start Building Your Foundation Today
          </h1>
          <p className="text-slate-700 text-xs sm:text-sm max-w-2xl mx-auto">
            Fill in your details below. Our academic counselor will contact you to assist with personalized study roadmaps and batch options.
          </p>
        </div>
      </div>

      <div className="w-full max-w-[90%] mx-auto px-[2%] md:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Form */}
          <div className="lg:col-span-8">
            <EnrollmentForm />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm">
              <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-orange-500" />
                Why Enquire with CareerMitra × Score 99?
              </h3>

              <div className="space-y-3.5 text-xs text-slate-600">
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Proven Senior Mentors:</strong> 28+ & 20+ years of institutional coaching mastery.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>One Program, Multi-Exam:</strong> Eliminates the need to buy separate coaching for every notification.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>6 Months LMS Support:</strong> Recorded video backup so you never miss a class.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Soft Skills & GD/PI:</strong> Comprehensive interview readiness in Plus Offline package.</span>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-gradient-to-br from-emerald-600 to-teal-700 text-white shadow-md">
              <div className="text-xs font-bold uppercase tracking-widest text-emerald-200 mb-1">
                Batch Starting Soon
              </div>
              <div className="text-xl font-bold mb-2">
                Limited Seats Per Batch
              </div>
              <p className="text-xs text-emerald-100 leading-relaxed">
                We maintain small batch sizes for both online and offline sessions to ensure direct faculty-student interaction.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-orange-600">
                Direct Admissions Helpdesk
              </div>
              <p className="text-xs text-slate-500">
                Prefer talking directly to a counselor before filling out the form?
              </p>
              <div className="space-y-2 pt-1">
                <a
                  href="https://wa.me/917794045533?text=Hi%20CareerMitra%20Team!%20I%20have%20an%20inquiry%20regarding%20the%20Foundation%20Coaching%20Course."
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2.5 p-3 rounded-2xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 text-xs font-bold transition-all"
                >
                  <FaWhatsapp className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>+91 77940 45533 (WhatsApp)</span>
                </a>

                <a
                  href="mailto:info@careermitra.in"
                  className="flex items-center gap-2.5 p-3 rounded-2xl bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200 text-xs font-bold transition-all"
                >
                  <FaEnvelope className="w-4 h-4 text-orange-500 shrink-0" />
                  <span>info@careermitra.in</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
