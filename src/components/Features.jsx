import { Check } from "lucide-react";
import React from "react";

const Features = () => {
  return (
    <div>
      <section className="py-16 bg-[#0B1F30]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 text-white">
              Leeta has you covered
            </h3>
            <p className="max-w-2xl mx-auto text-[#FD671E]">
              We provide everything you need for safe and reliable gas delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              "Quick cylinder delivery",
              "Certified gas suppliers",
              "Real-time delivery tracking",
              "24/7 customer support", 
              "Flexible payment options",
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-[#0B1F30] border border-[#FD671E]/20 rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:border-[#FD671E]/40 transition-all duration-300"
              >
                <div className="bg-[#FD671E]/10 text-[#FD671E] w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Check size={24} className="stroke-[2.5]" />
                </div>
                <p className="font-medium text-white">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;