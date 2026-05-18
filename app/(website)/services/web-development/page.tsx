"use client";

import { Code, CheckCircle, ArrowRight, Sparkles } from "lucide-react";

export default function WebDevelopmentPage() {
  const features = [
    "Responsive & Mobile-First Design",
    "Fast Loading Speed Optimization",
    "SEO-Friendly Architecture",
    "Secure & Scalable Solutions",
    "Modern Tech Stack (React, Next.js)",
    "Cross-Browser Compatibility",
    "Clean & Maintainable Code",
    "Ongoing Support & Maintenance",
  ];

  const technologies = [
    { name: "React.js", icon: "⚛️" },
    { name: "Next.js", icon: "▲" },
    { name: "Node.js", icon: "🟢" },
    { name: "TypeScript", icon: "🔷" },
    { name: "Tailwind CSS", icon: "🎨" },
    { name: "MongoDB", icon: "🍃" },
  ];

  const process = [
    { step: "1", title: "Discovery", desc: "Understanding your requirements and goals" },
    { step: "2", title: "Design", desc: "Creating wireframes and UI/UX mockups" },
    { step: "3", title: "Development", desc: "Building with modern technologies" },
    { step: "4", title: "Testing", desc: "Ensuring quality and performance" },
    { step: "5", title: "Launch", desc: "Deploying and going live" },
    { step: "6", title: "Support", desc: "Ongoing maintenance and updates" },
  ];

  return (
    <div className="min-h-screen pt-[88px] relative overflow-hidden bg-[#F6F8FF] text-slate-900">

      {/* soft background blobs */}
      <div className="pointer-events-none absolute top-0 right-1/4 w-96 h-96 bg-indigo-200/40 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 left-1/4 w-96 h-96 bg-blue-200/40 rounded-full blur-3xl" />

      {/* HERO */}
      <section className="relative pt-10 pb-14 sm:pt-14 sm:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="grid lg:grid-cols-2 gap-10 items-center">

            {/* TEXT */}
            <div className="space-y-6">

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-indigo-100 shadow-sm">
                <Code className="w-4 h-4 text-indigo-600" />
                <span className="text-sm font-semibold text-indigo-700">
                  Web Development
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-slate-900">Professional</span>
                <br />
                <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Web Development
                </span>
                <br />
                <span className="text-slate-900">Services</span>
              </h1>

              <p className="text-slate-600 text-base sm:text-lg max-w-xl">
                Transform your ideas into powerful, scalable web applications with modern technologies and clean design principles.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-lg hover:scale-[1.02] transition"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </a>

                <a
                  href="#portfolio"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold border border-indigo-200 text-indigo-700 hover:bg-indigo-50 transition"
                >
                  View Projects
                </a>
              </div>
            </div>

            {/* IMAGE */}
            <div className="relative">
              <div className="absolute inset-0 bg-indigo-300/30 rounded-3xl blur-3xl" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80"
                  alt="Web Development"
                  className="w-full h-[280px] sm:h-[360px] lg:h-[420px] object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-14 mt-21">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-indigo-100 shadow-sm mb-4">
              <Sparkles className="w-4 h-4 text-indigo-600" />
              <span className="text-sm font-semibold text-indigo-700">
                What You Get
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Comprehensive Solutions
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map((feature, i) => (
              <div
                key={i}
                className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-indigo-600 mt-0.5" />
                  <span className="text-slate-700 font-medium">
                    {feature}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* TECHNOLOGIES */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-12 mt-15">
            <h2 className="text-3xl font-bold text-slate-900">
              Technologies We Use
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {technologies.map((tech, i) => (
              <div
                key={i}
                className="bg-white border border-slate-200 rounded-2xl p-6 text-center hover:shadow-md transition"
              >
                <div className="text-4xl mb-2">{tech.icon}</div>
                <h3 className="font-semibold text-slate-800">{tech.name}</h3>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* PROCESS */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-14 mt-15">
            <h2 className="text-3xl font-bold text-slate-900">
              Our Process
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map((item, i) => (
              <div
                key={i}
                className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-xl flex items-center justify-center text-white font-bold">
                  {item.step}
                </div>

                <h3 className="text-xl font-bold mt-4">{item.title}</h3>
                <p className="text-slate-600 mt-2">{item.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-15 mb-18" >

          <div className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-3xl p-10 text-center shadow-xl">

            <h2 className="text-3xl sm:text-4xl font-bold mb-3">
              Ready to Build Your Website?
            </h2>

            <p className="text-indigo-100 mb-6">
              Let's turn your vision into a high-performance digital product
            </p>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-indigo-700 font-bold hover:scale-[1.02] transition"
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