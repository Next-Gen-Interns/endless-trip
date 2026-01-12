"use client";

import { notFound } from "next/navigation";
import Image from "next/image";
import { packagesData } from "@/app/data/data";
import { useState, use } from "react";

export default function PackageDetails({ params }) {
  const { id } = use(params);

  const packageData = packagesData.find((pkg) => pkg.id === Number(id));

  if (!packageData) notFound();

  return (
    <div className="w-full">
      {/* ================= HERO ================= */}
      <div className="relative w-full h-[260px] sm:h-[320px]">
        <Image
          src={packageData.image}
          alt={packageData.title}
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white px-4 text-center">
          <h1 className="text-3xl sm:text-5xl font-bold mb-4">
            {packageData.title}
          </h1>

          <div className="flex gap-6 text-sm sm:text-base">
            <div>
              <i className="fas fa-calendar-alt mr-2"></i>
              {packageData.days} / {packageData.nights}
            </div>
            <div>
              <i className="fas fa-star mr-2"></i>
              Rating: {packageData.rating}
            </div>
          </div>
        </div>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-purple-700 border-b-2 inline-block border-[#fd8513] mb-10">
          Package Overview
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* ================= LEFT ================= */}
          <div className="lg:col-span-2 space-y-10">
            {/* Description */}
            <p className="text-gray-700 leading-relaxed">
              {packageData.description}
            </p>

            {/* ================= ITINERARY ================= */}
            <div>
              <h3 className="flex items-center gap-2 text-lg font-semibold text-purple-700 mb-4">
                📋 Daily Itinerary
              </h3>

              <div className="bg-white rounded-xl border shadow-sm divide-y">
                {packageData.itinerary.map((item, index) => (
                  <details
                    key={item.day}
                    className="group p-5"
                    open={index === 0}
                  >
                    <summary className="flex cursor-pointer items-center justify-between font-semibold text-gray-800">
                      <span>
                        Day {item.day} :{" "}
                        <span className="text-purple-700">{item.title}</span>
                      </span>

                      <span className="transition-transform duration-300 group-open:rotate-180">
                        ⌃
                      </span>
                    </summary>

                    <p className="mt-4 text-gray-700 leading-relaxed">
                      {item.content}
                    </p>
                  </details>
                ))}
              </div>

              {/* ================= INCLUSIONS / EXCLUSIONS ================= */}
              <div className="mt-12 bg-white rounded-xl border shadow-sm divide-y">
                {/* Inclusions */}
                <details className="group p-5" open>
                  <summary className="flex cursor-pointer items-center justify-between font-semibold text-purple-700">
                    <span className="flex items-center gap-2">
                      <span>➕</span> Inclusions
                    </span>
                    <span className="transition-transform group-open:rotate-180">
                      ⌃
                    </span>
                  </summary>

                  <ul className="mt-4 space-y-2 text-gray-700 text-sm">
                    {packageData.inclusions.map((item, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <span className="text-green-600">✔</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </details>

                {/* Exclusions */}
                <details className="group p-5">
                  <summary className="flex cursor-pointer items-center justify-between font-semibold text-gray-800">
                    <span className="flex items-center gap-2">
                      <span>➖</span> Exclusions
                    </span>
                    <span className="transition-transform group-open:rotate-180">
                      ⌃
                    </span>
                  </summary>

                  <ul className="mt-4 space-y-2 text-gray-700 text-sm">
                    {packageData.exclusions.map((item, index) => (
                      <li key={index}>• {item}</li>
                    ))}
                  </ul>
                </details>

                {/* Terms & Conditions */}
                <details className="group p-5">
                  <summary className="flex cursor-pointer items-center justify-between font-semibold text-gray-800">
                    <span className="flex items-center gap-2">
                      <span>📄</span> Terms & Conditions
                    </span>
                    <span className="transition-transform group-open:rotate-180">
                      ⌃
                    </span>
                  </summary>

                  <ul className="mt-4 space-y-2 text-gray-700 text-sm leading-relaxed">
                    {packageData.terms.map((item, index) => (
                      <li key={index}>• {item}</li>
                    ))}
                  </ul>
                </details>
              </div>
            </div>
          </div>

          {/* ================= RIGHT ================= */}
          <div className="w-full max-w-sm mx-auto lg:mx-0 lg:sticky lg:top-24 h-fit">
            <div className="bg-white rounded-xl shadow-lg p-6">
              {/* Price */}
              <div className="text-center border-b pb-4 mb-4">
                <p className="text-sm text-gray-500">Starting From</p>
                <p className="text-3xl font-bold text-purple-700">
                  {packageData.price}
                </p>
                <p className="text-sm text-gray-500">per person</p>
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-center mb-6">
                Send an Inquiry
              </h3>

              {/* Form */}
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-purple-500"
                />

                <input
                  type="email"
                  placeholder="Email"
                  className="w-full border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-purple-500"
                />

                <input
                  type="tel"
                  placeholder="Phone"
                  className="w-full border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-purple-500"
                />

                <textarea
                  rows="3"
                  className="w-full border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-purple-500"
                  defaultValue={`I'm interested in the "${packageData.title}" package. Please send me more details.`}
                />

                <button
                  type="submit"
                  className="w-full bg-purple-700 hover:bg-purple-800 text-white font-semibold py-2 rounded-md transition"
                >
                  Send Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
