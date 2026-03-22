"use client";

import { useState } from "react";
import { ExternalLink, Github, Sparkles } from "lucide-react";

const categories = ["All", "Web", "App", "E-Commerce", "UI/UX"];

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "E-Commerce",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
    description: "Modern online shopping platform with payment integration",
    tags: ["React", "Node.js", "MongoDB"],
    link: "#",
    github: "#",
  },
  {
    id: 2,
    title: "Mobile Banking App",
    category: "App",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
    description: "Secure mobile banking application with biometric auth",
    tags: ["React Native", "Firebase", "Redux"],
    link: "#",
    github: "#",
  },
  {
    id: 3,
    title: "Corporate Website",
    category: "Web",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    description: "Professional corporate website with CMS integration",
    tags: ["Next.js", "Tailwind", "Strapi"],
    link: "#",
    github: "#",
  },
  {
    id: 4,
    title: "Restaurant App UI",
    category: "UI/UX",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
    description: "Beautiful restaurant ordering app design",
    tags: ["Figma", "Design System", "Prototype"],
    link: "#",
    github: "#",
  },
  {
    id: 5,
    title: "SaaS Dashboard",
    category: "Web",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    description: "Analytics dashboard for SaaS products",
    tags: ["React", "D3.js"],
    link: "#",
    github: "#",
  },
  {
    id: 6,
    title: "Fitness Tracking App",
    category: "App",
    image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&q=80",
    description: "Health and fitness tracking mobile application",
    tags: ["Flutter", "Firebase"],
    link: "#",
    github: "#",
  },
  {
    id: 7,
    title: "Online Marketplace",
    category: "E-Commerce",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&q=80",
    description: "Multi-vendor marketplace platform",
    tags: ["Vue.js", "Laravel"],
    link: "#",
    github: "#",
  },
  {
    id: 8,
    title: "Travel Booking Platform",
    category: "Web",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80",
    description: "Complete travel booking and management system",
    tags: ["React", "Express"],
    link: "#",
    github: "#",
  },
  {
    id: 9,
    title: "Social Media App",
    category: "App",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
    description: "Social networking application with real-time features",
    tags: ["React Native", "Socket.io"],
    link: "#",
    github: "#",
  },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section
      id="portfolio"
      className="relative bg-transparent text-white py-20"
    >
      {/* Glow Background */}
      <div className="pointer-events-none absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[140px]" />

      <div className="relative max-w-7xl mx-auto px-6 mt-15">

        {/* Heading */}
        <div className="text-center mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 shadow-lg">
            <Sparkles className="w-4 h-4 text-indigo-400 animate-pulse" />
            <span className="text-sm font-semibold text-indigo-300">
              Our Work
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            <span>Recently Completed</span>
            <br />
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <p className="text-gray-300 max-w-3xl mx-auto text-sm sm:text-base">
            Explore our portfolio of successful projects delivered to clients worldwide
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-xl scale-105"
                  : "bg-white/5 border border-white/10 text-gray-300 hover:border-indigo-500 hover:scale-105"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, i) => (
            <div
              key={project.id}
              className="group relative bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:scale-105 hover:shadow-2xl transition-all duration-500"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition duration-300"></div>

                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition duration-300">
                  <a
                    href={project.link}
                    className="p-3 rounded-full bg-white text-indigo-600 hover:bg-indigo-600 hover:text-white transition hover:scale-110"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    className="p-3 rounded-full bg-white text-gray-900 hover:bg-gray-900 hover:text-white transition hover:scale-110"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <div className="p-5">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/20 text-indigo-300 mb-3">
                  {project.category}
                </span>

                <h3 className="text-lg font-bold mb-2 group-hover:text-indigo-400 transition">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-lg text-xs font-medium bg-white/10 text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Button */}
        <div className="mt-14 text-center">
          <button className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 hover:scale-105 transition">
            View All Projects
          </button>
        </div>

      </div>
    </section>
  );
}