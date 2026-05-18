"use client";

import {
  BarChart3,
  TrendingUp,
  Users,
  Globe,
  ShoppingCart,
  MousePointerClick,
  Activity,
  LineChart,
  Database,
  Target,
  Eye,
  Smartphone,
  Server,
  LayoutDashboard,
} from "lucide-react";

export default function DataAnalyticsSection() {
  return (
    <section className="bg-[#F8FAFF] text-[#0F172A]">
      <div className="max-w-7xl mx-auto px-6 py-20">

        {/* HEADER */}
        <div className="text-center max-w-4xl mx-auto mt-10">
          <p className="text-blue-600 font-semibold uppercase tracking-widest text-sm">
            Data Analytics by Vortex Web Technologies
          </p>

          <h2 className="mt-3 text-3xl md:text-5xl font-bold leading-tight">
            Turn Your Website Data into
            <span className="text-blue-600"> Real Business Growth</span>
          </h2>

          <p className="mt-4 text-gray-600">
            We build analytics systems for websites, SaaS platforms, and digital
            businesses — helping you understand users, improve conversions,
            and scale performance with data-driven decisions.
          </p>
        </div>

        {/* WEBSITE METRICS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-14">
          {[
            { label: "Page Views Tracked", value: "5M+" },
            { label: "User Sessions Analyzed", value: "1.2M+" },
            { label: "Conversion Rate Increase", value: "+42%" },
            { label: "Bounce Rate Reduction", value: "-31%" },
            { label: "Avg. Load Speed Improvement", value: "2.3s" },
            { label: "Active Dashboards", value: "180+" },
            { label: "Tracked Events", value: "25M+" },
            { label: "Client Websites Optimized", value: "200+" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-2xl p-6 text-center shadow-sm"
            >
              <h3 className="text-2xl font-bold text-blue-600">
                {item.value}
              </h3>
              <p className="text-sm text-gray-500 mt-1">{item.label}</p>
            </div>
          ))}
        </div>

        {/* CORE USE CASES */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center">
            What We Track for Your Business
          </h3>

          <div className="grid md:grid-cols-3 gap-6 mt-10">

            {[
              {
                icon: Eye,
                title: "User Behavior Tracking",
                desc: "Understand how users navigate your website, where they click, and where they drop off.",
              },
              {
                icon: MousePointerClick,
                title: "Conversion Funnel Analysis",
                desc: "Track every step from landing page to checkout or lead submission.",
              },
              {
                icon: ShoppingCart,
                title: "E-commerce Analytics",
                desc: "Monitor product performance, cart abandonment, and purchase behavior.",
              },
              {
                icon: Users,
                title: "Audience Insights",
                desc: "Analyze demographics, devices, locations, and returning users.",
              },
              {
                icon: LayoutDashboard,
                title: "Custom Dashboards",
                desc: "Business-specific dashboards built for marketing, sales, and performance teams.",
              },
              {
                icon: TrendingUp,
                title: "Growth Tracking",
                desc: "Measure traffic growth, SEO performance, and campaign effectiveness.",
              },
            ].map((f, i) => (
              <div
                key={i}
                className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-md transition"
              >
                <f.icon className="text-blue-600 w-6 h-6" />
                <h4 className="mt-4 font-semibold text-lg">{f.title}</h4>
                <p className="mt-2 text-sm text-gray-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* BUSINESS IMPACT SECTION */}
        <div className="mt-20 grid md:grid-cols-2 gap-10">

          {/* LEFT */}
          <div>
            <h3 className="text-2xl font-bold">
              Real Impact on Your Website Performance
            </h3>

            <p className="mt-4 text-gray-600">
              Our analytics system is built specifically for web and software
              products — not generic dashboards. We focus on what actually
              increases revenue and engagement.
            </p>

            <div className="mt-6 space-y-4">

              {[
                { label: "Lead Conversion Improvement", value: "+35% avg" },
                { label: "User Retention Boost", value: "+28%" },
                { label: "SEO Traffic Growth", value: "+52%" },
                { label: "Page Speed Optimization Impact", value: "+40%" },
                { label: "Form Completion Rate", value: "+33%" },
                { label: "Drop-off Reduction", value: "-45%" },
              ].map((d, i) => (
                <div
                  key={i}
                  className="flex justify-between border-b border-gray-100 pb-2"
                >
                  <span className="text-gray-600">{d.label}</span>
                  <span className="font-semibold text-blue-600">
                    {d.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT - DASHBOARD SNAPSHOT */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <h4 className="font-semibold text-lg mb-6">
              Live Website Analytics Snapshot
            </h4>

            <div className="space-y-4 text-sm">

              {[
                { label: "Active Users Now", value: "1,284" },
                { label: "Avg Session Duration", value: "3m 42s" },
                { label: "Bounce Rate", value: "38%" },
                { label: "Top Traffic Source", value: "Organic Search" },
                { label: "Top Device", value: "Mobile (67%)" },
                { label: "Top Page", value: "/services" },
                { label: "Conversion Rate", value: "4.8%" },
                { label: "Events Fired Today", value: "420K+" },
              ].map((d, i) => (
                <div
                  key={i}
                  className="flex justify-between border-b border-gray-100 pb-2"
                >
                  <span className="text-gray-600">{d.label}</span>
                  <span className="font-semibold text-blue-600">
                    {d.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FINAL CTA */}
        <div className="mt-20 text-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition">
            Get Website Analytics for Your Business
          </button>

          <p className="text-gray-500 text-sm mt-3">
            Your website already has data. We just make it useful.
          </p>
        </div>
      </div>
    </section>
  );
}