"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import LogoImg from "@/assets/NewLogo.png";
import {
  FaHome, FaLayerGroup, FaCreditCard, FaUserCheck,
  FaSignInAlt, FaSignOutAlt, FaWhatsapp, FaBars, FaTimes, FaPhoneAlt
} from "react-icons/fa";
import { Sparkles, Layers, BookOpen, User, UserCheck } from "lucide-react";

export default function Navbar() {
  const { user, token, logout } = useAuth();
  const pathname = usePathname();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setDrawerOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Program Overview", path: "/", icon: Sparkles },
    { name: "Curriculum & Matrix", path: "/curriculum", icon: Layers },
    { name: "Plans & Pricing", path: "/plans-pricing", icon: BookOpen },
    { name: "Enroll / Inquire", path: "/enroll", },
  ];

  const isActive = (path) => (path === "/" ? pathname === "/" : pathname.startsWith(path));

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-xs" : "bg-white border-b border-slate-100"
        }`}
      >
        {/* Top accent line */}
        <div className="h-0.5 w-full bg-gradient-to-r from-orange-400 via-amber-500 to-emerald-500" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18 sm:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 shrink-0">
              <div className="relative w-36 sm:w-44 h-12">
                <Image
                  src={LogoImg}
                  alt="Career Mitra"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-2">
              {navLinks.map((link) => {
                const active = isActive(link.path);
                return (
                  <Link
                    key={link.name}
                    href={link.path}
                    className={`group relative flex items-center gap-1.5 px-3.5 py-2 text-xs sm:text-sm font-semibold transition-colors duration-200 ${
                      active
                        ? "text-orange-600"
                        : "text-slate-700 hover:text-orange-600"
                    }`}
                  >
                    <span>{link.name}</span>
                    {link.badge && !active && (
                      <span className="px-2 py-0.5 text-[9px] font-black rounded-full bg-orange-500 text-white uppercase tracking-wider leading-none">
                        {link.badge}
                      </span>
                    )}

                    {/* Animated underline starting from center moving left and right */}
                    <span
                      className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full transition-all duration-300 ease-out ${
                        active ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </Link>
                );
              })}
            </div>

            {/* Right Actions */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href="https://wa.me/919999999999?text=Hi%20CareerMitra%20Team!%20I%20have%20inquiry%20regarding%20Foundation%20Coaching%20Course."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-emerald-500/30 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 text-xs font-bold transition-all"
              >
                <FaWhatsapp className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp</span>
              </a>

              {token ? (
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-slate-700">
                    👤 {user?.name || "Student"}
                  </span>
                  <button
                    onClick={() => logout()}
                    className="p-2 rounded-xl bg-slate-100 hover:bg-red-50 text-slate-600 hover:text-red-600 text-xs font-bold transition-all"
                    title="Logout"
                  >
                    <FaSignOutAlt className="w-3.5 h-3.5" />
                  </button>
                </div>
              ) : (
                <Link
                  href="/login"
                  className="flex items-center gap-1.5 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-xl font-bold text-xs shadow-xs transition-all"
                >
                  <FaSignInAlt className="w-3 h-3" />
                  <span>Login / Register</span>
                </Link>
              )}
            </div>

            {/* Mobile Hamburger */}
            <div className="flex lg:hidden items-center gap-2">
              <Link
                href="/enroll"
                className="px-3 py-1.5 rounded-xl bg-orange-500 text-white text-xs font-bold sm:hidden"
              >
                Enroll
              </Link>
              <button
                onClick={() => setDrawerOpen(!drawerOpen)}
                className="p-2.5 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 transition-all"
                aria-label="Toggle menu"
              >
                {drawerOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Sticky Marquee Strip */}
        <div className="border-t border-slate-100 bg-white/95 backdrop-blur-xs py-1.5 overflow-hidden relative">
          {/* Subtle gradient edges */}
          <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div className="animate-marquee flex items-center">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center gap-4 sm:gap-6 shrink-0 pr-8 sm:pr-10 text-xs">
                <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-slate-400 whitespace-nowrap">
                  IN COLLABORATION WITH
                </span>

                {/* Score 99 Percentile */}
                <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-red-50/80 border border-red-100 text-red-600 whitespace-nowrap shrink-0">
                  <span className="w-4 h-4 rounded bg-red-500 text-white text-[9px] font-bold flex items-center justify-center">
                    99
                  </span>
                  <span className="text-[11px] font-semibold tracking-tight">SCORE 99 PERCENTILE</span>
                </div>

                {/* Govt Job Foundation */}
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-amber-50/70 text-amber-700 border border-amber-100 whitespace-nowrap shrink-0">
                  ⭐ Govt Job Foundation 2026-27
                </span>

                {/* Admissions Open */}
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-emerald-50/70 text-emerald-700 border border-emerald-100 whitespace-nowrap shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  Admissions Open
                </span>

                <span className="text-slate-200 font-normal select-none">•</span>
              </div>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {drawerOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-xs"
            onClick={() => setDrawerOpen(false)}
          />
          <div className="fixed top-0 right-0 w-[80vw] max-w-xs h-full bg-white shadow-2xl p-6 flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
                <div className="relative w-32 h-10">
                  <Image src={LogoImg} alt="Career Mitra" fill className="object-contain" />
                </div>
                <button
                  onClick={() => setDrawerOpen(false)}
                  className="p-2 rounded-xl bg-slate-100 text-slate-500"
                >
                  <FaTimes size={16} />
                </button>
              </div>

              <div className="space-y-1.5">
                {navLinks.map((link) => {
                  const active = isActive(link.path);
                  return (
                    <Link
                      key={link.name}
                      href={link.path}
                      onClick={() => setDrawerOpen(false)}
                      className={`flex items-center justify-between p-3 rounded-xl text-sm font-semibold transition-all ${
                        active ? "bg-orange-50 text-orange-600 font-bold" : "text-slate-700 hover:bg-slate-50"
                      }`}
                    >
                      <span>{link.name}</span>
                      {link.badge && (
                        <span className="px-2 py-0.5 text-[9px] font-black rounded-full bg-orange-500 text-white">
                          {link.badge}
                        </span>
                      )}
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100 space-y-3">
              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-2xl bg-emerald-600 text-white font-bold text-xs"
              >
                <FaWhatsapp className="w-4 h-4" /> WhatsApp Counselor
              </a>

              {token ? (
                <button
                  onClick={() => { logout(); setDrawerOpen(false); }}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-2xl bg-red-50 text-red-600 font-bold text-xs"
                >
                  <FaSignOutAlt className="w-3.5 h-3.5" /> Logout
                </button>
              ) : (
                <Link
                  href="/login"
                  onClick={() => setDrawerOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-2xl bg-orange-500 text-white font-bold text-xs"
                >
                  <FaSignInAlt className="w-3.5 h-3.5" /> Student Login / Register
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
