"use client";

import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const servicesRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (
        servicesRef.current &&
        !servicesRef.current.contains(event.target as Node)
      ) {
        setServicesOpen(false);
      }
    };
  
    // DESKTOP ONLY
    if (window.innerWidth >= 768) {
      document.addEventListener("mousedown", handleClickOutside);
    }
  
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const closeMobileMenu = () => {
    setOpen(false);
    setServicesOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-md"
          : "bg-white/60 backdrop-blur-md"
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6">
        {/* TOP BAR */}
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3">
            <Image
              src="/logo.png"
              alt="Vortex Logo"
              width={38}
              height={38}
              priority
              className="rounded-xl"
            />
            <span className="font-bold text-sm sm:text-lg text-black">
              Vortex Web{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
                Technologies
              </span>
            </span>
          </Link>

          {/* HAMBURGER */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-xl border border-gray-200 bg-white"
          >
            {open ? (
              <X className="text-black w-5 h-5" />
            ) : (
              <Menu className="text-black w-5 h-5" />
            )}
          </button>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-8">
            <NavLink href="/" label="Home" />
            <NavLink href="/#about" label="About" />
            <NavLink href="/#portfolio" label="Portfolio" />
            <NavLink href="/blog" label="Blog" />
            <NavLink href="/#contact" label="Contact" />

            <div className="relative" ref={servicesRef}>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center gap-1 font-medium text-black"
              >
                Services <ChevronDown size={16} />
              </button>

              {servicesOpen && (
                <div className="absolute top-10 left-0 w-56 bg-white rounded-2xl shadow-xl border border-gray-200">
                  <ServiceLinks onClose={() => setServicesOpen(false)} />
                </div>
              )}
            </div>

            <Link
              href="/#contact"
              className="px-6 py-2.5 rounded-xl font-semibold bg-indigo-600 text-white"
            >
              Get Started
            </Link>
          </nav>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <div className="md:hidden mt-3 space-y-2 border-t border-gray-200 pt-3 bg-white text-black rounded-b-xl">
            <MobileLink href="/" label="Home" onClose={closeMobileMenu} />
            <MobileLink href="/#about" label="About" onClose={closeMobileMenu} />
            <MobileLink
              href="/#portfolio"
              label="Portfolio"
              onClose={closeMobileMenu}
            />
            <MobileLink href="/blog" label="Blog" onClose={closeMobileMenu} />
            <MobileLink
              href="/#contact"
              label="Contact"
              onClose={closeMobileMenu}
            />

            {/* SERVICES MOBILE */}
            <div>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex justify-between items-center w-full px-4 py-2 font-medium text-black"
              >
                Services
                <ChevronDown
                  size={16}
                  className={`${servicesOpen ? "rotate-180" : ""}`}
                />
              </button>

              {servicesOpen && (
                <div className="mt-2 mx-3 p-3 rounded-xl bg-white shadow-md border border-gray-200 space-y-1">
                  <ServiceLinks onClose={closeMobileMenu} />
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

/* ================= COMPONENTS ================= */

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="font-medium text-black hover:text-indigo-600 transition"
    >
      {label}
    </Link>
  );
}

function ServiceLinks({
  onClose,
}: {
  onClose?: () => void;
}) {
  return (
    <>
      <ServiceLink
        href="/services/web-development"
        label="Web Development"
        onClose={onClose}
      />
      <ServiceLink
        href="/services/mobile-app"
        label="Mobile Apps"
        onClose={onClose}
      />
      <ServiceLink
        href="/services/digital-marketing"
        label="Digital Marketing"
        onClose={onClose}
      />
      <ServiceLink
        href="/services/ecommerce"
        label="E-Commerce"
        onClose={onClose}
      />
      <ServiceLink
        href="/services/web-design"
        label="Web Design"
        onClose={onClose}
      />
      <ServiceLink
        href="/services/domain-hosting"
        label="Domain Hosting"
        onClose={onClose}
      />
      <ServiceLink
        href="/services/data-analysis"
        label="Data Analysis"
        onClose={onClose}
      />
    </>
  );
}
function ServiceLink({
  href,
  label,
  onClose,
}: {
  href: string;
  label: string;
  onClose?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={() => {
        // close menu AFTER navigation starts
        requestAnimationFrame(() => {
          onClose?.();
        });
      }}
      className="block px-4 py-2 text-black hover:bg-gray-100 rounded-lg"
    >
      {label}
    </Link>
  );
}

function MobileLink({
  href,
  label,
  onClose,
}: {
  href: string;
  label: string;
  onClose?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={() => onClose?.()}
      className="block px-4 py-2 text-black hover:bg-gray-100 rounded-lg"
    >
      {label}
    </Link>
  );
}