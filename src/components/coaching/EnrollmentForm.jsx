"use client";

import { useState, useRef, useEffect } from "react";
import {
  CheckCircle,
  ShieldCheck,
  Sparkles,
  Send,
  Loader2,
  Building2,
  GraduationCap,
  ChevronDown,
  Search,
  Check,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { toast } from "react-toastify";
import axios from "axios";

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "https://www.careermitra.in/api";

const HYDERABAD_COLLEGES = [
  "St. Ann's College for Women",
  "Kasturba Gandhi Degree and PG College for Women",
 
  // "Osmania University (OU), Hyderabad",
  // "JNTU Hyderabad (JNTUH)",
  // "Chaitanya Bharathi Institute of Technology (CBIT)",
  "Vasavi College of Engineering",
  "VNR Vignana Jyothi Institute of Engineering & Technology (VNR VJIET)",
  "G. Narayanamma Institute of Technology & Science (GNITS)",
  "BVRIT Hyderabad College of Engineering for Women",
  "Stanley College of Engineering and Technology for Women",
  "St. Francis College for Women, Begumpet",
  "Villa Marie Degree College for Women",
  "Bhavan's Vivekananda College, Sainikpuri",
  "Loyola Academy Degree & PG College",
  "Nizam College, Hyderabad",
   "Malla Reddy Engineering College",
  "Keshav Memorial Institute of Technology (KMIT)",
  "Gokaraju Rangaraju Institute of Engineering & Technology (GRIET)",
  "Vardhaman College of Engineering",
  "Sreenidhi Institute of Science and Technology (SNIST)",
  "CVR College of Engineering",
  "Anurag University",
  "Institute of Aeronautical Engineering (IARE)",
  "Mahatma Gandhi Institute of Technology (MGIT)",
  "CMR College of Engineering & Technology",
  "Badruka College of Commerce and Arts",
  "AV College of Arts, Science and Commerce",
  "Aurora's Degree & PG College",
  "Wesley Degree College",
  "Other College (Type below)",
];

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

  const [selectedCollege, setSelectedCollege] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const dropdownRef = useRef(null);

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
            <h1 className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-wider mb-2">
              <Sparkles className="w-4 h-4" /> Quick Enquiry Form
            </h1>
            {/* <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Enquiry
            </h1> */}
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

              {/* College Name - Custom 70vh Dropdown Selection */}
              <div className="sm:col-span-2 space-y-2 relative" ref={dropdownRef}>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5 flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-orange-500" /> College Name
                </label>

                {/* Dropdown Trigger Button */}
                <button
                  type="button"
                  onClick={() => setDropdownOpen((prev) => !prev)}
                  className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-sm font-medium text-slate-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all flex items-center justify-between text-left cursor-pointer"
                >
                  <span className={selectedCollege ? "text-slate-900 font-semibold truncate pr-2" : "text-slate-400"}>
                    {selectedCollege || "Select Your College"}
                  </span>
                  <ChevronDown className={`w-4 h-4 text-slate-500 shrink-0 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`} />
                </button>

                {/* Custom 70vh Dropdown Menu */}
                {dropdownOpen && (
                  <div className="absolute top-full left-0 w-full mt-1.5 bg-white border border-slate-200 rounded-2xl shadow-2xl z-50 p-2 overflow-hidden animate-fadeIn">
                    {/* Search Input */}
                    <div className="relative mb-2">
                      <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        placeholder="Search college by name..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-8 pr-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                        autoFocus
                      />
                    </div>

                    {/* Scrollable List with max-h-[70vh] */}
                    <div className="max-h-[70vh] overflow-y-auto space-y-0.5 divide-y divide-slate-50 pr-1">
                      {HYDERABAD_COLLEGES.filter((c) =>
                        c.toLowerCase().includes(searchQuery.toLowerCase())
                      ).map((college, idx) => {
                        const isSelected = selectedCollege === college;
                        return (
                          <button
                            key={idx}
                            type="button"
                            onClick={() => {
                              setSelectedCollege(college);
                              setDropdownOpen(false);
                              setSearchQuery("");
                              if (college !== "Other College (Type below)") {
                                setFormData((prev) => ({ ...prev, collegeName: college }));
                              } else {
                                setFormData((prev) => ({ ...prev, collegeName: "" }));
                              }
                            }}
                            className={`w-full px-3 py-2.5 rounded-xl text-left text-xs sm:text-sm font-medium flex items-center justify-between transition-colors ${
                              isSelected
                                ? "bg-orange-50 text-orange-600 font-bold"
                                : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                            }`}
                          >
                            <span className="truncate pr-2">{college}</span>
                            {isSelected && <Check className="w-4 h-4 text-orange-600 shrink-0" />}
                          </button>
                        );
                      })}

                      {HYDERABAD_COLLEGES.filter((c) =>
                        c.toLowerCase().includes(searchQuery.toLowerCase())
                      ).length === 0 && (
                        <div className="p-4 text-center text-xs text-slate-400">
                          No matching college found. You can select &ldquo;Other College&rdquo; below.
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* If 'Other College' selected, show custom typing input */}
                {selectedCollege === "Other College (Type below)" && (
                  <input
                    type="text"
                    placeholder="Type your college name here (e.g. Government Degree College, etc.)"
                    value={formData.collegeName}
                    onChange={(e) => setFormData((prev) => ({ ...prev, collegeName: e.target.value }))}
                    className="w-full px-4 py-3 rounded-2xl bg-white border-2 border-orange-400 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all mt-2"
                    autoFocus
                  />
                )}
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
