"use client";

import { useState } from "react";
import {
  CheckCircle,
  ShieldCheck,
  Sparkles,
  Send,
  Loader2,
  Building2,
  GraduationCap,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { toast } from "react-toastify";
import axios from "axios";

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "https://www.careermitra.in/api";

export default function EnrollmentForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    qualification: "",
    collegeName: "",
    currentYear: "",
    targetExam: "",
    notes: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.mobile.trim()) {
      toast.error("Please enter your name and phone number");
      return;
    }

    if (!formData.qualification.trim() || !formData.currentYear.trim() || !formData.targetExam.trim()) {
      toast.error("Please fill in all required fields marked with *");
      return;
    }

    try {
      setLoading(true);
      const res = await axios.post(`${API_BASE}/course-enrollments`, formData);
      if (res.data?.success) {
        setSubmitted(true);
        toast.success(res.data.message || "Inquiry submitted! Our academic counselor will contact you shortly.");
      } else {
        toast.error(res.data?.message || "Failed to submit inquiry. Please try again.");
      }
    } catch (error) {
      console.error("Enrollment submission error:", error);
      const errMsg = error.response?.data?.message || "Failed to submit inquiry. Please try again or reach out on WhatsApp.";
      toast.error(errMsg);
    } finally {
      setLoading(false);
    }
  };

  const openWhatsAppInquiry = () => {
    const text = encodeURIComponent(
      `Hello CareerMitra & Score 99 Team! I am interested in the Foundation Coaching Program.\n\nName: ${formData.fullName || "Candidate"}\nPhone: ${formData.mobile || "N/A"}\nEmail: ${formData.email || "N/A"}\nQualification: ${formData.qualification || "N/A"}\nCollege Name: ${formData.collegeName || "N/A"}\nCurrent Year: ${formData.currentYear || "N/A"}\nTarget Exam: ${formData.targetExam || "N/A"}\nNotes: ${formData.notes || "None"}`
    );
    window.open(`https://wa.me/917794045533?text=${text}`, "_blank");
  };

  return (
    <div className="max-w-4xl mx-auto">
      {submitted ? (
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-emerald-200 shadow-xl text-center">
          <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-6 shadow-sm">
            <CheckCircle className="w-10 h-10" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
            Inquiry Request Received!
          </h2>
          <p className="text-slate-600 max-w-lg mx-auto text-sm sm:text-base mb-6">
            Thank you, <strong className="text-slate-900">{formData.fullName}</strong>. Our Senior Academic Counselor will contact you on <strong className="text-slate-900">{formData.mobile}</strong> within 2 hours to guide you with batch details and study plan.
          </p>

          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 max-w-md mx-auto mb-8 text-left text-xs space-y-2">
            <div><strong>Name:</strong> {formData.fullName}</div>
            <div><strong>Phone:</strong> {formData.mobile}</div>
            <div><strong>Qualification:</strong> {formData.qualification || "N/A"}</div>
            {formData.collegeName && (
              <div><strong>College Name:</strong> {formData.collegeName}</div>
            )}
            <div><strong>Current Year:</strong> {formData.currentYear || "N/A"}</div>
            <div><strong>Target Exam:</strong> {formData.targetExam || "General Foundation"}</div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={openWhatsAppInquiry}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md transition-all cursor-pointer"
            >
              <FaWhatsapp className="w-5 h-5" /> Chat on WhatsApp Now
            </button>
            <button
              onClick={() => setSubmitted(false)}
              className="px-6 py-3 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm transition-all cursor-pointer"
            >
              Submit Another Inquiry
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="p-6 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-xl">
          {/* Header */}
          <div className="border-b border-slate-200 pb-6 mb-8">
            <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-wider mb-2">
              <Sparkles className="w-4 h-4" /> Quick Admission &amp; Enquiry Form
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Enquiry
            </h1>
            <p className="text-slate-500 text-xs sm:text-sm mt-1">
              Fill out your details below. Our academic counselor will guide you with personalized study plans and batch details.
            </p>
          </div>

          {/* Personal Information Fields */}
          <div className="space-y-5 mb-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ramesh Kumar"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"
                />
              </div>

              {/* Email Address */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="e.g. ramesh@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"
                />
              </div>

              {/* Mobile / WhatsApp Number */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 9876543210"
                  value={formData.mobile}
                  onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"
                />
              </div>

              {/* Qualifications */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Qualifications *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. B.Tech / B.Sc / B.Com / Degree"
                  value={formData.qualification}
                  onChange={(e) => setFormData({ ...formData, qualification: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"
                />
              </div>

              {/* College Name - Text Input */}
              <div className="sm:col-span-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5 flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-orange-500" /> Enter your college name
                </label>
                <input
                  type="text"
                  placeholder="Enter your college name (e.g. JNTUH, OU, CBIT, Vasavi, etc.)"
                  value={formData.collegeName}
                  onChange={(e) => setFormData({ ...formData, collegeName: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"
                />
              </div>

              {/* Current Year of Study */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Current Year of Study *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. 1st Year / 2nd Year / 3rd Year / Final Year / Graduated"
                  value={formData.currentYear}
                  onChange={(e) => setFormData({ ...formData, currentYear: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"
                />
              </div>

              {/* Target Competitive Exam */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  What is your specific target competitive exam ? *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. SSC CGL, TGPSC Group 1, IBPS PO, RRB"
                  value={formData.targetExam}
                  onChange={(e) => setFormData({ ...formData, targetExam: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"
                />
              </div>
            </div>

            {/* Any specific doubts or requirements? */}
            <div className="pt-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Any specific doubts or requirements? (Optional)
              </label>
              <textarea
                rows={3}
                placeholder="e.g. Inquiring about online batch timing / weekend batches / LMS details..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button
              type="submit"
              disabled={loading}
              className="w-full sm:w-auto flex-1 py-4 px-8 rounded-2xl bg-orange-600 hover:bg-orange-500 disabled:opacity-70 disabled:cursor-not-allowed text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" /> Submitting Inquiry...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" /> Submit Inquiry
                </>
              )}
            </button>

            <button
              type="button"
              onClick={openWhatsAppInquiry}
              className="w-full sm:w-auto py-4 px-6 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <FaWhatsapp className="w-5 h-5" /> Instant WhatsApp
            </button>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" /> 100% Privacy Guaranteed
            </span>
            <span className="flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4 text-blue-600" /> Senior Faculty Mentorship
            </span>
          </div>
        </form>
      )}
    </div>
  );
}
