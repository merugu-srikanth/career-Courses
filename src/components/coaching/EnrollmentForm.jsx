"use client";

import { useState, useRef, useEffect } from "react";
import {
  CheckCircle,
  ShieldCheck,
  Sparkles,
  Send,
  PhoneCall,
  Loader2,
  Building2,
  ChevronDown,
  Search,
  Check,
  PlusCircle,
  X,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { toast } from "react-toastify";
import axios from "axios";

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "https://www.careermitra.in/api";

// List of popular colleges & universities across Telangana, AP & Pan-India
const COLLEGE_OPTIONS = [
  "JNTU Hyderabad (JNTUH), Kukatpally",
  "Osmania University (OU), Hyderabad",
  "Andhra University (AU), Visakhapatnam",
  "Sri Venkateswara University (SVU), Tirupati",
  "CBIT (Chaitanya Bharathi Institute of Technology), Gandipet",
  "VNR Vignana Jyothi Institute of Engineering & Technology (VNR VJIET)",
  "Vasavi College of Engineering (VCE), Ibrahimbagh",
  "G. Narayanamma Institute of Technology & Science (GNITS)",
  "Gokaraju Rangaraju Institute of Engineering & Technology (GRIET)",
  "CVR College of Engineering, Ibrahimpatnam",
  "BVRIT (BV Raju Institute of Technology), Narsapur",
  "BVRIT Hyderabad College of Engineering for Women, Bachupally",
  "Mahatma Gandhi Institute of Technology (MGIT), Gandipet",
  "Anurag University (AU) / Anurag Group of Institutions, Ghatkesar",
  "Malla Reddy Engineering College (MREC), Maisammaguda",
  "Malla Reddy College of Engineering & Technology (MRCET)",
  "Vardhaman College of Engineering, Shamshabad",
  "Sreenidhi Institute of Science & Technology (SNIST), Ghatkesar",
  "Kakatiya Institute of Technology & Science (KITS), Warangal",
  "Kakatiya University (KU), Warangal",
  "KL University (KLEF Deemed University), Vaddeswaram / Hyderabad",
  "GITAM Deemed to be University, Visakhapatnam / Hyderabad",
  "SR University (SRU), Warangal",
  "VR Siddhartha Engineering College (VRSEC), Vijayawada",
  "GMR Institute of Technology (GMRIT), Rajam",
  "Gayatri Vidya Parishad College of Engineering (GVPCE), Visakhapatnam",
  "RVR & JC College of Engineering, Guntur",
  "Bapatla Engineering College (BEC), Bapatla",
  "Sagi Rama Krishnam Raju Engineering College (SRKR), Bhimavaram",
  "Maharaj Vijayaram Gajapathi Raj College of Engineering (MVGR), Vizianagaram",
  "JNTU Kakinada (JNTUK)",
  "JNTU Anantapur (JNTUA)",
  "IIT Hyderabad (IITH), Kandi, Sangareddy",
  "IIT Madras / IIT Bombay / IIT Delhi",
  "IIT Tirupati",
  "NIT Warangal (NITW)",
  "NIT Andhra Pradesh, Tadepalligudem",
  "IIIT Hyderabad (IIITH), Gachibowli",
  "IIIT Sri City, Chittoor",
  "BITS Pilani - Hyderabad Campus, Jawahar Nagar",
  "University of Hyderabad (HCU), Gachibowli",
  "Nizam College (Autonomous), Basheerbagh",
  "Bhavan's Vivekananda College, Sainikpuri, Secunderabad",
  "Loyola Academy Degree & PG College, Alwal, Secunderabad",
  "St. Francis College for Women, Begumpet",
  "Badruka College of Commerce & Arts, Kachiguda",
  "AV College of Arts, Science & Commerce, Gaganmahal",
  "St. Ann's College for Women, Mehdipatnam",
  "Aurora's Degree & PG College, Chikkadpally",
  "Wesley Degree College, Secunderabad",
  "Vidyajyothi Institute of Technology (VJIT), Aziznagar",
  "Guru Nanak Institutions Technical Campus (GNITC), Ibrahimpatnam",
  "CMR Institute of Technology (CMRIT), Medchal",
  "CMR College of Engineering & Technology (CMRCET), Kandlakoya",
  "Keshava Memorial Institute of Technology (KMIT), Narayanguda",
  "Neil Gogte Institute of Technology (NGIT), Kachiguda",
  "Matrusri Engineering College, Saidabad",
  "Deccan College of Engineering & Technology, Nampally",
  "Muffakham Jah College of Engineering & Technology (MJCET), Banjara Hills",
  "Stanley College of Engineering and Technology for Women, Chapel Road",
  "Methodist College of Engineering & Technology, Abids",
  "Geethanjali College of Engineering and Technology, Keesara",
  "TKR College of Engineering and Technology, Meerpet",
  "St. Martin's Engineering College (SMEC), Dhulapally",
  "Marri Laxman Reddy Institute of Technology and Management (MLRITM)",
  "MLR Institute of Technology (MLRIT), Dundigal",
  "KG Reddy College of Engineering & Technology, Moinabad",
  "Holy Mary Institute of Technology and Science, Bogaram",
  "JBIET (JB Institute of Engineering & Technology), Yenkapally",
  "Other College / Institute (Enter Manually)",
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

  // Custom Dropdown state
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [collegeSearchQuery, setCollegeSearchQuery] = useState("");
  const [isManualCollege, setIsManualCollege] = useState(false);
  const [manualCollegeText, setManualCollegeText] = useState("");

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Filter colleges based on user search query inside dropdown
  const filteredColleges = COLLEGE_OPTIONS.filter((item) =>
    item.toLowerCase().includes(collegeSearchQuery.toLowerCase().trim())
  );

  const handleSelectCollege = (college) => {
    if (college.startsWith("Other College")) {
      setIsManualCollege(true);
      setFormData((prev) => ({ ...prev, collegeName: manualCollegeText }));
    } else {
      setIsManualCollege(false);
      setFormData((prev) => ({ ...prev, collegeName: college }));
    }
    setIsDropdownOpen(false);
    setCollegeSearchQuery("");
  };

  const handleManualCollegeChange = (e) => {
    const val = e.target.value;
    setManualCollegeText(val);
    setFormData((prev) => ({ ...prev, collegeName: val }));
  };

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
        toast.success(res.data.message || "Inquiry submitted! Our academic counselor will call you shortly.");
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
              <Sparkles className="w-4 h-4" /> Quick Admission & Counseling Form
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Inquire / Enroll for Foundation Coaching
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

              {/* Custom div Dropdown for College Name */}
              <div className="sm:col-span-2 relative" ref={dropdownRef}>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5 flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-orange-500" /> College / University Name
                  </span>
                  <span className="text-[11px] text-slate-400 font-normal">
                    Interactive scrollable selection
                  </span>
                </label>

                {/* Dropdown Trigger Box (Clean Div) */}
                <div
                  onClick={() => setIsDropdownOpen((prev) => !prev)}
                  className={`w-full px-4 py-3 rounded-2xl bg-slate-50 border text-sm transition-all cursor-pointer flex items-center justify-between select-none ${
                    isDropdownOpen
                      ? "bg-white border-orange-500 ring-2 ring-orange-500/20 shadow-sm"
                      : "border-slate-200 hover:border-slate-300 hover:bg-slate-100/60"
                  }`}
                >
                  <div className="flex items-center gap-2.5 min-w-0 pr-2">
                    <Building2
                      className={`w-4 h-4 shrink-0 transition-colors ${
                        formData.collegeName ? "text-orange-600" : "text-slate-400"
                      }`}
                    />
                    <span
                      className={`truncate ${
                        formData.collegeName
                          ? "text-slate-900 font-semibold"
                          : "text-slate-400 font-normal"
                      }`}
                    >
                      {formData.collegeName || "Click to select your College / University..."}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 shrink-0">
                    {formData.collegeName && (
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setFormData((prev) => ({ ...prev, collegeName: "" }));
                          setIsManualCollege(false);
                          setManualCollegeText("");
                        }}
                        className="p-1 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-200/70 transition-colors"
                        title="Clear selection"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    )}
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                        isDropdownOpen ? "rotate-180 text-orange-500" : ""
                      }`}
                    />
                  </div>
                </div>

                {/* Floating Div Dropdown Menu (max-h-[60vh] scrollable) */}
                {isDropdownOpen && (
                  <div className="absolute left-0 right-0 top-full mt-2 z-50 rounded-2xl bg-white border border-slate-200/90 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150">
                    {/* Search Input Box */}
                    <div className="p-3 bg-slate-50/80 border-b border-slate-100 flex items-center gap-2">
                      <Search className="w-4 h-4 text-slate-400 shrink-0" />
                      <input
                        type="text"
                        autoFocus
                        placeholder="Search college by name, area, or code (e.g. CBIT, OU, JNTU, VNR)..."
                        value={collegeSearchQuery}
                        onChange={(e) => setCollegeSearchQuery(e.target.value)}
                        className="w-full bg-transparent text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none"
                      />
                      {collegeSearchQuery && (
                        <button
                          type="button"
                          onClick={() => setCollegeSearchQuery("")}
                          className="p-1 text-slate-400 hover:text-slate-600 rounded-full"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>

                    {/* Scrollable Colleges List (height up to 60vh) */}
                    <div className="max-h-[60vh] overflow-y-auto divide-y divide-slate-50 custom-college-scrollbar">
                      {filteredColleges.length > 0 ? (
                        filteredColleges.map((college, idx) => {
                          const isSelected =
                            formData.collegeName === college ||
                            (college.startsWith("Other College") && isManualCollege);
                          const isOtherOption = college.startsWith("Other College");

                          return (
                            <div
                              key={idx}
                              onClick={() => handleSelectCollege(college)}
                              className={`px-4 py-3 flex items-center justify-between text-xs sm:text-sm transition-all cursor-pointer select-none ${
                                isSelected
                                  ? "bg-orange-50 text-orange-700 font-bold"
                                  : isOtherOption
                                  ? "bg-amber-50/40 text-amber-900 font-semibold hover:bg-amber-100/60"
                                  : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                              }`}
                            >
                              <div className="flex items-center gap-2.5 min-w-0 pr-3">
                                {isOtherOption ? (
                                  <PlusCircle className="w-4 h-4 text-orange-500 shrink-0" />
                                ) : (
                                  <Building2
                                    className={`w-3.5 h-3.5 shrink-0 ${
                                      isSelected ? "text-orange-600" : "text-slate-400"
                                    }`}
                                  />
                                )}
                                <span className="truncate leading-snug">{college}</span>
                              </div>

                              {isSelected && (
                                <Check className="w-4 h-4 text-orange-600 shrink-0" />
                              )}
                            </div>
                          );
                        })
                      ) : (
                        <div className="p-6 text-center text-xs text-slate-500 space-y-2">
                          <div>No matching colleges found for &ldquo;{collegeSearchQuery}&rdquo;</div>
                          <button
                            type="button"
                            onClick={() => {
                              setIsManualCollege(true);
                              setManualCollegeText(collegeSearchQuery);
                              setFormData((prev) => ({ ...prev, collegeName: collegeSearchQuery }));
                              setIsDropdownOpen(false);
                            }}
                            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-orange-600 text-white font-bold text-xs shadow-xs hover:bg-orange-500 cursor-pointer"
                          >
                            <PlusCircle className="w-3.5 h-3.5" />
                            Use &ldquo;{collegeSearchQuery}&rdquo; as my College
                          </button>
                        </div>
                      )}
                    </div>

                    {/* Bottom Helper Bar */}
                    <div className="p-2.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 px-4">
                      <span>Can&apos;t find your college? Select &ldquo;Other College&rdquo;</span>
                      <button
                        type="button"
                        onClick={() => handleSelectCollege("Other College / Institute (Enter Manually)")}
                        className="font-bold text-orange-600 hover:underline cursor-pointer"
                      >
                        Enter Manually
                      </button>
                    </div>
                  </div>
                )}

                {/* If manual entry is active, show the input field */}
                {isManualCollege && (
                  <div className="mt-2.5">
                    <input
                      type="text"
                      placeholder="Type your full College / University / Institute name..."
                      value={manualCollegeText}
                      onChange={handleManualCollegeChange}
                      className="w-full px-4 py-2.5 rounded-xl bg-orange-50/40 border border-orange-200 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"
                    />
                  </div>
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
                  <Send className="w-4 h-4" /> Submit Inquiry & Book Call
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
              <PhoneCall className="w-4 h-4 text-blue-600" /> Free Academic Counseling Call
            </span>
          </div>
        </form>
      )}
    </div>
  );
}
