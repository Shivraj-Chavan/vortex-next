// "use client";

// import { Menu, X, ChevronDown, Sun, Moon } from "lucide-react";
// import { useState, useEffect } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { useTheme } from "next-themes";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   // const [isDark, setIsDark] = useState(false);
//   const { theme, setTheme, resolvedTheme } = useTheme();
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 10);
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   // useEffect(() => {
//   //   const savedTheme = localStorage.getItem("theme");
//   //   const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
//   //   const theme = savedTheme ?? (prefersDark ? "dark" : "light");

//   //   if (theme === "dark") {
//   //     document.documentElement.classList.add("dark");
//   //     setIsDark(true);
//   //   } else {
//   //     document.documentElement.classList.remove("dark");
//   //     setIsDark(false);
//   //   }
//   // }, []);

//   // const toggleTheme = () => {
//   //   const newTheme = isDark ? "light" : "dark";

//   //   if (newTheme === "dark") {
//   //     document.documentElement.classList.add("dark");
//   //   } else {
//   //     document.documentElement.classList.remove("dark");
//   //   }

//   //   localStorage.setItem("theme", newTheme);
//   //   setIsDark(!isDark);
//   // };



// useEffect(() => {
//   setMounted(true);
// }, []);

// if (!mounted) return null;

// const isDark = resolvedTheme === "dark";

// const toggleTheme = () => {
//   setTheme(isDark ? "light" : "dark");
// };


//   return (
//     <header
//       className={`
//         fixed top-0 w-full z-50 transition-all duration-300
//         ${
//           scrolled
//             ? "bg-white/90 dark:bg-[#0b1020]/90 backdrop-blur-xl border-b border-gray-200 dark:border-white/10 shadow-lg"
//             : "bg-transparent"
//         }
//       `}
//     >
//       <div className="max-w-7xl mx-auto px-6 py-4">
//         <div className="flex justify-between items-center">

//           <Link href="/" className="flex items-center gap-3 group">
//             <Image
//               src="/logo.png"
//               alt="Vortex Logo"
//               width={40}
//               height={40}
//               priority
//               className="rounded-xl"
//             />
//             <span className="font-bold text-lg">
//               <span className="text-gray-900 dark:text-white">Vortex Web </span>
//               <span className="bg-gradient-to-r from-indigo-600 to-blue-600 dark:from-indigo-400 dark:to-blue-400 bg-clip-text text-transparent">
//                 Technologies
//               </span>
//             </span>
//           </Link>

//           <nav className="hidden md:flex items-center gap-8">
//             <Link
//               href="/"
//               className="text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors relative group"
//             >
//               Home
//               <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-blue-600 group-hover:w-full transition-all duration-300" />
//             </Link>

//             <Link
//               href="/#about"
//               className="text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors relative group"
//             >
//               About
//               <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-blue-600 group-hover:w-full transition-all duration-300" />
//             </Link>

//             <Link
//               href="/#portfolio"
//               className="text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors relative group"
//             >
//               Portfolio
//               <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-blue-600 group-hover:w-full transition-all duration-300" />
//             </Link>

//             <Link
//               href="/blog"
//               className="text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors relative group"
//             >
//               Blog
//               <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-blue-600 group-hover:w-full transition-all duration-300" />
//             </Link>

//             <Link
//               href="/#contact"
//               className="text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors relative group"
//             >
//               Contact
//               <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-blue-600 group-hover:w-full transition-all duration-300" />
//             </Link>


//             <div className="relative group">
//               <div className="flex items-center gap-1 text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 cursor-pointer font-medium">
//                 Services <ChevronDown size={16} />
//               </div>
//               <div className="absolute top-10 left-0 w-56 bg-white dark:bg-[#0f172a] rounded-2xl shadow-xl border border-gray-200 dark:border-white/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
//                 <Link
//                   href="/services/web-development"
//                   className="block px-5 py-3 text-gray-700 dark:text-gray-200 hover:bg-indigo-50 dark:hover:bg-white/5 first:rounded-t-2xl"
//                 >
//                   Web Development
//                 </Link>
//                 <Link
//                   href="/services/mobile-app"
//                   className="block px-5 py-3 text-gray-700 dark:text-gray-200 hover:bg-indigo-50 dark:hover:bg-white/5"
//                 >
//                   Mobile Apps
//                 </Link>
//                 <Link
//                   href="/services/digital-marketing"
//                   className="block px-5 py-3 text-gray-700 dark:text-gray-200 hover:bg-indigo-50 dark:hover:bg-white/5"
//                 >
//                   Digital Marketing
//                 </Link>
//                 <Link
//                   href="/services/ecommerce"
//                   className="block px-5 py-3 text-gray-700 dark:text-gray-200 hover:bg-indigo-50 dark:hover:bg-white/5"
//                 >
//                   E-Commerce
//                 </Link>
//                 <Link
//                   href="/services/web-design"
//                   className="block px-5 py-3 text-gray-700 dark:text-gray-200 hover:bg-indigo-50 dark:hover:bg-white/5"
//                 >
//                   Web Design
//                 </Link>
//                 <Link
//                   href="/services/domain-hosting"
//                   className="block px-5 py-3 text-gray-700 dark:text-gray-200 hover:bg-indigo-50 dark:hover:bg-white/5 last:rounded-b-2xl"
//                 >
//                   Domain Hosting
//                 </Link>
//               </div>
//             </div>

