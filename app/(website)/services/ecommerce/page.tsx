"use client";

import {
  ShoppingCart,
  CreditCard,
  Truck,
  Shield,
  Smartphone,
  Package,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export default function EcommercePage() {
  const features = [
    {
      icon: <ShoppingCart className="w-10 h-10 text-indigo-600" />,
      title: "Product Management",
      description:
        "Easy-to-use admin panel for managing products, categories, inventory, and pricing with bulk operations.",
    },
    {
      icon: <CreditCard className="w-10 h-10 text-green-600" />,
      title: "Secure Payments",
      description:
        "Integrate multiple payment gateways including Stripe, PayPal, and credit cards with PCI compliance.",
    },
    {
      icon: <Truck className="w-10 h-10 text-purple-600" />,
      title: "Shipping Integration",
      description:
        "Real-time shipping rates, order tracking, and integration with major carriers like FedEx and UPS.",
    },
    {
      icon: <Shield className="w-10 h-10 text-red-600" />,
      title: "Security & SSL",
      description:
        "Enterprise-grade security with SSL certificates, fraud detection, and secure checkout processes.",
    },
    {
      icon: <Smartphone className="w-10 h-10 text-yellow-600" />,
      title: "Mobile Responsive",
      description:
        "Fully responsive design optimized for mobile shopping with touch-friendly interfaces.",
    },
    {
      icon: <Package className="w-10 h-10 text-indigo-600" />,
      title: "Inventory Management",
      description:
        "Track stock levels, manage variants, automatic low-stock alerts, and multi-warehouse support.",
    },
  ];

  const platforms = [
    { name: "Shopify", desc: "Quick setup with powerful features" },
    { name: "WooCommerce", desc: "Flexible WordPress integration" },
    { name: "Magento", desc: "Enterprise-level solutions" },
    { name: "Custom", desc: "Fully customized platforms" },
  ];

  const advanced = [
    "Multi-currency & Multi-language Support",
    "Advanced SEO for Product Pages",
    "Customer Reviews & Ratings",
    "Wishlist & Compare Products",
    "Coupon & Discount Management",
    "Email Marketing Integration",
    "Analytics & Sales Reports",
    "Customer Account Management",
    "One-Click Checkout",
    "Abandoned Cart Recovery",
    "Product Recommendations",
    "Social Media Integration",
  ];

  const stories = [
    { revenue: "$2.5M", metric: "Monthly Revenue", store: "Fashion Store" },
    { revenue: "450%", metric: "Sales Growth", store: "Electronics Shop" },
    { revenue: "10K+", metric: "Daily Orders", store: "Health & Beauty" },
  ];

  return (
    <div className="min-h-screen pt-[88px] relative overflow-hidden bg-white text-black">

      {/* background glow */}
      <div className="pointer-events-none absolute top-0 right-1/4 w-96 h-96 bg-indigo-200/40 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 left-1/4 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl" />

      {/* HERO */}
      <section className="relative pt-10 sm:pt-14 pb-16 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">

            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100">
                <ShoppingCart className="w-4 h-4 text-indigo-600" />
                <span className="text-sm font-semibold text-indigo-700">
                  E-Commerce Solutions
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Complete
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">
                  E-Commerce
                </span>
                <br />
                Development
              </h1>

              <p className="text-gray-700 text-base sm:text-lg max-w-xl">
                Launch your online store with powerful e-commerce platforms.
                From product catalogs to secure payments, we build complete solutions.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="/#contact"
                  className="px-6 py-3 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition flex items-center gap-2 justify-center"
                >
                  Get Started <ArrowRight className="w-5 h-5" />
                </a>

                <a
                  href="#stores"
                  className="px-6 py-3 rounded-xl border border-gray-300 font-semibold hover:bg-gray-100 transition text-center"
                >
                  View Stores
                </a>
              </div>
            </div>

            {/* IMAGE */}
            <div className="relative">
              <div className="absolute inset-0 bg-indigo-200 blur-3xl opacity-30 rounded-3xl" />
              <img
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80"
                className="relative rounded-3xl shadow-xl w-full h-[260px] sm:h-[360px] lg:h-[420px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-4xl font-bold text-center mb-10 mt-10">
            E-Commerce Features
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div
                key={i}
                className="p-6 sm:p-8 rounded-2xl border border-gray-200 hover:shadow-md transition bg-white"
              >
                <div className="mb-4">{f.icon}</div>
                <h3 className="text-xl font-bold mb-2">{f.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PLATFORMS */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl sm:text-4xl font-bold text-center mb-10 mt-15">
            Platforms We Work With
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {platforms.map((p, i) => (
              <div
                key={i}
                className="p-6 rounded-xl border border-gray-200 text-center hover:shadow-md transition"
              >
                <h3 className="text-xl font-bold text-indigo-600">{p.name}</h3>
                <p className="text-gray-600 text-sm">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ADVANCED */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 mt-10">
          <h2 className="text-2xl sm:text-4xl font-bold text-center mb-10">
            Advanced Capabilities
          </h2>

          <div className="grid sm:grid-cols-2 gap-4">
            {advanced.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-indigo-600 mt-1" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STORIES */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 mt-10 ">
          <h2 className="text-2xl sm:text-4xl font-bold text-center mb-10">
            Success Stories
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {stories.map((s, i) => (
              <div
                key={i}
                className="p-8 rounded-2xl bg-indigo-50 border border-indigo-100 text-center"
              >
                <div className="text-4xl font-bold text-indigo-600 mb-2">
                  {s.revenue}
                </div>
                <p className="font-semibold">{s.metric}</p>
                <p className="text-gray-600 text-sm">{s.store}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-indigo-600 text-white rounded-3xl p-10 text-center mt-10 mb-15">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Launch Your Store?
            </h2>
            <p className="mb-6 text-indigo-100">
              Start selling online with a powerful e-commerce platform
            </p>

            <a
              href="/#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-indigo-700 rounded-xl font-semibold hover:bg-gray-100 transition"
            >
              Start Your Store <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}