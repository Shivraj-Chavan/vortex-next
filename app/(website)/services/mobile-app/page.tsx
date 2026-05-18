"use client";

import React, { useEffect, useState } from "react";
import { Smartphone, Zap, Users, Bell, Cloud, Code, ArrowRight, Sparkles, CheckCircle } from "lucide-react";

export default function MobileAppPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const appTypes = [
    {
      icon: <Smartphone className="w-10 h-10 text-blue-600" />,
      title: "Native Apps",
      description: "High-performance iOS & Android apps built for a truly native experience.",
      tech: "Swift, Kotlin, Xcode",
    },
    {
      icon: <Code className="w-10 h-10 text-indigo-600" />,
      title: "Cross-Platform",
      description: "Single codebase apps using modern frameworks for faster time-to-market.",
      tech: "React Native, Flutter",
    },
    {
      icon: <Cloud className="w-10 h-10 text-green-600" />,
      title: "Progressive Web Apps",
      description: "Installable web apps with near-native capabilities across devices.",
      tech: "PWA, React, Vue",
    },
  ];

  const features = [
    { icon: <Users className="w-10 h-10 text-blue-600" />, title: "User Authentication", description: "Secure login, social sign-in, OTP, biometric auth and password recovery." },
    { icon: <Bell className="w-10 h-10 text-yellow-500" />, title: "Push Notifications", description: "Engage users with personalized notifications and automation." },
    { icon: <Zap className="w-10 h-10 text-purple-600" />, title: "Real-time Updates", description: "Live sync, chat, tracking, instant updates." },
    { icon: <Cloud className="w-10 h-10 text-green-600" />, title: "Cloud Integration", description: "Firebase, AWS or custom backend scaling." },
    { icon: <Smartphone className="w-10 h-10 text-pink-500" />, title: "Offline Mode", description: "Offline-first apps with smart sync." },
    { icon: <Code className="w-10 h-10 text-indigo-600" />, title: "API Integrations", description: "Payments, maps, analytics, CRM integrations." },
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
    <div className="min-h-screen pt-[88px] relative overflow-hidden bg-[#F7F9FF] text-slate-900">

      {/* background glow */}
      <div className="pointer-events-none absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-200/40 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 right-1/4 w-[500px] h-[500px] bg-indigo-200/40 rounded-full blur-3xl" />

      {/* HERO */}
      <section className="relative pt-14 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            <div className="space-y-6 mt-15">

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-blue-100 shadow-sm">
                <Smartphone className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-semibold text-blue-700">
                  Mobile App Development
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Native & Cross-Platform
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Mobile App
                </span>
                <br />
                Development
              </h1>

              <p className="text-slate-600 text-lg max-w-xl">
                Build powerful apps that feel fast, look clean, and scale like crazy.
              </p>

              <div className="flex gap-3 flex-col sm:flex-row">
                <a className="px-7 py-3.5 rounded-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg hover:scale-[1.02] transition">
                  Get Started <ArrowRight className="inline w-5 h-5" />
                </a>

                <a className="px-7 py-3.5 rounded-xl font-bold border border-blue-200 text-blue-700 hover:bg-blue-50 transition">
                  View Portfolio
                </a>
              </div>

            </div>

            <div className="rounded-3xl overflow-hidden shadow-2xl border border-white">
              <img
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=80"
                className="w-full h-[300px] sm:h-[380px] lg:h-[450px] object-cover"
                alt="Mobile App"
              />
            </div>

          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 mt-15">

          <h2 className="text-3xl font-bold text-center mb-12">
            App Features
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
                {f.icon}
                <h3 className="font-bold mt-3">{f.title}</h3>
                <p className="text-slate-600 mt-2">{f.description}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* INDUSTRY */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 text-center mt-14">

          <h2 className="text-3xl font-bold mb-10">Industries We Serve</h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {industries.map((i, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm hover:shadow-md transition">
                {i}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 text-center mt-14">

          <h2 className="text-3xl font-bold mb-12">Development Process</h2>

          <div className="grid md:grid-cols-6 gap-4">
            {process.map((p, i) => (
              <div key={i} className="bg-white  rounded-2xl p-5 shadow-sm">
                <div className="text-blue-600 font-bold text-xl">{p.step}</div>
                <div className="font-bold mt-2">{p.title}</div>
                <div className="text-sm text-slate-600">{p.desc}</div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-24 ">
        <div className="max-w-5xl mx-auto px-4 mt-15 mb-15 text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-3xl p-12">

          <h2 className="text-3xl font-bold mb-4">
            Ready to Build Your App?
          </h2>

          <p className="mb-6 text-blue-100">
            Let’s turn your idea into a real product.
          </p>

          <button className="bg-white text-blue-700 px-8 py-3 rounded-xl font-bold hover:scale-[1.02] transition">
            Start Project <ArrowRight className="inline w-5 h-5" />
          </button>

        </div>
      </section>

    </div>
  );
}4