//             <button
//               onClick={toggleTheme}
//               className="p-2 rounded-xl bg-gray-100 dark:bg-gray-800 hover:scale-110 transition-transform"
//               aria-label="Toggle theme"
//             >
//               {isDark ? (
//                 <Sun className="w-5 h-5 text-yellow-400" />
//               ) : (
//                 <Moon className="w-5 h-5 text-gray-700" />
//               )}
//             </button>

//             <Link
//               href="/#contact"
//               className="px-6 py-2.5 rounded-xl font-semibold bg-gradient-to-r from-indigo-600 to-blue-600 text-white hover:scale-105 transition-all shadow-lg"
//             >
//               Get Started
//             </Link>
//           </nav>

//           <div className="md:hidden flex items-center gap-3">
//             <button
//               onClick={toggleTheme}
//               className="p-2 rounded-xl bg-gray-100 dark:bg-gray-800"
//               aria-label="Toggle theme"
//             >
//               {isDark ? (
//                 <Sun className="w-5 h-5 text-yellow-400" />
//               ) : (
//                 <Moon className="w-5 h-5 text-gray-700" />
//               )}
//             </button>
//             <button
//               onClick={() => setOpen(!open)}
//               className="p-2 rounded-xl bg-gray-100 dark:bg-gray-800"
//             >
//               {open ? <X /> : <Menu />}
//             </button>
//           </div>
//         </div>

//         {open && (
//           <div className="md:hidden mt-4 pb-4 space-y-3">
//             <Link
//               href="/"
//               onClick={() => setOpen(false)}
//               className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-indigo-50 dark:hover:bg-white/5 rounded-xl"
//             >
//               Home
//             </Link>
//             <Link
//               href="/#about"
//               onClick={() => setOpen(false)}
//               className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-indigo-50 dark:hover:bg-white/5 rounded-xl"
//             >
//               About
//             </Link>
//             <Link
//               href="/#portfolio"
//               onClick={() => setOpen(false)}
//               className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-indigo-50 dark:hover:bg-white/5 rounded-xl"
//             >
//               Portfolio
//             </Link>
//             <Link
//               href="/#blog"
//               onClick={() => setOpen(false)}
//               className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-indigo-50 dark:hover:bg-white/5 rounded-xl"
//             >
//               Blog
//             </Link>
//             <Link
//               href="/#contact"
//               onClick={() => setOpen(false)}
//               className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-indigo-50 dark:hover:bg-white/5 rounded-xl"
//             >
//               Contact
//             </Link>
//             <div className="px-4 py-2 text-gray-600 dark:text-gray-400 font-semibold">
//               Services
//             </div>
//             <Link
//               href="/services/web-development"
//               onClick={() => setOpen(false)}
//               className="block pl-8 pr-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-white/5 rounded-xl"
//             >
//               Web Development
//             </Link>
//             <Link
//               href="/services/mobile-app"
//               onClick={() => setOpen(false)}
//               className="block pl-8 pr-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-white/5 rounded-xl"
//             >
//               Mobile Apps
//             </Link>
//             <Link
//               href="/services/digital-marketing"
//               onClick={() => setOpen(false)}
//               className="block pl-8 pr-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-white/5 rounded-xl"
//             >
//               Digital Marketing
//             </Link>
//             <Link
//               href="/services/ecommerce"
//               onClick={() => setOpen(false)}
//               className="block pl-8 pr-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-white/5 rounded-xl"
//             >
//               E-Commerce
//             </Link>
//             <Link
//               href="/services/web-design"
//               onClick={() => setOpen(false)}
//               className="block pl-8 pr-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-white/5 rounded-xl"
//             >
//               Web Design
//             </Link>
//             <Link
//               href="/services/domain-hosting"
//               onClick={() => setOpen(false)}
//               className="block pl-8 pr-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-white/5 rounded-xl"
//             >
//               Domain Hosting
//             </Link>
//             <Link
//               href="/#contact"
//               onClick={() => setOpen(false)}
//               className="block mx-4 mt-4 px-6 py-2.5 text-center rounded-xl font-semibold bg-gradient-to-r from-indigo-600 to-blue-600 text-white"
//             >
//               Get Started
//             </Link>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// }



"use client";

