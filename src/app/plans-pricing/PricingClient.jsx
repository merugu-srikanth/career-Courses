"use client";

import PricingPlans from "@/components/coaching/PricingPlans";
import FacultyShowcase from "@/components/coaching/FacultyShowcase";
import Link from "next/link";
import { Sparkles, HelpCircle } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function PricingClient() {
  const faqs = [
    {
      q: "What is included in the 6 Months LMS Access?",
      a: "The LMS includes full chapter-wise recorded lectures, topic-wise practice quiz sets, downloadable PDFs, class notes, and mock tests with All-India percentile scoring.",
    },
    {
      q: "What makes Foundation Plus Offline special?",
      a: "Foundation Plus includes an extra 15 hours of specialized soft-skills coaching focusing on Interview Preparation, Resume Building, and Group Discussions (GD), which are critical for Banking, Placement, and State PSC selections.",
    },
    {
      q: "Can Online students attend doubt clearing sessions with faculty?",
      a: "Yes! Foundation Online students get dedicated weekly live interactive doubt clearing webinars directly with senior faculty including Gautam Murthy and Raghavender J.",
    },
    {
      q: "Is there any batch timing flexibility?",
      a: "Yes, both Morning, Evening, and Weekend batch options are available for college students and working professionals.",
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-24 sm:pt-28">
      {/* Header */}
      {/* <div className="bg-slate-900 text-white py-12 md:py-16 border-b border-slate-800">
        <div className="w-full max-w-[90%] mx-auto px-[2%] md:px-0 text-center">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 mb-4">
            <Sparkles className="w-3.5 h-3.5" /> All-Inclusive Foundation Pricing
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            One Program. One Pricing. <span className="text-orange-400">Complete Coverage.</span>
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
            Everything you need to master Quantitative Aptitude, Logical Reasoning, English, General Awareness, Computer Literacy, and Soft Skills in one single comprehensive course.
          </p>
        </div>
      </div> */}

      <PricingPlans />
      <FacultyShowcase />

      {/* FAQs */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">
              Got Questions?
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4 mb-10">
            {faqs.map((faq, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                <h3 className="text-base font-bold text-slate-900 mb-2 flex items-start gap-2">
                  <HelpCircle className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                  {faq.q}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 pl-7 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>

          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-md flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="text-base font-bold text-slate-900">
                Still have questions or need custom batch assistance?
              </div>
              <div className="text-xs text-slate-500">
                Talk to our senior academic counselor right now.
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Link
                href="/enroll"
                className="px-5 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs shadow-xs"
              >
                Request Callback
              </Link>
              <a
                href="https://wa.me/917794045533?text=Hi%20CareerMitra,%20I%20have%20questions%20about%20Foundation%20Coaching%20pricing"
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-1.5 shadow-xs"
              >
                <FaWhatsapp className="w-4 h-4" /> WhatsApp (+91 77940 45533)
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
