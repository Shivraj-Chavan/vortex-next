"use client";

import { ArrowRight, Sparkles, Code2, Rocket, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="relative text-black bg-white overflow-hidden">

      {/* GLOW EFFECTS */}
      <div className="pointer-events-none absolute -top-32 right-1/4 w-[500px] sm:w-[600px] h-[500px] sm:h-[600px]
        bg-gradient-to-br from-indigo-200 via-blue-200 to-purple-200
        rounded-full blur-[120px]" />

      <div className="pointer-events-none absolute bottom-[-200px] left-1/4 w-[500px] sm:w-[600px] h-[500px] sm:h-[600px]
        bg-gradient-to-br from-blue-100 to-indigo-200
        rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-14">

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">

          {/* LEFT CONTENT */}
          <div className="space-y-6">

            {/* badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mt-8
              bg-white border border-gray-200 shadow-sm">
              <Sparkles className="w-4 h-4 text-indigo-500 animate-pulse" />
              <span className="text-sm font-semibold text-indigo-600">
                #1 Modern Web Solutions
              </span>
            </div>

            {/* heading */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
              <span className="block">Mastering the Art</span>
              <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                of Digital Solutions
              </span>
            </h1>

            {/* paragraph */}
            <p className="text-gray-700 text-base sm:text-lg max-w-xl leading-relaxed">
              We are a team of{" "}
              <span className="font-semibold text-indigo-600">talented designers</span>{" "}
              and{" "}
              <span className="font-semibold text-blue-600">developers</span>{" "}
              creating exceptional digital experiences.
            </p>

            {/* chips */}
            <div className="flex flex-wrap gap-3">
              {[
                { icon: Code2, label: "Modern Tech", color: "text-indigo-600" },
                { icon: Rocket, label: "Fast Delivery", color: "text-blue-600" },
                { icon: Zap, label: "Performance", color: "text-purple-600" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 px-4 py-2 rounded-full
                  bg-white border border-gray-200 shadow-sm"
                >
                  <item.icon className={`w-4 h-4 ${item.color}`} />
                  <span className="text-sm text-gray-700">{item.label}</span>
                </div>
              ))}
            </div>

            {/* buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2
                  px-7 py-3.5 rounded-xl font-bold text-white
                  bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600
                  hover:scale-[1.03] transition"
              >
                Get Started Free
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href="#portfolio"
                className="inline-flex items-center justify-center gap-2
                  px-7 py-3.5 rounded-xl font-bold
                  border border-gray-300 text-gray-800
                  hover:bg-gray-100 transition"
              >
                View Our Work
              </a>
            </div>

            {/* stats */}
            <div className="grid grid-cols-3 gap-6 sm:gap-10 pt-6">
              <Stat value="1500+" label="Projects Done" color="text-indigo-600" />
              <Stat value="15+" label="Years Experience" color="text-purple-600" />
              <Stat value="100%" label="Satisfaction" color="text-blue-600" />
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="absolute w-[280px] sm:w-[380px] lg:w-[420px] h-[280px] sm:h-[380px] lg:h-[420px] bg-indigo-200 rounded-full blur-3xl" />

            <img
              src="/971.jpg"
              alt="Digital workspace"
              className="relative w-[85%] sm:w-full max-w-md rounded-2xl shadow-2xl"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

function Stat({ value, label, color }) {
  return (
    <div>
      <div className={`text-2xl sm:text-3xl font-black ${color}`}>{value}</div>
      <div className="text-xs sm:text-sm text-gray-500">{label}</div>
    </div>
  );
}