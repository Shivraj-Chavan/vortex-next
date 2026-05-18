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
    gradient: "from-indigo-500 to-blue-500",
    link: "/services/mobile-app",
  },
  {
    title: "Web Design",
    desc: "Beautiful, intuitive and user-friendly interface designs that create exceptional experiences.",
    icon: Palette,
    gradient: "from-indigo-500 to-blue-500",
    link: "/services/web-design",
  },
  {
    title: "Digital Marketing",
    desc: "Complete SEO, social media marketing and branding strategies to grow your online presence.",
    icon: Megaphone,
    gradient: "from-indigo-500 to-blue-500",
    link: "/services/digital-marketing",
  },
  {
    title: "E-Commerce Solutions",
    desc: "Full-featured online stores with secure payment gateways, inventory management and analytics.",
    icon: ShoppingCart,
    gradient: "from-indigo-500 to-blue-500",
    link: "/services/ecommerce",
  },
  {
    title: "Domain & Hosting",
    desc: "Reliable domain registration and scalable web hosting with 99.9% uptime guarantee.",
    icon: Server,
    gradient: "from-indigo-500 to-blue-500",
    link: "/services/domain-hosting",
  },
  {
    title: "Data Analysis",
    desc: "Turn raw data into actionable insights with dashboards, reports, and analytics systems.",
    icon: Server,
    gradient: "from-indigo-500 to-blue-500",
    link: "/services/data-analysis",
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
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1200));

    console.log("Enquiry submitted:", {
      service: selectedService?.title,
      ...formData,
    });

    setIsSubmitting(false);
    setSubmitSuccess(true);

    setTimeout(closeModal, 3000);
  };

  return (
    <>
      {/* PAGE */}
      <section
        id="services"
        className="relative bg-white text-black py-16 sm:py-20 overflow-hidden "
      >
        {/* glow */}
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-indigo-200 blur-3xl opacity-40 rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-200 blur-3xl opacity-40 rounded-full" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          {/* HEADER */}
          <div className="text-center mb-12 space-y-4 mt-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100">
              <Sparkles className="w-4 h-4 text-indigo-500 animate-pulse" />
              <span className="text-sm font-semibold text-indigo-600">
                Our Services
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold leading-tight">
              Best Website Development
              <br />
              <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
                Solutions for Business Growth
              </span>
            </h2>

            <p className="text-gray-600 max-w-2xl mx-auto">
              End-to-end digital solutions to scale your business online.
            </p>
          </div>

          {/* CARDS */}
          <div className="grid gap-6 grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 mb-10">
            {services.map((service, i) => (
              <div
                key={i}
                className="group bg-white border border-gray-200 rounded-2xl p-6
                hover:shadow-lg hover:-translate-y-1 transition"
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-r ${service.gradient}
                  flex items-center justify-center text-white mb-4`}
                >
                  <service.icon className="w-6 h-6" />
                </div>

                <h3 className="text-lg font-bold mb-2">
                  {service.title}
                </h3>

                <p className="text-sm text-gray-600 mb-4">
                  {service.desc}
                </p>

                <div className="flex justify-between items-center">
                  <a
                    href={service.link}
                    className="text-sm text-indigo-600 font-semibold hover:underline"
                  >
                    Learn More →
                  </a>

                  <button
                    onClick={() => openModal(service)}
                    className={`px-3 py-2 text-xs rounded-lg text-white bg-gradient-to-r ${service.gradient}`}
                  >
                    Enquire
                  </button>
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
            className="absolute inset-0 bg-black/40"
            onClick={closeModal}
          />

          <div className="relative w-full max-w-lg bg-white rounded-2xl p-6 shadow-xl text-black">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-500"
            >
              <X />
            </button>

            {submitSuccess ? (
              <div className="text-center py-10">
                <h3 className="text-xl font-bold">
                  Enquiry Submitted!
                </h3>
                <p className="text-gray-500 mt-2">
                  We will contact you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-xl font-bold mb-2">
                  Enquire: {selectedService?.title}
                </h3>

                <input
                  name="name"
                  required
                  placeholder="Name"
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-200 rounded-lg"
                />

                <input
                  name="phone"
                  required
                  placeholder="Phone"
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-200 rounded-lg"
                />

                <textarea
                  name="message"
                  required
                  placeholder="Message"
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-200 rounded-lg"
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 rounded-lg text-white bg-gradient-to-r ${selectedService?.gradient}`}
                >
                  {isSubmitting ? "Sending..." : "Send Enquiry"}
                  <Send className="inline w-4 h-4 ml-2" />
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}