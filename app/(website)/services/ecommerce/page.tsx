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
      icon: <ShoppingCart className="w-10 h-10 text-blue-400" />,
      title: "Product Management",
      description:
        "Easy-to-use admin panel for managing products, categories, inventory, and pricing with bulk operations.",
    },
    {
      icon: <CreditCard className="w-10 h-10 text-green-400" />,
      title: "Secure Payments",
      description:
        "Integrate multiple payment gateways including Stripe, PayPal, and credit cards with PCI compliance.",
    },
    {
      icon: <Truck className="w-10 h-10 text-purple-400" />,
      title: "Shipping Integration",
      description:
        "Real-time shipping rates, order tracking, and integration with major carriers like FedEx and UPS.",
    },
    {
      icon: <Shield className="w-10 h-10 text-red-400" />,
      title: "Security & SSL",
      description:
        "Enterprise-grade security with SSL certificates, fraud detection, and secure checkout processes.",
    },
    {
      icon: <Smartphone className="w-10 h-10 text-yellow-400" />,
      title: "Mobile Responsive",
      description:
        "Fully responsive design optimized for mobile shopping with touch-friendly interfaces.",
    },
    {
      icon: <Package className="w-10 h-10 text-indigo-400" />,
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
    <div
      className="min-h-screen transition-colors duration-300 pt-[88px] relative overflow-hidden
        bg-[#0b0f1a]
        bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)]
        bg-[size:24px_24px]"
    >
    
      <div className="pointer-events-none absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-br from-blue-500/15 to-purple-500/15 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 left-1/4 w-96 h-96 bg-gradient-to-br from-indigo-500/10 to-blue-500/10 rounded-full blur-3xl" />

      
      <section className="relative overflow-hidden pt-10 sm:pt-14 pb-16 sm:pb-20">
        <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur border border-white/10 shadow-sm">
                <ShoppingCart className="w-4 h-4 text-blue-400" />
                <span className="text-sm font-semibold text-blue-200">E-Commerce Solutions</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white">
                Complete
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  E-Commerce
                </span>
                <br />
                Development
              </h1>

              <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-xl">
                Launch your online store with powerful e-commerce platforms. From product catalogs to
                secure payments, we build complete solutions that drive sales and delight customers.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a
                  href="/#contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold
                    bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700
                    shadow-lg hover:scale-[1.02] transition-all"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </a>

                <a
                  href="#stores"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold
                    border border-white/15 text-white/90 hover:bg-white/5 transition-all"
                >
                  View Stores
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur-3xl opacity-20" />
              <div className="relative overflow-hidden rounded-3xl shadow-2xl border border-white/10 bg-white/5 backdrop-blur">
                <img
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80"
                  alt="E-Commerce"
                  className="w-full h-[280px] sm:h-[360px] lg:h-[420px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>


      <section
        id="features"
        className="pt-20 sm:pt-24 pb-24 sm:pb-28 bg-transparent scroll-mt-[88px]"
      >
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">E-Commerce Features</h2>
            <p className="text-base sm:text-lg text-gray-300">
              Everything you need to sell, scale, and retain customers
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((f, i) => (
              <div
                key={i}
                className="bg-white/5 backdrop-blur p-7 sm:p-8 rounded-2xl border border-white/10
                  hover:border-blue-400/30 hover:shadow-lg transition-all"
              >
                <div className="mb-4">{f.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{f.title}</h3>
                <p className="text-gray-300 leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

     
      <section
        id="platforms"
        className="pt-16 sm:pt-20 pb-24 sm:pb-28 bg-transparent scroll-mt-[88px]"
      >
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="mt-6 text-3xl sm:text-4xl font-bold text-white mb-3">
              Platforms We Work With
            </h2>
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
              We specialize in building custom e-commerce solutions on industry-leading platforms
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {platforms.map((p, i) => (
              <div
                key={i}
                className="bg-white/5 backdrop-blur p-7 sm:p-8 rounded-2xl border border-white/10 text-center
                  hover:border-indigo-400/30 hover:shadow-lg hover:scale-[1.01] transition-all"
              >
                <h3 className="text-2xl font-extrabold mb-2 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  {p.name}
                </h3>
                <p className="text-gray-300">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="capabilities"
        className="pt-28 sm:pt-32 pb-20 sm:pb-24 bg-transparent scroll-mt-[88px]"
      >
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="mt-6 text-3xl sm:text-4xl font-bold text-white mb-3">
              Advanced E-Commerce Capabilities
            </h2>
            <p className="text-base sm:text-lg text-gray-300">
              High-conversion features that increase revenue and retention
            </p>
          </div>

          <div className="max-w-5xl mx-auto grid sm:grid-cols-2 gap-x-10 gap-y-5">
            {advanced.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-200">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      <section
  id="stores"
  className="pt-32 sm:pt-36 pb-20 sm:pb-24 bg-transparent scroll-mt-[88px]"
>

        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
           <h2 className="mt-6 text-3xl sm:text-4xl font-bold text-white mb-3">
  E-Commerce Success Stories
</h2>

            <p className="text-base sm:text-lg text-gray-300">
              Real outcomes from stores we’ve helped grow
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {stories.map((s, i) => (
              <div
                key={i}
                className="rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600
                  text-white px-8 py-10 text-center shadow-xl border border-white/10"
              >
                <div className="text-5xl font-extrabold mb-3">{s.revenue}</div>
                <p className="text-xl mb-2">{s.metric}</p>
                <p className="text-blue-100">{s.store}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    
      <section className="py-14 sm:py-16 transition-colors">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mt-6 sm:mt-8 rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white px-6 sm:px-10 py-12 sm:py-14 text-center shadow-xl">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to Launch Your Online Store?
            </h2>
            <p className="text-base sm:text-lg mb-7 text-blue-100 max-w-2xl mx-auto">
              Start selling online with a powerful e-commerce platform
            </p>

            <a
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold bg-white text-blue-700 hover:bg-gray-100 shadow-lg hover:scale-[1.02] transition-all"
            >
              Start Your Store
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
