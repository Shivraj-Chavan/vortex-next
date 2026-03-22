"use client";

import { ArrowRight, Sparkles, Code2, Rocket, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative  text-white bg-transparent"
    >

      {/* TOP RIGHT GLOW */}
      <div className="pointer-events-none absolute -top-32 right-1/4 w-[600px] h-[600px]
        bg-gradient-to-br from-blue-500/20 via-indigo-500/15 to-purple-500/20
        rounded-full blur-[140px]" />

      {/* BOTTOM LEFT GLOW (pushed down to avoid section band) */}
      <div className="pointer-events-none absolute bottom-[-250px] left-1/4 w-[600px] h-[600px]
        bg-gradient-to-br from-indigo-500/15 to-blue-500/20
        rounded-full blur-[140px]" />

      <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          <div className="space-y-6">

            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full
              bg-white/10 border border-white/15 backdrop-blur-md shadow-lg mt-4">
              <Sparkles className="w-4 h-4 text-indigo-400 animate-pulse" />
              <span className="text-sm font-semibold text-indigo-300">
                #1 Modern Web Solutions
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
              <span className="block">Mastering the Art</span>
              <span className="block bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                of Digital Solutions
              </span>
            </h1>

            <p className="text-base sm:text-lg text-gray-300 max-w-xl">
              We are a team of{" "}
              <span className="font-semibold text-indigo-400">
                talented designers
              </span>{" "}
              and{" "}
              <span className="font-semibold text-blue-400">
                developers
              </span>{" "}
              creating exceptional digital experiences.
            </p>

            <div className="flex flex-wrap gap-3">
              {[
                { icon: Code2, label: "Modern Tech", color: "text-indigo-400" },
                { icon: Rocket, label: "Fast Delivery", color: "text-blue-400" },
                { icon: Zap, label: "15+ Years", color: "text-purple-400" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 px-4 py-2 rounded-full
                  bg-white/10 border border-white/15 shadow-md"
                >
                  <item.icon className={`w-4 h-4 ${item.color}`} />
                  <span className="text-sm text-gray-200">{item.label}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2
                  px-8 py-4 rounded-xl font-bold
                  bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600
                  hover:scale-105 transition-transform shadow-xl"
              >
                Get Started Free
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href="#portfolio"
                className="inline-flex items-center justify-center gap-2
                  px-8 py-4 rounded-xl font-bold
                  border-2 border-indigo-400 text-indigo-300
                  bg-white/5 hover:bg-white/10 transition"
              >
                View Our Work
              </a>
            </div>

            <div className="grid grid-cols-3 gap-10 pt-6">
              <Stat value="1500+" label="Projects Done" color="text-indigo-400" />
              <Stat value="15+" label="Years Experience" color="text-purple-400" />
              <Stat value="100%" label="Satisfaction" color="text-blue-400" />
            </div>

          </div>

          <div className="relative hidden lg:flex justify-center items-center">
            <div className="absolute w-[420px] h-[420px] bg-indigo-600/30 rounded-full blur-3xl" />
            <img
              src="/971.jpg"
              alt="Digital workspace"
              className="relative w-full max-w-md object-contain drop-shadow-2xl rounded-2xl"
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
      <div className={`text-3xl font-black ${color}`}>{value}</div>
      <div className="text-xs text-gray-400">{label}</div>
    </div>
  );
}