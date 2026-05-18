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
    <div className="min-h-screen pt-[88px] relative overflow-hidden bg-gradient-to-b from-white via-blue-50 to-indigo-50 text-slate-900">

    {/* Background blobs */}
    <div className="pointer-events-none absolute top-0 right-1/4 w-96 h-96 bg-indigo-300/30 rounded-full blur-3xl" />
    <div className="pointer-events-none absolute -bottom-24 left-1/4 w-96 h-96 bg-blue-300/30 rounded-full blur-3xl" />
  
    {/* HERO */}
    <section className="relative pt-12 sm:pt-16 pb-16 sm:pb-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
  
          <div className="space-y-6">
  
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-indigo-200 shadow-sm">
              <Server className="w-4 h-4 text-indigo-600" />
              <span className="text-sm font-semibold text-indigo-700">
                Domain & Hosting
              </span>
            </div>
  
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-slate-900">
              Reliable
              <br />
              <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Domain & Hosting
              </span>
              <br />
              Solutions
            </h1>
  
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
              Secure your domain and host your website with fast, reliable, and affordable hosting backed by 24/7 support.
            </p>
  
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href="#plans"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold
                bg-gradient-to-r from-indigo-600 to-blue-600 text-white hover:from-indigo-700 hover:to-blue-700
                shadow-lg hover:scale-[1.02] transition-all"
              >
                View Plans
                <ArrowRight className="w-5 h-5" />
              </a>
  
              <a
                href="#domains"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold
                border-2 border-indigo-500 text-indigo-700 hover:bg-indigo-50 transition-all"
              >
                Search Domain
              </a>
            </div>
  
            <div className="flex flex-wrap items-center gap-6 pt-2">
              {[
                {
                  title: "99.9% Uptime",
                  sub: "Guaranteed",
                  icon: <CheckCircle className="w-6 h-6" />,
                  cls: "text-green-600 bg-green-100"
                },
                {
                  title: "Free SSL",
                  sub: "Included",
                  icon: <Shield className="w-6 h-6" />,
                  cls: "text-blue-600 bg-blue-100"
                },
                {
                  title: "24/7 Support",
                  sub: "Always Available",
                  icon: <HeadphonesIcon className="w-6 h-6" />,
                  cls: "text-indigo-600 bg-indigo-100"
                }
              ].map((b, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${b.cls}`}>
                    {b.icon}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900">{b.title}</div>
                    <div className="text-xs text-slate-500">{b.sub}</div>
                  </div>
                </div>
              ))}
            </div>
  
          </div>
  
          {/* IMAGE */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-3xl blur-3xl opacity-20" />
            <div className="relative overflow-hidden rounded-3xl shadow-2xl border bg-white">
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
  
    {/* SERVICES */}
    <section className="py-16 sm:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-5">
  
        <div className="text-center mb-12 sm:mb-16 mt-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-200 shadow-sm mb-4">
            <Sparkles className="w-4 h-4 text-indigo-600" />
            <span className="text-sm font-semibold text-indigo-700">Our Services</span>
          </div>
  
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">
            Complete Hosting Solutions
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Everything you need to get online
          </p>
        </div>
  
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-white/80 backdrop-blur p-7 sm:p-8 rounded-2xl border border-slate-200
              hover:shadow-lg hover:scale-[1.01] transition-all"
            >
              <div className="mb-4 text-indigo-600">{f.icon}</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{f.title}</h3>
              <p className="text-slate-600 leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
  
      </div>
    </section>
  
    {/* PLANS */}
    <section id="plans" className="py-16 sm:py-20 scroll-mt-[88px]">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 mt-10">
  
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="mt-6 text-3xl sm:text-4xl font-bold text-slate-900 mb-3">
            Hosting Plans
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Choose the perfect plan for your needs
          </p>
        </div>
  
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mb-18">
          {hostingPlans.map((plan, i) => (
            <div
              key={i}
              className={`relative rounded-3xl p-7 sm:p-8 border-2 transition-all bg-white/90
              ${plan.popular
                ? "border-indigo-500 shadow-2xl md:scale-[1.03]"
                : "border-slate-200 hover:shadow-lg"
              }`}
            >
  
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-5 py-1 rounded-full text-sm font-bold shadow-lg">
                  Most Popular
                </div>
              )}
  
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  {plan.name}
                </h3>
  
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-5xl font-bold text-indigo-600">
                    {plan.price}
                  </span>
                  <span className="text-slate-500">{plan.period}</span>
                </div>
              </div>
  
              <ul className="space-y-3.5 mb-8">
                {plan.features.map((ft, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="mt-0.5 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-slate-700">{ft}</span>
                  </li>
                ))}
              </ul>
  
              <button
                className={`w-full py-4 rounded-xl font-bold transition-all
                ${plan.popular
                  ? "bg-gradient-to-r from-indigo-600 to-blue-600 text-white hover:from-indigo-700 hover:to-blue-700"
                  : "bg-slate-100 text-slate-900 hover:bg-slate-200"
                }`}
              >
                Get Started
              </button>
  
            </div>
          ))}
        </div>
  
      </div>
    </section>
  
  </div>
  );
}
