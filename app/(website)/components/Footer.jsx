"use client";

import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-white border-t border-gray-200">

      {/* subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb33_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb33_1px,transparent_1px)] bg-[size:24px_24px] opacity-60"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 mb-12">

          {/* LOGO + ABOUT */}
          <div className="space-y-6">

            <a href="#hero" className="flex items-center gap-3 group">
              <Image
                src="/logo.png"
                alt="Vortex Logo"
                width={40}
                height={40}
                className="rounded-xl"
              />

              <span className="font-bold text-lg">
                <span className="text-gray-900">Vortex Web</span>{" "}
                <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
                  Technologies
                </span>
              </span>
            </a>

            <p className="text-gray-600 text-sm leading-relaxed">
              Professional software development and digital solutions company delivering excellence since 2009.
            </p>

            {/* SOCIALS */}
            <div className="flex items-center gap-3 flex-wrap">

              <a
                href="https://www.facebook.com/profile.php?id=61584928449515"
                className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center text-gray-700 hover:bg-indigo-600 hover:text-white transition-all hover:scale-110"
              >
                <Facebook className="w-5 h-5" />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center text-gray-700 hover:bg-indigo-600 hover:text-white transition-all hover:scale-110"
              >
                <Instagram className="w-5 h-5" />
              </a>

              <a
                href="https://www.linkedin.com/company/vortex-web-technologies-pvt-ltd"
                className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center text-gray-700 hover:bg-indigo-600 hover:text-white transition-all hover:scale-110"
              >
                <Linkedin className="w-5 h-5" />
              </a>

            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-6">Quick Links</h3>

            <ul className="space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "#about" },
                { name: "Services", href: "#services" },
                { name: "Portfolio", href: "#portfolio" },
                { name: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-indigo-600 transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0 bg-indigo-600 group-hover:w-4 transition-all duration-300"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-6">Our Services</h3>

            <ul className="space-y-3">
              {[
                { name: "Web Development", link: "/services/web-development" },
                { name: "Mobile App Development", link: "/services/mobile-app" },
                { name: "Web Design", link: "/services/web-design" },
                { name: "Digital Marketing", link: "/services/digital-marketing" },
                { name: "E-Commerce Solutions", link: "/services/ecommerce" },
                { name: "Domain & Hosting", link: "/services/domain-hosting" },
              ].map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.link}
                    className="text-gray-600 hover:text-indigo-600 transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0 bg-indigo-600 group-hover:w-4 transition-all duration-300"></span>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-6">Contact Info</h3>

            <div className="space-y-4">

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-indigo-600 mt-1 flex-shrink-0" />
                <p className="text-sm text-gray-600 leading-relaxed">
                  Off No f-203, Second Floor<br />
                  Nerul West, Navi Mumbai<br />
                  Pin: 400706
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-indigo-600 flex-shrink-0" />
                <a
                  href="tel:+917400193799"
                  className="text-sm text-gray-600 hover:text-indigo-600 transition-colors"
                >
                  +91 7400 19 3799
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-indigo-600 flex-shrink-0" />
                <a
                  href="mailto:info@vortexwebtechnologies.com"
                  className="text-sm text-gray-600 hover:text-indigo-600 transition-colors break-all"
                >
                  info@vortexwebtechnologies.com
                </a>
              </div>

            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="pt-8 border-t border-gray-200">

          <div className="flex flex-col md:flex-row justify-between items-center gap-4">

            <p className="text-sm text-gray-600 text-center md:text-left">
              © {currentYear}{" "}
              <span className="font-semibold text-gray-900">
                Vortex Web Technologies
              </span>. All Rights Reserved.
            </p>

            <div className="flex items-center gap-6 text-sm flex-wrap justify-center">
              <a className="text-gray-600 hover:text-indigo-600 transition-colors" href="#">
                Privacy Policy
              </a>
              <a className="text-gray-600 hover:text-indigo-600 transition-colors" href="#">
                Terms of Service
              </a>
              <a className="text-gray-600 hover:text-indigo-600 transition-colors" href="#">
                Sitemap
              </a>
            </div>

          </div>

          <p className="text-xs text-center text-gray-500 mt-6">
            Designed & Developed with ❤️ by{" "}
            <span className="font-semibold text-indigo-600">
              Vortex Web Technologies
            </span>
          </p>

        </div>
      </div>
    </footer>
  );
}