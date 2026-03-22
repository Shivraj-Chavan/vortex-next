"use client";

import React, { useEffect, useState } from "react";
import { Smartphone, Zap, Users, Bell, Cloud, Code, ArrowRight, Sparkles, CheckCircle } from "lucide-react";

export default function MobileAppPage() {
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

  const appTypes = [
    {
      icon: <Smartphone className="w-10 h-10 text-blue-500" />,
      title: "Native Apps",
      description: "High-performance iOS & Android apps built for a truly native experience.",
      tech: "Swift, Kotlin, Xcode",
    },
    {
      icon: <Code className="w-10 h-10 text-purple-500" />,
      title: "Cross-Platform",
      description: "Single codebase apps using modern frameworks for faster time-to-market.",
      tech: "React Native, Flutter",
    },
    {
      icon: <Cloud className="w-10 h-10 text-green-500" />,
      title: "Progressive Web Apps",
      description: "Installable web apps with near-native capabilities across devices.",
      tech: "PWA, React, Vue",
    },
  ];

  const features = [
    {
      icon: <Users className="w-10 h-10 text-blue-500" />,
      title: "User Authentication",
      description: "Secure login, social sign-in, OTP, biometric auth and password recovery.",
    },
    {
      icon: <Bell className="w-10 h-10 text-yellow-500" />,
      title: "Push Notifications",
      description: "Engage users with personalized, segmented notifications and automation.",
    },
    {
      icon: <Zap className="w-10 h-10 text-purple-500" />,
      title: "Real-time Updates",
      description: "Live sync, real-time chat, tracking, and instant updates across devices.",
    },
    {
      icon: <Cloud className="w-10 h-10 text-green-500" />,
      title: "Cloud Integration",
      description: "Scalable backend with Firebase, AWS or custom APIs for growth-ready apps.",
    },
    {
      icon: <Smartphone className="w-10 h-10 text-pink-500" />,
      title: "Offline Mode",
      description: "Offline-first UX with local caching and seamless sync when online.",
    },
    {
      icon: <Code className="w-10 h-10 text-indigo-500" />,
      title: "Third-party APIs",
      description: "Payments, maps, analytics, chat, CRM and other integrations done right.",
    },
  ];

  const industries = [
    "E-Commerce & Retail",
    "Healthcare & Fitness",
    "Food & Delivery",
    "Finance & Banking",
    "Education & E-Learning",
    "Travel & Hospitality",
    "Social Networking",
    "Entertainment & Media",
    "Real Estate",
    "Transportation",
    "On-Demand Services",
    "Gaming",
  ];

  const process = [
    { step: "01", title: "Discovery", desc: "Scope & requirements" },
    { step: "02", title: "Design", desc: "UI/UX & prototype" },
    { step: "03", title: "Develop", desc: "Build features" },
    { step: "04", title: "Test", desc: "QA & polishing" },
    { step: "05", title: "Deploy", desc: "Launch to stores" },
    { step: "06", title: "Support", desc: "Updates & scale" },
  ];

  const techStack = ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "Node.js", "AWS", "MongoDB", "PostgreSQL", "Redux"];

  const stats = [
    { value: "200+", label: "Apps Developed" },
    { value: "10M+", label: "Total Downloads" },
    { value: "4.8/5", label: "Average Rating" },
    { value: "50+", label: "Enterprise Clients" },
  ];

  return (
    <div
      className="min-h-screen transition-colors duration-300 pt-[88px] relative overflow-hidden
      bg-gray-50 dark:bg-[#0b0f1a]
      bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)]
      dark:bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)]
      bg-[size:24px_24px]"
    >
      
      <div className="pointer-events-none absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-purple-500/10 dark:from-blue-500/18 dark:to-purple-500/18 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 left-1/4 w-96 h-96 bg-gradient-to-br from-indigo-500/10 to-blue-500/10 dark:from-indigo-500/16 dark:to-blue-500/16 rounded-full blur-3xl" />

   
      <section className="relative pt-12 sm:pt-16 pb-16 sm:pb-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 dark:bg-white/5 backdrop-blur border border-blue-200/70 dark:border-white/10 shadow-sm">
                <Smartphone className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span className="text-sm font-semibold text-blue-700 dark:text-blue-200">Mobile App Development</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white">
                Native & Cross-Platform
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
                  Mobile App
                </span>
                <br />
                Development
              </h1>

              <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-xl">
                Build powerful iOS and Android apps that engage users and drive growth. From concept to launch, we craft mobile experiences that matter.
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
                  View Portfolio
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-6 pt-2">
                {[
                  { title: "Fast Delivery", sub: "Agile sprints", cls: "text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/30" },
                  { title: "Clean UI/UX", sub: "Modern design", cls: "text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30" },
                  { title: "Scalable Backend", sub: "Cloud ready", cls: "text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900/30" },
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
                  src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=80"
                  alt="Mobile App Development"
                  className="w-full h-[280px] sm:h-[360px] lg:h-[420px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <section className="py-16 sm:py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-5">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50/80 dark:bg-white/5 border border-blue-200/60 dark:border-white/10 shadow-sm mb-4">
              <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span className="text-sm font-semibold text-blue-700 dark:text-blue-200">What we build</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3">Types of Apps We Build</h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Choose the right approach — native performance, cross-platform speed, or PWA flexibility.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {appTypes.map((t, i) => (
              <div
                key={i}
                className="bg-white/70 dark:bg-white/5 backdrop-blur p-7 sm:p-8 rounded-2xl border border-gray-200/70 dark:border-white/10
                hover:shadow-lg hover:scale-[1.01] transition-all"
              >
                <div className="mb-4">{t.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{t.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">{t.description}</p>
                <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">{t.tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

    
      <section className="py-16 sm:py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-1">Comprehensive App Features</h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Everything your app needs — security, performance, integrations, and a smooth user experience.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((f, i) => (
              <div
                key={i}
                className="bg-white/70 dark:bg-white/5 backdrop-blur p-7 sm:p-8 rounded-2xl border border-gray-200/70 dark:border-white/10
                hover:shadow-lg transition-all"
              >
                <div className="mb-4">{f.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{f.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="py-16 sm:py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3">Industries We Serve</h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We build custom mobile solutions tailored to your industry workflows and customers.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {industries.map((industry, i) => (
              <div
                key={i}
                className="bg-white/70 dark:bg-white/5 backdrop-blur p-5 sm:p-6 rounded-xl text-center font-semibold
                border border-gray-200/70 dark:border-white/10 hover:shadow-md hover:scale-[1.01] transition-all"
              >
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

     
      <section className="py-16 sm:py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3">Our Development Process</h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A clear, reliable flow — so you always know what’s happening and what comes next.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-5 sm:gap-6">
            {process.map((p, i) => (
              <div
                key={i}
                className="bg-white/70 dark:bg-white/5 backdrop-blur rounded-2xl border border-gray-200/70 dark:border-white/10
                p-5 text-center hover:shadow-md transition-all"
              >
                <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-1">
                  {p.step}
                </div>
                <div className="text-base font-bold text-gray-900 dark:text-white">{p.title}</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">{p.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      <section className="py-16 sm:py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="mt-6 text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3">Technologies We Use</h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Modern stack that ships fast, scales well, and stays maintainable.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 sm:gap-6 max-w-5xl mx-auto">
            {techStack.map((t, i) => (
              <div
                key={i}
                className="bg-white/70 dark:bg-white/5 backdrop-blur rounded-xl border border-gray-200/70 dark:border-white/10
                p-5 text-center font-semibold hover:shadow-md transition-all"
              >
                {t}
              </div>
            ))}
          </div>
        </div>
      </section>

     
      <section className="pt-16 pb-28 sm:pt-20 sm:pb-32">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="mt-6 text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3">App Development Stats</h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">Proof of execution — from MVPs to enterprise apps.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((s, i) => (
              <div
                key={i}
                className="bg-white/70 dark:bg-white/5 backdrop-blur p-7 sm:p-8 rounded-2xl text-center
                border border-gray-200/70 dark:border-white/10 hover:shadow-lg transition-all"
              >
                <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-2">
                  {s.value}
                </div>
                <p className="text-gray-600 dark:text-gray-300">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    
      <section className="pt-12 pb-16 sm:pt-14 sm:pb-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <div className="relative z-10 rounded-3xl bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 sm:px-10 pt-14 pb-12 sm:pt-16 sm:pb-14 text-center shadow-xl">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Build Your Mobile App?</h2>
            <p className="text-base sm:text-lg mb-7 text-blue-100 max-w-2xl mx-auto">
              Let’s bring your app idea to life with clean UI, solid performance and scalable architecture.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold bg-white text-blue-700 hover:bg-gray-100 shadow-lg hover:scale-[1.02] transition-all"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="/#portfolio"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold border-2 border-white text-white hover:bg-white/10 transition-all"
              >
                View Portfolio
              </a>
            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-6 text-blue-100">
              {["Transparent Milestones", "Source Code Ownership", "Post-Launch Support", "Store Deployment"].map((t, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  <span className="text-sm">{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
