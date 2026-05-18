"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Clock,
  MessageSquare,
  Sparkles,
  CheckCircle,
  XCircle,
} from "lucide-react";
import { createContact } from "../../../lib/api.js";
import toast from "react-hot-toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^(\+91|91)?[6-9]\d{9}$/;
    const cleanPhone = phone.replace(/[\s-]/g, "");
    return phoneRegex.test(cleanPhone);
  };

  const handleSubmit = async () => {
    let newErrors = {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    };
  
    let hasError = false;
  
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      hasError = true;
    }
  
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      hasError = true;
    }
  
    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
      hasError = true;
    }
  
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      hasError = true;
    }
  
    setErrors(newErrors);
    if (hasError) return;
  
    try {
      setLoading(true);
  
      const res = await createContact(formData);
  
      const data = res?.data;
  
      if (data?.success) {
        toast.success(data.message || "Message sent successfully");
  
        setSubmitted(true);
  
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
  
        setTimeout(() => setSubmitted(false), 4000);
      } else {
        toast.error(data?.message || "Failed to send message");
      }
    } catch (error) {
      console.error(error);
      toast.error(
        error?.response?.data?.message || "Server not responding"
      );
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const openMap = () => {
    window.open(
      "https://www.google.com/maps/search/?api=1&query=Nerul+Station+Complex+Navi+Mumbai+400706",
      "_blank"
    );
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-100"
    >
      {/* Glow Effects */}
      <div className="pointer-events-none absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-300/20 rounded-full blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-300/20 rounded-full blur-[140px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16">

        {/* HEADER */}
        <div className="text-center mb-10 sm:mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-indigo-200 shadow-md">
            <Sparkles className="w-4 h-4 text-indigo-600 animate-pulse" />
            <span className="text-sm font-semibold text-indigo-700">
              Get In Touch
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold leading-tight text-gray-900">
            Let's Start Your <br />
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Digital Journey
            </span>
          </h2>

          <p className="text-sm sm:text-base text-gray-600 max-w-3xl mx-auto">
            Are you looking for website design or SEO services? Feel free to get in touch with us.
          </p>
        </div>

        {/* GRID */}
        <div className="grid lg:grid-cols-2 gap-10 items-start">

          {/* LEFT SIDE */}
          <div className="space-y-6">

            <div className="space-y-5">

              <div
                onClick={openMap}
                className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition cursor-pointer"
              >
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-indigo-600 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Our Office</h3>
                    <p className="text-sm text-gray-600">
                      Nerul Station Complex, Navi Mumbai - 400706
                    </p>
                  </div>
                </div>
              </div>

              <a
                href="tel:+917400193799"
                className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition block"
              >
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-600 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Call Us</h3>
                    <span className="text-sm text-gray-600">
                      +91 7400193799
                    </span>
                  </div>
                </div>
              </a>

              <a
                href="mailto:info@vortexwebtechnologies.com"
                className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition block"
              >
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Email Us</h3>
                    <span className="text-sm text-gray-600 break-all">
                      info@vortexwebtechnologies.com
                    </span>
                  </div>
                </div>
              </a>

              <div className="bg-white border border-gray-200 rounded-2xl p-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-green-600 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Working Hours</h3>
                    <p className="text-sm text-gray-600">
                      Mon - Sat: 9AM - 7PM
                    </p>
                  </div>
                </div>
              </div>

            </div>

            <div className="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-2xl p-6 text-white">
              <div className="flex items-center gap-2 mb-2">
                <MessageSquare className="w-5 h-5" />
                <h3 className="font-bold">Quick Response Guaranteed</h3>
              </div>
              <p className="text-sm text-indigo-100">
                We respond within 24 hours.
              </p>
            </div>

          </div>

          {/* RIGHT SIDE (FORM - untouched logic) */}
          <div className="bg-white border border-gray-200 rounded-3xl p-6 sm:p-8 shadow-xl mb-15">

            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Send Us a Message
            </h3>

            {submitted && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <p className="text-sm text-green-800">
                  Message sent successfully!
                </p>
              </div>
            )}

            {/* FORM (UNCHANGED LOGIC) */}
            <div className="space-y-4 ">

              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className="w-full px-4 py-3 border border-gray-100 shadow rounded-xl bg-white text-gray-900"
              />

              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full px-4 py-3 border border-gray-100 shadow  rounded-xl bg-white text-gray-900"
              />

              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone"
                className="w-full px-4 py-3 border border-gray-100 shadow  rounded-xl bg-white text-gray-900"
              />

              <input
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="w-full px-4 py-3 border border-gray-100 shadow  rounded-xl bg-white text-gray-900"
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                rows={5}
                className="w-full px-4 py-3 border border-gray-100 shadow  rounded-xl bg-white text-gray-900"
              />

              <button
                onClick={handleSubmit}
                disabled={loading}
                className="w-full bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-3 rounded-xl font-bold"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}