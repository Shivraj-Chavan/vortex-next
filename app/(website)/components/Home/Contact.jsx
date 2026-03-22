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
import { createContact } from "../../../lib/api.js"
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
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
      hasError = true;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      hasError = true;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      hasError = true;
    }

    if (formData.phone.trim() && !validatePhone(formData.phone)) {
      newErrors.phone = "Please enter a valid Indian phone number";
      hasError = true;
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
      hasError = true;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      hasError = true;
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
      hasError = true;
    }

    setErrors(newErrors);

    if (hasError) return;

    try {
      setLoading(true);
      await createContact(formData);
      toast.success("Saved successfully!");
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });

      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error("Contact form error:", error);
      alert("Failed to send message.");
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
      className="relative overflow-hidden text-white bg-transparent py-20"
    >
      {/* Glow Effects */}
      <div className="pointer-events-none absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[140px]" />

      <div className="relative max-w-7xl mx-auto px-6 mt-15">

        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-white/10 border border-indigo-200 dark:border-white/15 shadow-lg">
            <Sparkles className="w-4 h-4 text-indigo-600 dark:text-indigo-400 animate-pulse" />
            <span className="text-sm font-semibold text-indigo-700 dark:text-indigo-300">Get In Touch</span>
          </div>

          <h2 className="text-3xl lg:text-5xl font-bold leading-tight">
            <span className="text-gray-900 dark:text-white">Let's Start Your</span>
            <br />
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Digital Journey
            </span>
          </h2>
          <p className="text-base text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Are you looking for website design or SEO services? Feel free to get in touch with us. We are always ready to assist you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          <div className="space-y-6">
            <div className="space-y-5">
              <div 
                onClick={openMap}
                className="group relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-600 to-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-gray-900 dark:text-white mb-1">Our Office</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      Off No f-203, Second Floor<br />
                      Nerul Station Complex, above Union Bank<br />
                      Nerul West, Navi Mumbai - 400706
                    </p>
                    <span className="text-xs text-indigo-600 dark:text-indigo-400 mt-2 inline-block">
                      Click to open in Google Maps →
                    </span>
                  </div>
                </div>
              </div>
              <a 
                href="tel:+917400193799"
                className="group relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 hover:shadow-xl hover:scale-105 transition-all duration-300 block"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-gray-900 dark:text-white mb-1">Call Us</h3>
                    <span className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      +91 7400193799
                    </span>
                    <span className="text-xs text-indigo-600 dark:text-indigo-400 mt-2 block">
                      Click to call →
                    </span>
                  </div>
                </div>
              </a>

              <a 
                href="mailto:info@vortexwebtechnologies.com"
                className="group relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 hover:shadow-xl hover:scale-105 transition-all duration-300 block"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-gray-900 dark:text-white mb-1">Email Us</h3>
                    <span className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors break-all">
                      info@vortexwebtechnologies.com
                    </span>
                    <span className="text-xs text-indigo-600 dark:text-indigo-400 mt-2 block">
                      Click to send email →
                    </span>
                  </div>
                </div>
              </a>

              <div className="group relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 hover:shadow-xl hover:scale-105 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-green-600 to-emerald-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-gray-900 dark:text-white mb-1">Working Hours</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Mon - Sat: 9:00 AM - 7:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>


            <div className="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-2xl p-6 text-white">
              <div className="flex items-center gap-3 mb-2">
                <MessageSquare className="w-5 h-5" />
                <h3 className="text-base font-bold">Quick Response Guaranteed</h3>
              </div>
              <p className="text-sm text-indigo-100">
                We typically respond within 24 hours on business days. For urgent inquiries, please call us directly.
              </p>
            </div>
          </div>


          <div className="relative">
            <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-3xl p-8 shadow-2xl">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Send Us a Message
              </h3>

   
              {submitted && (
                <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0" />
                  <p className="text-sm text-green-800 dark:text-green-300">
                    Thank you! Your message has been sent successfully. We'll get back to you soon.
                  </p>
                </div>
              )}

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.name 
                        ? 'border-red-500 dark:border-red-500' 
                        : 'border-gray-300 dark:border-gray-700'
                    } bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all`}
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-600 dark:text-red-400 flex items-center gap-1">
                      <XCircle className="w-3 h-3" /> {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.email 
                        ? 'border-red-500 dark:border-red-500' 
                        : 'border-gray-300 dark:border-gray-700'
                    } bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all`}
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-600 dark:text-red-400 flex items-center gap-1">
                      <XCircle className="w-3 h-3" /> {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.phone 
                        ? 'border-red-500 dark:border-red-500' 
                        : 'border-gray-300 dark:border-gray-700'
                    } bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all`}
                    placeholder="+91 9876543210"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-xs text-red-600 dark:text-red-400 flex items-center gap-1">
                      <XCircle className="w-3 h-3" /> {errors.phone}
                    </p>
                  )}
                  <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                    Enter 10-digit Indian mobile number (optional)
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.subject 
                        ? 'border-red-500 dark:border-red-500' 
                        : 'border-gray-300 dark:border-gray-700'
                    } bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all`}
                    placeholder="Website Development Inquiry"
                  />
                  {errors.subject && (
                    <p className="mt-1 text-xs text-red-600 dark:text-red-400 flex items-center gap-1">
                      <XCircle className="w-3 h-3" /> {errors.subject}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.message 
                        ? 'border-red-500 dark:border-red-500' 
                        : 'border-gray-300 dark:border-gray-700'
                    } bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all resize-none`}
                    placeholder="Tell us about your project..."
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-600 dark:text-red-400 flex items-center gap-1">
                      <XCircle className="w-3 h-3" /> {errors.message}
                    </p>
                  )}
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-bold text-base bg-gradient-to-r from-indigo-600 to-blue-600 text-white hover:from-indigo-700 hover:to-blue-700 shadow-xl hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <div className="bg-white dark:bg-gray-900 rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-2xl">
            <div className="w-full h-[450px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.681222566913!2d73.01756189999999!3d19.0337636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c3c1e0ae5903%3A0x27d03015632ac01!2sVortex%20Web%20Technologies%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1770191696719!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
                title="Vortex Web Technologies Office Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}