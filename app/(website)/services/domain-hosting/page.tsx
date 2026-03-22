"use client";

import { useEffect, useState } from "react";
import {
  Server,
  Globe,
  Shield,
  Zap,
  HardDrive,
  CloudCog,
  Lock,
  TrendingUp,
  CheckCircle,
  Sparkles,
  ArrowRight,
  Gauge,
  Database,
  HeadphonesIcon,
  Award,
  Cpu,
} from "lucide-react";

export default function DomainHostingPage() {
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
      icon: <Globe className="w-10 h-10 text-blue-500" />,
      title: "Domain Registration",
      description: "Secure your perfect domain name with instant registration and easy management tools.",
    },
    {
      icon: <Server className="w-10 h-10 text-purple-500" />,
      title: "Web Hosting",
      description: "Fast, reliable hosting with 99.9% uptime guarantee and 24/7 expert support.",
    },
    {
      icon: <CloudCog className="w-10 h-10 text-green-500" />,
      title: "Cloud Hosting",
      description: "Scalable cloud infrastructure that grows with your business needs seamlessly.",
    },
    {
      icon: <Shield className="w-10 h-10 text-red-500" />,
      title: "SSL Certificates",
      description: "Free SSL certificates to secure your website and build customer trust instantly.",
    },
    {
      icon: <HardDrive className="w-10 h-10 text-yellow-500" />,
      title: "SSD Storage",
      description: "Lightning-fast SSD storage for optimal website performance and speed.",
    },
    {
      icon: <Lock className="w-10 h-10 text-indigo-500" />,
      title: "Daily Backups",
      description: "Automatic daily backups to keep your data safe, secure, and recoverable.",
    },
  ];

  const hostingPlans = [
    {
      name: "Starter",
      price: "₹199",
      period: "/month",
      popular: false,
      features: [
        "1 Website",
        "10 GB SSD Storage",
        "Unmetered Bandwidth",
        "Free SSL Certificate",
        "5 Email Accounts",
        "24/7 Support",
        "Weekly Backups",
        "99.9% Uptime",
      ],
    },
    {
      name: "Business",
      price: "₹499",
      period: "/month",
      popular: true,
      features: [
        "5 Websites",
        "50 GB SSD Storage",
        "Unmetered Bandwidth",
        "Free SSL Certificate",
        "Unlimited Email",
        "Priority Support",
        "Daily Backups",
        "CDN Integration",
        "Free Domain (1 Year)",
        "Advanced Security",
      ],
    },
    {
      name: "Enterprise",
      price: "₹999",
      period: "/month",
      popular: false,
      features: [
        "Unlimited Websites",
        "200 GB SSD Storage",
        "Unmetered Bandwidth",
        "Free SSL Certificate",
        "Unlimited Email",
        "Dedicated Support",
        "Daily Backups",
        "Advanced Security",
        "Free Migration",
        "Staging Environment",
        "Priority CDN",
        "White Label Options",
      ],
    },
  ];

  const domainExtensions = [
    { ext: ".com", price: "₹799/year", popular: true },
    { ext: ".in", price: "₹599/year", popular: true },
    { ext: ".net", price: "₹899/year", popular: false },
    { ext: ".org", price: "₹899/year", popular: false },
    { ext: ".co", price: "₹2,499/year", popular: false },
    { ext: ".io", price: "₹3,999/year", popular: false },
    { ext: ".tech", price: "₹1,499/year", popular: false },
    { ext: ".store", price: "₹1,299/year", popular: false },
    { ext: ".online", price: "₹999/year", popular: false },
    { ext: ".site", price: "₹899/year", popular: false },
    { ext: ".xyz", price: "₹699/year", popular: false },
    { ext: ".app", price: "₹1,799/year", popular: false },
  ];

  const whyChooseUs = [
    {
      icon: <Gauge className="w-10 h-10 text-blue-500" />,
      title: "99.9% Uptime",
      description: "Guaranteed reliability with industry-leading uptime SLA",
    },
    {
      icon: <Zap className="w-10 h-10 text-yellow-500" />,
      title: "Lightning Fast",
      description: "Optimized servers with SSD storage for maximum speed",
    },
    {
      icon: <Shield className="w-10 h-10 text-green-500" />,
      title: "Secure Hosting",
      description: "Advanced security with DDoS protection and firewalls",
    },
    {
      icon: <HeadphonesIcon className="w-10 h-10 text-purple-500" />,
      title: "24/7 Support",
      description: "Expert support team available round the clock",
    },
    {
      icon: <Database className="w-10 h-10 text-indigo-500" />,
      title: "Auto Backups",
      description: "Daily automated backups with one-click restore",
    },
    {
      icon: <Award className="w-10 h-10 text-pink-500" />,
      title: "Free Migration",
      description: "We handle your website migration at no extra cost",
    },
  ];

  const technicalSpecs = [
    {
      category: "Performance",
      specs: [
        "LiteSpeed Web Server",
        "HTTP/3 Support",
        "Built-in Caching",
        "CDN Integration",
        "Image Optimization",
        "Gzip Compression",
      ],
    },
    {
      category: "Security",
      specs: [
        "Free SSL Certificate",
        "DDoS Protection",
        "Malware Scanning",
        "Web Application Firewall",
        "Two-Factor Authentication",
        "IP Blocking",
      ],
    },
    {
      category: "Developer Tools",
      specs: ["SSH Access", "Git Integration", "WP-CLI Support", "Cron Jobs", "PHP 8.x Support", "Database Management"],
    },
    {
      category: "Control Panel",
      specs: [
        "cPanel/Plesk",
        "One-Click Installs",
        "File Manager",
        "Email Management",
        "DNS Management",
        "Analytics Dashboard",
      ],
    },
  ];

  return (
    <div
      className="min-h-screen transition-colors duration-300 pt-[88px] relative overflow-hidden
      bg-gray-50 dark:bg-[#0b0f1a]
      bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)]
      dark:bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)]
      bg-[size:24px_24px]"
    >
 
      <div className="pointer-events-none absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-br from-violet-500/10 to-purple-500/10 dark:from-violet-500/20 dark:to-purple-500/20 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 left-1/4 w-96 h-96 bg-gradient-to-br from-indigo-500/10 to-violet-500/10 dark:from-indigo-500/15 dark:to-violet-500/15 rounded-full blur-3xl" />

   
      <section className="relative pt-12 sm:pt-16 pb-16 sm:pb-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 dark:bg-white/5 backdrop-blur border border-violet-200/70 dark:border-white/10 shadow-sm">
                <Server className="w-4 h-4 text-violet-600 dark:text-violet-400" />
                <span className="text-sm font-semibold text-violet-700 dark:text-violet-200">
                  Domain & Hosting
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white">
                Reliable
                <br />
                <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 dark:from-violet-400 dark:via-purple-400 dark:to-indigo-400 bg-clip-text text-transparent">
                  Domain & Hosting
                </span>
                <br />
                Solutions
              </h1>

              <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-xl">
                Secure your domain and host your website with fast, reliable, and affordable hosting backed by 24/7 support.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a
                  href="#plans"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold
                  bg-gradient-to-r from-violet-600 to-purple-600 text-white hover:from-violet-700 hover:to-purple-700
                  shadow-lg hover:scale-[1.02] transition-all"
                >
                  View Plans
                  <ArrowRight className="w-5 h-5" />
                </a>

                <a
                  href="#domains"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold
                  border-2 border-violet-600/70 dark:border-violet-400/70 text-violet-700 dark:text-violet-300
                  hover:bg-violet-50/60 dark:hover:bg-white/5 transition-all"
                >
                  Search Domain
                </a>
              </div>

       
              <div className="flex flex-wrap items-center gap-6 pt-2">
                {[
                  { title: "99.9% Uptime", sub: "Guaranteed", icon: <CheckCircle className="w-6 h-6" />, cls: "text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/30" },
                  { title: "Free SSL", sub: "Included", icon: <Shield className="w-6 h-6" />, cls: "text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30" },
                  { title: "24/7 Support", sub: "Always Available", icon: <HeadphonesIcon className="w-6 h-6" />, cls: "text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900/30" },
                ].map((b, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${b.cls}`}>
                      {b.icon}
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
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-purple-500 rounded-3xl blur-3xl opacity-20" />
              <div className="relative overflow-hidden rounded-3xl shadow-2xl border border-white/10 bg-white/10 dark:bg-white/5 backdrop-blur">
                <img
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80"
                  alt="Domain & Hosting"
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-50/80 dark:bg-white/5 border border-violet-200/60 dark:border-white/10 shadow-sm mb-4">
              <Sparkles className="w-4 h-4 text-violet-600 dark:text-violet-400" />
              <span className="text-sm font-semibold text-violet-700 dark:text-violet-200">Our Services</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3">
              Complete Hosting Solutions
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">Everything you need to get online</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((f, i) => (
              <div
                key={i}
                className="bg-white/70 dark:bg-white/5 backdrop-blur p-7 sm:p-8 rounded-2xl border border-gray-200/70 dark:border-white/10
                hover:shadow-lg hover:scale-[1.01] transition-all"
              >
                <div className="mb-4">{f.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{f.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    
      <section id="plans" className="py-16 sm:py-20 scroll-mt-[88px]">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 mt-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="mt-6 text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3">Hosting Plans</h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">Choose the perfect plan for your needs</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {hostingPlans.map((plan, i) => (
              <div
                key={i}
                className={`relative rounded-3xl p-7 sm:p-8 border-2 transition-all bg-white/80 dark:bg-white/5 backdrop-blur
                ${plan.popular ? "border-violet-500/80 dark:border-violet-400/80 shadow-2xl md:scale-[1.03]" : "border-gray-200/70 dark:border-white/10 hover:shadow-lg"}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-violet-600 to-purple-600 text-white px-5 py-1 rounded-full text-xs sm:text-sm font-bold shadow-lg">
                    Most Popular
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{plan.name}</h3>
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-5xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 dark:from-violet-400 dark:to-purple-400 bg-clip-text text-transparent">
                      {plan.price}
                    </span>
                    <span className="text-gray-600 dark:text-gray-400">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-3.5 mb-8">
                  {plan.features.map((ft, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="mt-0.5 flex-shrink-0 w-5 h-5 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">{ft}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-4 rounded-xl font-bold transition-all
                  ${plan.popular
                    ? "bg-gradient-to-r from-violet-600 to-purple-600 text-white hover:from-violet-700 hover:to-purple-700 shadow-lg"
                    : "bg-gray-100/80 dark:bg-white/10 text-gray-900 dark:text-white hover:bg-gray-200/80 dark:hover:bg-white/15"}`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>

          <div className="mt-15 text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-green-100/80 dark:bg-green-900/20 rounded-full border border-green-200/70 dark:border-green-800/40">
              <Shield className="w-5 h-5 text-green-700 dark:text-green-400" />
              <span className="text-sm font-semibold text-green-800 dark:text-green-300">30-Day Money-Back Guarantee</span>
            </div>
          </div>
        </div>
      </section>

    
      <section id="domains" className="py-16 sm:py-20 scroll-mt-[88px]">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 mt-5">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3">Domain Pricing</h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
              Affordable domain registration with instant activation
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {domainExtensions.map((d, i) => (
              <div
                key={i}
                className={`p-6 rounded-xl text-center transition-all border bg-white/70 dark:bg-white/5 backdrop-blur
                ${d.popular ? "border-violet-400/60 dark:border-violet-400/60 shadow-lg" : "border-gray-200/70 dark:border-white/10 hover:shadow-md"}`}
              >
                {d.popular && (
                  <div className="inline-block px-3 py-1 bg-violet-600 text-white text-xs font-bold rounded-full mb-2">
                    Popular
                  </div>
                )}
                <div className="text-3xl font-bold text-violet-700 dark:text-violet-300 mb-1">{d.ext}</div>
                <p className="text-gray-600 dark:text-gray-400 text-sm font-semibold">{d.price}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 max-w-2xl mx-auto">
            <div className="bg-white/70 dark:bg-white/5 backdrop-blur p-7 sm:p-8 rounded-2xl border border-gray-200/70 dark:border-white/10">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 text-center">Find Your Perfect Domain</h3>
              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="Enter your domain name..."
                  className="flex-1 px-5 py-4 rounded-xl border border-gray-300/70 dark:border-white/10 bg-white dark:bg-black/20 text-gray-900 dark:text-white
                  focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none"
                />
                <button className="px-7 py-4 bg-gradient-to-r from-violet-600 to-purple-600 text-white font-bold rounded-xl hover:from-violet-700 hover:to-purple-700 transition-all">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

     
      <section className="py-16 sm:py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-5">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-1">Why Choose Our Hosting?</h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">Industry-leading features and support</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {whyChooseUs.map((x, i) => (
              <div
                key={i}
                className="bg-white/70 dark:bg-white/5 backdrop-blur p-7 sm:p-8 rounded-2xl border border-gray-200/70 dark:border-white/10 text-center
                hover:shadow-lg transition-all"
              >
                <div className="flex justify-center mb-4">{x.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{x.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{x.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

   
      <section className="py-16 sm:py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-5">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-1">Technical Specifications</h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">Powerful features for modern websites</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {technicalSpecs.map((cat, i) => (
              <div
                key={i}
                className="bg-white/70 dark:bg-white/5 backdrop-blur p-6 rounded-2xl border border-gray-200/70 dark:border-white/10"
              >
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <Cpu className="w-5 h-5 text-violet-700 dark:text-violet-300" />
                  {cat.category}
                </h3>
                <ul className="space-y-3">
                  {cat.specs.map((s, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                      <div className="w-1.5 h-1.5 bg-violet-700 dark:bg-violet-300 rounded-full flex-shrink-0" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="pt-16 pb-28 sm:pt-20 sm:pb-32">


        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {[
              { value: "50K+", label: "Websites Hosted", icon: <Globe className="w-8 h-8 text-violet-700 dark:text-violet-300" /> },
              { value: "99.9%", label: "Uptime Guarantee", icon: <TrendingUp className="w-8 h-8 text-green-600 dark:text-green-400" /> },
              { value: "24/7", label: "Expert Support", icon: <HeadphonesIcon className="w-8 h-8 text-blue-600 dark:text-blue-400" /> },
              { value: "15+", label: "Years Experience", icon: <Award className="w-8 h-8 text-yellow-600 dark:text-yellow-400" /> },
            ].map((stat, i) => (
              <div
                key={i}
                className="bg-white/70 dark:bg-white/5 backdrop-blur p-7 sm:p-8 rounded-2xl text-center border border-gray-200/70 dark:border-white/10 hover:shadow-lg transition-all"
              >
                <div className="flex justify-center mb-4">{stat.icon}</div>
                <div className="text-4xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 dark:from-violet-400 dark:to-purple-400 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

  
      <section className="pt-12 pb-16 sm:pt-14 sm:pb-20 ">
  <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 mt-10 sm:mt-12 ">
          <div className="rounded-3xl bg-gradient-to-r from-violet-600 to-purple-600 text-white px-6 sm:px-10 py-12 sm:py-14 text-center shadow-xl">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Get Online?</h2>
            <p className="text-base sm:text-lg mb-7 text-violet-100 max-w-2xl mx-auto">
              Register your domain and start hosting today with our reliable services
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold bg-white text-violet-700 hover:bg-gray-100 shadow-lg hover:scale-[1.02] transition-all"
              >
                Get Started Now
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#plans"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold border-2 border-white text-white hover:bg-white/10 transition-all"
              >
                View Pricing
              </a>
            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-6 text-violet-100">
              {["No Setup Fees", "Free Migration", "30-Day Guarantee", "Cancel Anytime"].map((t, i) => (
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
