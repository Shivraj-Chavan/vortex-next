"use client";

import { TrendingUp, Target, Search, Mail, Share2, BarChart, ArrowRight } from "lucide-react";

export default function DigitalMarketingPage() {
  const services = [
    {
      icon: <Search className="w-10 h-10 text-blue-500" />,
      title: "SEO Optimization",
      description:
        "Rank higher on search engines with comprehensive SEO strategies, keyword research, and technical optimization.",
    },
    {
      icon: <Share2 className="w-10 h-10 text-purple-500" />,
      title: "Social Media Marketing",
      description:
        "Build your brand presence across Facebook, Instagram, LinkedIn, and Twitter with engaging content and campaigns.",
    },
    {
      icon: <Target className="w-10 h-10 text-red-500" />,
      title: "PPC Advertising",
      description:
        "Drive immediate results with targeted Google Ads and Facebook Ads campaigns optimized for ROI.",
    },
    {
      icon: <Mail className="w-10 h-10 text-green-500" />,
      title: "Email Marketing",
      description:
        "Nurture leads and retain customers with personalized email campaigns and automated sequences.",
    },
    {
      icon: <BarChart className="w-10 h-10 text-yellow-500" />,
      title: "Analytics & Reporting",
      description:
        "Track performance with detailed analytics, conversion tracking, and monthly performance reports.",
    },
    {
      icon: <TrendingUp className="w-10 h-10 text-indigo-500" />,
      title: "Content Marketing",
      description:
        "Attract and engage your audience with high-quality blog posts, videos, and infographics.",
    },
  ];

  const stats = [
    { value: "300%", label: "Average ROI Increase" },
    { value: "150+", label: "Successful Campaigns" },
    { value: "5M+", label: "Leads Generated" },
    { value: "98%", label: "Client Satisfaction" },
  ];

  const process = [
    { step: "01", title: "Research", desc: "Market and competitor analysis" },
    { step: "02", title: "Strategy", desc: "Custom marketing plan" },
    { step: "03", title: "Execute", desc: "Launch campaigns" },
    { step: "04", title: "Optimize", desc: "A/B testing and refinement" },
    { step: "05", title: "Report", desc: "Performance tracking" },
  ];

  const channels = [
    "Google",
    "Facebook",
    "Instagram",
    "LinkedIn",
    "Twitter",
    "YouTube",
    "TikTok",
    "Pinterest",
    "Email",
    "SEO",
  ];

  return (
    <div className="min-h-screen pt-[88px] relative overflow-hidden bg-white text-black">

      {/* background glow */}
      <div className="pointer-events-none absolute top-0 right-1/4 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 left-1/4 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl" />

      {/* HERO */}
      <section className="relative pt-10 sm:pt-14 pb-14 sm:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">

            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 border border-gray-200">
                <TrendingUp className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-semibold text-black">Digital Marketing</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Data-Driven
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  Digital Marketing
                </span>
                <br />
                Solutions
              </h1>

              <p className="text-gray-700 text-base sm:text-lg max-w-xl">
                Grow your business with strategic digital marketing campaigns. From SEO to social
                media, we deliver measurable results.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a
                  href="#contact"
                  className="px-7 py-3.5 rounded-xl font-bold bg-blue-600 text-white hover:bg-blue-700 transition"
                >
                  Get Started <ArrowRight className="inline w-5 h-5 ml-2" />
                </a>

                <a
                  href="#case-studies"
                  className="px-7 py-3.5 rounded-xl font-bold border border-gray-300 hover:bg-gray-100 transition"
                >
                  View Case Studies
                </a>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-200">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80"
                className="w-full h-[280px] sm:h-[360px] lg:h-[420px] object-cover"
                alt="Digital Marketing"
              />
            </div>

          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-12 mt-15">
            <h2 className="text-3xl sm:text-4xl font-bold">Our Marketing Services</h2>
            <p className="text-gray-600 mt-2">Strategy-led execution that drives real growth</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((s, i) => (
              <div
                key={i}
                className="bg-white p-7 sm:p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition"
              >
                <div className="mb-4">{s.icon}</div>
                <h3 className="text-xl font-bold mb-2">{s.title}</h3>
                <p className="text-gray-600">{s.description}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* STATS */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-15 mb-10">
            {stats.map((s, i) => (
              <div
                key={i}
                className="p-7 rounded-2xl border border-gray-200 text-center bg-white shadow-sm"
              >
                <div className="text-4xl font-extrabold text-blue-600">{s.value}</div>
                <p className="text-gray-600">{s.label}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* PROCESS */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-15">

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {process.map((p, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl border border-gray-200 bg-white text-center hover:shadow-md transition"
              >
                <div className="text-3xl font-bold text-blue-600 mb-2">{p.step}</div>
                <h3 className="font-bold">{p.title}</h3>
                <p className="text-gray-600 text-sm">{p.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CHANNELS */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {channels.map((c, i) => (
              <div
                key={i}
                className="p-5 rounded-xl border border-gray-200 bg-white text-center font-semibold hover:shadow transition"
              >
                {c}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-15 mb-18">

          <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center p-10">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3">
              Ready to Grow Your Business?
            </h2>
            <p className="text-blue-100 mb-6">
              Let&apos;s create a winning digital marketing strategy together
            </p>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold bg-white text-blue-700 hover:bg-gray-100"
            >
              Get Free Consultation <ArrowRight className="w-5 h-5" />
            </a>
          </div>

        </div>
      </section>

    </div>
  );
}