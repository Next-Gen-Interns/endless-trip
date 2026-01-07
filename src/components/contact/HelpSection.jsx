"use client";
import { FaHeadset, FaCalendarCheck, FaQuestionCircle } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HelpSection() {
  // Smooth scroll handler
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-gray-100 py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-4 sm:mb-8"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            How Can We Help You?
          </h1>
          <div className="w-24 h-1 bg-purple-600 mx-auto"></div>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

          {/* Customer Support */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            className="help-card bg-white rounded-lg shadow-md p-6 text-center"
          >
            <div className="icon-wrap text-[#421C58] text-[50px] mb-4">
              <FaHeadset />
            </div>
            <h2 className="title text-xl font-semibold mb-2">
              Customer Support
            </h2>
            <p className="desc text-gray-600 mb-4">
              Our dedicated support team is available to assist you with any
              questions or concerns about your travel plans.
            </p>
            <a
              href="tel:+919999999999"
              className="group inline-block text-[#FD8513] font-semibold hover:text-blue-600 transition-colors duration-300"
            >
              Call Now
              <div className="w-24 h-1 bg-[#FD8513] mt-1 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
            </a>
          </motion.div>

          {/* Appointment */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="help-card bg-white rounded-lg shadow-md p-6 text-center"
          >
            <div className="icon-wrap text-[#421C58] text-[50px] mb-4">
              <FaCalendarCheck />
            </div>
            <h2 className="title text-xl font-semibold mb-2">
              Book an Appointment
            </h2>
            <p className="desc text-gray-600 mb-4">
              Schedule a personalized consultation with our travel experts to
              plan your perfect holiday experience.
            </p>
            <Link
              href="#ContactForm"
              className="group inline-block text-[#FD8513] font-semibold hover:text-blue-600 transition-colors duration-300"
            >
              Book Now
              <div className="w-24 h-1 bg-[#FD8513] mt-1 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
            </Link>
          </motion.div>

          {/* FAQ */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="help-card bg-white rounded-lg shadow-md p-6 text-center"
          >
            <div className="icon-wrap text-[#421C58] text-[50px] mb-4">
              <FaQuestionCircle />
            </div>
            <h2 className="title text-xl font-semibold mb-2">
              Frequently Asked Questions
            </h2>
            <p className="desc text-gray-600 mb-4">
              Find answers to common questions about bookings, payments, travel
              documents, and more in our comprehensive FAQ.
            </p>

            <button
              onClick={() => {
                const faqSection = document.getElementById("FAQPage");
                faqSection?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group inline-block text-[#FD8513] font-semibold hover:text-blue-600 transition-colors duration-300"
            >
              <Link href="/faq#FAQPage" scroll={false}>
                View FAQs
                <div className="w-24 h-1 bg-[#FD8513] mt-1 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              </Link>
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
