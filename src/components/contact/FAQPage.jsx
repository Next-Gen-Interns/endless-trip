"use client";

import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqData = [
  {
    title: "Booking & Reservations",
    items: [
      "How do I book a tour package?",
      "Can I customize a package or create my own itinerary?",
      "What is included in the package price?",
    ],
  },
  {
    title: "Payments & Pricing",
    items: [
      "What payment methods do you accept?",
      "Are there any hidden costs?",
    ],
  },
  {
    title: "Travel Documents & Visa",
    items: [
      "Do you provide assistance with visa applications?",
      "Is my passport required to be valid for 6 months beyond my travel date?",
    ],
  },
  {
    title: "Cancellations & Refunds",
    items: [
      "What is your cancellation policy?",
      "How long does it take to process a refund?",
    ],
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState({});

  const toggleItem = (s, i) => {
    setOpenIndex((prev) => ({
      ...prev,
      [`${s}-${i}`]: !prev[`${s}-${i}`],
    }));
  };

  return (
    <section id="FAQPage" className="bg-gray-50 py-16 px-4">
      <div className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-gray-600 text-base sm:text-lg">
            Find answers to common questions about bookings, payments, travel
            documents, and more in our comprehensive FAQ.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">
          Frequently Asked Questions
        </h2>

        {faqData.map((section, sIdx) => (
          <div key={section.title} className="mb-10">
            <h3 className="text-2xl font-semibold mb-4 text-[#421C58] text-center">
              {section.title}
            </h3>

            {section.items.map((item, iIdx) => {
              const open = openIndex[`${sIdx}-${iIdx}`];

              return (
                <div
                  key={item}
                  className="
                    border rounded-lg p-4 mb-3 bg-white
                    transition-all duration-300
                    hover:bg-[#421C58]/10 hover:border-[#421C58]
                  "
                >
                  <button
                    onClick={() => toggleItem(sIdx, iIdx)}
                    className="
                      flex justify-between w-full font-medium
                      text-gray-900 transition-colors
                      hover:text-[#421C58]
                    "
                  >
                    {item}
                    {open ? (
                      <FaChevronUp className="text-[#421C58]" />
                    ) : (
                      <FaChevronDown className="text-gray-500 hover:text-[#421C58]" />
                    )}
                  </button>

                  {open && (
                    <p className="mt-3 text-gray-600">
                      This is the answer for "{item}".
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </section>
  );
}
