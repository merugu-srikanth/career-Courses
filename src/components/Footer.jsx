"use client";

import Link from "next/link";
import Image from "next/image";
import LogoImg from "@/assets/NewLogo.png";
import { FaWhatsapp, FaYoutube, FaLinkedin, FaInstagram, FaFacebook, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white border-t border-slate-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Col */}
          <div>
            <div className="relative w-40 h-12 mb-4">
              <Image src={LogoImg} alt="Career Mitra" fill className="object-contain brightness-0 invert" />
            </div>
            <p className="text-xs text-slate-400 leading-relaxed mb-6">
              Government Job Foundation Programme in collaboration with <strong>Score 99 Percentile</strong>. One foundation course for SSC, Banking, Railways, State PSCs, PSUs, and Campus Placements.
            </p>
            <div className="flex items-center gap-3">
              <a href="https://whatsapp.com/channel/0029Vb7zTcp7j6g6O0OHfn37" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-lg bg-white/10 hover:bg-emerald-600 flex items-center justify-center text-slate-300 hover:text-white transition-all">
                <FaWhatsapp size={14} />
              </a>
              <a href="https://www.youtube.com/@CareerMitraaa" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-lg bg-white/10 hover:bg-red-600 flex items-center justify-center text-slate-300 hover:text-white transition-all">
                <FaYoutube size={14} />
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-white/10 hover:bg-blue-600 flex items-center justify-center text-slate-300 hover:text-white transition-all">
                <FaLinkedin size={14} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-extrabold uppercase tracking-wider text-orange-400 mb-4">
              Course Structure
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li><Link href="/" className="hover:text-white transition-colors">Program Overview</Link></li>
              <li><Link href="/curriculum" className="hover:text-white transition-colors">6 Core Skill Modules</Link></li>
              <li><Link href="/curriculum" className="hover:text-white transition-colors">Exam-Skill Coverage Matrix</Link></li>
              <li><Link href="/plans-pricing" className="hover:text-white transition-colors">Live Online (75h - ₹7,999)</Link></li>
              <li><Link href="/plans-pricing" className="hover:text-white transition-colors">Offline Classroom (75h - ₹8,999)</Link></li>
              <li><Link href="/plans-pricing" className="hover:text-white transition-colors">Plus Offline (90h - ₹9,999)</Link></li>
            </ul>
          </div>

          {/* Faculty & Features */}
          <div>
            <h4 className="text-sm font-extrabold uppercase tracking-wider text-orange-400 mb-4">
              Mentors & Support
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li><span className="text-slate-200 font-semibold">Gautam Murthy</span> (28+ Yrs Exp - CS & Math)</li>
              <li><span className="text-slate-200 font-semibold">Raghavender J</span> (20+ Yrs Exp - Ex T.I.M.E. / FIITJEE)</li>
              <li><span>6 Months LMS & Recorded Lectures</span></li>
              <li><span>Weekly Live Doubt Clearing Webinars</span></li>
              <li><Link href="/enroll" className="text-emerald-400 font-bold hover:underline">Book Free Counseling Call →</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-extrabold uppercase tracking-wider text-orange-400 mb-4">
              Admissions Helpdesk
            </h4>
            <div className="space-y-3 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <FaEnvelope className="text-orange-400 shrink-0" />
                <span>support@careermitra.in</span>
              </div>
              <div className="flex items-center gap-2">
                <FaWhatsapp className="text-emerald-400 shrink-0" />
                <span>+91 99999 99999</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 text-slate-300 mt-4">
                <strong>Admissions Open:</strong> 2026-27 Batches filling fast for Online & Offline sessions.
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
          <p>© 2026 CareerMitra & Score 99 Percentile. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
