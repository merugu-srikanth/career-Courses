import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import { Poppins } from "next/font/google";
import { AuthProvider } from "@/context/AuthContext";
import { ToastContainer } from "react-toastify";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  title: "Career Foundation Programme 26-27 - Career Mitra × Score 99",
  description: "One foundation program for SSC, Railways, Banking, TGPSC, APPSC, PSUs and Campus Placements. 75-90 Hours Live Online & Offline batches with 6 Months LMS access and top faculty mentorship.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN" className={`${poppins.variable} ${poppins.className}`}>
      <body className={`${poppins.className} min-h-screen flex flex-col justify-between font-sans antialiased`}>
        <AuthProvider>
          <ToastContainer position="top-right" autoClose={5000} />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
