"use client";
import React from "react";
import { motion } from "framer-motion";
// import { packagesData } from "../data/data";
import { packagesData } from "../data/data";
// import { packagesData } from "@/data/data";
import Image from "next/image";
import Link from "next/link";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.5,
      delay: i * 0.2, // stagger effect
      ease: "easeOut",
    },
  }),
};

const page = () => {
  return (
    <>
      <header className="beach-bg text-white px-6 font  py-24 md:py-32  flex items-center">
        <div className="mx-auto max-w-5xl text-center ">
          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="font-bold text-4xl sm:text-5xl md:text-6xl text-shadow heading-font mb-6"
          >
            Explore Our Travel Packages
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
            className="text-base sm:text-lg md:text-2xl text-shadow mb-8 max-w-3xl mx-auto"
          >
            Discover handcrafted holidays to the world's most incredible
            destinations, with over 75 countries to choose from.
          </motion.p>

          {/* Button */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.4, ease: "easeOut" }}
            className="mt-10"
          >
            <button className="text-white hero-box-shadow text-shadow bg-[#e07210] px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg md:text-xl font-bold transition transform hover:scale-105">
              Find Your Dream Trip
            </button>
          </motion.div>
        </div>
      </header>

      <section className="bg-[#f4f7f6]  flex flex-col lg:flex-row gap-6 items-start justify-center px-6 py-12">
        {/* Filters */}
        <div className="w-1/4 relative">
          <div className=" filters w-full sm:max-w-sm bg-white sticky rounded-2xl shadow-lg p-5 sm:p-6 lg:p-7 mx-auto lg:mx-0 ">
            <h2 className="text-xl sm:text-2xl font font-bold text-[#421c58] mb-4 text-center lg:text-left">
              Filter Packages
            </h2>

            <hr className="mb-6 border" />

            {/* Destination */}
            <div className="mb-5">
              <label className="block dropdown-heading text-sm font-semibold mb-2">
                Destination
              </label>
              <select className="w-full dropdown-border rounded-lg px-4 py-3 text-sm text-[#333] focus:outline-none focus:ring-2 focus:ring-purple-500">
                <option>All Destinations</option>

                <optgroup label="By Region">
                  <option>Domestic</option>
                  <option>International</option>
                </optgroup>

                <optgroup label="By Place">
                  <option>America</option>
                  <option>Bali</option>
                  <option>Dubai</option>
                  <option>Egypt</option>
                  <option>Europe</option>
                  <option>Goa</option>
                  <option>Himachal Pradesh</option>
                  <option>Japan</option>
                  <option>Kashmir, India</option>
                  <option>Kerala</option>
                  <option>Ladakh</option>
                  <option>Nepal</option>
                  <option>Singapore</option>
                  <option>Thailand</option>
                  <option>Vietnam</option>
                </optgroup>
              </select>
            </div>

            {/* Package Type */}
            <div className="mb-5">
              <label className="block dropdown-heading text-sm font-semibold mb-2">
                Package Type
              </label>
              <select className="w-full dropdown-border rounded-lg px-4 py-3 text-sm text-[#333] focus:outline-none focus:ring-2 focus:ring-purple-500">
                <option>All Types</option>
                <option>Family</option>
                <option>Honeymoon</option>
                <option>Adventure</option>
                <option>Luxury</option>
                <option>Budget</option>
              </select>
            </div>

            {/* Duration */}
            <div className="mb-6">
              <label className="block dropdown-heading text-sm font-semibold mb-2">
                Duration
              </label>
              <select className="w-full dropdown-border rounded-lg px-4 py-3 text-sm text-[#333] focus:outline-none focus:ring-2 focus:ring-purple-500">
                <option>Any Duration</option>
                <option>1–3 Days</option>
                <option>4–7 Days</option>
                <option>8–14 Days</option>
                <option>15+ Days</option>
              </select>
            </div>

            {/* Price Range */}
            <div className="mb-6">
              <label className="block dropdown-heading text-sm font-semibold mb-3">
                Price Range
              </label>

              <input
                type="range"
                min="10000"
                max="128005"
                className="w-full accent-[#421c58]"
              />

              <div className="flex justify-between text-xs text-gray-500 mt-2">
                <span>₹10,000</span>
                <span>₹128,005</span>
              </div>
            </div>

            {/* Button */}
            <button className="w-full hero-btn text-white py-3 rounded-lg text-sm font-semibold transition hover:opacity-90 filter-btn cursor-pointer">
              Apply Filters
            </button>
          </div>
        </div>

        <div className="packages w-full">
          {/* Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
            <h3 className="text-lg font-semibold text-gray-800">
              Showing <span className="font-bold">50</span> Packages
            </h3>

            <select className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500">
              <option>Sort By: Popular</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>

          {/* Cards Grid */}

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {packagesData.map((pkg) => (
              <Link key={pkg.id} href={`/packages/${pkg.id}`}>
                <motion.div
                  className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer transition"
                  whileHover={{
                    scale: 1.05,
                    y: -10,
                    boxShadow: "0px 15px 30px rgba(0,0,0,0.2)",
                  }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                >
                  {/* Image */}
                  <div className="relative h-52">
                    <Image
                      src={pkg.image}
                      alt={pkg.title}
                      fill
                      className="object-cover"
                    />
                    <span className="absolute top-4 right-4 bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      Featured
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-5 text-center">
                    <h4 className="text-2xl font-bold text-[#2c3e50] mb-3">
                      {pkg.title}
                    </h4>

                    <div className="flex justify-center items-center gap-1 text-yellow-400 text-sm mb-2">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <span className="text-gray-500">(5.0)</span>
                    </div>

                    <div className="text-sm text-gray-500 flex justify-center items-center gap-1 mb-4">
                      <i className="fas fa-map-marker-alt text-[#421c58]"></i>
                      <p className="text-[#6c757d]">{pkg.location}</p>
                    </div>

                    <div className="-mx-6 grid grid-cols-3 text-xs text-gray-600 border-t border-b border-[#e9ecef] py-4 mb-4">
                      <div className="relative text-center flex flex-col items-center gap-1">
                        <i className="fas fa-calendar-alt text-[#e07210] text-2xl"></i>
                        <span className="font-bold text-[#333]">
                          {pkg.days}
                        </span>
                        <span className="absolute right-0 top-0 bottom-0 w-px bg-[#e9ecef]" />
                      </div>
                      <div className="relative text-center flex flex-col items-center gap-1">
                        <i className="fas fa-moon text-[#e07210] text-2xl"></i>
                        <span className="font-bold text-[#333]">
                          {pkg.nights}
                        </span>
                        <span className="absolute right-0 top-0 bottom-0 w-px bg-[#e9ecef]" />
                      </div>
                      <div className="text-center flex flex-col items-center gap-1">
                        <i className="fas fa-users text-[#e07210] text-2xl"></i>
                        <span className="font-bold text-[#333]">
                          {pkg.adults}
                        </span>
                      </div>
                    </div>

                    <div className="mt-10">
                      <p className="text-[#6c757d] text-center mb-1">
                        Starting from
                      </p>
                      <p className="text-4xl font-bold text-[#421c58] mb-4">
                        {pkg.price}
                      </p>
                    </div>

                    <button className="w-full mt-10 border-2 border-[#421c58] text-[#421c58] py-2 rounded-full text-sm font-semibold hover:bg-[#421c58] hover:text-white transition">
                      View Details
                    </button>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
