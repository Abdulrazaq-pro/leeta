"use client";

import {
  ArrowRight,
  ChevronDown,
  Menu,
  ShoppingCart,
  User,
} from "lucide-react";
import React from "react";

const Hero = () => {
  // Data objects for repeating elements
  const downloadButtons = [
    {
      id: 1,
      icon: "▶",
      text: "Download on Google Play",
      platform: "android",
    },
    {
      id: 2,
      icon: "🍎",
      text: "Download on App Store",
      platform: "ios",
    },
  ];

  const cards = [
    {
      id: 1,
      title: "Become a Supplier",
      description:
        "Are you a gas distributor looking to expand your reach? Partner with us to access thousands of customers.",
      gradient: "from-[#0B1F30]/80 to-[#0B1F30]/90",
      borderColor: "border-[#FD671E]/30",
      hoverShadow: "hover:shadow-[#FD671E]/20",
    },
    {
      id: 2,
      title: "Join Our Drivers",
      description:
        "Deliver safe gas solutions to customers and earn competitive wages with flexible schedules.",
      gradient: "from-[#0B1F30]/80 to-[#0B1F30]/90",
      borderColor: "border-[#FD671E]/30",
      hoverShadow: "hover:shadow-[#FD671E]/20",
    },
    {
      id: 3,
      title: "Safety First",
      description:
        "Learn about our rigorous safety standards and how we ensure secure deliveries every time.",
      gradient: "from-[#0B1F30]/80 to-[#0B1F30]/90",
      borderColor: "border-[#FD671E]/30",
      hoverShadow: "hover:shadow-[#FD671E]/20",
    },
  ];

  const buildings = [
    {
      width: "w-16",
      height: "h-32",
      color: "bg-[#0B1F30]",
      left: "left-4",
      top: "top-12",
    },
    {
      width: "w-12",
      height: "h-24",
      color: "bg-[#0B1F30]/90",
      left: "left-8",
      top: "top-4",
    },
    {
      width: "w-20",
      height: "h-40",
      color: "bg-[#0B1F30]/80",
      left: "left-24",
      top: "top-8",
    },
  ];

  const rightBuildings = [
    {
      width: "w-16",
      height: "h-32",
      color: "bg-[#0B1F30]",
      right: "right-4",
      top: "top-8",
    },
    {
      width: "w-12",
      height: "h-24",
      color: "bg-[#0B1F30]/90",
      right: "right-8",
      top: "top-12",
    },
    {
      width: "w-8",
      height: "h-16",
      color: "bg-[#0B1F30]/80",
      right: "right-12",
      top: "top-4",
    },
  ];

  return (
    <div className="">
      <section
        className="relative overflow-hidden min-h-screen py-4"
        style={{ backgroundColor: "#0B1F30" }}
      >
        {/* Enhanced Background with Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            // src="https://images.unsplash.com/photo-1600891964092-4316c288032e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2081&q=80"
            alt="Gas delivery background"
            src="/images/hero.jpg"
            className="w-full h-full object-cover opacity-60"
          />
          {/* Original gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0B1F30]/50 via-transparent to-[#FD671E]/20"></div>

          {/* Intense vignette effect - dark edges fading to transparent center */}
          <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/70"></div>

          {/* Strong box-shadow vignette */}
          <div
            className="absolute inset-0"
            style={{
              boxShadow: "inset 0 0 300px 80px rgba(0,0,0,0.6)",
            }}
          ></div>

          {/* Upper fade overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-transparent"></div>

          {/* Intense corner darkening */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent via-transparent via-transparent to-black/40"></div>
          <div className="absolute inset-0 bg-gradient-to-bl from-black/40 via-transparent via-transparent via-transparent to-black/40"></div>

          {/* Additional edge darkening for more intensity */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.4) 70%)",
            }}
          ></div>
        </div>

        {/* Animated Geometric Illustrations */}

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 pt-24">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-8xl font-black mb-8 leading-tight text-white">
              Need gas{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FD671E] to-[#FF8B47]">
                delivered?
              </span>
            </h1>

            {/* Enhanced Download buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              {downloadButtons.map((button) => (
                <button
                  key={button.id}
                  className="group relative text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center transition-all duration-300 shadow-lg transform hover:-translate-y-1 hover:shadow-2xl"
                  style={{
                    background: `linear-gradient(135deg, #FD671E 0%, #FF8B47 100%)`,
                    boxShadow: "0 4px 20px rgba(253, 103, 30, 0.3)",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = `linear-gradient(135deg, #FF8B47 0%, #FD671E 100%)`;
                    e.target.style.boxShadow =
                      "0 8px 30px rgba(253, 103, 30, 0.5)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = `linear-gradient(135deg, #FD671E 0%, #FF8B47 100%)`;
                    e.target.style.boxShadow =
                      "0 4px 20px rgba(253, 103, 30, 0.3)";
                  }}
                >
                  <span className="mr-2 text-lg group-hover:scale-110 transition-transform">
                    {button.icon}
                  </span>
                  {button.text}
                  <div className="absolute inset-0 bg-white rounded-xl opacity-0 group-hover:opacity-10 transition-opacity"></div>
                </button>
              ))}
            </div>
          </div>

          {/* Enhanced Cards Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 md:mt-32">
            {cards.map((card) => (
              <div
                key={card.id}
                className={`bg-gradient-to-br ${card.gradient} backdrop-blur-sm rounded-2xl shadow-xl p-8 hover:shadow-2xl ${card.hoverShadow} transition-all duration-300 border ${card.borderColor} transform hover:-translate-y-2 group`}
              >
                <div className="relative overflow-hidden rounded-xl">
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:scale-105 transition-transform">
                    {card.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed group-hover:text-gray-200 transition-colors">
                    {card.description}
                  </p>
                  <button
                    className="flex items-center font-bold transition-all duration-300 group-hover:translate-x-2"
                    style={{ color: "#FD671E" }}
                  >
                    SEE MORE{" "}
                    <ArrowRight
                      className="ml-2 group-hover:ml-3 transition-all"
                      size={20}
                    />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <ChevronDown size={32} className="opacity-60" />
        </div>
      </section>
    </div>
  );
};

export default Hero;
