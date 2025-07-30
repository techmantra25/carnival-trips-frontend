import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import 'bootstrap/dist/css/bootstrap.min.css';
import "../style/00_bootstrap.min.css";
import "../style/01_style.css";
import "../style/02_responsive.css";
import "../style/04_overright.css";

import Script from "next/script";

import { Toaster } from "react-hot-toast";


export const metadata = {
  title: "Carnival Trips",
  description:
    "Find the refreshing and fun-filled holiday packages with Carnival Trips.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,100..1000&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap"
          rel="stylesheet"
        />
      </head>

      <body>
        <Header />
        {children}
         <Toaster position="top-right" /> {/* ✅ Toast container */}
        <Footer />
        <Script
          src="/assets/js/fontawesome.all.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="/assets/js/bootstrap.bundle.min.js"
          strategy="beforeInteractive"
        />
        <Script src="/assets/js/gsap.min.js" strategy="beforeInteractive" />

        {/* <Script
          src="/assets/js/swiper-bundle.min.js"
          strategy="beforeInteractive"
        /> */}
        {/* <Script src="/assets/js/jquery.min.js" strategy="beforeInteractive" /> */}
        {/* <Script src="/assets/js/custom.js" strategy="beforeInteractive" /> */}
      </body>
    </html>
  );
}
