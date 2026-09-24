"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import LogoImg from "@/assets/NewLogo.png";
import Score99Logo from "@/assets/score99logo.png";
import {
  FaHome, FaLayerGroup, FaCreditCard, FaUserCheck,
  FaSignInAlt, FaSignOutAlt, FaWhatsapp, FaBars, FaTimes, FaPhoneAlt, FaEnvelope, FaExternalLinkAlt
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

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  const navLinks = [
    { name: "Program Overview", path: "/", icon: Sparkles },
    { name: "Curriculum & Matrix", path: "/curriculum", icon: Layers },
    { name: "Plans & Pricing", path: "/plans-pricing", icon: BookOpen },
    { name: "Enquiry", path: "/enroll", icon: UserCheck },
  ];

  const isActive = (path) => (path === "/" ? pathname === "/" : pathname.startsWith(path));

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-xs" : "bg-white border-b border-slate-100"
          }`}
      >
        {/* Top accent line */}
        <div className="h-0.5 w-full bg-gradient-to-r from-orange-400 via-amber-500 to-emerald-500" />

        <div className="w-full max-w-[90%] mx-auto px-[2%] md:px-0">
          <div className="flex items-center justify-between h-18 sm:h-20 gap-2">
            {/* Logos Co-Branding */}
            <div className="flex items-center gap-2 sm:gap-3 md:gap-4 shrink-0">
              <Link href="/" className="flex items-center shrink-0">
                <div className="relative w-28 sm:w-36 md:w-40 h-10 sm:h-12 md:h-14">
                  <Image
                    src={LogoImg}
                    alt="Career Mitra"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </Link>

              {/* Divider */}
              <span className="h-6 sm:h-8 w-px bg-slate-200 shrink-0" />

              {/* In Collaboration With label */}
              <span className="hidden md:inline-block text-[9px] lg:text-[10px] font-semibold uppercase tracking-wider text-slate-400 whitespace-nowrap">
                IN COLLABORATION WITH
              </span>

              {/* Score 99 Logo */}
              <a
                href="https://score99percentile.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center shrink-0 hover:opacity-90 transition-opacity"
                title="Academic Partner - Score 99 Percentile"
              >
                <div className="relative w-24 sm:w-32 md:w-36 h-6 sm:h-8 md:h-9">
                  <Image
                    src={Score99Logo}
                    alt="Score 99 Percentile"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </a>
            </div>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-2">
              {navLinks.map((link) => {
                const active = isActive(link.path);
                return (
                  <Link
                    key={link.name}
                    href={link.path}
                    className={`group relative flex items-center gap-1.5 px-3.5 py-2 text-xs sm:text-sm font-semibold transition-colors duration-200 ${active
                      ? "text-orange-600"
                      : "text-slate-700 hover:text-orange-600"
                      }`}
                  >
                    <span>{link.name}</span>
                    {link.badge && !active && (
                      <span className="px-2 py-0.5 text-[9px] font-bold rounded-full bg-orange-500 text-white uppercase tracking-wider leading-none">
                        {link.badge}
                      </span>
                    )}

                    {/* Animated underline starting from center moving left and right */}
                    <span
                      className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full transition-all duration-300 ease-out ${active ? "w-full" : "w-0 group-hover:w-full"
                        }`}
                    />
                  </Link>
                );
              })}
            </div>

            {/* Right Actions */}
            <div className="hidden sm:flex items-center gap-3">
              {/* <a
                href="https://wa.me/917794045533?text=Hi%20CareerMitra%20Team!%20I%20have%20an%20inquiry%20regarding%20the%20Foundation%20Coaching%20Course."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl border border-emerald-500/30 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 text-xs font-bold transition-all shadow-2xs"
              >
                <FaWhatsapp className="w-4 h-4 text-emerald-600" />
                <span>+91 77940 45533</span>
              </a> */}

              {token ? (
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-slate-500" />
                    <span>{user?.name || "Student"}</span>
                  </span>
                  <button
                    onClick={() => logout()}
                    className="p-2 rounded-xl bg-slate-100 hover:bg-red-50 text-slate-600 hover:text-red-600 text-xs font-bold transition-all cursor-pointer"
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

            {/* Mobile Hamburger (No enquiry button beside hamburger) */}
            <div className="flex lg:hidden items-center">
              <button
                type="button"
                onClick={() => setDrawerOpen((prev) => !prev)}
                className="p-2.5 rounded-xl bg-slate-100 text-slate-800 hover:bg-slate-200 transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange-500/30"
                aria-label="Toggle navigation menu"
              >
                {drawerOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Sticky Marquee Strip (Commented out) */}
        <div className="border-t border-slate-100 bg-white/95 backdrop-blur-xs py-1.5 overflow-hidden relative">
          <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div className="animate-marquee flex items-center">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center gap-4 sm:gap-6 shrink-0 pr-8 sm:pr-10 text-xs">
                <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-slate-400 whitespace-nowrap">
                  IN COLLABORATION WITH
                </span>

                <a
                  href="https://score99percentile.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 px-2 py-0.5 rounded-md bg-white border border-slate-200 shadow-2xs hover:border-red-300 transition-all shrink-0"
                >
                  <div className="relative w-22 h-4">
                    <Image
                      src={Score99Logo}
                      alt="Score 99 Percentile"
                      fill
                      className="object-contain"
                    />
                  </div>
                </a>

                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-amber-50/70 text-amber-700 border border-amber-100 whitespace-nowrap shrink-0">
                  ⭐ Govt Job Foundation 2026-27
                </span>

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

      {/* Mobile Sidebar / Drawer */}
      <div
        className={`fixed inset-0 z-[100] lg:hidden transition-opacity duration-300 ${
          drawerOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity duration-300"
          onClick={() => setDrawerOpen(false)}
        />

        {/* Drawer panel */}
        <div
          className={`fixed top-0 right-0 w-[85vw] max-w-xs h-full bg-white shadow-2xl p-5 sm:p-6 flex flex-col justify-between overflow-y-auto transform transition-transform duration-300 ease-in-out ${
            drawerOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div>
            {/* Header with Logos and Close Button */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-5">
              <div className="flex flex-col gap-1">
                <div className="relative w-28 h-8">
                  <Image src={LogoImg} alt="Career Mitra" fill className="object-contain" />
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-[9px] text-slate-400 font-bold uppercase">with</span>
                  <div className="relative w-16 h-3.5">
                    <Image src={Score99Logo} alt="Score 99" fill className="object-contain" />
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setDrawerOpen(false)}
                className="p-2 rounded-xl bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900 transition-all cursor-pointer"
                aria-label="Close menu"
              >
                <FaTimes size={16} />
              </button>
            </div>

            {/* Nav Links */}
            <div className="space-y-1.5">
              {navLinks.map((link) => {
                const active = isActive(link.path);
                const Icon = link.icon;
                return (
                  <Link
                    key={link.name}
                    href={link.path}
                    onClick={() => setDrawerOpen(false)}
                    className={`flex items-center justify-between p-3 rounded-xl text-sm font-semibold transition-all ${
                      active
                        ? "bg-orange-50 text-orange-600 font-bold border-l-4 border-orange-500"
                        : "text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      {Icon && <Icon className={`w-4 h-4 ${active ? "text-orange-500" : "text-slate-400"}`} />}
                      <span>{link.name}</span>
                    </div>
                    {link.badge && (
                      <span className="px-2 py-0.5 text-[9px] font-bold rounded-full bg-orange-500 text-white">
                        {link.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Score 99 Academic Partner Card */}
            <div className="mt-5 p-3 rounded-xl bg-slate-50 border border-slate-100">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[10px] font-bold uppercase text-slate-400">Academic Partner</span>
                <span className="text-[10px] font-bold text-red-600 bg-red-50 px-1.5 py-0.5 rounded border border-red-100">Official</span>
              </div>
              <a
                href="https://score99percentile.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2 rounded-lg bg-white border border-slate-200/80 hover:border-red-300 transition-colors"
              >
                <div className="relative w-24 h-5">
                  <Image src={Score99Logo} alt="Score 99" fill className="object-contain" />
                </div>
                <FaExternalLinkAlt className="w-2.5 h-2.5 text-slate-400" />
              </a>
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="pt-5 border-t border-slate-100 space-y-2.5">
            <Link
              href="/enroll"
              onClick={() => setDrawerOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold text-xs shadow-md transition-all"
            >
              <UserCheck className="w-4 h-4" />
              <span>Submit Enquiry</span>
            </Link>

            <a
              href="https://wa.me/917794045533?text=Hi%20CareerMitra%20Team!%20I%20have%20an%20inquiry%20regarding%20the%20Foundation%20Coaching%20Course."
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-xs transition-colors"
            >
              <FaWhatsapp className="w-4 h-4" /> +91 77940 45533 (WhatsApp)
            </a>

            <a
              href="mailto:info@careermitra.in"
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors"
            >
              <FaEnvelope className="w-3.5 h-3.5 text-orange-500" /> info@careermitra.in
            </a>

            {token ? (
              <button
                type="button"
                onClick={() => {
                  logout();
                  setDrawerOpen(false);
                }}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-red-50 hover:bg-red-100 text-red-600 font-bold text-xs transition-colors cursor-pointer"
              >
                <FaSignOutAlt className="w-3.5 h-3.5" /> Logout
              </button>
            ) : (
              <Link
                href="/login"
                onClick={() => setDrawerOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-900 text-white font-bold text-xs transition-colors"
              >
                <FaSignInAlt className="w-3.5 h-3.5" /> Student Login / Register
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
