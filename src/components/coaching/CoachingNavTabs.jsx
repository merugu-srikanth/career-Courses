"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sparkles, Layers, CreditCard, UserCheck } from "lucide-react";

export default function CoachingNavTabs() {
  const pathname = usePathname();

  const tabs = [
    {
      label: "Program Overview",
      href: "/",
      icon: Sparkles,
      active: pathname === "/",
    },
    {
      label: "Curriculum & Exam Matrix",
      href: "/curriculum",
      icon: Layers,
      active: pathname === "/curriculum",
    },
    {
      label: "Plans, Pricing & Faculty",
      href: "/plans-pricing",
      icon: CreditCard,
      active: pathname === "/plans-pricing",
    },
    {
      label: "Enquiry",
      href: "/enroll",
      icon: UserCheck,
      active: pathname === "/enroll",
      highlight: true,
    },
  ];

  return (
    <div className="sticky top-18 sm:top-20 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-xs transition-all">
      <div className="w-full max-w-[90%] mx-auto px-[2%] md:px-0">
        <div className="flex items-center overflow-x-auto no-scrollbar py-2.5 sm:py-3 gap-2">
          <div className="flex items-center gap-1.5 sm:gap-2">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <Link
                  key={tab.href}
                  href={tab.href}
                  className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap shrink-0 ${
                    tab.active
                      ? "bg-slate-900 text-white shadow-sm ring-1 ring-slate-800"
                      : tab.highlight
                      ? "bg-orange-50 text-orange-600 hover:bg-orange-100 border border-orange-200"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${tab.active ? "text-orange-400" : tab.highlight ? "text-orange-500" : "text-slate-400"}`} />
                  <span>{tab.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
