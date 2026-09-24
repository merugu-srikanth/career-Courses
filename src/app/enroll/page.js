import { Suspense } from "react";
import EnrollClient from "./EnrollClient";

export const metadata = {
  title: "Course Enquiry - Career Mitra × Score 99",
  description: "Submit an inquiry for Foundation Online, Offline, or Plus Offline batches. Instant academic counseling.",
};

export default function EnrollPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading enrollment form...</div>}>
      <EnrollClient />
    </Suspense>
  );
}
