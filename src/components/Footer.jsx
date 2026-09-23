"use client";

import Link from "next/link";
import Image from "next/image";
import LogoImg from "@/assets/NewLogo.png";
import { FaWhatsapp, FaYoutube, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { ShieldCheck, PhoneCall, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white border-t border-slate-800 pt-14 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 mb-12">
          {/* Brand & Collaboration */}
          <div className="space-y-3.5">
            <Link href="/" className="inline-block relative w-44 h-12">
              <Image
                src={LogoImg}
                alt="Career Mitra"
                fill
                className="object-contain"
                priority
              />
            </Link>
            <p className="text-xs text-slate-400 leading-relaxed font-normal max-w-sm">
              Government Job Foundation Coaching in collaboration with <strong className="text-slate-200">Score 99 Percentile</strong>. One unified foundation for SSC, Banking, Railways, State PSCs, PSUs & Placements.
            </p>
            <div className="flex items-center gap-2.5 pt-1">
              <a
                href="https://wa.me/917794045533"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-xl bg-white/10 hover:bg-emerald-600 flex items-center justify-center text-slate-300 hover:text-white transition-all shadow-xs"
                title="WhatsApp"
              >
                <FaWhatsapp size={14} />
              </a>
              <a
                href="https://www.youtube.com/@CareerMitraaa"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-xl bg-white/10 hover:bg-red-600 flex items-center justify-center text-slate-300 hover:text-white transition-all shadow-xs"
                title="YouTube"
              >
                <FaYoutube size={14} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-xl bg-white/10 hover:bg-blue-600 flex items-center justify-center text-slate-300 hover:text-white transition-all shadow-xs"
                title="LinkedIn"
              >
                <FaLinkedin size={14} />
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-widest text-orange-400 mb-4">
              Foundation Course
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link href="/" className="hover:text-white transition-colors">Program Overview</Link>
              </li>
              <li>
                <Link href="/curriculum" className="hover:text-white transition-colors">Curriculum & Exam Matrix</Link>
              </li>
              <li>
                <Link href="/plans-pricing" className="hover:text-white transition-colors">Plans & Pricing (₹7,999)</Link>
              </li>
              <li>
                <Link href="/enroll" className="hover:text-white transition-colors">Enroll & Counseling Form</Link>
              </li>
            </ul>
          </div>

          {/* Student Legal & Trust */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-widest text-orange-400 mb-4">
              Policies & Trust
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link href="/privacy-policy" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Privacy Policy</span>
                </Link>
              </li>
              <li>
                <Link href="/terms-conditions" className="hover:text-white transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <span className="text-slate-500">6 Months LMS Access Included</span>
              </li>
              <li>
                <span className="text-slate-500">100% Data Privacy Guarantee</span>
              </li>
            </ul>
          </div>

          {/* Admissions Helpdesk */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-widest text-orange-400 mb-4">
              Admissions Helpdesk
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <FaEnvelope className="text-orange-400 shrink-0" />
                <a href="mailto:info@careermitra.in" className="hover:text-white transition-colors">
                  info@careermitra.in
                </a>
              </div>
              <div className="flex items-center gap-2">
                <FaWhatsapp className="text-emerald-400 shrink-0" />
                <a href="https://wa.me/+917794045533" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                  +917794045533
                </a>
              </div>
              <div className="pt-2">
                <Link
                  href="/enroll"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs transition-all shadow-sm"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>Book Free Counselor Call</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
          <p>© {new Date().getFullYear()} CareerMitra & Score 99 Percentile. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="hover:text-slate-400 transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/terms-conditions" className="hover:text-slate-400 transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