import { Menu, X, ChevronDown, Sun, Moon } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const { setTheme, resolvedTheme } = useTheme();
  const menuRef = useRef(null);
  const servicesRef = useRef(null);

  const isDark = resolvedTheme === "dark";

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark"); 
  };

  // Scroll effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target)) {
        setServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-[#0b1020]/90 backdrop-blur-xl border-b border-gray-200 dark:border-white/10 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Vortex Logo"
              width={40}
              height={40}
              priority
              className="rounded-xl"
            />
            <span className="font-bold text-lg hidden sm:block">
              <span className="text-gray-900 dark:text-white">
                Vortex Web{" "}
              </span>
              <span className="bg-gradient-to-r from-indigo-600 to-blue-600 dark:from-indigo-400 dark:to-blue-400 bg-clip-text text-transparent">
                Technologies
              </span>
            </span>
          </Link>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            // className="md:hidden p-2 rounded-xl bg-gray-100 dark:bg-gray-800"
            className={`md:hidden p-2 rounded-xl transition ${
              scrolled
                ? "bg-gray-100 dark:bg-gray-800"
                : "bg-white/20 backdrop-blur-md"
            }`}
          >
           {open ? (
            <X className="text-gray-900 dark:text-white" />
          ) : (
            <Menu
              className={`${
                scrolled
                  ? "text-gray-900 dark:text-white" 
                  : "text-white"
              }`}
            />
          )}
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <NavLink href="/" label="Home" />
            <NavLink href="/#about" label="About" />
            <NavLink href="/#portfolio" label="Portfolio" />
            <NavLink href="/blog" label="Blog" />
            <NavLink href="/#contact" label="Contact" />

            {/* Desktop Services */}
            <div className="relative" ref={servicesRef}>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center gap-1 font-medium text-gray-800 dark:text-gray-200"
              >
                Services
                <ChevronDown
                  size={16}
                  className={`transition-transform ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {servicesOpen && (
                <div className="absolute top-10 left-0 w-56 bg-white dark:bg-[#0f172a] rounded-2xl shadow-xl border border-gray-200 dark:border-white/10">
                  <ServiceLinks setOpen={setServicesOpen} />
                </div>
              )}
            </div>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-gray-100 dark:bg-gray-800"
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-gray-700" />
              )}
            </button>

            <Link
              href="/#contact"
              className="px-6 py-2.5 rounded-xl font-semibold bg-gradient-to-r from-indigo-600 to-blue-600 text-white"
            >
              Get Started
            </Link>
          </nav>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <div className="md:hidden mt-4 space-y-2 border-t border-gray-200 dark:border-white/10 pt-4">
            <MobileLink href="/" label="Home" setOpen={setOpen} />
            <MobileLink href="/#about" label="About" setOpen={setOpen} />
            <MobileLink href="/#portfolio" label="Portfolio" setOpen={setOpen} />
            <MobileLink href="/blog" label="Blog" setOpen={setOpen} />
            <MobileLink href="/#contact" label="Contact" setOpen={setOpen} />

            {/* Mobile Services Dropdown */}
            <div>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex justify-between items-center w-full px-4 py-2 font-medium text-gray-800 dark:text-gray-200"
              >
                Services
                <ChevronDown
                  size={16}
                  className={`transition-transform ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {servicesOpen && (
                <div className="mt-2 mx-3 p-3 rounded-xl bg-white dark:bg-[#0f172a] shadow-md border border-gray-200 dark:border-white/10 space-y-1 transition-all duration-300">
                  <ServiceLinks
                    setOpen={() => {
                      setOpen(false);
                      setServicesOpen(false);
                    }}
                  />
                </div>
              )}
            </div>

            <button
              onClick={toggleTheme}
              className="w-full mt-4 px-4 py-2 rounded-xl bg-gray-100 dark:bg-gray-800"
            >
              {isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            </button>
          </div>
        )}
      </div>
    </header>
  );
}

/* ---------- Reusable Components ---------- */

function NavLink({ href, label }) {
  return (
    <Link href={href} className="font-medium">
      {label}
    </Link>
  );
}

function ServiceLinks({ setOpen }) {
  return (
    <>
      <ServiceLink href="/services/web-development" label="Web Development" setOpen={setOpen} />
      <ServiceLink href="/services/mobile-app" label="Mobile Apps" setOpen={setOpen} />
      <ServiceLink href="/services/digital-marketing" label="Digital Marketing" setOpen={setOpen} />
      <ServiceLink href="/services/ecommerce" label="E-Commerce" setOpen={setOpen} />
      <ServiceLink href="/services/web-design" label="Web Design" setOpen={setOpen} />
      <ServiceLink href="/services/domain-hosting" label="Domain Hosting" setOpen={setOpen} />
    </>
  );
}

function ServiceLink({ href, label, setOpen }) {
  return (
    <Link
      href={href}
      onClick={() => setOpen(false)}
      className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-indigo-50 dark:hover:bg-white/5 rounded-lg"
    >
      {label}
    </Link>
  );
}

function MobileLink({ href, label, setOpen }) {
  return (
    <Link
      href={href}
      onClick={() => setOpen(false)}
      className="block px-4 py-2 rounded-lg"
    >
      {label}
    </Link>
  );
}