"use client";

import Link from "next/link";
import Image from "next/image";
import LogoImg from "@/assets/NewLogo.png";
import { FaWhatsapp, FaYoutube, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { ShieldCheck, PhoneCall, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white border-t border-slate-800/80 pt-16 pb-12">
      <div className="w-full max-w-[90%] mx-auto px-[2%] md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-14">
          
          {/* Brand & Collaboration - 4 cols on large screens */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-block group focus:outline-hidden">
              <div className="relative w-52 sm:w-60 h-14 sm:h-16">
                <Image
                  src={LogoImg}
                  alt="Career Mitra"
                  fill
                  className="object-contain object-left transition-transform duration-200 group-hover:scale-[1.02]"
                  priority
                />
              </div>
            </Link>
            <p className="text-xs sm:text-[13px] text-slate-400 leading-relaxed font-normal max-w-sm">
              Comprehensive Government Job Foundation Coaching in collaboration with <strong className="text-slate-200 font-semibold">Score 99 Percentile</strong>. One structured gateway for SSC, Banking, Railways, State PSCs & Placements.
            </p>
          </div>

          {/* Foundation Course - 2.5 cols */}
          <div className="lg:col-span-3 lg:pl-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-orange-400 mb-4">
              Foundation Course
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-[13px] text-slate-400">
              <li>
                <Link href="/" className="hover:text-white transition-colors duration-150">
                  Program Overview
                </Link>
              </li>
              <li>
                <Link href="/curriculum" className="hover:text-white transition-colors duration-150">
                  Curriculum & Exam Matrix
                </Link>
              </li>
              <li>
                <Link href="/plans-pricing" className="hover:text-white transition-colors duration-150">
                  Plans & Pricing (₹9,999)
                </Link>
              </li>
              <li>
                <Link href="/enroll" className="hover:text-white transition-colors duration-150">
                  Enroll & Counseling Form
                </Link>
              </li>
            </ul>
          </div>

          {/* Student Legal & Trust - 2.5 cols */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-orange-400 mb-4">
              Policies & Trust
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-[13px] text-slate-400">
              <li>
                <Link href="/privacy-policy" className="hover:text-white transition-colors duration-150 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Privacy Policy</span>
                </Link>
              </li>
              <li>
                <Link href="/terms-conditions" className="hover:text-white transition-colors duration-150">
                  Terms & Conditions
                </Link>
              </li>
              <li className="text-slate-500">
                6 Months LMS Access
              </li>
              <li className="text-slate-500">
                100% Data Privacy
              </li>
            </ul>
          </div>

          {/* Admissions Helpdesk - 3 cols */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-orange-400 mb-4">
              Admissions Helpdesk
            </h4>
            <div className="space-y-3 text-xs sm:text-[13px] text-slate-400">
              <div className="flex items-center gap-2.5">
                <FaEnvelope className="text-orange-400 shrink-0 w-3.5 h-3.5" />
                <a href="mailto:info@careermitra.in" className="hover:text-white transition-colors duration-150">
                  info@careermitra.in
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <FaWhatsapp className="text-emerald-400 shrink-0 w-4 h-4" />
                <a href="https://wa.me/917794045533" target="_blank" rel="noreferrer" className="hover:text-white transition-colors duration-150 font-medium text-slate-300">
                  +91 77940 45533
                </a>
              </div>
              <div className="pt-2">
                <Link
                  href="/enroll"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-semibold text-xs transition-all shadow-md shadow-orange-950/40 hover:shadow-orange-900/50 hover:-translate-y-0.5"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>Book Free Counselor Call</span>
                </Link>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} CareerMitra & Score 99 Percentile. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <span className="text-slate-700">•</span>
            <Link href="/terms-conditions" className="hover:text-slate-300 transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

