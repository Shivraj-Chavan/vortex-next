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
    <div
      className="min-h-screen transition-colors duration-300 pt-[88px] relative overflow-hidden
        bg-[#0b0f1a]
        bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)]
        bg-[size:24px_24px]"
    >
      
      <div className="pointer-events-none absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-br from-blue-500/15 to-purple-500/15 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 left-1/4 w-96 h-96 bg-gradient-to-br from-indigo-500/10 to-blue-500/10 rounded-full blur-3xl" />

      <section className="relative overflow-hidden pt-10 sm:pt-14 pb-14 sm:pb-20">
        <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur border border-white/10 shadow-sm">
                <TrendingUp className="w-4 h-4 text-blue-400" />
                <span className="text-sm font-semibold text-blue-200">Digital Marketing</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white">
                Data-Driven
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  Digital Marketing
                </span>
                <br />
                Solutions
              </h1>

              <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-xl">
                Grow your business with strategic digital marketing campaigns. From SEO to social
                media, we deliver measurable results that drive traffic, leads, and revenue.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold
                    bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700
                    shadow-lg hover:scale-[1.02] transition-all"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </a>

                <a
                  href="#case-studies"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold
                    border border-white/15 text-white/90 hover:bg-white/5 transition-all"
                >
                  View Case Studies
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur-3xl opacity-20" />
              <div className="relative overflow-hidden rounded-3xl shadow-2xl border border-white/10 bg-white/5 backdrop-blur">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80"
                  alt="Digital Marketing"
                  className="w-full h-[280px] sm:h-[360px] lg:h-[420px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

  
    <section id="services" className="pt-16 sm:pt-20 pb-32 sm:pb-36 bg-transparent scroll-mt-[88px]">



        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 mt-16">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">Our Marketing Services</h2>
            <p className="text-base sm:text-lg text-gray-300">
              Strategy-led execution that drives real growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur p-7 sm:p-8 rounded-2xl border border-white/10
                  hover:border-blue-400/30 hover:shadow-lg transition-all"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="results" className="pt-16 sm:pt-20 pb-28 sm:pb-32 bg-transparent scroll-mt-[88px]">




        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 mt-16">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="mt-6 text-3xl sm:text-4xl font-bold text-white mb-1">Proven Results</h2>
            <p className="text-base sm:text-lg text-gray-300">Metrics that reflect our impact</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur p-7 sm:p-8 rounded-2xl border border-white/10 text-center"
              >
                <div className="text-4xl sm:text-5xl font-extrabold text-blue-400 mb-2">
                  {stat.value}
                </div>
                <p className="text-gray-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section id="process" className="pt-28 sm:pt-32 pb-28 sm:pb-32 bg-transparent scroll-mt-[88px]">




        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 mt-16">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="mt-6 text-3xl sm:text-4xl font-bold text-white mb-1">Our Marketing Process</h2>
            <p className="text-base sm:text-lg text-gray-300">A clear plan from research to results</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8">
            {process.map((item, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur p-6 rounded-2xl border border-white/10 text-center
                  hover:border-purple-400/30 hover:shadow-lg transition-all"
              >
                <div className="text-3xl sm:text-4xl font-extrabold text-blue-400 mb-3">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

   
      <section id="channels" className="pt-16 sm:pt-20 pb-10 sm:pb-12 bg-transparent scroll-mt-[88px]">




        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 mt-15">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="mt-6 text-3xl sm:text-4xl font-bold text-white mb-1">
              Marketing Channels We Master
            </h2>
            <p className="text-base sm:text-lg text-gray-300">
              Where your audience is — we’ll meet them there
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 sm:gap-6 max-w-6xl mx-auto">
            {channels.map((channel, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur p-5 rounded-xl text-center font-semibold text-white/90
                  border border-white/10 hover:border-blue-400/30 hover:shadow-lg transition-all"
              >
                {channel}
              </div>
            ))}
          </div>
        </div>
      </section>

  
      <section className="py-14 sm:py-16 transition-colors mt-10">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mt-8 sm:mt-10 rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white px-6 sm:px-10 py-12 sm:py-14 text-center shadow-xl">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Grow Your Business?</h2>
            <p className="text-base sm:text-lg mb-7 text-blue-100 max-w-2xl mx-auto">
              Let&apos;s create a winning digital marketing strategy together
            </p>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold bg-white text-blue-700 hover:bg-gray-100 shadow-lg hover:scale-[1.02] transition-all"
            >
              Get Free Consultation
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      
    </div>
  );
}
