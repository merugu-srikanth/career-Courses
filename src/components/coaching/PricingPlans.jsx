"use client";

import Link from "next/link";
import { Check, Sparkles, Monitor, BookOpen, Laptop, ArrowRight, ShieldCheck } from "lucide-react";

export default function PricingPlans() {
  const plans = [
    {
      id: "online",
      name: "FOUNDATION ONLINE",
      tagline: "Interactive Live Classes from Home",
      icon: Monitor,
      badge: "LIVE ONLINE",
      badgeColor: "bg-teal-50 text-teal-700 border-teal-200",
      hours: "75 HOURS",
      price: "7,999",
      popular: false,
      features: [
        "75 Hours Live Interactive Online Sessions",
        "Comprehensive coverage of all 5 Core Subjects",
        "6 Months Unlimited LMS Platform Access",
        "Recorded Video Lectures & Class Archives",
        "Weekly Live Doubt Clearing with Faculty",
        "Digital PDF Practice Sheets & Quizzes",
        "Performance Tracking & Test Series",
      ],
      extraFeatures: [],
    },
    {
      id: "offline",
      name: "FOUNDATION OFFLINE",
      tagline: "Classroom Learning with Direct Interaction",
      icon: BookOpen,
      badge: "OFFLINE CLASSROOM",
      badgeColor: "bg-orange-50 text-orange-700 border-orange-200",
      hours: "75 HOURS",
      price: "8,999",
      popular: false,
      features: [
        "75 Hours Physical In-Person Classroom Coaching",
        "Face-to-face doubts resolution with Senior Faculty",
        "Complete coverage of all 5 Core Subjects",
        "6 Months LMS Access (Online backup included)",
        "Printed Worksheets, Notes & Topic Tests",
        "Peer study group & classroom simulations",
        "Dedicated Faculty Mentorship sessions",
      ],
      extraFeatures: [],
    },
    {
      id: "plus-offline",
      name: "FOUNDATION PLUS OFFLINE",
      tagline: "Complete Coaching + Soft Skills Mastery",
      icon: Laptop,
      badge: "MOST POPULAR • BEST VALUE",
      badgeColor: "bg-emerald-600 text-white",
      hours: "90 HOURS",
      price: "9,999",
      popular: true,
      features: [
        "90 Hours Total Intensive Coaching (75h + 15h Extra)",
        "Everything included in Foundation Offline",
        "Full 6 Months LMS Access & Practice Modules",
        "All 5 Core Academic Subjects + Tests",
      ],
      extraFeatures: [
        "✨ Interview Preparation & Mock Panel Interviews",
        "✨ Professional Resume Writing & Profile Optimization",
        "✨ Group Discussions (GD) Mastery & Public Speaking",
        "✨ Personality Development & Body Language Workshops",
      ],
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block px-3 py-1 bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold uppercase tracking-widest rounded-full mb-3">
            Choose How You Prepare
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">
            A Clear Foundation. <span className="text-orange-600">A Plan That Fits You.</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Every plan includes all 5 core subjects, 6-month LMS access, and structured mentorship. Select the format that matches your learning schedule.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-12">
          {plans.map((plan) => {
            const Icon = plan.icon;
            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-7 flex flex-col justify-between transition-all duration-300 ${
                  plan.popular
                    ? "bg-slate-900 text-white shadow-2xl ring-2 ring-emerald-500 scale-[1.02]"
                    : "bg-white text-slate-900 border border-slate-200/90 shadow-md hover:shadow-xl"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-emerald-500 text-slate-950 font-black text-xs uppercase tracking-wider shadow-md">
                    ⭐ Recommended Package
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`text-[11px] font-extrabold px-3 py-1 rounded-full border ${
                        plan.popular ? "bg-emerald-500/20 text-emerald-300 border-emerald-400/30" : plan.badgeColor
                      }`}
                    >
                      {plan.badge}
                    </span>
                    <span className={`text-xs font-bold ${plan.popular ? "text-slate-400" : "text-slate-500"}`}>
                      ⏱️ {plan.hours}
                    </span>
                  </div>

                  <h3 className="text-xl font-black tracking-tight mb-1">
                    {plan.name}
                  </h3>
                  <p className={`text-xs font-medium mb-6 ${plan.popular ? "text-slate-300" : "text-slate-500"}`}>
                    {plan.tagline}
                  </p>

                  <div className="mb-6 pb-6 border-b border-slate-200/30">
                    <div className="flex items-baseline gap-1">
                      <span className="text-sm font-bold">₹</span>
                      <span className="text-4xl font-black">{plan.price}</span>
                      <span className={`text-xs ml-1 ${plan.popular ? "text-slate-400" : "text-slate-500"}`}>
                        / one-time
                      </span>
                    </div>
                    <div className={`text-[11px] mt-1 ${plan.popular ? "text-emerald-400" : "text-emerald-600"} font-bold`}>
                      ✓ Includes 6-Month LMS & Mentorship
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className={`text-xs font-bold uppercase tracking-wider ${plan.popular ? "text-slate-400" : "text-slate-500"}`}>
                      Included Features:
                    </div>
                    {plan.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                        <Check className={`w-4 h-4 shrink-0 mt-0.5 ${plan.popular ? "text-emerald-400" : "text-emerald-600"}`} />
                        <span className={plan.popular ? "text-slate-200" : "text-slate-700"}>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {plan.extraFeatures.length > 0 && (
                    <div className="p-4 rounded-2xl bg-emerald-950/60 border border-emerald-500/30 mb-6 space-y-2">
                      <div className="text-xs font-extrabold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5" /> Extra Features Only in Plus:
                      </div>
                      {plan.extraFeatures.map((ex, eIdx) => (
                        <div key={eIdx} className="text-xs font-semibold text-emerald-200 leading-tight">
                          {ex}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="pt-4">
                  <Link
                    href="/enroll"
                    className={`w-full py-3.5 px-4 rounded-2xl font-black text-sm flex items-center justify-center gap-2 transition-all shadow-md ${
                      plan.popular
                        ? "bg-emerald-500 hover:bg-emerald-400 text-slate-950 hover:shadow-lg"
                        : "bg-slate-900 hover:bg-slate-800 text-white"
                    }`}
                  >
                    Enroll / Inquire Now <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <div className="p-4 sm:p-5 rounded-2xl bg-emerald-50 border border-emerald-200 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-emerald-600 shrink-0" />
            <span className="text-xs sm:text-sm font-extrabold text-emerald-900">
              Every plan includes full coverage of all five subjects + 6-month LMS access and structured faculty mentoring.
            </span>
          </div>
          <Link
            href="/enroll"
            className="text-xs font-bold text-emerald-800 underline hover:text-emerald-950"
          >
            Need counseling assistance? Request a callback →
          </Link>
        </div>
      </div>
    </section>
  );
}
