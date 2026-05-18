"use client";

import { CheckCircle, Users, Award, Target, TrendingUp } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50 to-indigo-50 text-gray-900"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">

          {/* LEFT SIDE */}
          <div className="space-y-6">

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full 
              bg-white border border-gray-200 shadow-sm">
              <Award className="w-4 h-4 text-indigo-500" />
              <span className="text-sm font-semibold text-indigo-600">
                About Our Company
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
              <span>Professional </span>
              <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                Software Development
              </span>{" "}
              <span>Consulting Services</span>
            </h2>

            <div className="space-y-4 max-w-xl">
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Vortex Web Technologies seamlessly combines specialized services
                in software development, website designing, brand awareness,
                and digital marketing since{" "}
                <span className="font-semibold text-indigo-600">2009</span>.
              </p>

              <p className="text-xs sm:text-sm text-gray-500">
                We are one of the fastest-growing digital service companies
                providing web, mobile, e-commerce, and marketing solutions.
              </p>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
              {[
                "15+ Years Industry Experience",
                "1500+ Projects Delivered",
                "Modern & Scalable Development",
                "Client-Focused Solutions",
                "Expert Designers & Developers",
                "24/7 Technical Support",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-indigo-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 rounded-xl font-bold text-sm
              bg-gradient-to-r from-indigo-600 to-blue-600
              text-white hover:scale-105 transition-transform shadow-md"
            >
              Read More
            </a>
          </div>

          {/* RIGHT SIDE CARD */}
          <div className="relative mt-10 lg:mt-0">
            <div className="relative 
              bg-white 
              border border-gray-200 
              rounded-3xl p-6 sm:p-8 shadow-xl">

              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
                  <Target className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                  Why Choose Us?
                </h3>
              </div>

              <p className="text-sm text-gray-600 mb-6">
                We combine design, technology, and innovation to deliver reliable
                digital solutions that help businesses grow online.
              </p>

              <div className="grid grid-cols-2 gap-4 sm:gap-5 mb-6">
                {[
                  { label: "Projects", value: "1500+", color: "text-indigo-600" },
                  { label: "Satisfaction", value: "100%", color: "text-blue-600" },
                  { label: "Experience", value: "15+", color: "text-purple-600" },
                  { label: "Support", value: "24/7", color: "text-green-600" },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="rounded-xl p-4 text-center 
                    bg-gray-50 border border-gray-200"
                  >
                    <div className={`text-2xl sm:text-3xl font-black ${stat.color}`}>
                      {stat.value}
                    </div>
                    <p className="text-xs text-gray-500">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="space-y-3 pt-4 border-t border-gray-200">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-indigo-500" />
                  <span className="text-sm text-gray-600">
                    Dedicated Expert Team
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-blue-500" />
                  <span className="text-sm text-gray-600">
                    Proven Success Record
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}