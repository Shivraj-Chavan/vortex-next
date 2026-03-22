"use client";

import { Code, CheckCircle, ArrowRight, Sparkles } from "lucide-react";

export default function WebDevelopmentPage() {
  const features = [
    "Responsive & Mobile-First Design",
    "Fast Loading Speed Optimization",
    "SEO-Friendly Architecture",
    "Secure & Scalable Solutions",
    "Modern Tech Stack (React, Next.js)",
    "Cross-Browser Compatibility",
    "Clean & Maintainable Code",
    "Ongoing Support & Maintenance",
  ];

  const technologies = [
    { name: "React.js", icon: "⚛️" },
    { name: "Next.js", icon: "▲" },
    { name: "Node.js", icon: "🟢" },
    { name: "TypeScript", icon: "🔷" },
    { name: "Tailwind CSS", icon: "🎨" },
    { name: "MongoDB", icon: "🍃" },
  ];

  const process = [
    { step: "1", title: "Discovery", desc: "Understanding your requirements and goals" },
    { step: "2", title: "Design", desc: "Creating wireframes and UI/UX mockups" },
    { step: "3", title: "Development", desc: "Building with modern technologies" },
    { step: "4", title: "Testing", desc: "Ensuring quality and performance" },
    { step: "5", title: "Launch", desc: "Deploying and going live" },
    { step: "6", title: "Support", desc: "Ongoing maintenance and updates" },
  ];

return (
  <div
    className="min-h-screen transition-colors duration-300 pt-[88px] relative overflow-hidden
      bg-[#0b0f1a]
      bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)]
      bg-[size:24px_24px]"
  >
   
    <div className="pointer-events-none absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl" />
    <div className="pointer-events-none absolute -bottom-20 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-500/15 to-indigo-500/10 rounded-full blur-3xl" />

   

      <section className="relative overflow-hidden pt-10 sm:pt-14 pb-14 sm:pb-20">

     
       

        <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-gray-900/70 backdrop-blur border border-indigo-200/60 dark:border-indigo-800/60 shadow-sm">
                <Code className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                <span className="text-sm font-semibold text-indigo-700 dark:text-indigo-300">
                  Web Development
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                <span className="text-gray-900 dark:text-white">Professional</span>
                <br />
                <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 dark:from-indigo-400 dark:via-purple-400 dark:to-blue-400 bg-clip-text text-transparent">
                  Web Development
                </span>
                <br />
                <span className="text-gray-900 dark:text-white">Services</span>
              </h1>

              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl">
                Transform your ideas into powerful, scalable web applications with cutting-edge
                technologies and modern design principles.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 text-white hover:from-indigo-700 hover:to-blue-700 shadow-lg hover:scale-[1.02] transition-all"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </a>

                <a
                  href="#portfolio"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold border-2 border-indigo-600/90 dark:border-indigo-400/90 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-50 dark:hover:bg-indigo-950/30 transition-all"
                >
                  View Projects
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-3xl blur-3xl opacity-20" />
              <div className="relative overflow-hidden rounded-3xl shadow-2xl border border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80"
                  alt="Web Development"
                  className="w-full h-[280px] sm:h-[360px] lg:h-[420px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

 
      
        <section className="pt-16 sm:pt-20 pb-28 sm:pb-32 bg-transparent">


        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-5">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-200 dark:border-indigo-800 shadow-sm mb-4">
              <Sparkles className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              <span className="text-sm font-semibold text-indigo-700 dark:text-indigo-300">
                What You Get
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3 mt-12">
              Comprehensive Solutions
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
              Everything you need for success
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {features.map((feature, i) => (
              <div
                key={i}
                className="h-full flex items-start gap-3 p-5 sm:p-6 bg-gray-50 dark:bg-gray-800/70 rounded-2xl border border-gray-200/60 dark:border-gray-700/50 hover:shadow-lg transition-all"
              >
                <CheckCircle className="w-6 h-6 text-indigo-600 dark:text-indigo-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-800 dark:text-gray-200 font-medium leading-snug">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
  <div className="h-px bg-white/10 mb-10 sm:mb-14" />
</div>


     
      <section className="pt-16 sm:pt-20 pb-28 sm:pb-32 bg-transparent">



        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 mt-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3">
              Technologies We Use
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
              Modern and proven tech stack
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
            {technologies.map((tech, i) => (
              <div
                key={i}
                className="bg-white dark:bg-gray-900 p-6 sm:p-8 rounded-2xl border border-gray-200/70 dark:border-gray-800 hover:border-indigo-500/70 dark:hover:border-indigo-400/60 hover:shadow-lg transition-all text-center"
              >
                <div className="text-4xl sm:text-5xl mb-3">{tech.icon}</div>
                <h3 className="font-bold text-gray-900 dark:text-white text-sm sm:text-base">
                  {tech.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

    
      <section className="mt-12 sm:mt-16 pt-16 sm:pt-20 pb-28 sm:pb-32 transition-colors">


        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 mt-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="mt-6 text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3">
              Our Process
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
              From concept to launch
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-14">

            {process.map((item, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-950/30 dark:to-blue-950/30 p-6 sm:p-8 rounded-2xl border border-indigo-200/60 dark:border-indigo-900/60 hover:shadow-lg transition-all"
              >
                
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-md">
                  {item.step}
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mt-4 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    
      <section className="py-14 sm:py-16 transition-colors mt-10 sm:mt-14">


        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mt-10 sm:mt-14 rounded-3xl bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-6 sm:px-10 py-12 sm:py-14 text-center shadow-xl">

            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Build Your Website?</h2>
            <p className="text-base sm:text-lg mb-7 text-indigo-100 max-w-2xl mx-auto">
              Let's turn your vision into a stunning, high-performance website
            </p>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold bg-white text-indigo-700 hover:bg-gray-100 shadow-lg hover:scale-[1.02] transition-all"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
