"use client"

import { ChevronRight } from "lucide-react";
import React, { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      question: "What is Leeta Gas Services?",
      answer: "Leeta is a technology company that provides safe and convenient gas delivery services. We connect customers with trusted gas suppliers for reliable doorstep delivery of quality gas cylinders."
    },
    {
      question: "How do I place an order with Leeta?",
      answer: "You can order through our mobile app or website. Simply select your gas type and quantity, choose a delivery time, and make payment. We'll handle the rest!"
    },
    {
      question: "What safety measures does Leeta take?",
      answer: "All our drivers are safety-certified, cylinders are properly inspected, and we use smart technology to ensure safe handling during transportation and delivery."
    },
    {
      question: "What areas does Leeta service?",
      answer: "We currently serve major cities across Nigeria with plans to expand. Check our service areas in the app for specific coverage details."
    },
    {
      question: "How quickly can I get gas delivered?",
      answer: "Most deliveries are completed within 2-4 hours during business hours. Express delivery options are available in some areas."
    },
    {
      question: "What payment methods does Leeta accept?",
      answer: "We accept card payments, bank transfers, and mobile money through our secure payment platform."
    },
    {
      question: "How do I become a Leeta driver?",
      answer: "Visit our careers page to apply. All drivers undergo thorough background checks and safety training before joining our team."
    }
  ];

  return (
    <div>
      <section className="py-16 bg-[#0B1F30] text-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-3xl font-bold mb-6 text-[#FD671E]">FAQs</h3>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-[#FD671E]/20 pb-4">
                  <button 
                    className="flex justify-between items-center w-full text-left"
                    onClick={() => setActiveIndex(index)}
                  >
                    <span className={`font-medium ${activeIndex === index ? 'text-[#FD671E]' : 'text-white'}`}>
                      {faq.question}
                    </span>
                    <ChevronRight className={`transition-transform ${activeIndex === index ? 'rotate-90 text-[#FD671E]' : 'text-gray-400'}`} />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#FD671E] rounded-2xl p-8">
            <h4 className="text-2xl font-bold mb-4 text-[#0B1F30]">Answer</h4>
            <p className="text-[#0B1F30]">
              {faqs[activeIndex].answer}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;