"use client";

import Link from "next/link";
import {
  CheckCircle2,
  Sparkles,
  Monitor,
  BookOpen,
  Clock,
  ShieldCheck,
  ArrowRight,
  Laptop,
  Star,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function PricingPlans() {
  const plans = [
    {
      id: "online",
      name: "Foundation Online",
      tagline: "Live Interactive Classes with Full LMS Backup",
      icon: Monitor,
      badge: "LIVE ONLINE BATCH",
      badgeColor: "bg-sky-50 text-sky-700 border-sky-200",
      hours: "75 Hours Live",
      price: "7,999",
      originalPrice: "11,999",
      discount: "Save 33%",
      popular: false,
      cardTheme: "border-sky-200 bg-white hover:border-sky-400 hover:shadow-xl",
      iconBg: "bg-sky-50 text-sky-600 border border-sky-200/60",
      btnTheme: "bg-slate-900 hover:bg-slate-800 text-white",
      features: [
        "75 Hours Live Interactive Online Classes",
        "Direct Live Doubts Clearing during sessions",
        "Complete coverage of all 6 Core Academic Subjects",
        "Full 6 Months Unlimited LMS Platform Access",
        "Recorded Class Archives so you never miss a lecture",
        "Topic-wise Practice Tests & Digital PDF Study Notes",
        "Online Practice Exercises",
        "Mock Tests with Detailed Analytics",
      ],
      extraFeatures: [],
    },
    {
      id: "offline",
      name: "Foundation Offline",
      tagline: "In-Person Classroom Coaching & Direct Interaction",
      icon: BookOpen,
      badge: "OFFLINE CLASSROOM",
      badgeColor: "bg-orange-50 text-orange-700 border-orange-200",
      hours: "75 Hours In-Person",
      price: "8,999",
      originalPrice: "13,999",
      discount: "Save 36%",
      popular: true,
      popularLabel: " Most Recommended",
      cardTheme: "bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-white shadow-2xl ring-2 ring-orange-500 scale-[1.02] lg:scale-[1.03]",
      iconBg: "bg-white/10 text-orange-400 border border-white/10",
      btnTheme: "bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-500 hover:to-amber-400 text-white shadow-orange-950/40",
      features: [
        "75 Hours Physical In-Person Classroom Coaching",
        "Face-to-face doubts resolution with Senior Faculty",
        "Complete coverage of all 6 Core Subjects",
        "Full 6 Months LMS Access (Online backup included)",
        "Printed Worksheets, Notes & Class Test Drills",
        "Online Practice Exercises",
        "Mock Tests with Detailed Analytics",
        "Dedicated Faculty Mentorship & Strategy Sessions",
      ],
      extraFeatures: [],
    },
    {
      id: "plus-offline",
      name: "Foundation Plus Offline",
      tagline: "Complete Coaching + Soft Skills & GD/PI Mastery",
      icon: Laptop,
      badge: "PLUS OFFLINE • SOFT SKILLS",
      badgeColor: "bg-purple-50 text-purple-700 border-purple-200",
      hours: "90 Hours Total (75h + 15h)",
      price: "9,999",
      originalPrice: "16,999",
      discount: "Save 41%",
      popular: false,
      cardTheme: "border-purple-200 bg-white hover:border-purple-400 hover:shadow-xl",
      iconBg: "bg-purple-50 text-purple-600 border border-purple-200/60",
      btnTheme: "bg-purple-900 hover:bg-purple-800 text-white",
      features: [
        "90 Hours Total Intensive Coaching (75h Core + 15h Extra)",
        "Everything included in Foundation Offline",
        "Complete coverage of all 6 Core Academic Subjects",
        "Full 6 Months LMS Access & Practice Modules",
        "Online Practice Exercises",
        "Mock Tests with Detailed Analytics",
        "Printed Worksheets & Strategy Sessions",
      ],
      extraFeatures: [
        "1-on-1 Mock Interviews & Panel Feedback",
        "Professional Resume Writing & Profile Optimization",
        "Group Discussions (GD) Tactics & Practice",
        "Spoken English, Fluency & Body Language Workshops",
      ],
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <div className="w-full max-w-[90%] mx-auto px-[2%] md:px-0">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-orange-50 border border-orange-200 text-orange-700 text-xs font-bold uppercase tracking-widest rounded-full mb-3 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-orange-500 shrink-0" />
            Flexible Learning Formats
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-4">
            A Clear Foundation. <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-600 to-orange-500">
              A Plan That Fits You.
            </span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Every plan includes comprehensive coverage of all 6 core subjects, 6-month LMS platform access, Online Practice Exercises, Mock Tests, and structured senior faculty mentoring. Choose the learning mode that matches your goals.
          </p>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-16">
          {plans.map((plan) => {
            const Icon = plan.icon;
            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 border ${plan.cardTheme}`}
              >
                {/* Most Recommended Pill for Middle Plan */}
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold text-xs uppercase tracking-wider shadow-md flex items-center gap-1.5 whitespace-nowrap">
                    <Star className="w-3.5 h-3.5 fill-white text-white shrink-0" />
                    <span>{plan.popularLabel || "⭐ Most Recommended"}</span>
                  </div>
                )}

                <div>
                  {/* Top Badges */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span
                      className={`text-[11px] font-bold px-3 py-1 rounded-full border ${
                        plan.popular
                          ? "bg-orange-500/20 text-orange-300 border-orange-400/30"
                          : plan.badgeColor
                      }`}
                    >
                      {plan.badge}
                    </span>
                    <span
                      className={`text-xs font-bold flex items-center gap-1 ${
                        plan.popular ? "text-slate-300" : "text-slate-500"
                      }`}
                    >
                      <Clock className="w-3.5 h-3.5 text-orange-500" />
                      <span>{plan.hours}</span>
                    </span>
                  </div>

                  {/* Plan Name & Tagline */}
                  <div className="flex items-center gap-3 mb-2">
                    <div
                      className={`w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 ${plan.iconBg}`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
                      {plan.name}
                    </h3>
                  </div>

                  <p
                    className={`text-xs font-normal mb-6 leading-relaxed ${
                      plan.popular ? "text-slate-300" : "text-slate-500"
                    }`}
                  >
                    {plan.tagline}
                  </p>

                  {/* Price Box */}
                  <div
                    className={`p-4 rounded-2xl mb-6 ${
                      plan.popular
                        ? "bg-white/5 border border-white/10"
                        : "bg-slate-50 border border-slate-200/80"
                    }`}
                  >
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl sm:text-4xl font-bold">
                        ₹{plan.price}
                      </span>
                      <span
                        className={`line-through text-xs ${
                          plan.popular ? "text-slate-400" : "text-slate-400"
                        }`}
                      >
                        ₹{plan.originalPrice}
                      </span>
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-400/30">
                        {plan.discount}
                      </span>
                    </div>
                    <div
                      className={`text-[11px] mt-1.5 flex items-center gap-1.5 ${
                        plan.popular ? "text-emerald-300" : "text-emerald-700 font-medium"
                      }`}
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                      <span>All-inclusive • 6 Months LMS & Mentorship</span>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-6">
                    <div
                      className={`text-xs font-bold uppercase tracking-wider ${
                        plan.popular ? "text-slate-400" : "text-slate-500"
                      }`}
                    >
                      Included In This Plan:
                    </div>
                    {plan.features.map((feat, fIdx) => (
                      <div
                        key={fIdx}
                        className="flex items-start gap-2.5 text-xs sm:text-[13px] leading-snug"
                      >
                        <CheckCircle2
                          className={`w-4 h-4 shrink-0 mt-0.5 ${
                            plan.popular ? "text-emerald-400" : "text-emerald-600"
                          }`}
                        />
                        <span
                          className={
                            plan.popular ? "text-slate-200" : "text-slate-700"
                          }
                        >
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Extra Features (Only in Plus) */}
                  {plan.extraFeatures.length > 0 && (
                    <div className="p-4 rounded-2xl bg-purple-50 border border-purple-200/80 mb-6 space-y-2">
                      <div className="text-xs font-bold text-purple-900 uppercase tracking-wider flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-purple-600" />
                        <span>Exclusive Plus Offline Additions:</span>
                      </div>
                      <div className="space-y-1.5 pt-1">
                        {plan.extraFeatures.map((ex, eIdx) => (
                          <div
                            key={eIdx}
                            className="flex items-start gap-2 text-xs text-purple-800 font-medium leading-tight"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0 mt-1.5" />
                            <span>{ex}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Card CTA Actions */}
                <div className="pt-4 border-t border-slate-100/20 space-y-2.5">
                  <Link
                    href="/enroll"
                    className={`w-full py-3.5 px-5 rounded-2xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-md hover:scale-[1.02] ${plan.btnTheme}`}
                  >
                    <span>Enquiry</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  {/* <a
                    href="https://wa.me/917794045533?text=Hello%20CareerMitra%20Team!%20I%20am%20interested%20in%20the%20Foundation%20Coaching%20Course."
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-2.5 px-4 rounded-xl bg-emerald-600/15 hover:bg-emerald-600/25 text-emerald-700 dark:text-emerald-300 font-bold text-xs flex items-center justify-center gap-1.5 transition-all"
                  >
                    <FaWhatsapp className="w-4 h-4 text-emerald-600" />
                    <span>Chat on WhatsApp (+91 77940 45533)</span>
                  </a> */}
                </div>
              </div>
            );
          })}
        </div>

        {/* Reassurance Banner */}
        <div className="p-5 sm:p-6 rounded-3xl bg-emerald-50 border border-emerald-200/90 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 shadow-2xs">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-bold text-emerald-950">
                100% Comprehensive Syllabus Coverage Guarantee
              </div>
              <div className="text-xs text-emerald-800 font-normal">
                Every plan covers all 6 core subjects with full 6-month LMS access, Online Practice Exercises, Mock Tests, and direct faculty doubt-clearing.
              </div>
            </div>
          </div>
          <Link
            href="/enroll"
            className="shrink-0 px-5 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs shadow-xs transition-all flex items-center gap-1.5"
          >
            <span>Enquiry</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
