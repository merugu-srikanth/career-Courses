"use client";

import Link from "next/link";
import Image from "next/image";
import LogoImg from "@/assets/NewLogo.png";
import Score99Logo from "@/assets/score99logo.png";
import { FaWhatsapp, FaEnvelope, FaExternalLinkAlt } from "react-icons/fa";
import { ShieldCheck, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white border-t border-slate-800/80 pt-12 sm:pt-16 pb-10 sm:pb-12">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-8 mb-10 sm:mb-14">
          
          {/* Brand & Collaboration - 4 cols on large screens */}
          <div className="sm:col-span-2 lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
              <Link href="/" className="inline-block group focus:outline-hidden">
                <div className="relative w-36 sm:w-44 h-11 sm:h-13">
                  <Image
                    src={LogoImg}
                    alt="Career Mitra"
                    fill
                    className="object-contain object-left transition-transform duration-200 group-hover:scale-[1.02]"
                    priority
                  />
                </div>
              </Link>
              <span className="h-6 sm:h-7 w-px bg-slate-800" />
              <a
                href="https://score99percentile.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block hover:opacity-90 transition-opacity"
                title="Score 99 Percentile"
              >
                <div className="relative w-28 sm:w-32 h-6 sm:h-7">
                  <Image
                    src={Score99Logo}
                    alt="Score 99 Percentile"
                    fill
                    className="object-contain"
                  />
                </div>
              </a>
            </div>

            <p className="text-xs sm:text-[13px] text-slate-400 leading-relaxed font-normal max-w-sm">
              Comprehensive Government Job Foundation Coaching in collaboration with <strong className="text-slate-200 font-semibold">Score 99 Percentile</strong>. One structured gateway for SSC, Banking, Railways, State PSCs &amp; Placements.
            </p>
          </div>

          {/* Foundation Course - 3 cols */}
          <div className="lg:col-span-3 lg:pl-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-orange-400 mb-3 sm:mb-4">
              Foundation Course
            </h4>
            <ul className="space-y-2 text-xs sm:text-[13px] text-slate-400">
              <li>
                <Link href="/" className="hover:text-white transition-colors duration-150 inline-block py-0.5">
                  Program Overview
                </Link>
              </li>
              <li>
                <Link href="/curriculum" className="hover:text-white transition-colors duration-150 inline-block py-0.5">
                  Curriculum &amp; Exam Matrix
                </Link>
              </li>
              <li>
                <Link href="/plans-pricing" className="hover:text-white transition-colors duration-150 inline-block py-0.5">
                  Plans &amp; Pricing
                </Link>
              </li>
              <li>
                <Link href="/enroll" className="hover:text-white transition-colors duration-150 inline-block py-0.5">
                  Enquiry
                </Link>
              </li>
            </ul>
          </div>

          {/* Policies & Trust - 2 cols */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-orange-400 mb-3 sm:mb-4">
              Policies &amp; Trust
            </h4>
            <ul className="space-y-2 text-xs sm:text-[13px] text-slate-400">
              <li>
                <Link href="/privacy-policy" className="hover:text-white transition-colors duration-150 flex items-center gap-1.5 py-0.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Privacy Policy</span>
                </Link>
              </li>
              <li>
                <Link href="/terms-conditions" className="hover:text-white transition-colors duration-150 inline-block py-0.5">
                  Terms &amp; Conditions
                </Link>
              </li>
              <li className="text-slate-500 py-0.5">
                6 Months LMS Access
              </li>
              <li className="text-slate-500 py-0.5">
                100% Data Privacy
              </li>
            </ul>
          </div>

          {/* Admissions Helpdesk - 3 cols */}
          <div className="sm:col-span-2 lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-orange-400 mb-3 sm:mb-4">
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
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-500 hover:to-amber-400 text-white font-semibold text-xs transition-all shadow-md shadow-orange-950/40 text-center"
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                  <span>Enquiry</span>
                </Link>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 text-center sm:text-left">
          <p>© {new Date().getFullYear()} CareerMitra &amp; Score 99 Percentile. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <span className="text-slate-700">•</span>
            <Link href="/terms-conditions" className="hover:text-slate-300 transition-colors">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

