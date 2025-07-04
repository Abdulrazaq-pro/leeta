// components/ChowdeckLanding.jsx
import React from "react";
import {
  Phone,
  MapPin,
  ArrowRight,
  Check,
  ChevronRight,
  ChevronDown,
} from "lucide-react";
import Header from "./Header";
import CTA from "./CTA";
import Features from "./Features";
import Live from "./Live";
import Blog from "./Blog";
import FAQ from "./FAQ";
import Newsletter from "./Newsletter";
import TopBar from "./TopBar";
import Hero from "./Hero";
import Footer from "./Footer";

const ChowdeckLanding = () => {
  return (
    <div className="font-sans text-gray-900 bg-white relative">
      {/* Top Bar */}
      {/* <TopBar/> */}

      {/* Header - Now with absolute positioning */}
      <div className="absolute top-0 left-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
          <Header />
        </div>
      </div>

      {/* Hero Section - Add pt-[height-of-header] to prevent content from being hidden under header */}
      <div className=""> {/* Adjust this value based on your header's height */}
        <Hero />

        {/* Download App Section */}
        <CTA />

        {/* Features Section */}
        <Features />

        {/* Live Orders Section */}
        <Live />
        
        {/* Blog Section */}
        <Blog />

        {/* FAQ Section */}
        <FAQ />

        {/* Newsletter */}
        <Newsletter />

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default ChowdeckLanding;