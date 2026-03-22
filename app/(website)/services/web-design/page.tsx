"use client";

import { useEffect, useState } from "react";
import {
  Palette,
  Figma,
  Layout,
  Smartphone,
  Eye,
  Layers,
  CheckCircle,
  Sparkles,
  ArrowRight,
  Paintbrush,
} from "lucide-react";

export default function WebDesignPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const theme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = theme === "dark" || (!theme && prefersDark);

    if (isDark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");

    const handleThemeChange = (e: CustomEvent) => {
      if (e.detail === "dark") document.documentElement.classList.add("dark");
      else document.documentElement.classList.remove("dark");
    };

    window.addEventListener("themechange" as any, handleThemeChange);
    return () => window.removeEventListener("themechange" as any, handleThemeChange);
  }, []);

  if (!mounted) return null;

  const features = [
    {
      icon: <Layout className="w-10 h-10 text-blue-500" />,
      title: "Custom UI Design",
      description: "Unique, pixel-perfect interfaces tailored to your brand identity and business goals.",
    },
    {
      icon: <Paintbrush className="w-10 h-10 text-purple-500" />,
      title: "UX Research",
      description: "User-centered design with research, personas, and user journey mapping.",
    },
    {
      icon: <Smartphone className="w-10 h-10 text-green-500" />,
      title: "Responsive Design",
      description: "Beautiful experiences across desktop, tablet, and mobile devices.",
    },
    {
      icon: <Figma className="w-10 h-10 text-pink-500" />,
      title: "Prototyping",
      description: "Interactive prototypes in Figma and Adobe XD for testing before development.",
    },
    {
      icon: <Eye className="w-10 h-10 text-indigo-500" />,
      title: "Visual Design",
      description: "Modern color schemes, typography, and visuals that feel premium.",
    },
    {
      icon: <Layers className="w-10 h-10 text-yellow-500" />,
      title: "Design Systems",
      description: "Scalable design systems with reusable components and style guides.",
    },
  ];

  const process = [
    { step: "1", title: "Discovery", desc: "Understanding goals and target audience" },
    { step: "2", title: "Research", desc: "Market analysis and competitor research" },
    { step: "3", title: "Wireframing", desc: "Creating low-fidelity layouts" },
    { step: "4", title: "Design", desc: "High-fidelity mockups and visuals" },
    { step: "5", title: "Prototype", desc: "Interactive prototypes for testing" },
    { step: "6", title: "Handoff", desc: "Design specifications for developers" },
  ];

  const services = [
    "Website Design",
    "Mobile App UI/UX",
    "Dashboard & Admin Panels",
    "E-Commerce Design",
    "Landing Pages",
    "Brand Identity",
    "Icon Design",
    "Illustration",
    "Design Systems",
    "User Research",
    "Wireframing",
    "Prototyping",
  ];

  const tools = [
    { name: "Figma", icon: "🎨" },
    { name: "Adobe XD", icon: "📐" },
    { name: "Sketch", icon: "💎" },
    { name: "Photoshop", icon: "🖼️" },
    { name: "Illustrator", icon: "✏️" },
    { name: "After Effects", icon: "🎬" },
  ];

  return (
    <div
      className="min-h-screen transition-colors duration-300 pt-[88px] relative overflow-hidden
      bg-gray-50 dark:bg-[#0b0f1a]
      bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)]
      dark:bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)]
      bg-[size:24px_24px]"
    >
      
      <div className="pointer-events-none absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 right-1/4 w-96 h-96 bg-gradient-to-br from-pink-500/10 to-blue-500/10 dark:from-pink-500/15 dark:to-blue-500/15 rounded-full blur-3xl" />

      
      <section className="relative pt-12 sm:pt-16 pb-14 sm:pb-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 dark:bg-white/5 backdrop-blur border border-blue-200/60 dark:border-white/10 shadow-sm">
                <Palette className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span className="text-sm font-semibold text-blue-700 dark:text-blue-200">UI/UX Design</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white">
                Beautiful
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                  UI/UX Design
                </span>
                <br />
                Services
              </h1>

              <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-xl">
                Create exceptional user experiences with intuitive interfaces that delight users and drive business growth.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a
                  href="/#contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold
                  bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700
                  shadow-lg hover:scale-[1.02] transition-all"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </a>

                <a
                  href="/#portfolio"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold
                  border-2 border-blue-600/70 dark:border-blue-400/70 text-blue-700 dark:text-blue-300
                  hover:bg-blue-50/60 dark:hover:bg-white/5 transition-all"
                >
                  View Designs
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-6 pt-2">
                {[
                  { title: "Modern UI", sub: "Pixel-perfect", cls: "text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30" },
                  { title: "UX Focused", sub: "Research-driven", cls: "text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900/30" },
                  { title: "Responsive", sub: "All devices", cls: "text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/30" },
                ].map((b, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${b.cls}`}>
                      <CheckCircle className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-gray-900 dark:text-white">{b.title}</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">{b.sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur-3xl opacity-20" />
              <div className="relative overflow-hidden rounded-3xl shadow-2xl border border-white/10 bg-white/10 dark:bg-white/5 backdrop-blur">
                <img
                  src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=80"
                  alt="UI/UX Design"
                  className="w-full h-[280px] sm:h-[360px] lg:h-[420px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

   
      <section className="py-16 sm:py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-5">
          <div className="text-center mb-12 sm:mb-16 mt-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50/80 dark:bg-white/5 border border-blue-200/60 dark:border-white/10 shadow-sm mb-4">
              <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span className="text-sm font-semibold text-blue-700 dark:text-blue-200">Our Services</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3">Complete Design Solutions</h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">From concept to final design</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((f, i) => (
              <div
                key={i}
                className="bg-white/70 dark:bg-white/5 backdrop-blur p-7 sm:p-8 rounded-2xl
                border border-gray-200/70 dark:border-white/10 hover:shadow-lg hover:scale-[1.01] transition-all"
              >
                <div className="mb-4">{f.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{f.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="py-16 sm:py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="mt-6 text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3">What We Design</h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">Comprehensive design services</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {services.map((s, i) => (
              <div
                key={i}
                className="bg-white/70 dark:bg-white/5 backdrop-blur p-6 rounded-xl border
                border-gray-200/70 dark:border-white/10 hover:border-blue-500/60 dark:hover:border-blue-400/60
                hover:shadow-md transition-all text-center"
              >
                <CheckCircle className="w-6 h-6 text-blue-600 dark:text-blue-400 mx-auto mb-3" />
                <span className="font-semibold text-gray-900 dark:text-white text-sm">{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

    
      <section className="py-16 sm:py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 mt-16">
            <h2 className="mt-6 text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3">Our Design Process</h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">From research to final design</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {process.map((p, i) => (
              <div
                key={i}
                className="relative bg-white/70 dark:bg-white/5 backdrop-blur p-7 sm:p-8 rounded-2xl
                border border-gray-200/70 dark:border-white/10 hover:shadow-lg transition-all"
              >
                {/* <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  {p.step}
                </div> */}

<div
  className="
    absolute 
    -top-3 -left-3 
    sm:-top-4 sm:-left-4 
    md:-top-5 md:-left-5

    w-9 h-9 
    sm:w-10 sm:h-10 
    md:w-12 md:h-12

    text-sm 
    sm:text-base 
    md:text-xl

    bg-gradient-to-r from-blue-600 to-purple-600 
    rounded-lg md:rounded-xl 
    flex items-center justify-center 
    text-white font-bold 
    shadow-md md:shadow-lg
  "
>
  {p.step}
</div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2 mt-4">{p.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    
      <section className="py-16 sm:py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 mt-10">
            <h2 className="mt-6 not-only:text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3">Design Tools We Use</h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">Industry-leading design software</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
            {tools.map((t, i) => (
              <div
                key={i}
                className="bg-white/70 dark:bg-white/5 backdrop-blur p-7 sm:p-8 rounded-2xl border
                border-gray-200/70 dark:border-white/10 hover:border-blue-500/60 dark:hover:border-blue-400/60
                hover:shadow-lg transition-all text-center group"
              >
                <div className="text-4xl sm:text-5xl mb-4 group-hover:scale-110 transition-transform">{t.icon}</div>
                <h3 className="font-bold text-gray-900 dark:text-white text-sm sm:text-base">{t.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pt-10 pb-16 sm:pt-12 sm:pb-20 ">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl mt-10 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 sm:px-10 py-12 sm:py-14 text-center shadow-xl">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Create Amazing Designs?</h2>
            <p className="text-base sm:text-lg mb-7 text-blue-100 max-w-2xl mx-auto">
              Let’s design an experience that your users will love.
            </p>
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold bg-white text-blue-700 hover:bg-gray-100 shadow-lg hover:scale-[1.02] transition-all"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
