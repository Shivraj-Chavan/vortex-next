"use client";

import {
  Code,
  Smartphone,
  Palette,
  Megaphone,
  ShoppingCart,
  Server,
  Sparkles,
  X,
  Send,
} from "lucide-react";
import { useState } from "react";

const services = [
  {
    title: "Web Development",
    desc: "Modern, responsive and scalable websites built with latest technologies like React, Next.js & Node.js.",
    icon: Code,
    gradient: "from-indigo-500 to-blue-500",
    link: "/services/web-development",
  },
  {
    title: "Mobile App Development",
    desc: "High-performance native and cross-platform mobile applications for iOS and Android.",
    icon: Smartphone,
    gradient: "from-purple-500 to-pink-500",
    link: "/services/mobile-app",
  },
  {
    title: "Web Design",
    desc: "Beautiful, intuitive and user-friendly interface designs that create exceptional experiences.",
    icon: Palette,
    gradient: "from-blue-500 to-cyan-500",
    link: "/services/web-design",
  },
  {
    title: "Digital Marketing",
    desc: "Complete SEO, social media marketing and branding strategies to grow your online presence.",
    icon: Megaphone,
    gradient: "from-orange-500 to-red-500",
    link: "/services/digital-marketing",
  },
  {
    title: "E-Commerce Solutions",
    desc: "Full-featured online stores with secure payment gateways, inventory management and analytics.",
    icon: ShoppingCart,
    gradient: "from-green-500 to-emerald-500",
    link: "/services/ecommerce",
  },
  {
    title: "Domain & Hosting",
    desc: "Reliable domain registration and scalable web hosting with 99.9% uptime guarantee.",
    icon: Server,
    gradient: "from-violet-500 to-purple-500",
    link: "/services/domain-hosting",
  },
];

export default function Services() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const openModal = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
    setSubmitSuccess(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
    setFormData({ name: "", email: "", phone: "", message: "" });
    setSubmitSuccess(false);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Enquiry submitted:", {
      service: selectedService?.title,
      ...formData,
    });

    setIsSubmitting(false);
    setSubmitSuccess(true);

    setTimeout(() => {
      closeModal();
    }, 4000);
  };

  return (
    <>
      <section
        id="services"
        className="relative bg-transparent text-white py-20"
      >
        {/* Glow Effects */}
        <div className="pointer-events-none absolute  top-0 left-1/4 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[140px]" />
        <div className="pointer-events-none absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[140px]" />

        <div className="relative max-w-7xl mx-auto px-6 mt-15">
          <div className="text-center mb-14 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 shadow-lg">
              <Sparkles className="w-4 h-4 text-indigo-400 animate-pulse" />
              <span className="text-sm font-semibold text-indigo-300">
                Our Services
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              <span>Best Website Development</span>
              <br />
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                Solutions to Achieve Business Goals
              </span>
            </h2>

            <p className="text-gray-300 max-w-3xl mx-auto text-sm sm:text-base">
              We provide end-to-end digital solutions with cutting-edge
              technology to help your business grow and succeed online.
            </p>
          </div>

          {/* Cards */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <div key={i} className="group relative">
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-10 rounded-3xl blur-xl transition duration-500`}
                />

                <div className="relative bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-7 hover:scale-105 hover:shadow-2xl transition duration-500">
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-5 shadow-lg`}
                  >
                    <service.icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-lg font-bold mb-3">
                    {service.title}
                  </h3>

                  <p className="text-sm text-gray-400 leading-relaxed mb-5">
                    {service.desc}
                  </p>

                  <div className="flex items-center justify-between">
                    <a
                      href={service.link}
                      className="text-sm font-semibold text-indigo-400 hover:underline"
                    >
                      Learn More →
                    </a>

                    <button
                      onClick={() => openModal(service)}
                      className={`px-4 py-2 text-xs font-semibold rounded-lg bg-gradient-to-r ${service.gradient} hover:scale-105 transition`}
                    >
                      Enquire
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={closeModal}
          />

          <div className="relative w-full max-w-lg bg-[#0f172a] border border-white/10 rounded-3xl p-8 shadow-2xl text-white">
            <button
              onClick={closeModal}
              className="absolute top-5 right-5 text-gray-400 hover:text-white"
            >
              <X />
            </button>

            {submitSuccess ? (
              <div className="text-center py-10">
                <h3 className="text-xl font-bold mb-3">
                  Enquiry Submitted!
                </h3>
                <p className="text-gray-400">
                  We'll contact you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-xl font-bold mb-4">
                  Enquire About {selectedService?.title}
                </h3>

                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 focus:ring-2 focus:ring-indigo-500 outline-none"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email (Optional)"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 focus:ring-2 focus:ring-indigo-500 outline-none"
                />

                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 focus:ring-2 focus:ring-indigo-500 outline-none"
                />

                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 focus:ring-2 focus:ring-indigo-500 outline-none resize-none"
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 rounded-xl font-bold bg-gradient-to-r ${selectedService?.gradient} hover:scale-105 transition flex items-center justify-center gap-2`}
                >
                  {isSubmitting ? "Sending..." : "Send Enquiry"}
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}