import { Suspense } from "react";
import EnrollClient from "./EnrollClient";

export const metadata = {
  title: "Enroll in Foundation Coaching Program - Career Mitra × Score 99",
  description: "Reserve your seat for Foundation Online, Offline, or Plus Offline batches. Instant admission inquiry and academic counseling.",
};

export default function EnrollPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading enrollment form...</div>}>
      <EnrollClient />
    </Suspense>
  );
}
