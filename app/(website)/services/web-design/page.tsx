"use client";

import { useState, useEffect } from "react";
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
  }, []);

  if (!mounted) return null;

  const features = [
    {
      icon: <Layout className="w-10 h-10 text-blue-600" />,
      title: "Custom UI Design",
      description: "Unique, pixel-perfect interfaces tailored to your brand identity and business goals.",
    },
    {
      icon: <Paintbrush className="w-10 h-10 text-purple-600" />,
      title: "UX Research",
      description: "User-centered design with research, personas, and user journey mapping.",
    },
    {
      icon: <Smartphone className="w-10 h-10 text-green-600" />,
      title: "Responsive Design",
      description: "Beautiful experiences across desktop, tablet, and mobile devices.",
    },
    {
      icon: <Figma className="w-10 h-10 text-pink-600" />,
      title: "Prototyping",
      description: "Interactive prototypes for testing before development.",
    },
    {
      icon: <Eye className="w-10 h-10 text-indigo-600" />,
      title: "Visual Design",
      description: "Modern color systems, typography, and premium visuals.",
    },
    {
      icon: <Layers className="w-10 h-10 text-yellow-600" />,
      title: "Design Systems",
      description: "Reusable components and scalable design systems.",
    },
  ];

  const process = [
    { step: "1", title: "Discovery", desc: "Understanding goals and audience" },
    { step: "2", title: "Research", desc: "Market and competitor analysis" },
    { step: "3", title: "Wireframing", desc: "Low-fidelity structure" },
    { step: "4", title: "Design", desc: "High-fidelity UI creation" },
    { step: "5", title: "Prototype", desc: "Interactive experience testing" },
    { step: "6", title: "Handoff", desc: "Developer-ready assets" },
  ];

  const services = [
    "Website Design",
    "Mobile App UI/UX",
    "Dashboard Design",
    "E-Commerce UI",
    "Landing Pages",
    "Brand Identity",
    "Icons & Illustrations",
    "Design Systems",
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
    <div className="min-h-screen pt-[88px] relative overflow-hidden bg-[#F7F9FF] text-slate-900">

      {/* background glow */}
      <div className="pointer-events-none absolute top-0 left-1/4 w-96 h-96 bg-blue-200/40 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 right-1/4 w-96 h-96 bg-purple-200/40 rounded-full blur-3xl" />

      {/* HERO */}
      <section className="pt-14 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* TEXT */}
            <div className="space-y-6">

              <div className="inline-flex items-center gap-2 px-4 py-2 mt-10 rounded-full bg-white border border-blue-100 shadow-sm">
                <Palette className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-semibold text-blue-700">
                  UI/UX Design
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Beautiful
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  UI/UX Design
                </span>
                <br />
                Services
              </h1>

              <p className="text-slate-600 text-lg max-w-xl">
                Clean, modern and user-focused designs that convert visitors into customers.
              </p>

              <a
                href="/#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:scale-[1.02] transition"
              >
                Get Started <ArrowRight className="w-5 h-5" />
              </a>

            </div>

            {/* IMAGE */}
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-white">
              <img
                src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=80"
                className="w-full h-[300px] sm:h-[380px] lg:h-[450px] object-cover"
                alt="UI Design"
              />
            </div>

          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">

          <h2 className="text-3xl font-bold text-center mb-12 mt-10">
            Design Services
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

      {/* SERVICES GRID */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">

          <h2 className="text-3xl font-bold mb-10 mt-10">
            What We Design
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {services.map((s, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm hover:shadow-md transition">
                <CheckCircle className="w-5 h-5 text-blue-600 mx-auto mb-2" />
                <span className="font-medium text-sm">{s}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">

          <h2 className="text-3xl font-bold mb-12 mt-10">
            Design Process
          </h2>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
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

      {/* TOOLS */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">

          <h2 className="text-3xl font-bold mb-10 mt-10">
            Design Tools
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
            {tools.map((t, i) => (
              <div key={i} className="bg-white  rounded-2xl p-6 shadow-sm hover:shadow-md transition">
                <div className="text-4xl mb-2">{t.icon}</div>
                <div className="font-semibold">{t.name}</div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 mt-13 mb-18 text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-3xl p-12">

          <h2 className="text-3xl font-bold mb-4">
            Ready to Design Something Amazing?
          </h2>

          <p className="mb-6 text-blue-100">
            Let’s build interfaces users actually love.
          </p>

          <a className="bg-white text-blue-700 px-8 py-3 rounded-xl font-bold hover:scale-[1.02] transition inline-flex items-center gap-2">
            Start Project <ArrowRight className="w-5 h-5" />
          </a>

        </div>
      </section>

    </div>
  );
}