import { Phone, Download, Star, ArrowRight, Sparkles } from "lucide-react";
import React from "react";

const CTA = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FD671E]/5 via-white to-[#0B1F30]/5"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-[#FD671E]/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#0B1F30]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header with floating badge */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-[#FD671E]/10 border border-[#FD671E]/20 rounded-full px-6 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-[#FD671E] mr-2" />
              <span className="text-[#FD671E] font-semibold text-sm">
                Available Now
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0B1F30] mb-4">
              Your gas,{" "}
              <span className="text-[#FD671E] relative">
                delivered safely
                <div className="absolute -bottom-2 left-0 right-0 h-3 bg-[#FD671E]/20 -skew-x-12"></div>
              </span>
            </h2>
            <p className="text-xl text-[#0B1F30]/70 max-w-2xl mx-auto">
              Join thousands who trust Leeta for reliable gas delivery service
            </p>
          </div>

          {/* Main content - asymmetrical layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Left content */}
            <div className="lg:col-span-1 space-y-8">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-[#0B1F30]/10 shadow-xl">
                <h3 className="text-2xl font-bold text-[#0B1F30] mb-4">
                  Download the app
                </h3>
                <p className="text-[#0B1F30]/70 mb-6">
                  Running low on gas? Too busy to refill? Have an event coming
                  up? Download Leeta, and we'll deliver quality gas cylinders to
                  your doorstep with safety and speed.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#FD671E]">
                      50K+
                    </div>
                    <div className="text-sm text-[#0B1F30]/60">
                      Safe Deliveries
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-2xl font-bold text-[#FD671E] ml-1">
                        4.8
                      </span>
                    </div>
                    <div className="text-sm text-[#0B1F30]/60">
                      Customer Rating
                    </div>
                  </div>
                </div>

                {/* Download buttons */}
                <div className="space-y-3">
                  <button className="w-full bg-[#FD671E] hover:bg-[#e65a12] text-white px-6 py-4 rounded-xl font-bold flex items-center justify-center transition-all hover:scale-105 hover:shadow-lg group">
                    <Download
                      className="mr-3 group-hover:animate-bounce"
                      size={20}
                    />
                    Download for iOS
                    <ArrowRight
                      className="ml-2 group-hover:translate-x-1 transition-transform"
                      size={16}
                    />
                  </button>
                  <button className="w-full border-2 border-[#0B1F30] text-[#0B1F30] hover:bg-[#0B1F30] hover:text-white px-6 py-4 rounded-xl font-bold flex items-center justify-center transition-all hover:scale-105 hover:shadow-lg group">
                    <Download
                      className="mr-3 group-hover:animate-bounce"
                      size={20}
                    />
                    Download for Android
                    <ArrowRight
                      className="ml-2 group-hover:translate-x-1 transition-transform"
                      size={16}
                    />
                  </button>
                </div>
              </div>
            </div>

            {/* Right content - Real app experience */}
            <div className="lg:col-span-2 relative">
              <div className="relative">
                {/* Main hero image */}
                <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                  <img
                    src="/images/man.png"
                    alt="Happy customer using Leeta app"
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F30]/20 to-transparent"></div>
                </div>

                {/* Floating notification - Order Accepted */}
                <div className="absolute top-4 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg animate-pulse">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-[#0B1F30] rounded-full flex items-center justify-center">
                      <span className="text-[#FD671E] font-bold text-lg">
                        L
                      </span>
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0B1F30] text-sm">
                        Order Confirmed
                      </h4>
                      <p className="text-xs text-gray-600">
                        Your gas delivery is being processed
                      </p>
                    </div>
                  </div>
                </div>

                {/* Floating notification - Order Completed */}
                <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg animate-bounce">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-[#0B1F30] rounded-full flex items-center justify-center">
                      <span className="text-[#FD671E] font-bold text-lg">
                        L
                      </span>
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0B1F30] text-sm">
                        Delivery Completed
                      </h4>
                      <p className="text-xs text-gray-600">
                        Gas cylinder delivered safely
                      </p>
                    </div>
                  </div>
                </div>

                {/* Floating delivery indicator */}
                <div className="absolute top-1/2 left-8 transform -translate-y-1/2 bg-[#FD671E] text-white rounded-full p-3 shadow-lg animate-pulse">
                  <div className="flex items-center space-x-2">
                    <span className="text-lg">🚚</span>
                    <span className="text-xs font-semibold">25 min</span>
                  </div>
                </div>

                {/* Floating rating */}
                <div className="absolute top-1/3 right-8 bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-bold text-[#0B1F30]">
                      4.8
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CTA;
