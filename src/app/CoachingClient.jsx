"use client";

import CoachingHero from "@/components/coaching/CoachingHero";
import CareerPathwaysGrid from "@/components/coaching/CareerPathwaysGrid";
import CoreSkillsGrid from "@/components/coaching/CoreSkillsGrid";
import FacultyShowcase from "@/components/coaching/FacultyShowcase";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CoachingClient() {
  return (
    <div className="min-h-screen bg-white pt-24 sm:pt-28">
      <CoachingHero />
      <CareerPathwaysGrid />
      <CoreSkillsGrid />
      <FacultyShowcase />

      {/* Bottom CTA */}
      <section className="py-14 bg-slate-900 text-white text-center">
        <div className="w-full max-w-[90%] mx-auto px-[2%] md:px-0">
          <span className="inline-block px-3 py-1 bg-emerald-500/20 border border-emerald-400/30 text-emerald-400 text-xs font-black uppercase tracking-widest rounded-full mb-4">
            Admissions Open • Flexible Batches
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black mb-4">
            Ready to Build Your Unstoppable Foundation?
          </h2>
          {/* <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto mb-8">
            Choose from Live Online (75h - ₹9,999), Offline Classroom (75h - ₹8,999), or Plus Offline (90h - ₹9,999).
          </p> */}

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/plans-pricing"
              className="px-8 py-3.5 rounded-2xl bg-orange-600 hover:bg-orange-500 text-white font-extrabold text-sm shadow-lg transition-all flex items-center gap-2"
            >
              View Plans & Enroll <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/curriculum"
              className="px-8 py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 transition-all"
            >
              Explore Exam-Skill Matrix
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
